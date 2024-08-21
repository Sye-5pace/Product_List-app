export interface IProduct {
  image: ImageType;
  name: string;
  category: string;
  price: number;
}

interface ImageType {
  [index: string]: string;
}
