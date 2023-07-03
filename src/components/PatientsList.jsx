import Patients from "./Patients";
import FlipMove from "react-flip-move";

function PatientsList({ patients, setPatient, deletePatient }) {
  return (
    <div className="w-full md:w-3/5 pt-10">
      <h2 className="text-3xl text-center font-semibold">
        Listado de Pacientes
      </h2>
      <p className="font-light text-center mb-5">
        Administra tus pacientes y citas
      </p>

      <div className="md:h-screen scrollbar-hide overflow-y-auto space-y-5">
        {patients.length === 0 && (
          <p className="text-center text-xl font-light">
            No hay pacientes registrados
          </p>
        )}

        {/* <FlipMove> */}
        {patients.map((patient) => (
          <Patients
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        ))}
        {/* </FlipMove> */}
      </div>
    </div>
  );
}

export default PatientsList;
