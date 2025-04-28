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
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json", // <-- 🔥 ADD THIS!!!
      },
      body: JSON.stringify({
        status: "success",
        message,
        timestamp: new Date().toISOString(),
      }),
    };
  };
  