import React, { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학','여자 코트 추천'])
  let [따봉, 따봉변경] = useState([0,0,0,0])
  let [modal,setModal] = useState(false)
  let [title,setTitle] = useState(0)
  let [입력값,입력값변경] = useState('')
  
  let now = new Date()
  let year = now.getFullYear()
  let todayMonth = now.getMonth() + 1
  let todayDate = now.getDate()



  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      
      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{modal === false ? setModal(true) : setModal(false); setTitle(i) }}>{ 글제목[i] } 
            <span onClick={(e) =>{
              e.stopPropagation(); 
              let copy = [...따봉]
              copy[i]+= 1
               따봉변경(copy)
               } 
               }>👍</span> {따봉[i]}
            </h4>
            <p>{year + '.' + todayMonth + '.' + todayDate} 발행</p>
            <button onClick={()=>{
              let copy =[...글제목]
              copy.splice(i,1)
              글제목변경(copy)
              }}>글삭제하기</button>

            
          </div>
          )
        })
      }
      <input onChange={(e)=>{입력값변경(e.target.value);}}></input>
      <button onClick={()=>{
        if(입력값 !== ''){
        let copy = [...글제목]
        let count =[...따봉]
        copy.push(입력값)
        count.push(0)
        글제목변경(copy)
        따봉변경(count)
        } else{alert('글을 입력해주세요')}
        
    
        }}>글 추가하기</button>

      {
        modal === true ? <Modal 글수정={function(){
          let copy = [...글제목]
          copy[0] = '여자 코트 추천'
          글제목변경(copy)
        }}
        글제목={글제목}
        title={title}
        /> : null
      }

    </div>
    
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  )
}

// class Modal2 extends React.Component {
//   constructor(){
//     super()
//   }
//   render(){
//     return (

//     )
//   }
// }


export default App;
