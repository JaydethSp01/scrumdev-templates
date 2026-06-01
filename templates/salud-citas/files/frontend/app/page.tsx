"use client";
import { useState } from "react";

const MOCK_DATA = {
  pacientes: [
    { id: 1, nombre: "Juan Pérez", edad: 30 },
    { id: 2, nombre: "Ana Gómez", edad: 25 },
    { id: 3, nombre: "Carlos Ruiz", edad: 40 },
    { id: 4, nombre: "Laura Martínez", edad: 35 },
  ],
  citas: [
    { id: 1, paciente: "Juan Pérez", profesional: "Dra. Rodríguez", especialidad: "Cardiología", estado: "Confirmada" },
    { id: 2, paciente: "Ana Gómez", profesional: "Dr. Fernández", especialidad: "Dermatología", estado: "Pendiente" },
    { id: 3, paciente: "Carlos Ruiz", profesional: "Dra. López", especialidad: "Neurología", estado: "Cancelada" },
  ],
};

export default function Page() {
  const [data] = useState(MOCK_DATA);

  return (
    <div className="p-8 space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Sistema de Agenda de Citas</h1>
        <p className="text-neutral-500 mt-1">Panel del día</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.citas.map((cita, index) => (
          <div key={index} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">{cita.paciente}</h2>
            <p className="text-neutral-500">{cita.profesional}</p>
            <p className="text-neutral-500">{cita.especialidad}</p>
            <p className={`text-sm mt-1 ${cita.estado === "Confirmada" ? "text-green-500" : cita.estado === "Pendiente" ? "text-yellow-500" : "text-red-500"}`}>{cita.estado}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold mb-4">Pacientes</h2>
        <ul className="space-y-3">
          {data.pacientes.map((paciente) => (
            <li key={paciente.id} className="border-t border-neutral-100 dark:border-neutral-800 py-3">
              <p className="font-medium">{paciente.nombre}</p>
              <p className="text-neutral-500">Edad: {paciente.edad}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}