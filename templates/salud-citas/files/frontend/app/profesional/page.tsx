import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProfesionalPage = () => {
  const [profesionales, setProfesionales] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/profesionales`);
        setProfesionales(response.data);
      } catch (error) {
        console.error('Error fetching profesionales:', error);
      }
    };
    fetchProfesionales();
  }, []);

  const handleAddProfesional = () => {
    router.push('/profesional/create');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profesionales</h1>
      <button onClick={handleAddProfesional} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Agregar Profesional</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nombre</th>
            <th className="py-2">Especialidad</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {profesionales.map((profesional) => (
            <tr key={profesional.id} className="text-center">
              <td className="py-2">{profesional.nombre}</td>
              <td className="py-2">{profesional.especialidad}</td>
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

export default ProfesionalPage;
