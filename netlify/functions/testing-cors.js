import fetch from 'node-fetch'; // 👈 Import node-fetch

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
    // 🔥 Invoke the background function
    const backgroundResponse = await fetch('https://your-site.netlify.app/.netlify/functions/your-background-function', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trigger: "simpleFunctionCall" }), // Optional payload
    });

    // 🔥 Safely parse the background function response
    const contentType = backgroundResponse.headers.get('content-type');
    let result;

    if (contentType && contentType.includes('application/json')) {
      result = await backgroundResponse.json();
    } else {
      const textResult = await backgroundResponse.text();
      console.error("Background function did not return JSON:", textResult);
      throw new Error("Background function returned non-JSON response");
    }

    // 🔥 Console log the response from background function
    console.log("Background function response:", result);

    // ✅ Return success
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Hello from Netlify Functions!",
        backgroundResult: result,
      }),
    };

  } catch (error) {
    console.error("Error invoking background function:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to call background function", details: error.message }),
    };
  }
};
