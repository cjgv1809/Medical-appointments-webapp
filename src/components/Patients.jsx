import { forwardRef } from "react";

const Patients = forwardRef(
  ({ patient: { name, owner, email, date, symptoms } }, ref) => {
    const localDate = new Date(date).toLocaleDateString();

    return (
      <div
        className="bg-secondary p-6 rounded-md shadow-md mt-5 first:mt-0"
        ref={ref}
      >
        <div className="mb-4">
          <label className="font-light text-base">Nombre Mascota</label>
          <p className="text-xl text-gray-700">{name}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Nombre Dueño</label>
          <p className="text-xl text-gray-700">{owner}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Email</label>
          <p className="text-xl text-gray-700">{email}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Fecha</label>
          <p className="text-xl text-gray-700">{localDate}</p>
        </div>

        <div className="mb-4">
          <label className="font-light text-base">Sintomas</label>
          <p className="text-xl text-gray-700">{symptoms}</p>
        </div>
      </div>
    );
  }
);

export default Patients;
