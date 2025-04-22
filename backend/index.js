import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;
  const quantity = items.length;
  const line_items = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: `${item.make}, ${item.model}`,
      },
      unit_amount: item.price * 100,
    },
    quantity: quantity || 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
