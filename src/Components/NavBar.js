import headerimg from "../Containers/Digikala-Logo.wine.png";

const NavBar = ({ SearchInputValue, searchchange }) => {
  return (
    <div className="headerimgdiv">
      <img className="headerimg" src={headerimg} />
      <input value={SearchInputValue} onChange={searchchange} />
    </div>
  );
};
export default NavBar;
