// File: netlify/functions/sample-background.js

export const handler = async (event, context) => {
    console.log("✅ Background function triggered!");
  
    // You can receive and parse body if needed
    let body = {};
    try {
      if (event.body) {
        body = JSON.parse(event.body);
      }
    } catch (err) {
      console.error("Error parsing body:", err);
    }
  
    // Example simple logic
    const message = `Hello from Background Function! Received trigger: ${body.trigger || "no trigger"}`;
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        message,
        timestamp: new Date().toISOString(),
      }),
    };
  };
  