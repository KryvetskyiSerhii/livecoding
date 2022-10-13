const taksksList = [
  {
    id: 1,
    date: "2022-10-02",
    task: "Brush your teeth",
  },
];

const getAllTheTasks = (req, res) => {
  res.status(200).json(taksksList);
};

const addTheNewTask = (req, res) => {
  const { task } = req.body;
  const newTask = {
    id: Math.random(),
    date: Date(),
    task: task,
  };
  taksksList.push(newTask);
  res.sendStatus(400);
};

module.exports = { getAllTheTasks, addTheNewTask };
