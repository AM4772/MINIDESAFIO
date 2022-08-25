import React from 'react';
import './StudentTable.css';

const data = [
    {
      nombre: "Pedro",
      edad: 20,
      carrera: "Ingeniería",
      hobbie: "Futbol"
    },
    {
      nombre: "Rodrigo",
      edad: 22,
      carrera: "Arquitectura",
      hobbie: "Bajo eléctrico"
    },
    {
      nombre: "Romina",
      edad: 21,
      carrera: "Abogacía",
      hobbie: "Acrobacia"
    },
    {
      nombre: "Ana",
      edad: 23,
      carrera: "Contadora",
      hobbie: "Astronomía"
    }
];

const StudentTable = () => {
    return (
      <div className="student">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.nombre}</td>
                <td>{val.edad}</td>
                <td>{val.carrera}</td>
                <td>{val.hobbie}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

export default StudentTable;
