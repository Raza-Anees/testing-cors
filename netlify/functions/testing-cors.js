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

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: "Hello from Netlify Functions!" }),
  };
};
