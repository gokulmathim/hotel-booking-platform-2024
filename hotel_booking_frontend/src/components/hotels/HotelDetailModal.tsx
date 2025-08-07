import React from "react";
import { Hotel, Room } from "@/types/hotel";
import Image from "next/image";

/**
 * PUBLIC_INTERFACE
 * Modal for viewing hotel details and available rooms.
 */
export default function HotelDetailModal({
  hotel,
  onClose,
}: {
  hotel: Hotel | null;
  onClose: () => void;
}) {
  if (!hotel) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl max-w-2xl w-full shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-accent text-2xl"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-4 flex flex-col md:flex-row gap-5">
          <Image
            src={hotel.photo}
            alt={hotel.name}
            className="rounded-lg mb-2 md:mb-0"
            width={192}
            height={192}
            style={{ width: "12rem", height: "12rem", objectFit: "cover" }}
            priority
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{hotel.name}</h2>
            <p className="text-gray-700 mb-2">{hotel.address}, {hotel.city}</p>
            <div className="flex gap-2 items-center text-secondary font-medium mb-2">
              {hotel.amenities.map(a => (
                <span className="bg-gray-200 px-2 py-1 rounded text-xs" key={a}>{a}</span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-3">{hotel.description}</p>
            <div className="mb-3">
              <span className="text-accent font-bold">Rooms Available:</span>
              <ul className="mt-2 space-y-1">
                {hotel.rooms.map((room: Room) => (
                  <li key={room.id} className={`flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg ${!room.available ? "opacity-50" : ""}`}>
                    <span>
                      <b>{room.name}</b> ({room.occupancy} guests) – ${room.price}
                    </span>
                    <button
                      className="bg-secondary px-3 py-1 rounded text-white ml-6"
                      disabled={!room.available}
                    >
                      {room.available ? "Book" : "Unavailable"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Click background to close */}
      <div className="absolute inset-0 z-30" onClick={onClose} />
    </div>
  );
}
