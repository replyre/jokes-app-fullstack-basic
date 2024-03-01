import express from "express";
const app = express();

const port = process.env.PORT || 3002;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "jake 1",
      content: "I mean joke 1...",
    },
    {
      id: 2,
      title: "joke 2",
      content: "ye lo joke...",
    },
    {
      id: 1,
      title: "3 joke",
      content: "Tum mai aur ye code 😂",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`ready ${port}`);
});
