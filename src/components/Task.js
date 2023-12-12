import { FaTimes } from "react-icons/fa";

const Task = ({ task, onToggleStyle, onDelete }) => {
  return (
    <>
      <div
        className={`task ${task.reminder ? "reminder" : ""}`}
        onDoubleClick={() => onToggleStyle(task.id)}
      >
        <div className="task_content">
          <h3>{task.content}</h3>
          <p>{task.role}</p>
        </div>

        <div className="close_btn" onClick={() => onDelete(task.id)}>
          <FaTimes />
        </div>
      </div>
    </>
  );
};

export default Task;
