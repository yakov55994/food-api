import express from "express";

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const port = 3005;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
