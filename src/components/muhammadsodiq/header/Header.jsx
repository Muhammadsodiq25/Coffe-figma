import "./Header.css";

const Header = ({ logo, nav, search__btn, input, shopping__cart }) => {
  return (
    <header className="header">
      <div className="header__images">
        <img src={logo} alt="" />
      </div>
      <nav className="header__nav">
        <ul className="nav__links">
          {nav.map((item, index) => {
            return (
              <li key={index}>
                <a className="nav__link" href="/">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header__btns">
        <div className="header__search">
          <button className="header__search--btn">{search__btn}</button>
          <input type="text" placeholder={input} className="header__search--input"/>
        </div>
        <button className="shopping__cart">{shopping__cart}</button>
      </div>
    </header>
  );
};

export default Header;
