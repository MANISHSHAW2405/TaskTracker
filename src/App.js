import Header from './components/Header'
import {useState} from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
 const [showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
    {
           id : 1,
           text : 'doc appointment',
           day: 'feb 5th at 2:30',
           reminder : true,
   },{
       id:2,
       text : 'meetng at school',
       day : 'feb 6th at 1:30pm',
       reminder : true,
   },{
       id:3,
       text : 'food shoping',
       day : 'feb 5th at 2:30pm',
       reminder : false,
   }
])
//add task via submiting form
const addTask=(task)=>{
 const id =Math.random();
 const newTask ={id,...task}
 setTasks([...tasks,newTask])

}
// delete task using array filter method
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id!==id))
}
//Toggle reminder
const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} : task))
} 
 return (
    <div className="container">
        <Header  onAdd={()=>{
          setShowAddTask(!showAddTask)
        }} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length>0 ?
        ( <Tasks tasks = {tasks} onDelete ={deleteTask}
          onToggle={toggleReminder} />
        ):(
          <h3>no task to perform </h3>
          
        )}
    </div>
  );
}

export default App;
