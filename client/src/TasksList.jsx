import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TasksBlock,
  TasksListItem,
  TasksListStyled,
  TasksText,
} from "./App.styled";
import { fetchAllTasks, handleRequestStatus } from "./redux/taskSlice";

export const TasksList = () => {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.taskSlice.tasks);
  const requestStatus = useSelector((state) => state.taskSlice.requestStatus);
  const getTheTasksData = () => {
    dispatch(fetchAllTasks());
  };

  useEffect(() => {
    getTheTasksData();
  }, [requestStatus]);

  return (
    <TasksBlock>
      <TasksListStyled>
        {tasksList.length > 0 &&
          tasksList.map((item) => (
            <TasksListItem key={item.id}>
              <TasksText>{item.task}</TasksText>
              <TasksText>{item.date}</TasksText>
            </TasksListItem>
          ))}
      </TasksListStyled>
    </TasksBlock>
  );
};
