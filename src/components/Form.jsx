import { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import Alert from "./Alert";

function Form({ patients, setPatients, patient, setPatient }) {
  const [form, setForm] = useState({
    name: "",
    owner: "",
    email: "",
    date: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setForm({
        name: patient.name,
        owner: patient.owner,
        email: patient.email,
        date: patient.date,
        symptoms: patient.symptoms,
      });
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return `${random}${date}`;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });

    // Validate form fields
    const values = Object.values(form);

    if (values.every((value) => value.trim() !== "")) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const values = Object.values(form);

    if (values.some((value) => value.trim() === "")) {
      setError(true);
    } else {
      setError(false);

      const patientObject = {
        ...form,
      };

      if (patient.id) {
        // Edit patient and update patients state with new patient
        patientObject.id = patient.id;
        const patientsArray = patients.map((patientState) => {
          if (patientState.id === patient.id) {
            return patientObject;
          } else {
            return patientState;
          }
        });
        setPatients(patientsArray);
        setPatient({});
      } else {
        // Add patient to patients state and create id
        patientObject.id = generateId();
        setPatients([...patients, patientObject]);
      }

      // Reset form
      setForm({
        name: "",
        owner: "",
        email: "",
        date: "",
        symptoms: "",
      });
    }
  };

  const { name, owner, email, date, symptoms } = form;

  return (
    <div className="w-full md:w-2/5 pt-10">
      <h2 className="text-3xl text-center font-semibold">
        Seguimiento Pacientes
      </h2>
      <p className="font-light text-center mb-5">
        Agrega pacientes y administralos
      </p>

      <div className="bg-secondary p-6 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          {error && <Alert message="Todos los campos son obligatorios" />}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 after:content-['(Requerido)'] after:text-gray-400 after:font-normal after:ml-1"
              htmlFor="name"
            >
              Nombre Mascota
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre Mascota"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 after:content-['(Requerido)'] after:text-gray-400 after:font-normal after:ml-1"
              htmlFor="owner"
            >
              Nombre Dueño
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="owner"
              type="text"
              placeholder="Nombre Dueño de la Mascota"
              value={owner}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 after:content-['(Requerido)'] after:text-gray-400 after:font-normal after:ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Dueño de la Mascota"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 after:content-['(Requerido)'] after:text-gray-400 after:font-normal after:ml-1"
              htmlFor="date"
            >
              Fecha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              value={date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 after:content-['(Requerido)'] after:text-gray-400 after:font-normal after:ml-1"
              htmlFor="symptoms"
            >
              Sintomas
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
              id="symptoms"
              placeholder="Describe los sintomas"
              value={symptoms}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button
              className={`flex justify-center items-center gap-2 bg-accent w-full font-bold text-white tracking-wider rounded py-2 px-4 focus-visible:shadow-md hover:bg-accent-dark transition-all duration-200 ${
                error && "cursor-not-allowed opacity-30"
              }`}
              type="submit"
              disabled={error}
            >
              <PlusIcon className="h-4 w-4" />
              {patient.id ? "Editar" : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
