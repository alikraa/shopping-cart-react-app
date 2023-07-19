interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  deleteProduct: (id: number) => void;
}

interface ButtonDeleteProps {
  id: number;
  handleClick: (id: number) => void;
}

export type { ProductProps, ButtonDeleteProps };