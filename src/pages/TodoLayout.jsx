import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/todoLayout.css'
import Login from '../components/Login';
import Todo from '../components/Todo';
import Buttons from '../components/Buttons';
import TodoList from '../components/TodoList';

function TodoLayout(props) {


    const[users,setUsers] = useState([]);
    const[selected,setSelected] = useState('');
    const[logUser,setLogUser]=useState(null);
    const[done,setDone]=useState(0);
    const[willDo,setWillDo]=useState(0);
    const[doneRate,setDoneRate]=useState(0);
    const[inputTodo,setInputTodo]=useState('');
    const [todoList, setTodoList] = useState([]);
    const [checkedList, setCheckedList] = useState([]);
    

    
    const register = () =>{
        if(inputTodo.trim().length===0){
            alert('할 일을 입력하십시오.');
            return;
        }
        
        const newTodo={
        id: Date.now(),
        text:inputTodo,
        completed:false
        };
    
        const newList = [...todoList, newTodo];
        setTodoList([...todoList,newTodo]);
        setInputTodo('');
        setWillDo(prev=>prev+1);
     
    }

    const inputEnter = (e)=>{
        if(e.key==='Enter'){
            register();
        }

    };

   const inputRef=useRef();
   useEffect(()=>{
    inputRef.current.focus();
   },[inputTodo]);
    


    useEffect(()=>{
            const users=['--- 사용자 선택 ---','김철수','박맹구'];
            setUsers(users);
            setSelected('--- 사용자 선택 ---');
        },[]);

    const loginUser=()=>{
        if(logUser){
            setLogUser(null);
            setSelected('--- 사용자 선택 ---');
        }else if (!selected || selected === '--- 사용자 선택 ---') {
        alert('로그인할 유저를 선택하십시오');
        }else{
        const user = users.find(name => name ===selected);
        setLogUser(user);
        }
    };

    const finish=(id)=>{
        const updated=todoList?.map(item=>item.id===id ? {...item,completed:true}:item);

        const completedItem=todoList.find(item=>item.id===id);
        if(completedItem && !completedItem.compelted){
            setDone(prev=>prev+1);
            setWillDo(prev=>prev-1);
            
        }
        setTodoList(updated);
    }

    const deleted=(id)=>{

        const deletedItem = todoList.find(item => item.id === id);
        if (!deletedItem) return;

        const updated = todoList.filter(item=>item.id !==id);
        setTodoList(updated);

        if (deletedItem.completed) {
            setDone(prev => prev - 1);
            } else {
            setWillDo(prev => prev - 1);
            }

    }

    const allFinish=()=>{
        if(checkedList.length===0){
        alert('일괄 완료할 일감을 체크해주십시오.')
        return;
        }
        let completedCount = 0;

        const updated = todoList.map(item => {
        if (checkedList.includes(item.id) && !item.completed) {
        completedCount++; 
        return { ...item, completed: true };
         }
        return item;
        });

  setTodoList(updated);
  setDone(prev => prev + completedCount);
  setWillDo(prev => prev - completedCount);
  setCheckedList([]);
    }

    const allDeleted=()=>{
       if(checkedList.length===0){
        alert('일괄 삭제할 일감을 체크해주십시오.')
        return;
        }
         const toDelete = todoList.filter(item => checkedList.includes(item.id));
         let doneCount = 0;
         let willDoCount = 0;
        toDelete.forEach(item=>{
            if(item.completed){
                doneCount++;
            }else{
                willDoCount++;
            }
        });
        setDone(prev=>prev-doneCount);
        setWillDo(prev=>prev-willDoCount);

        const updated=todoList.filter(item=>!checkedList.includes(item.id));
        setTodoList(updated);
        setCheckedList([]);
    }

    const toggleCheck = (id) => {
        setCheckedList(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const total = done + willDo;
        if (total === 0) {
        setDoneRate(0);
        } else {
        setDoneRate(Math.floor((done / total) *100));
        }
        }, [done, willDo]);


    
    return (
        <div>
        <main className='container'>
            <section className='contents'>
                <header className='text-center'>
                    <h2>Todo List</h2>
                </header>
                <Login users={users} logUser={logUser} selected={selected} setSelected={setSelected} loginUser={loginUser}/>
                <section className='text-end'>
                    <p>할 일 : {willDo}건</p>
                    <p>한 일 : {done}건</p>
                    <p>달성률 : {doneRate}%</p>
                </section>
                <Todo inputTodo={inputTodo} setInputTodo={setInputTodo} register={register} logUser={logUser} inputEnter={inputEnter} inputRef={inputRef} />
                <Buttons logUser={logUser} allFinish={allFinish} allDeleted={allDeleted}/>
                <TodoList todoList={todoList} finish={finish} deleted={deleted} toggleCheck={toggleCheck} checkedList={checkedList} />
            </section>

        </main>
            
        </div>
    );
}

export default TodoLayout;