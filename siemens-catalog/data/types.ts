export type CategorySlug =
  | 'plc'
  | 'hmi'
  | 'drive-inverter'
  | 'industrial-network'
  | 'sensor'
  | 'power-supply'
  | 'protection';

export interface Spec {
  key: string;
  label: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  brand: string;
  model: string;
  category: CategorySlug;
  subcategory: string;
  shortDesc: string;
  specs: Spec[];
  image: string;
  datasheetUrl?: string;
  price: number | null;
  priceNote?: string;
  inStock: boolean;
  tags: string[];
  featured?: boolean;
  updatedAt: string;
}
