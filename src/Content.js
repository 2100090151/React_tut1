import React from 'react'
import logo from './legion_game_shop.ico';
import './index.css';
const Content = () => {
    const shownames=()=>
        {
          const rd=[1,2,3,4];
          return Math.max(...rd);
        }
      const handlenames=()=>
        {
          const names=['Deepak','Sampath','Bujji'];
          const int=Math.floor(Math.random()*3);
          return names[int];
        }
        const handleClick=()=>{
            console.log("You clicked It!")
        }
        const handleClick2=(name)=>{
            console.log(`${name} was clicked `);
        }
        const handleClick3=(e)=>{
            console.log(e.target.innerText);
        }
    return (
        <main className='main'>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hey Im {handlenames()} Yelleti. I'm here to learn react.
            </p>
            <p>
                Hey man How are you guys?. Here there the link to find my react projects.
            </p>
                <p>My name is {handlenames()}.</p>
                <p>My age is {shownames()}</p>
            <p>Deepak.html</p>
            <p onDoubleClick={handleClick}>Hello</p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={()=>handleClick2(handlenames())}>Click It</button>
            <button onClick={(e)=>handleClick3(e)}>Click It</button>
        </main>
    )
}

export default Content
