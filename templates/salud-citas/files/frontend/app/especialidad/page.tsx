import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EspecialidadPage = () => {
  const [especialidades, setEspecialidades] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/especialidades`);
        setEspecialidades(response.data);
      } catch (error) {
        console.error('Error fetching especialidades:', error);
      }
    };
    fetchEspecialidades();
  }, []);

  const handleAddEspecialidad = () => {
    router.push('/especialidad/create');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Especialidades</h1>
      <button onClick={handleAddEspecialidad} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Agregar Especialidad</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nombre</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {especialidades.map((especialidad) => (
            <tr key={especialidad.id} className="text-center">
              <td className="py-2">{especialidad.nombre}</td>
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

export default EspecialidadPage;
