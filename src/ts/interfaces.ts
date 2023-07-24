interface ProductProps {
  id: number;
  image: string;
  title: string;
  priceTotal: number;
  count: number;
  deleteProduct: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  changeValue: (id: number, value: string) => void;
}

interface ButtonDeleteProps {
  id: number;
  handleClick: (id: number) => void;
}

interface CountProps {
  id: number;
  count: number;
  handleClickUp: (id: number) => void;
  handleClickDown: (id: number) => void;
  handleChange: (id: number, value: string) => void;
}

interface ProductTypes {
  id: number;
  img: string;
  title: string;
  count: number;
  price: number;
  priceTotal: number;
}

export type { ProductProps, ButtonDeleteProps, CountProps, ProductTypes };
