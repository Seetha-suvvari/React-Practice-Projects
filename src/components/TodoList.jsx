import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";      
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";



function TodoList(){
    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            
        const randomId = Math.random();
            setTodos([...todos, { id: randomId, text: inputValue }]);
            setInputValue('');
        }
    }

    const handleDeleteTodo = (id) => {   
        const newTodo = confirm("Do you want to delete the ToDo task? "); 
        if (newTodo ) {    
        setTodos(prevItems => prevItems.filter((todo) => todo.id !== id));
        }
    }

    const handleEditTodo = (index) => {
        const newTodo = prompt("Edit your todo:", todos[index].text);   
        if (newTodo !== null && newTodo.trim() !== '') {
            setTodos(prevItems => {
                const updatedTodos = [...prevItems];
                updatedTodos[index] = { ...updatedTodos[index], text: newTodo };
                return updatedTodos;
            } );
        }       
    }
 return (
    <>
       
        <Container className="mt-4  bg-light p-4 rounded   w-50 mx-auto">
             <h2>TODO LIST</h2>
           <Row >
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Add a new task"
                        aria-label="Add a new task"
                        aria-describedby="basic-addon2"
                        value={inputValue}
                        onChange={handleInputChange}
                        
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleAddTodo} disabled={!inputValue.trim()}
                    >
                        Add
                    </Button>
                </InputGroup>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='mt-3 '>
                        {todos.length > 0 && todos.map((todo, index) => (
                            <ListGroup.Item key={todo.id} className='bg-white border-0 shadow-sm mb-2'>
                               {todo.text}
                                <Button variant="outline-danger" size="sm" className="float-end" onClick={()=>handleDeleteTodo(todo.id)}>
                                    Delete
                                </Button>
                                <Button variant="outline-secondary" size="sm" className="float-end me-2" onClick={()=>handleEditTodo(index)}>
                                    Edit
                                </Button>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>

    </>
 )
}

export default TodoList;