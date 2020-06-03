import React,{useState} from 'react'

const Employee = () => {

const [name,setName] = useState("Mohsin");
const [empid, setEmpid] = useState("emp101");
const [age,setAge] = useState(28);

const ClickHandler=() =>{

    setName('MB');
    setEmpid('emp105');
    setAge(21)
}

return(
<div>
<h1>Employee Details</h1>
<h3>Your Name: {name}</h3>
<h3>Your Empid: {empid}</h3>
<h3>Your Age: {age}</h3>
<button onClick={ClickHandler}>Click Me</button>
</div>


)

}

export default Employee;