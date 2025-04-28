import fetch from 'node-fetch'; // import fetch

export const handler = async (event, context) => {
  // Setup basic CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: null,
    };
  }

  try {
    // ✅ Make a POST request to your background function
    const response = await fetch('https://testingcorss.netlify.app/.netlify/functions/YOUR_BACKGROUND_FUNCTION', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trigger: "from-main-function" }), // you can send some data
    });

    // ✅ Parse the response safely
    const result = await response.json();

    // ✅ Log background function result
    console.log('Background Function Result:', result);

    // ✅ Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Main function executed successfully',
        backgroundResponse: result,
      }),
    };

  } catch (error) {
    console.error('Error calling background function:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to call background function' }),
    };
  }
};
