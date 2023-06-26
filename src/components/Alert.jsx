import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function Alert({ message }) {
  return (
    <div className="bg-red-50 border-red-500 border-l-4 rounded-md p-4 flex gap-4 mb-4">
      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
      <div className="flex flex-col">
        <h2 className="text-red-600 text-lg font-bold -mt-1">Error</h2>
        <p className="text-red-500 text-base font-medium">{message}</p>
      </div>
    </div>
  );
}

export default Alert;
