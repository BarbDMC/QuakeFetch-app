
export interface Item {
  id: number;
  time: Date;
  magnitude: number;
  tsunami: boolean;
  place: string;
  mag_type: string;
  title: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}


export interface FeatureResponse {
  data: Item[];
  pagination: {
    current_page: number;
    total: number;
    per_page: number;
  };
}