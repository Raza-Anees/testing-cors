// File: netlify/functions/sample-background.js

export const handler = async (event, context) => {
    console.log("✅ Background function triggered!");
  
    // Parse incoming request body if available
    let body = {};
    try {
      if (event.body) {
        body = JSON.parse(event.body);
      }
    } catch (err) {
      console.error("Error parsing body:", err);
    }
  
    // Prepare a message
    const message = `Hello from Background Function! Received trigger: ${body.trigger || "no trigger"}`;
  
    const headers = {
      "Access-Control-Allow-Origin": "*", // 🔥 Allow all origins (or specify domain later)
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allow these methods
      "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow these headers
      "Content-Type": "application/json", // 🔥 Important for returning JSON
    };
  
    if (event.httpMethod === "OPTIONS") {
      // Handle CORS Preflight Request
      return {
        statusCode: 204,
        headers,
        body: null,
      };
    }
  
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "success",
        message,
        timestamp: new Date().toISOString(),
      }),
    };
  };
  