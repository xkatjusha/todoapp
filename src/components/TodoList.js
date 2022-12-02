import React from 'react';
import Todo from './Todo';
import { useState, useEffect } from 'react';

const todos = [
    {description: "Einkaufen", done: true},
    {description: "Sport", done: false},
    {description: "Programmieren", done: false},
];

const TodoList = () => {

    const [opencount, countOpenTodos] = useState(0);

    const countOpen = () => {
        const donetodos = todos.filter((item) => {
            return !item.done;
        });
        countOpenTodos(donetodos.length)
    };

    useEffect(() => {
        countOpen();
    }, [opencount]);



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
                ></Todo>
            );
        })}
    </div>
  );
};

export default TodoList;