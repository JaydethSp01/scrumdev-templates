import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const PacientePage = () => {
  const [pacientes, setPacientes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/pacientes`);
        setPacientes(response.data);
      } catch (error) {
        console.error('Error fetching pacientes:', error);
      }
    };
    fetchPacientes();
  }, []);

  const handleAddPaciente = () => {
    router.push('/paciente/create');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pacientes</h1>
      <button onClick={handleAddPaciente} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Agregar Paciente</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Nombre</th>
            <th className="py-2">Email</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id} className="text-center">
              <td className="py-2">{paciente.nombre}</td>
              <td className="py-2">{paciente.email}</td>
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

export default PacientePage;
