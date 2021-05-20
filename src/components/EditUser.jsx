import React from 'react'
import { useForm } from "react-hook-form";

const EditUser = props => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('userName', props.currentUser.userName)
    
    const onSubmit = (data,e) => {
        data.id = props.currentUser.id //le paso el id
        props.updateUser(props.currentUser.id, data)

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
            <button>Editar</button>
        </form>
    )
}

export default EditUser