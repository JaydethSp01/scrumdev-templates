import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const HorarioPage = () => {
  const [horarios, setHorarios] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/horarios`);
        setHorarios(response.data);
      } catch (error) {
        console.error('Error fetching horarios:', error);
      }
    };
    fetchHorarios();
  }, []);

  const handleAddHorario = () => {
    router.push('/horario/create');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Horarios</h1>
      <button onClick={handleAddHorario} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Agregar Horario</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Profesional</th>
            <th className="py-2">Día</th>
            <th className="py-2">Hora Inicio</th>
            <th className="py-2">Hora Fin</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario) => (
            <tr key={horario.id} className="text-center">
              <td className="py-2">{horario.profesional}</td>
              <td className="py-2">{horario.dia}</td>
              <td className="py-2">{horario.hora_inicio}</td>
              <td className="py-2">{horario.hora_fin}</td>
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

export default HorarioPage;
