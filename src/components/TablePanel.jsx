import React, { useState } from "react";
import sampleData from "../data/sampleData.json";
import { Trash2, PlusCircle } from "lucide-react";

const generateId = () => Date.now().toString();

const TablePanel = () => {
  const [rows, setRows] = useState(
    sampleData.labels.map((label, index) => ({
      id: generateId() + index,
      name: label,
      value: sampleData.data[index],
    }))
  );

  const [newRow, setNewRow] = useState({ name: "", value: "" });
  const [selectedIds, setSelectedIds] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddRow = () => {
    if (!newRow.name || newRow.value === "") return;
    const row = { ...newRow, id: generateId() };
    setRows([...rows, row]);
    setNewRow({ name: "", value: "" });
    setShowForm(false);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === rows.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(rows.map((row) => row.id));
    }
  };

  const handleBatchDelete = () => {
    setRows(rows.filter((row) => !selectedIds.includes(row.id)));
    setSelectedIds([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">📋 Student Data Table</h2>

      <div className="mb-4 flex gap-2 items-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {showForm ? "Cancel" : "Add New Row"}
        </button>

        {selectedIds.length > 0 && (
          <button
            onClick={handleBatchDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Delete Selected ({selectedIds.length})
          </button>
        )}
      </div>

      {showForm && (
        <div className="mb-6 flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <input
            type="text"
            placeholder="Name"
            value={newRow.name}
            onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            required
          />
          <input
            type="number"
            placeholder="Marks"
            value={newRow.value}
            onChange={(e) => setNewRow({ ...newRow, value: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
            required
          />
          <button
            onClick={handleAddRow}
            className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            <PlusCircle size={18} /> Submit
          </button>
        </div>
      )}

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedIds.length === rows.length}
                  onChange={handleSelectAll}
                  className="accent-blue-600"
                />{" "}
                Select All
              </th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Marks</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => handleSelect(row.id)}
                    className="accent-blue-600"
                  />
                </td>
                <td className="px-4 py-3 font-medium text-gray-800">{row.name}</td>
                <td className="px-4 py-3 text-gray-700">{row.value}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => handleDeleteRow(row.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePanel;
