export interface Property {
  id: string;
  title: string;
  description: string;
  city: 'Marrakech' | 'Tanger';
  pricePerNight: number;
  images: string[];
  featured: boolean;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  amenities: string[];
  airbnbUrl: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Appartement Cosy Médina',
    description: "Charmant appartement au cœur de la médina de Marrakech. Parfait pour explorer la ville.",
    city: 'Marrakech',
    pricePerNight: 120,
    images: [
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
    ],
    featured: false,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['Terrasse', 'Wifi', 'Climatisation'],
    airbnbUrl: '#'
  },
  {
    id: '2',
    title: 'Appartement Vue Mer Tanger',
    description: "Appartement moderne avec vue imprenable sur le détroit de Gibraltar. Idéal pour un séjour romantique.",
    city: 'Tanger',
    pricePerNight: 200,
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
    ],
    featured: false,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['Vue mer', 'Balcon', 'Cuisine équipée', 'Wifi', 'Proximité plage'],
    airbnbUrl: '#'
  }
];