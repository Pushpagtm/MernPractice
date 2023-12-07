import express from "express";
// import cors from "cors";

const app = express();
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke1",
      content: "Joke1 is nice",
    },
    {
      id: 2,
      title: "Joke2",
      content: "Joke2 is nice",
    },
    {
      id: 3,
      title: "Joke3",
      content: "Joke3 is nice",
    },
    {
      id: 4,
      title: "Joke4",
      content: "Joke4 is nice",
    },
    {
      id: 5,
      title: "Joke5",
      content: "Joke5 is nice",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());
// //routes import
// import userRouter from "./routes/user.routes.js";

// //routes declaration
// app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
