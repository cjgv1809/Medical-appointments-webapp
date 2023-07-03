import { forwardRef } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const Patients = forwardRef(
  (
    {
      patient: { name, owner, email, date, symptoms },
      patient,
      setPatient,
      deletePatient,
    },
    ref
  ) => {
    const localDate = new Date(date).toLocaleDateString();

    const handleDelete = () => {
      const userAnswer = confirm("¿Estás seguro de eliminar este paciente?");

      if (userAnswer) {
        deletePatient(patient.id);
      }
    };

    return (
      <div
        className="bg-secondary p-6 rounded-md shadow-md mt-5 first:mt-0"
        ref={ref}
      >
        <div className="mb-4">
          <label className="font-light text-base">Nombre Mascota</label>
          <p className="text-xl text-gray-700 font-semibold">{name}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Nombre Dueño</label>
          <p className="text-xl text-gray-700 font-semibold">{owner}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Email</label>
          <p className="text-xl text-gray-700 font-semibold">{email}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Fecha</label>
          <p className="text-xl text-gray-700 font-semibold">{localDate}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Sintomas</label>
          <p className="text-xl text-gray-700 font-semibold">{symptoms}</p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="flex justify-center items-center gap-2 border-accent border hover:bg-accent-dark transition-all duration-200 w-full py-2 px-4 text-accent tracking-wider hover:text-white font-bold rounded focus-visible:shadow-md"
            onClick={handleDelete}
          >
            <TrashIcon className="w-4 h-4" />
            Eliminar
          </button>

          <button
            type="button"
            className="flex justify-center items-center gap-2 bg-accent hover:bg-accent-dark transition-all duration-200 w-full py-2 px-4 text-white tracking-wider font-bold rounded focus-visible:shadow-md"
            onClick={() => setPatient({ ...patient })}
          >
            <PencilIcon className="w-4 h-4" />
            Editar
          </button>
        </div>
      </div>
    );
  }
);

export default Patients;
