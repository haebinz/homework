import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Todo.css';

function Todo({inputTodo,setInputTodo,register,logUser,inputEnter,inputRef}) {


    return (
        <>
        <div className='todo-frm'>
            <input type='text' placeholder=' 할 일 입력' className='inputText' ref={inputRef} onKeyDown={inputEnter} value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)}></input>
        <div>
            <button type='button' className='btn btn-success' onClick={register} disabled={logUser ? false : true}>등록</button>
        </div>
        </div>
            
        </>
    );
}

export default Todo;