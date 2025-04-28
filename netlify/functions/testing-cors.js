// netlify/functions/trigger-background.js

import fetch from 'node-fetch'; // Make sure node-fetch is installed

export const handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    // Handle CORS preflight request
    return {
      statusCode: 204,
      headers,
      body: null,
    };
  }

  try {
    // ✅ Trigger the background function
    const backgroundUrl = 'https://testingcorss.netlify.app/.netlify/functions/sample-background'; // Replace with your actual deployed URL

    const backgroundResponse = await fetch(backgroundUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trigger: "StartBackgroundJob" }), // Optional payload (not used in calculation here)
    });

    const contentType = backgroundResponse.headers.get('content-type');

    let backgroundResult;
    if (contentType && contentType.includes('application/json')) {
      backgroundResult = await backgroundResponse.json();
    } else {
      const textResult = await backgroundResponse.text();
      console.error("Background function did not return JSON:", textResult);
      throw new Error("Background function did not return JSON");
    }

    console.log("✅ Background function triggered successfully!", backgroundResult);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Background function executed successfully!",
        backgroundResult, // include the result here
      }),
    };

  } catch (error) {
    console.error("❌ Error triggering background function:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to trigger background function", details: error.message }),
    };
  }
};
