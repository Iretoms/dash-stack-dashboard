export interface Product {
  id: number;
  image: string;
  productName: string;
  category: string;
  price: number;
  piece: number;
  availableColors: string[];
}

export interface Favourite {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isFavorite: boolean;
}