export const handler = async (event, context) => {
    // Example math operations
    const number1 = 10;
    const number2 = 5;
  
    const addition = number1 + number2;
    const subtraction = number1 - number2;
    const multiplication = number1 * number2;
    const division = number1 / number2;
    console.log("Math operations results:", {
      addition,
      subtraction,
      multiplication,
      division,
    });
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Netlify Background Functions!",
        mathResults: {
          number1,
          number2,
          addition,
          subtraction,
          multiplication,
          division,
        },
      }),
    };
  };
  