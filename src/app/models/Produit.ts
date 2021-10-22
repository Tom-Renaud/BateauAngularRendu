export class Produit {
  id: number;
  name: string;
  price: number;
  category: number;
  comments: string;
  discount: number;
  unit: string;
  sale: boolean;
  availability: boolean;
  owner: string;
  'count'?: number;
}
