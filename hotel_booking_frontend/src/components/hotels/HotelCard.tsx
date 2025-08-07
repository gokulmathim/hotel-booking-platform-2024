import React from "react";
import { Hotel } from "@/types/hotel";
import Image from "next/image";

/**
 * PUBLIC_INTERFACE
 * Hotel list card for summary display.
 */
export default function HotelCard({
  hotel,
  onClick,
}: {
  hotel: Hotel;
  onClick: () => void;
}) {
  return (
    <article
      className="bg-white rounded-lg shadow hover:shadow-xl cursor-pointer border transition-all flex flex-col"
      onClick={onClick}
      tabIndex={0}
      aria-label={`View details for ${hotel.name}`}
      onKeyDown={e => e.key === "Enter" && onClick()}
      role="button"
    >
      <Image
        src={hotel.photo}
        alt={hotel.name}
        className="rounded-t-lg object-cover"
        width={400}
        height={192}
        style={{ width: "100%", height: "12rem", objectFit: "cover" }}
        priority
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{hotel.name}</h3>
          <span className="text-accent text-lg font-medium">
            ★ {hotel.rating}
          </span>
        </div>
        <p className="text-gray-700 mt-1">{hotel.city}</p>
        <div className="mt-2 mb-3 text-gray-600 text-sm line-clamp-2">{hotel.description}</div>
        <div className="mt-auto pt-3 flex items-center gap-3">
          <span className="text-secondary font-bold text-lg">${hotel.priceFrom}</span>
          <span className="text-xs text-gray-500">from/night</span>
        </div>
      </div>
    </article>
  );
}
