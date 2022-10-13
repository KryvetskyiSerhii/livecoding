import { AppContainer } from "./App.styled";
import { TaskForm } from "./TaskForm";
import { TasksList } from "./TasksList";

export const App = () => {
  return (
    <AppContainer>
      <TasksList />
      <TaskForm />
    </AppContainer>
  );
};
