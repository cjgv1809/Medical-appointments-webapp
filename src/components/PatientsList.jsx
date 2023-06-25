import Patients from "./Patients";

function PatientsList() {
  return (
    <div className="w-full md:w-3/5 pt-10">
      <h2 className="text-3xl text-center font-semibold">
        Listado de Pacientes
      </h2>
      <p className="font-light text-center mb-5">
        Administra tus pacientes y citas
      </p>

      <div className="md:h-screen scrollbar-hide overflow-y-auto space-y-5">
        <Patients />
        <Patients />
        <Patients />
        <Patients />
        <Patients />
        <Patients />
        <Patients />
      </div>
    </div>
  );
}

export default PatientsList;
