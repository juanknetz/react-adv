import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string = noImage;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  }

  return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};

export default ProductImage;
