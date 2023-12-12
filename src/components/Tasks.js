import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length ? (
        <div className="task_list">
          {tasks.map((task, index) => {
            return (
              <Task
                task={task}
                key={index}
                onToggleStyle={onToggle}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      ) : (
        <p className="no_data">No Lists</p>
      )}
    </>
  );
};

export default Tasks;
