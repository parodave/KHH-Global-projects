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
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Villa Luxe Marrakech',
    description: 'Magnifique villa avec piscine privée et vue sur l\'Atlas. Parfaite pour des vacances en famille dans un cadre exceptionnel.',
    city: 'Marrakech',
    pricePerNight: 450,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg'
    ],
    featured: true,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    amenities: ['Piscine privée', 'Vue Atlas', 'Jardin', 'Parking', 'Wifi', 'Climatisation']
  },
  {
    id: '2',
    title: 'Riad Traditionnel Médina',
    description: 'Riad authentique au cœur de la médina de Marrakech. Architecture traditionnelle avec tout le confort moderne.',
    city: 'Marrakech',
    pricePerNight: 280,
    images: [
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
    ],
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['Patio traditionnel', 'Terrasse', 'Proximité souks', 'Wifi', 'Petit-déjeuner']
  },
  {
    id: '3',
    title: 'Appartement Vue Mer Tanger',
    description: 'Appartement moderne avec vue imprenable sur le détroit de Gibraltar. Idéal pour un séjour romantique.',
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
    amenities: ['Vue mer', 'Balcon', 'Cuisine équipée', 'Wifi', 'Proximité plage']
  },
  {
    id: '4',
    title: 'Villa Contemporaine Tanger',
    description: 'Villa moderne avec piscine et jardin méditerranéen. Architecture contemporaine dans un quartier résidentiel.',
    city: 'Tanger',
    pricePerNight: 380,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg'
    ],
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['Piscine', 'Jardin méditerranéen', 'Garage', 'Sécurité 24h', 'Wifi', 'Climatisation']
  }
];