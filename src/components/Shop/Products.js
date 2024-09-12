import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    tittle: "My First Book",
    description: "the first book",
  },
  {
    id: "p2",
    price: 10,
    tittle: "My Second Book",
    description: "the first book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          title={product.title}
          price={product.price}
          id={product.id}
          description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
