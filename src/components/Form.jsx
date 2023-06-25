import { PlusIcon } from "@heroicons/react/24/solid";

function Form() {
  return (
    <div className="w-full md:w-2/5 pt-10">
      <h2 className="text-3xl text-center font-semibold">
        Seguimiento Pacientes
      </h2>
      <p className="font-light text-center mb-5">
        Agrega pacientes y administralos
      </p>

      <div className="bg-secondary p-6 rounded-md shadow-md">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre Mascota
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre Mascota"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="owner"
            >
              Nombre Dueño
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="owner"
              type="text"
              placeholder="Nombre Dueño de la Mascota"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Dueño de la Mascota"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Fecha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="symptoms"
            >
              Sintomas
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"
              id="symptoms"
              placeholder="Describe los sintomas"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="flex justify-center items-center gap-2 bg-accent w-full sm:w-auto font-bold text-white rounded py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-accent-dark transition-all duration-200"
              type="submit"
            >
              <PlusIcon className="h-4 w-4" /> Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
