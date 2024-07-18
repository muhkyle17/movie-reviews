import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

// Create the server
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); // JSON parsing middleware to enable the server to read and accept JSON in a request's body
app.use("/api/v1/movies", movies);

app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
