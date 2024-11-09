const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Import dotenv to load environment variables

// Load environment variables from .env file
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use the environment variable for the Stripe secret key

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "IT-101", // Change to your course name
            },
            unit_amount: 2000, // Price in cents (e.g., $20.00)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server only if not being run in Vercel (for local development)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export the app for Vercel
