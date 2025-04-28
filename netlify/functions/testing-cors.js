import fetch from 'node-fetch'; // 👈 Add this import at the top

export const handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*", // Allow all origins
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // Allow methods
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow headers
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
    // 👇 Fetch your background function here
    const backgroundResponse = await fetch(`https://testingcorss.netlify.app/.netlify/functions/test-cors-background`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trigger: "simpleFunctionCall" }), // optional payload
    });

    const result = await backgroundResponse.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Hello from Netlify Functions!",
        backgroundResult: result, // return background function's result
      }),
    };

  } catch (error) {
    console.error("Error calling background function:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to call background function" }),
    };
  }
};
