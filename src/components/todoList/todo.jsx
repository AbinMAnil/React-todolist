import React, { useState } from "react";
import "./todo_style.css";

function Todo() {
  const [todos, setTodos] = useState([
    { id: Date.now(), value: "Open your Todo ", status: true },
  ]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <>
      <div className="outer">
        <div className="mainList">
          <h3>Is that hard Enough ! 🥵 </h3>
          <div className="itemRow">
            {/*  div to add the the items */}
            <div className="addItem">
              <h3 style={{ textAlign: "start" }}>Add your Taskes !</h3>
              <hr width="60%"></hr>

              <div className="inputRow">
                <center>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <i
                    onClick={() => {
                      console.log(todos);
                      if (task === "") return;
                      if (
                        todos.some((item) => {
                          return item.value === task;
                        })
                      ) {
                        return;
                      }
                      setTodos([
                        ...todos,
                        { id: Date.now(), value: task, status: status },
                      ]);
                    }}
                    className="fas fa-plus"
                  ></i>
                </center>
                <h2>🄰🄻🄻 🅃🄷🄴 🄱🄴🅂🅃</h2>
              </div>
            </div>

            {/* end of the div to add the items */}

            {/* single item  map here  */}
            {todos.map((todo, index) => {
              return (
                <div key={todo.id} className="singleItem">
                  <input
                    checked={todo.status ? true : false}
                    type="checkbox"
                    value={todo.status}
                    onChange={(e) => {
                      setTodos(
                        todos.filter((obj) => {
                          if (obj.id === todo.id) {
                            obj.status = e.target.checked;
                          }
                          return obj;
                        })
                      );
                    }}
                  />
                  {todo.status ? (
                    <strike style={{ color: "black" }}>
                      <p style={{ color: "white" }}>{todo.value} </p>
                    </strike>
                  ) : (
                    <p> {todo.value} </p>
                  )}
                  <i
                    onClick={() =>
                      setTodos(todos.filter((obj) => obj.id !== todo.id))
                    }
                    className="fas fa-times"
                  ></i>
                </div>
              );
            })}

            {/* end of the single item  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
