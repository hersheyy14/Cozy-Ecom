import "./products.css";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";

const Products = (props) => {
  return (
    <div>
      <div className="product-container">
        <Categories
          setProducts={props.setProducts}
          category={props.category}
          products={props.products}
          loading={props.loading}
          setLoading={props.setLoading}
          initialProducts={props.initialProducts}
        />
        {props.products.map((product) => {
          return (
            <div key={product.id}>
              <Card
                image={product.image}
                product={product}
                title={product.title}
                price={product.price}
                description={product.description}
                cart={props.cart}
                setCart={props.setCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
