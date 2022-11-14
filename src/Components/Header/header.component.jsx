import Currency from '../currency/currency.component';
import './header.styles.scss';

const Header = (props) => {
  return (
    <header>
      <h2>Currency Exchange</h2>
      <div className="currency-container">
        <ul></ul>
      </div>
    </header>
  );
};

export default Header;
