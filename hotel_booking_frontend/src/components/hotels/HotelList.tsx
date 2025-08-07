import React, { useEffect, useState } from "react";
import { Hotel } from "@/types/hotel";
import HotelCard from "./HotelCard";

/**
 * PUBLIC_INTERFACE
 * Hotel Listings with search and filter.
 * @param searchTerm user search text to filter hotels
 * @param onHotelSelect triggers when user clicks on a hotel card
 */
export default function HotelList({
  searchTerm,
  onHotelSelect,
}: {
  searchTerm: string;
  onHotelSelect: (hotel: Hotel) => void;
}) {
  // Fetch hotel list from backend (API call can be refactored)
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotels() {
      setLoading(true);
      // TODO: Replace with real API
      // Simulating API with static dummy data for MVP
      const dummyHotels: Hotel[] = [
        {
          id: "1",
          name: "Grand Plaza Hotel",
          address: "123 Main St",
          city: "Paris",
          rating: 4.8,
          description: "Luxurious hotel with spa and fine dining.",
          amenities: ["Free WiFi", "Gym", "Spa", "Restaurant"],
          photo: "https://source.unsplash.com/featured/?hotel,lobby",
          rooms: [
            { id: "101", name: "Deluxe King", price: 240, available: true, description: "Spacious room with city view.", occupancy: 2 },
            { id: "102", name: "Junior Suite", price: 380, available: true, description: "Suite with a separate lounge.", occupancy: 3 },
          ],
          priceFrom: 240,
          topRoomType: "Deluxe King",
        },
        {
          id: "2",
          name: "Budget Comfort Inn",
          address: "456 Budget Ave",
          city: "London",
          rating: 4.3,
          description: "Affordable comfort for city explorers.",
          amenities: ["Free WiFi", "Breakfast"],
          photo: "https://source.unsplash.com/featured/?hotel,room",
          rooms: [
            { id: "201", name: "Standard Twin", price: 90, available: true, description: "Twin beds, compact room.", occupancy: 2 },
            { id: "202", name: "Single Room", price: 60, available: true, description: "Single bed, desk area.", occupancy: 1 },
          ],
          priceFrom: 60,
        },
      ];
      setHotels(dummyHotels);
      setLoading(false);
    }
    fetchHotels();
  }, []);

  // Simple search filter by name, city, or amenity
  const filtered = hotels.filter(hotel =>
    [hotel.name, hotel.city, ...hotel.amenities]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading hotels...</div>;
  if (!filtered.length) return <div>No hotels found.</div>;

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {filtered.map(hotel => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          onClick={() => onHotelSelect(hotel)}
        />
      ))}
    </section>
  );
}
