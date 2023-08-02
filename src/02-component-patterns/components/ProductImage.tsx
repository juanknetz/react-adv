import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductImage = ({ img = "", className, style }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string = noImage;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`} style={style}
      src={imgToShow}
      alt="Product"
    />
  );
};

export default ProductImage;
