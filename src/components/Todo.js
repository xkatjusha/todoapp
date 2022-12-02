import React from 'react';
import { useState } from 'react';

const Todo = ({description,done}) => {

    const [isdone, setDone] = useState(done)

    const changeTodo = () => {
        if(isdone){
            setDone(false)
        } else {
            setDone(true);
        }
    };

  return (
    <div>
        <div 
            className={
                isdone 
                    ? 'flex justify-between p-2 items-center bg-green-600 text-white'
                    : 'flex justify-between p-2 items-center bg-red-500 text-white'
            }
        >
            <h1 className='text-lg cursor-pointer' onClick={changeTodo}>
                {description}</h1>
            <button className='text-lf bg-gray-400 p-2 text-white'>Löschen</button>
        </div>
    </div>
  );
};

export default Todo;