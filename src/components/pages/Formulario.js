import React from 'react'
import {useForm} from 'react-hook-form';
// import Navbar from '../Navbar'; 
import '../Formulario.css';
import axios from 'axios'; //npm i axios
import swal from 'sweetalert2'; //npm i sweetalert2

const Formulario = () => {
  const {register, handleSubmit, formState:{ errors }} = useForm()

  const customSubmit = data => {

    axios.post('http://localhost:8080/api/save', data) //Cambiar url si es necesario 

    console.log(data);

    swal.fire({
      title: "CONFIRMADO",
      text: "Su informacion ha sido registrada exitosamente",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    
    reset();
  };
  console.log(errors);

  return (

    <>
    <div className="background">
    <div className="container-form">
    <h2>Pre-Inscripción</h2>
    <form onSubmit ={handleSubmit(customSubmit)} className="form-react">
      <div className='form-control'>
        <label>Nombre:</label>
        <input className ="controls" type="text" {...register('name', {required:true, maxLength:100})}/>
        {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        {errors.name?.tupe === 'maxLength' && <small className='fail'>Se excedio del maximo de caracteres</small> }
      </div>
      <div className='form-control'>
        <label>Cédula de Identidad:</label>
        <input className="controls" type="text" {...register('cedula', {required:true})}/>
        {errors.cedula?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
      </div>
      <div className='form-control'>
        <label>Edad:</label>
        <input className="controls" type="number" {...register('edad', {required:true, min:18, max:65})}/>
        {errors.edad?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        {errors.edad?.type === 'min' && <small className='fail'>La edad minima es de 18 años</small> }
        {errors.edad?.type === 'max' && <small className='fail'>La edad maxima es de 65 años</small> }
      </div>
      <div className='form-control'>
        <label>Teléfono:</label>
        <input className="controls" type="number" {...register('number', {required:true})}/>
        {errors.number?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
      </div>
      <div className='form-control'>
        <label>Curso:</label>
        <select className='controls' {...register('cursos', {required:true})}>
          <option value=''>--Elegir Curso--</option>
          <option value='Asistente Financiero'>Asistente Financiero</option>
          <option value='Asistente Contable'>Asistente Contable</option>
          <option value='Asistente de Informatica'>Asistente de Informatica</option>
          <option value='Asistente Administrativo'>Asistente Administrativo</option>
        </select>
        {errors.cursos?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
      </div>
      <div className='form-control'>
        <label>Correo:</label>
        <input className="controls" type="text" {...register('correo', {required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
        {errors.correo?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        {errors.correo?.type === 'pattern' && <small className='fail'>El formato del correo es incorrecto</small> }
      </div>
      <button type='submit'>Enviar</button>
      <p>Toda informacion marcada al momento de ser entregada se tendra en consideracion como informacion confidencial, dicha informacion esta protegida por los derechos de propiedad industrial y programas informaticos. 
        @2022 Instituto Codado. Todos los derechos reservados</p>
    </form>
    </div>
    </div>
    </>
  )
}

export default Formulario