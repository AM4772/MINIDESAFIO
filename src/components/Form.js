import React, {useState} from 'react';
import './Form.css';

const Form = () => {
  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [email , setEmail] = useState('');

  const handleChange =(e)=>{
    setName(e.target.value);
  }

  const handleAgeChange =(e)=>{
    setAge(e.target.value);
  }

  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }

  const handleSubmit=(e)=>{
    if(name && age && email)
    {
      alert('Formulario completo, Nombre:"' + name +
      '" ,Edad :"'+ age +'" y Correo :"' + email + '"');
      console.log(name,age,email);
    } else {
      alert('Completar formulario');
      console.log('Completar formulario');
    }
    e.preventDefault();
  }

  return (
    <div className='Form'>
    <header className="Form-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> Formulario </h2>
    <h3> Registro </h3>
        <label >
          Nombre:
        </label><br/>
            <input type="text" value={name} required onChange={(e) => {handleChange(e)}} /><br/>
        <label >
          Edad:
        </label><br/>
            <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
        <label>
          Email:
        </label><br/>
            <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} />
            <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  )
}

export default Form;