import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      ></div>
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
