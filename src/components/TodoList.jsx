import React from 'react';
import '../assets/css/todoList.css';
import {styled} from 'styled-components';

const ListDiv = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;             
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem 0.75rem;
    margin-top: 15px;
    height: 80px;
    overflow: hidden;   
    box-sizing: border-box;
    flex-shrink: 0;
    

`

function TodoList({todoList,finish,deleted,toggleCheck,checkedList}) {
    return (
        <div className='todo-list-box'>
            {todoList?.map((item) => (
                <ListDiv key={item.id}  >
                    <div className='d-flex align-items-center' style={{ width: '40px', flexShrink: 0 }}>
                        <input type='checkbox' checked={checkedList.includes(item.id)} onChange={()=>toggleCheck(item.id)} />
                    </div>

                    <div style={{ flexGrow: 1, textAlign: 'left', paddingLeft: '1rem',  textDecoration:item.completed ? 'line-through' : 'none'}}>
                        {item.text}
                    </div>
                    <div className='text-end d-flex gap-2' style={{ flexShrink: 0 }}>
                        <button type='button' className='btn btn-primary btn-sm' onClick={()=>finish(item.id)}  disabled={item.completed}>완료</button>
                        <button type='button' className='btn btn-danger btn-sm'  onClick={()=>deleted(item.id)}>삭제</button>
                    </div>
                </ListDiv>
            ))}
        </div>
    );
}

export default TodoList;