import React,{useState} from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'
const App = () => {

  const [users, setData] = useState([
  {
    Image: "https://i.pravatar.cc/300?img=1",
    Name: "Paras Jain",
    Contact: "9876543210",
    Email: "paras@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=2",
    Name: "Rahul Sharma",
    Contact: "9123456780",
    Email: "rahul@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=3",
    Name: "Aman Verma",
    Contact: "9988776655",
    Email: "aman@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=4",
    Name: "Riya Patel",
    Contact: "9090909090",
    Email: "riya@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=5",
    Name: "Arjun Singh",
    Contact: "9012345678",
    Email: "arjun@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=6",
    Name: "Neha Gupta",
    Contact: "9345678901",
    Email: "neha@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=7",
    Name: "Vikas Mehta",
    Contact: "9765432109",
    Email: "vikas@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=8",
    Name: "Ananya Kapoor",
    Contact: "8899776655",
    Email: "ananya@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=9",
    Name: "Rohan Malhotra",
    Contact: "9876123450",
    Email: "rohan@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=10",
    Name: "Simran Kaur",
    Contact: "9123987654",
    Email: "simran@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=11",
    Name: "Karan Joshi",
    Contact: "9988123456",
    Email: "karan@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=12",
    Name: "Pooja Agarwal",
    Contact: "9345098761",
    Email: "pooja@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=13",
    Name: "Aditya Rao",
    Contact: "9765012348",
    Email: "aditya@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=14",
    Name: "Ishita Sharma",
    Contact: "9098765432",
    Email: "ishita@gmail.com"
  },
  {
    Image: "https://i.pravatar.cc/300?img=15",
    Name: "Yash Thakur",
    Contact: "9012987654",
    Email: "yash@gmail.com"
  }
])
  const [toggle, setToggle] = useState(true)
  
  
  return (
    <div className="p-4 flex flex-col gap-7 w-full h-screen">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className='flex gap-4 flex-wrap'>
          {users.map((elem,index) => {
            return <UserCard key={index} elem = {elem}/>;
          })}
        </div>
      ) : (
        <Form setData={setData} setToggle={setToggle} />
      )}
    </div>
  );
}

export default App
