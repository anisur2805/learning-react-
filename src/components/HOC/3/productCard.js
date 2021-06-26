import React from "react";
import products from "./products";

const ProductCard = ({ title, style, price, description, isFreeShipping }) => {
  return (
    <div>
      <hr />
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Style:</b> {style}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Free shipping:</b> {isFreeShipping && "true" ? "Fully Free" : "Nope"}
      </p>
      <hr />
    </div>
  );
};

const filterProducts = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  return products.filter((product) => {
    let str =
      `${product.title} ${product.style} ${product.sku} ${product.isFreeShipping}`.toLowerCase();
    console.log(str);
    return str.indexOf(searchTerm) >= 0;
  });
};

const ProductsList = (props) => {
  const { searchTerm } = props;
  let filteredProducts = filterProducts(searchTerm);
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
};

const withSearch = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: "",
    };
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      return (
        <div>
          <div>
            <input
              onChange={this.handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
          </div>
          <WrappedComponent searchTerm={searchTerm} />
        </div>
      );
    }
  };
};

const ProductsListWithSearch = withSearch(ProductsList);

export default ProductsListWithSearch;
