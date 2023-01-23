'use client'
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   filterEmpleoByTypeJob,
//   filterEmpleoByOrderName,
//   filterEmpleoByCountry,
//   filterEmpleoByStatus,
// } from '../redux/actions';

// Prueba
const tipoEmpleo = [
  {
    id: Math.random(),
    name: 'Jardineria',
  },
  {
    id: Math.random(),
    name: 'Electronica',
  },
  {
    id: Math.random(),
    name: 'Computacion',
  },
  {
    id: Math.random(),
    name: 'Seguridad',
  },
];

const empleo = [
  {
    id: Math.random(),
    status: 'Disponible',
  },
  {
    id: Math.random(),
    status: 'Ocupado',
  },
];

// const country = [
//   {
//     id: Math.random(),
//     direction: 'Argentina',
//   },
//   {
//     id: Math.random(),
//     direction: 'Colombia',
//   },
//   {
//     id: Math.random(),
//     direction: 'Uruguay',
//   },
//   {
//     id: Math.random(),
//     direction: 'Peru',
//   },
//   {
//     id: Math.random(),
//     direction: 'Canada',
//   },
// ];
// Prueba

export default function Filter() {
//   const dispatch = useDispatch();
//   const todosEmpleos = useSelector((state) => state.empleos);
//   const tipoEmpleos = useSelector ((state)=> state.tipoEmpleos)

  function handleFilteredTypeJob(e) {
    // dispatch(filterEmpleoByTypeJob(e.target.value));
  }

  function handleSort(e) {
    // e.preventDefault();
    // dispatch(filterEmpleoByOrderName(e.target.value));
  }

  function handleFilterEmpleoByCountry(e) {
    // e.preventDefault();
    // dispatch(filterEmpleoByCountry(e.target.value));
  }
  function handleFilterEmpleoByStatus(e) {
    // e.preventDefault();
    // dispatch(filterEmpleoByStatus(e.target.value));
  }

  return (
    <div>
      <article>
        <div>
          <h2>Filter Jobs by:</h2>
          {/* <img src={""} alt="Clear" /> */}
        </div>
        <form className="" name="">
          {/* ORDER BY */}
          <select
            className=""
            title="Por Orden alfabético"
            onChange={(e) => handleSort(e)}
          >
            <option value="">Por Orden alfabetico </option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
          <select className="selectupf" onChange={handleFilteredTypeJob}>
            <option key="All" value="All">
              By Job Type
            </option>
            {tipoEmpleo.map((tipo) => {
              return (
                <option key={tipo.name} value={tipo.name}>
                  {tipo.name}
                </option>
              );
            })}
          </select>
          {/* <select
            className=""
            onChange={handleFilterEmpleoByCountry}
          >
            <option value="ALL"> By Country </option>
            {country.map((c) => {
              return (
                <option key={c.direction} value={c.direction}>
                  {c.direction}
                </option>
              );
            })}
          </select> */}
          {/* <select className="" onChange={handleFilterEmpleoByStatus}>
            <option value="All">By Status</option>
            {empleo.map((s) => {
              return (
                <option key={s.status} value={s.status}>
                  {s.status}
                </option>
              );
            })}
          </select> */}
        </form>
      </article>
    </div>
  );
}