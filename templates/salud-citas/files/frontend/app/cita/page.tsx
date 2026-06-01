import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CitaPage = () => {
  const [citas, setCitas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/citas`);
        setCitas(response.data);
      } catch (error) {
        console.error('Error fetching citas:', error);
      }
    };
    fetchCitas();
  }, []);

  const handleAddCita = () => {
    router.push('/cita/create');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Citas</h1>
      <button onClick={handleAddCita} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Agregar Cita</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Paciente</th>
            <th className="py-2">Profesional</th>
            <th className="py-2">Fecha</th>
            <th className="py-2">Hora</th>
            <th className="py-2">Estado</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id} className="text-center">
              <td className="py-2">{cita.paciente}</td>
              <td className="py-2">{cita.profesional}</td>
              <td className="py-2">{cita.fecha}</td>
              <td className="py-2">{cita.hora}</td>
              <td className="py-2">{cita.estado}</td>
              <td className="py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Editar</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitaPage;
