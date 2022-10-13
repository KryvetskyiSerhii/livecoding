import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNewTask, handleRequestStatus } from "./redux/taskSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const inintialValues = {
    task: "",
  };

  const addNewTaskToTheList = (values) => {
    dispatch(addNewTask(values.task));
    dispatch(handleRequestStatus());
  };
  const formik = useFormik({
    initialValues: inintialValues,
    onSubmit: (value) => {
      addNewTaskToTheList(value);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input name="task" onChange={formik.handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
