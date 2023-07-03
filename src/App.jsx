import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    // Get patients from localStorage
    const getLocalStorage = () => {
      const patientsLocalStorage =
        JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLocalStorage);
      console.log("Patients getting LOCAL STORAGE", patientsLocalStorage);
    };

    getLocalStorage();
  }, []);

  useEffect(() => {
    // Save patients in localStorage
    const setPatientsLocalStorage = () => {
      const patientsLocalStorage = localStorage.setItem(
        "patients",
        JSON.stringify(patients)
      );
      console.log("Patients setting LOCAL STORAGE", patientsLocalStorage);
    };

    setPatientsLocalStorage();
  }, [patients]);

  const deletePatient = (id) => {
    const newPatients = patients.filter((patientItem) => patientItem.id !== id);
    setPatients(newPatients);
  };

  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto min-h-screen px-5">
        <header className="pt-10">
          <Header />
        </header>
        <main className="flex flex-col md:gap-6 md:flex md:flex-row md:justify-between pb-16">
          <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <PatientsList
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
