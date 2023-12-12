import { useState } from "react";

const AddForm = ({ onAddTask }) => {
  const [content, setContent] = useState("");
  const [role, setRole] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleTitle = (e) => {
    setContent(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleReminder = (e) => {
    setReminder(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "" || role === "") {
      alert("Enter the a  Field");
    } else {
      onAddTask(content, role, reminder);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }

    setContent("");
    setRole("");
    setReminder(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            value={content}
            onChange={handleTitle}
            placeholder="Enter a Title"
          />
        </div>
        <div className="form-control">
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={handleRole}
            placeholder="Enter a Role"
          />
        </div>
        <div className="form-control-check">
          <label>Set Tasks</label>
          <input
            type="checkbox"
            checked={reminder}
            onChange={handleReminder}
            value={reminder}
          />
        </div>

        {/* btn */}
        <button className="btn">Submit</button>
      </form>
    </>
  );
};

export default AddForm;
