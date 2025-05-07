
export const handler = async (event, context) => {
    console.log("Background function started!");
    
    // Do your heavy work here
    // await new Promise(resolve => setTimeout(resolve, 5000)); // simulate 5s work
  
  
    return {
      statusCode: 200,
      body: JSON.stringify({
       
        status: "success",
        message: "Background job completed!",
        timestamp: new Date().toISOString(),
      }),
    };
  };
  