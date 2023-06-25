function Patients() {
  return (
    <div className="bg-secondary p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label className="font-light text-base">Nombre Mascota</label>
        <p className="text-xl text-gray-700">Hook</p>
      </div>

      <div className="mb-4">
        <label className="font-light text-base">Nombre Dueño</label>
        <p className="text-xl text-gray-700">Carlos</p>
      </div>

      <div className="mb-4">
        <label className="font-light text-base">Email</label>
        <p className="text-xl text-gray-700">correo@correo.com</p>
      </div>

      <div className="mb-4">
        <label className="font-light text-base">Fecha</label>
        <p className="text-xl text-gray-700">2021-09-01</p>
      </div>

      <div className="mb-4">
        <label className="font-light text-base">Sintomas</label>
        <p className="text-xl text-gray-700">El perro no come</p>
      </div>
    </div>
  );
}

export default Patients;
