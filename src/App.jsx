import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto min-h-screen px-5">
        <header className="pt-10">
          <Header />
        </header>
        <main className="flex flex-col md:gap-6 md:flex md:flex-row md:justify-between pb-16">
          <Form patients={patients} setPatients={setPatients} />
          <PatientsList patients={patients} />
        </main>
      </div>
    </div>
  );
}

export default App;
