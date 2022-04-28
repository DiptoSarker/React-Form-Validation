import React  from 'react';
import FormInput from './Components/FormInput';
import { useState, useRef } from 'react';
import './App.css'

const App = () => {
  const [Values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  });

  const inputs = [
    {
      id:1,
      name: "username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label:"Username",
      //pattern:"^[A-Za-z0-9]{3,16}$ ",
      pattern:"^([a-z0-9]*[a-z]){3}[a-z0-9]*$",
      required: true
    },
    {
      id:2,
      name: "email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be valid email!",
      label:"Email",
      required: true
    },
    {
      id:3,
      name: "birthday",
      type:"date",
      placeholder:"Birthday",
      errorMessage:"",
      label:"Birthday",
      required: true
    },
    {
      id:4,
      name: "password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special charecter!",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id:5,
      name: "confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password don't matched!",
      label:"Confirm Password",
      pattern: Values.password,
      required: true
    }
  ]
    
  

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const onChange = (e) =>{
    setValues({...Values, [e.target.name]: e.target.value});
  }

  console.log(Values);
  return <div className='app'>
           <form onSubmit={handleSubmit}>
             <h1>Register</h1>
             {inputs.map((input) => (
               <FormInput key={input.id} {...input} value={Values[input.name]} onChange={onChange} />   
             ))}
             
              <button>Submit</button>
           </form>
         </div>
};

export default App;
