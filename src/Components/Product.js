const Product = ({ CategoryImgURL, CategoryName, CategoryPrice }) => {
  return (
    <div className="productscard">
      <img className="productimg" alt="img" src={CategoryImgURL} />
      <p>{CategoryName}</p>
      <h3 className="productname">{CategoryPrice}تومان</h3>
    </div>
  );
};
export default Product;
