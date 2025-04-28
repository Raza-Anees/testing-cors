import fetch from 'node-fetch';

export const handler = async (event, context) => {
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
    // ✅ Fetch background function
    const backgroundResponse = await fetch('https://testingcorss.netlify.app//.netlify/functions/testing-cors-background', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trigger: "simpleFunctionCall" }),
    });

    // ✅ Check if response was ok
    if (!backgroundResponse.ok) {
      const textError = await backgroundResponse.text(); // Get HTML error
      console.error("Background function error:", textError);
      throw new Error(`Background function failed with status ${backgroundResponse.status}`);
    }

    const contentType = backgroundResponse.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const result = await backgroundResponse.json();
      console.log('✅ Background function result:', result);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Successfully called background function',
          backgroundResult: result,
        }),
      };
    } else {
      const textResult = await backgroundResponse.text();
      console.error("Background function returned non-JSON:", textResult);
      throw new Error('Background function did not return JSON');
    }

  } catch (error) {
    console.error('❌ Error calling background function:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
