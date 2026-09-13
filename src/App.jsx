import React,{useState} from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'
const App = () => {
  const [users, setData] = useState(JSON.parse(localStorage.getItem("data"))||[])
const [toggle, setToggle] = useState(true)
localStorage.setItem("data", JSON.stringify(users));
let userdata = JSON.parse(localStorage.getItem("data"))
  const del = (name)=>{
  let prousers = users.filter((elem)=>elem.Name !== name)
  setData(prousers)
}
const [update, setUpdate] = useState({})
 
  
  return (
    <div className="p-4 flex flex-col gap-7 w-full h-screen">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex gap-4 flex-wrap">
          {userdata.map((elem, index) => {
            return (
              <UserCard
                update={setUpdate}
                setToggle={setToggle}
                deleteElement={del}
                key={index}
                elem={elem}
              />
            );
          })}
        </div>
      ) : (
        <Form update={update} setUpdate={setUpdate}  users={users} setData={setData} setToggle={setToggle} />
      )}
    </div>
  );
}
export default App
