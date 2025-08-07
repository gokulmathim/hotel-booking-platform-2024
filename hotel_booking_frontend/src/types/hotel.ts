export type Room = {
  id: string;
  name: string;
  price: number;
  available: boolean;
  description: string;
  occupancy: number;
  photos?: string[];
};

export type Hotel = {
  id: string;
  name: string;
  address: string;
  city: string;
  rating: number;
  description: string;
  amenities: string[];
  photo: string;
  rooms: Room[];
  priceFrom: number;
  topRoomType?: string;
  featured?: boolean;
};
