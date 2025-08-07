import React from "react";

/**
 * PUBLIC_INTERFACE
 * Hotel search bar with input field.
 */
export default function HotelSearchBar({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (s: string) => void;
}) {
  return (
    <form
      className="flex w-full gap-3 items-center bg-white p-2 rounded-xl shadow-md border border-gray-100"
      onSubmit={e => e.preventDefault()}
      autoComplete="off"
    >
      <input
        type="text"
        placeholder="Search hotels by name, location, amenity..."
        className="flex-1 px-4 py-3 text-lg text-primary focus:outline-none"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className="bg-secondary text-white font-medium px-4 py-3 rounded-lg hover:bg-accent" type="submit">
        Search
      </button>
    </form>
  );
}
