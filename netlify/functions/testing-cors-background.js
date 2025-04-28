// netlify/functions/sample-background.js

export const handler = async (event, context) => {
    console.log("✅ Background function triggered!");
  
    // Calculate 1 * 2 * 3 * ... * 20
    let result = 1;
    for (let i = 1; i <= 20; i++) {
      result *= i;
    }
  
    console.log("🧮 Calculated result (1*2*3...20):", result);
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        message: "Calculated 1 × 2 × 3 × ... × 20 successfully!",
        result: result,
        timestamp: new Date().toISOString(),
      }),
    };
  };
  