import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/button.css'


function Buttons({logUser,allFinish,allDeleted}) {
    return (
        <>
        <div className=' d-flex justify-content-end gap-2 mt-5'>
            <button type='button' className='btn btn-success' disabled={logUser ? false : true} onClick={allFinish} >일괄 완료</button>
            <button type='button' className='btn btn-danger' disabled={logUser ? false : true} onClick={allDeleted}>일괄 삭제</button>
        </div>
            
        </>
    );
}

export default Buttons;