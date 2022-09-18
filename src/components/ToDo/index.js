import { useState } from 'react';
import { Row,Col,Input,List,Checkbox} from 'antd'; 
import{EditOutlined,DeleteOutlined,SaveOutlined} from'@ant-design/icons'

const ToDo=({item,deleteTodo,editTodo,changeStatus})=>{
    const[isEdit,setIsEdit] = useState(false)
    const[editText,setEditText] = useState(item.title);
    const handleClick=()=>{
        setIsEdit(!isEdit)
        editTodo(item.id,editText )
            };

const actions= [
    <DeleteOutlined onClick={() => deleteTodo(item.id)}/>,
];

   if (isEdit) {
    actions.push(<SaveOutlined onClick={() => handleClick()} />);
   } else {
    actions.push(<EditOutlined onClick={() => setIsEdit(!isEdit)} />);
   } 

return (
    <div className='App-Todo'>
    <List.Item
    actions= {actions}
    >
<Row>
    {
        isEdit?  (
             <Input 
             onChange={(e)=> setEditText(e.target.value)}
              value={editText}/>
        ) :( 
         <Col span={8}>
            <Checkbox >
            {" "}
            {item.title}
            </Checkbox>
         </Col>
    )}
    </Row>
    </List.Item>
    </div>
);
};

export default ToDo;
