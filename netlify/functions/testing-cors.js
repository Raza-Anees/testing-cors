// netlify/functions/trigger-background.js

import fetch from 'node-fetch'; // make sure installed

export const handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    // CORS Preflight
    return {
      statusCode: 204,
      headers,
      body: null,
    };
  }

  try {
    // 🔥 Trigger the background function internally
    const backgroundResponse = await fetch('https://testingcorss.netlify.app/.netlify/functions/sample-background', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trigger: "StartBackgroundJob" }),
    });

    // You don't have to wait for full background completion.
    console.log("Background function triggered!");
z
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Background function started successfully!",
      }),
    };

  } catch (error) {
    console.error("Error triggering background function:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to trigger background function" }),
    };
  }
};
