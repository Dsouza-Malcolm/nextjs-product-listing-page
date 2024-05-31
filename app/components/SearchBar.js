"use client";

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="mb-4 flex justify-end">
      <input
        type="text"
        className="p-2 border rounded focus:outline-none focus:ring focus:ring-gray-400 w-52 md:focus:w-2/4 transition-all focus:w-full"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
