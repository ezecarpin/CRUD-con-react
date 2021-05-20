import React from 'react'

const UserTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Nombre usuario</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(        
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>
                            <button className="btn btn-outline-warning"
                                    onClick={() => {props.editRow(user)} } >
                                Editar
                            </button>
                            <button className="btn btn-outline-danger"
                                    onClick={() => {props.deleteUser(user.id)} }>
                                Borrar
                            </button>
                            </td>
                        </tr>
                        )) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                    }
                </tbody>
        </table>
    )
}

export default UserTable