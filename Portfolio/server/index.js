// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mailRoutes from "./backend/routers/mailRouter.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/api", mailRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(` Server running on port ${PORT}`));



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRoutes from "./backend/routers/mailRouter.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://portfolio-amgn.onrender.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", mailRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
