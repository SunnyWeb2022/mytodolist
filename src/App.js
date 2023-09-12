
import { useState } from 'react';
import './App.css';
import ToDoList from './Todolist';

function App() {
       const [mydata,setData]= useState();
       const [inputvalue,setInputvalue]=useState([]);
      
      const dataEvent= (event) =>
      {
         setData(event.target.value);
         
      }

      const listItem =()=>
      {
          setInputvalue((oldItem)=>
          {
            return [...oldItem, mydata];
          })
          setData("");
      }

      const removeItem = (id) =>
      {
          setInputvalue((oldItem)=>
          {
            return oldItem.filter((arrelm, index)=>{
                return index !== id;
            });
          })
          
      }

      

  return (
    <div className="App">
      <header className="App-header">
            <h3>This is My ToDoList</h3>
            

            <div className='inputbox'>
                <input type="text"
                    placeholder='Enter your data'
                    name="data"
                    value={mydata}
                    onChange={dataEvent}
                />
                <button onClick={listItem}>+</button>

            </div>

            <ol className='list'>
                { 
                inputvalue.map((itemvalue,index)=>
                    {
                      return <ToDoList key={index} 
                         text={itemvalue}
                         id={index}
                         onSelect ={removeItem}
                       />
                    })
                }
            </ol>
           
            
      </header>
    </div>
  );
}

export default App;
