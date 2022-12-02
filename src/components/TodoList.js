import React from 'react';
import Todo from './Todo';
import { useState, useEffect } from 'react';

const alltodos = [
    {description: "Einkaufen", done: true},
    {description: "Sport", done: false},
    {description: "Programmieren", done: false},
];

const TodoList = () => {
    const [opencount, countOpenTodos] = useState(0);
    const [todos, setTodos] = useState(alltodos);

    const countOpen = () => {
        const donetodos = todos.filter((item) => {
            return !item.done;
        });
        countOpenTodos(donetodos.length);
    };

    const changeTodo = (index) => {
        console.log(index);
        const newTodos = [...todos];
        if(newTodos[index].done) {
            newTodos[index].done=false;
        } else {
            newTodos[index].done=true;
        }
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    };

    useEffect(() => {
        countOpen();
    }, [todos]);



  return (
    <div className="shadow-sm hover:shadow-lg">
        <div className="text-center bg-gray-900 text-white text-3xl py-4 front-semibold">
            <h1 className="text-3xl">Unsere Todos</h1>
            <h2>Offene Todo: {opencount}</h2>
        </div>

        {todos.map((item, index) => {
            return (
                <Todo 
                    description={item.description} 
                    done={item.done}
                    key={index}
                    index={index}
                    onChangeTodo={changeTodo}
                    onDeleteTodo={deleteTodo}
                ></Todo>
            );
        })}
    </div>
  );
};

export default TodoList;