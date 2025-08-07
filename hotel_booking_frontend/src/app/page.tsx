"use client";

import React, { useState } from "react";
import HotelSearchBar from "@/components/search/HotelSearchBar";
import HotelList from "@/components/hotels/HotelList";
import HotelDetailModal from "@/components/hotels/HotelDetailModal";
import { Hotel } from "@/types/hotel";

/**
 * Homepage - Hotel Browsing, Search, and Listing
 * Shows search bar, filter options, hotel list, and modal details.
 */
export default function Home() {
  // Track which hotel is selected
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  // State for search and filters (could add location, rating, etc)
  const [searchTerm, setSearchTerm] = useState<string>("");

  /**
   * Handles clicking a hotel card to view details.
   * @param hotel 
   */
  function handleHotelCardClick(hotel: Hotel) {
    setSelectedHotel(hotel);
  }

  /**
   * Closes hotel modal.
   */
  function handleCloseModal() {
    setSelectedHotel(null);
  }

  return (
    <main className="max-w-7xl mx-auto pt-6 pb-12 px-3">
      <section>
        <HotelSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>

      <section className="mt-7">
        <HotelList
          searchTerm={searchTerm}
          onHotelSelect={handleHotelCardClick}
        />
      </section>
      
      <HotelDetailModal hotel={selectedHotel} onClose={handleCloseModal} />
    </main>
  );
}
