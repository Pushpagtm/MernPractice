import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register
const jokes = [
  {
    id: 1,
    title: "Atom Joke",
    content:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    title: "Parallel Lines",
    content:
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  },
  {
    id: 3,
    title: "Embrace Mistakes",
    content:
      "I told my wife she should embrace her mistakes. She gave me a hug.",
  },
];
app.get("/api/jokes", (req, res) => {
  res.send({
    jokes,
  });
});
export { app };
