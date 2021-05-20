import React from 'react'
import { useForm } from "react-hook-form";

const AddUserForm = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data,e) => {
        props.addUser(data)

        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input type="text" name="name"
              {...register("name", { required: true })}
            />
            <div>
            {errors.name && 
                <span>Campo requerido</span>}
            </div>
            <label>Usuario</label>
            <input type="text" name="userName"
              {...register("userName", { required: true })}
            />
            <div>
             {errors.userName && 
                <span>Campo requerido</span>}
            </div>
            <button>Agregar</button>
        </form>
    )
}

export default AddUserForm