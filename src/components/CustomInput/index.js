import { Input, Button, Row, Col } from "antd";
import { useState } from "react";

const CustomInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Row>
      <Col offset={7} span={8}>
        <Input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Basic usage"
          onPressEnter={() => handleClick()}
        />
      </Col>
      <Col span={2}>
        <Button type="primary" onClick={() => handleClick()}>
          Add ToDo{" "}
        </Button>
      </Col>
    </Row>
  );
};

export default CustomInput;
