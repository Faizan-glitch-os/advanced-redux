import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  { id: 1, name: "GTX", price: 110, description: "It is a good graphics card" },
  { id: 2, name: "RX", price: 90, description: "It is a great graphics card" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
