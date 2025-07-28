import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/login.css';

function Login({users,logUser,selected,setSelected,loginUser}) {
    return (
        <>
        <section className='login-frm'>
            <select className='select form-control' onChange={(e)=>setSelected(e.target.value)} value={selected} disabled={logUser ? true : false}>
                {
                    users?.map((userName,i)=>(<option key={i} value={userName}>{userName}</option>))
                }
            </select>
            <div>
                <button type='button' className='btn btn-warning'  onClick={loginUser}>{logUser?'로그아웃':'로그인'}</button>
                {logUser && <span>{logUser}</span>}
                
            </div>
        </section>
            
        </>
    );
}

export default Login;