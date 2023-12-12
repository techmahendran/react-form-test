/* eslint-disable no-restricted-globals */
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddForm from "./components/AddForm";

import api from "./api/TasksURL";

import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetTasks = async () => {
      try {
        const res = await api.get("/tasks");

        // if (!res.ok) throw Error("Data Not Resived");

        const data = res;

        setTasks(data.data);
        // setFetchError(null);
      } catch (error) {
        setFetchError("Data Not Resived");
      } finally {
        setIsLoading(true);
      }
    };

    // const fetTasks = async () => {
    //   try {
    //     const res = await fetch("http://localhost:3500/taskss");

    //     if (!res.ok) throw Error("Data Not Resived");

    //     const data = await res.json();

    //     setTasks(data);
    //     console.log(data);
    //   } catch (error) {
    //     setFetchError(error.message);
    //   } finally {
    //     setIsLoading(true);
    //   }
    // };

    setTimeout(() => {
      fetTasks();
    }, 1000);
  }, []);

  // deleteTask
  const onDelete = (id) => {
    const confirmDelete = window.confirm("Are You Sure The Delete List");

    if (confirmDelete) {
      api.delete(`/tasks/${id}`).then((res) => location.reload());
    }
  };

  // addTask
  const addTask = (content, role, reminder) => {
    const id = tasks.length ? [tasks.length + 1].id : 1;
    const newTasks = { id: id, content: content, role: role, reminder };

    api.post("/tasks", newTasks);
  };

  // onToggleClass
  const onToggleClass = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };

  return (
    <>
      <div className="container">
        {/* Header */}
        <Header />

        {/* AddForm */}
        <AddForm onAddTask={addTask} />

        {/* Tasks */}
        <main>
          {fetchError && <p className="error-msg">{`Error: ${fetchError}`}</p>}
          {!isLoading && <p className="loading">Loading...</p>}

          {isLoading && !fetchError && (
            <Tasks
              tasks={tasks}
              onDelete={onDelete}
              fetchError={fetchError}
              onToggle={onToggleClass}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
