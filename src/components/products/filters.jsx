import React from "react";
import FilterContent from "./FilterContent";
import { Close } from "@mui/icons-material";

export function FilterComponent({ toggleFilter }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 w-10/12 max-w-lg rounded-lg shadow-lg relative">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>
        <FilterContent />

        {/* Close button for modal */}
        <button
          onClick={toggleFilter}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <Close />
        </button>
      </div>
    </div>
  );
}
