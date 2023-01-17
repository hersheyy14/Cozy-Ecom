import "./categories.css";

const Categories = (props) => {
  const handleCategoryClick = (cat) => {
    const singleCategory = props.initialProducts.filter(
      (c) => c.category === cat
    );
    props.setProducts([...singleCategory]);
  };

  return (
    <div className="category-container">
      <button
        type="button"
        className="category-button"
        onClick={() => props.setProducts([...props.initialProducts])}
      >
        All Products
      </button>
      {props.category.map((cat) => {
        return (
          <button
            key={cat}
            type="button"
            className="category-button"
            onClick={() => handleCategoryClick(cat)}
          >
            {cat.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
