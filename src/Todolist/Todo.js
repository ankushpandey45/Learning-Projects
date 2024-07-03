import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = () => {
  const [task, setTask] = useState("");
  const [inputVal, setInputVal] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const printTask = (event) => {
    setTask(event?.target?.value);
  };

  const entrClick = (event) => {
    if (event.key === "Enter") {
      if (editIndex !== null) {
        const updatedTasks = [...inputVal];
        updatedTasks[editIndex] = task;
        setInputVal(updatedTasks);
        setEditIndex(null);
        setTask("");
      } else {
        setInputVal([...inputVal, task]);
        setTask("");
      }
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...inputVal];
    updatedTasks.splice(index, 1);
    setInputVal(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setTask(inputVal[index]);
  };

  return (
    <>
      <div className="container3">
        <h1>Todo-List</h1>

        <input
          type="text"
          onChange={printTask}
          value={task}
          onKeyDown={entrClick}
          placeholder="Enter Your Text"
          style={{ width: "30%", color: "black", fontWeight: "bold" }}
        />
        <div>
          {inputVal.map((val, index) => (
            <ul style={{ marginLeft: "35%" }} key={index}>
              <li
                className="litag"
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  marginTop: "1%",
                  borderRadius: "5px",
                  backgroundColor: "#D3C5E5",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "350px",
                }}
              >
                {editIndex === index ? (
                  <span>{val} </span>
                ) : (
                  <span
                    style={{
                      maxWidth: "100px",
                      whiteSpace: "nowrap",
                      overflow: " hidden",
                      textOverflow: "ellipsis",
                      marginLeft: "10px",
                    }}
                  >
                    {val}
                  </span>
                )}
                <div>
                  <EditIcon
                    onClick={() => editTask(index)}
                    style={{
                      marginRight: "12px",
                      color: "blue",
                      cursor: "pointer",
                      maxWidth: "100px",
                    }}
                  />
                  <DeleteIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteTask(index)}
                  />
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
