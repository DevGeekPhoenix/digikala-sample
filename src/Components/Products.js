import Product from "./Product";
const Products = ({ Mobiles }) => {
  return (
    <div className="productsbox">
      {Mobiles.map((item) => {
        return (
          <Product
            CategoryImgURL={item.CategoryImgURL}
            CategoryName={item.CategoryName}
            CategoryPrice={item.CategoryPrice}
          />
        );
      })}
    </div>
  );
};
export default Products;
