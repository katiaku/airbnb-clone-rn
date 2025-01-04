export interface ListingGeo {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

interface Geometry {
  type: string;
  coordinates: [number, number];
}

interface Properties {
  id: number;
  name: string;
  host_id: number;
  neighbourhood: string;
  room_type: string;
  column_10: number; // Room price /night /person
  minimum_nights: number;
  number_of_reviews: number;
  last_review: string | null;
  reviews_per_month: number | null;
  calculated_host_listings_count: number;
  availability_365: number;
  updated_date: string;
  city: string;
  column_19: string; // Country
  column_20: string; // Full location description
}
