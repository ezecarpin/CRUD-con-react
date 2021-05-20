import React, { useState } from 'react'
import UserTable from './components/UserTable'
import { v4 as uuidv4 } from 'uuid'
import AddUserForm from './components/AddUserForm'
import EditUser from './components/EditUser'

const App = () => {
  
  const usersData = [
    {id: uuidv4(), name: 'Pepe', userName:'el pepe'},
    {id: uuidv4(), name: 'Eze', userName:'ezecarpin'},
    {id: uuidv4(), name: 'Ari', userName:'Dr colas'},
  ]
  
  //state
  const [users, setUsers ] = useState(usersData)

  //Agregar
  const addUser = user => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar
  const deleteUser = id => {
    const arrayFiltrado = users.filter(user => user.id !== id)
    setUsers(arrayFiltrado)
  }

  //state para editar/agregar
  const [editing, setEditing] = useState(false)

  //state para editar
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', userName: ''
  })

  //funcion para editar
  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, userName: user.userName
    })
  }

  //funcion update
  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (
      user.id === id ? updateUser : user
    )))
  }

  return (
    <div className="container">
      <h1 className="text-center">CRUD simple en React con Hooks</h1>
      <hr/>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2 className="text-center">Editar</h2>
                <EditUser
                  currentUser={currentUser}
                  updateUser={updateUser}
                />      
              </div>  
            ) : (
              <div>
                <h2 className="text-center">Agregar</h2>
                <AddUserForm 
                  addUser={addUser} 
                />
              </div>  
            )
          }
          
        </div>
    <div className="flex-large">
      <h2 className="text-center">Ver </h2>
      <UserTable 
        users={users} 
        deleteUser={deleteUser} 
        editRow={editRow}
      />
    </div>
  </div>
</div>
  )
}

export default App