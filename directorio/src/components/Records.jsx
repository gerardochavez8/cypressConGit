import React, { Component } from 'react'

class Records extends Component {

    state = {
        nombre: "",
        direccion: "",
        telefono: "",
        records: []
    }

    // addRecord = () => {
    //     console.log('Nuevo registro');
    // }

    render() {
        return(
            <div>
                <table className="highlight centered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>
                                <a
                                    id="btn-add"
                                    className="btn btn-small waves-effect modal-trigger"
                                    href="#modal-agregar">
                                        Nuevo
                                </a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gerardo</td>
                            <td>Colima, Colima</td>
                            <td>3121602030</td>
                            <td>
                                <button className="btn btn-small waves-effect">Editar</button>
                                <button className="btn btn-small waves-effect">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="modal-agregar" className="modal">
                    <div className="modal-content">
                        <h5>Agregar registro</h5>
                        <form>
                            <div className="input-field">
                                <input type="text" id="nombre" />
                                <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="direccion" />
                                <label htmlFor="direccion">Dirección</label>
                            </div>
                            <div className="input-field">
                                <input type="text" id="telefono" />
                                <label htmlFor="telefono">Teléfono</label>
                            </div>
                            <button
                                id="btn-agregar"
                                className="btn waves-effect waves-light"
                                type="submit">
                                    Agregar
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a 
                            id="btn-close"
                            href="#!"
                            className="modal-close waves-effect waves-green btn-flat">
                            Cerrar
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Records