import { useState } from "react"

export const Home=()=>{
const [data,setData]=useState([])
const [todo,setTodo]=useState("")
const [editTodoId,setEditTodoId]=useState(null)
const [idCounter, setIdCounter] = useState(1)

const handleChange=(e)=>{
setTodo(e.target.value)
console.log(todo)
}

const handleSubmit=()=>{
console.log("submit",todo)
if(todo.trim()===""){
    return 
}
const newTodo={
    id:idCounter,
    text:todo
}
setIdCounter((prevId) => prevId + 1)
setData([...data,newTodo])
setTodo("")
}

const handleDelete=(id)=>{
const updateData=data.filter((item)=>item.id!==id)
setData(updateData)

}

const handleUpdate=(id)=>{
 
const todoToEdit=data.find((item)=>item.id===id)

if(todoToEdit){
    setEditTodoId(id)
    setTodo(todoToEdit.text)
}
    }
    
const handleSaveUpdate=()=>{
    const todoIndex=data.findIndex((item)=>item.id===editTodoId)
    if(todoIndex!== -1){
        const updateData=[...data]
        updateData[todoIndex].text=todo
        setData(updateData)
        setEditTodoId(null)
        setTodo("")
    }

}

const handleCancelUpdate=()=>{
    setEditTodoId(null)
    setTodo("")
}

console.log(data)
    return(<div>




        <input placeholder="enter details" value={todo} onChange={handleChange} />

{editTodoId ? 
    
    (<><button onClick={handleSaveUpdate} >Save</button>
    <button onClick={handleCancelUpdate} >Cancel</button></>):(<button onClick={handleSubmit} >Submit</button>)
}       

{data.map((el)=><div key="el.id">
    <div style={{display:"flex",gap:"10px",textAlign:"left",padding:"10px"}}>
    <div>{el.id}. </div>
    <div>{el.text}</div>
    <div><button onClick={()=>handleDelete(el.id)}>Delete</button></div>

    <div><button onClick={()=>handleUpdate(el.id)}>Update</button></div>
    </div>
     </div>)}
    </div>)
}