import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //useState는 컴포넌트가 기억하는 값을 만들고 그 값을 바꿀 수 있게해줌
                                        //state를 0으로 초기화,count->현재 상태값 현재,setCount->count를 바꿔줌

  return (
    <>
      <div>
        <div>
          안녕하세요 React를 배웁니다
        </div>
        
      </div>
      
    
    </>
  )
}

export default App
