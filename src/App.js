import { useState } from "react";
import ToDo from "./components/ToDo";
import "./App.css";
import CustomInput from "./components/CustomInput";
import { List, Row, Col, notification } from "antd";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Погулять", status: true },
  ]);

  const addTodo = (text) => {
    const newArr = [
      ...todos,
      { id: todos.length + 1, title: text, status: false },
    ];
    setTodos(newArr);
    notification.open({
      type: "success",
      message: "DONE",
    });
  };

  const deleteTodo = (id) => {
    const newArr = todos.filter((item) => item.id !== id);
    setTodos(newArr);
  };

  const editTodo = (id, text) => {
    const newArr = todos.map((item) =>
      item.id === id ? { ...item, title: text } : item
    );
    setTodos(newArr);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>What's the plan for Today </h1>
        <CustomInput addTodo={addTodo} />
        <Row>
          <Col offset={5} span={8}>
            <List
              size="large"
              dataSource={todos}
              renderItem={(item) => (
                <ToDo editTodo={editTodo} deleteTodo={deleteTodo} item={item} />
              )}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
