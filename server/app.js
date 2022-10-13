const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const port = 8000;

const getTasks = require("./handleTasks");

app.get("/tasks", getTasks.getAllTheTasks);
app.post("/tasks", getTasks.addTheNewTask);

app.listen(port, (err) => {
  if (err) console.log("There is an error");
  else console.log("Server is listening on a port" + port);
});
