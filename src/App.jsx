
import { useState } from 'react'

import User from './user';
import College from './College';
import Student from './Student';

function App() {
 const [display, setDisplay ] = useState(true);
   const [count, setCount] = useState(0)
   let userObject = {
    name: "John",
    age: 30,
    location: "New York"
   };   
   let CollegeNames = ['IET', 'IIIT', 'NIT', 'IIT', 'BIT'];
  const [student, setStudent] = useState("rahul")
    return (
        <>
        <h1>Props in react js</h1>
        {/* <College names={CollegeNames} /> */}
         {student && <Student name={student} />}
          <button onClick={() => setStudent("new name")} >update Student Name</button>
         <User userObject={userObject} name="student" />
        </>
    )
}

export default App;