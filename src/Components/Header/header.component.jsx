import Currency from '../currency/currency.component';
import './header.styles.scss';

const Header = () => {
  return (
    <header>
      <h2>Currency Exchange</h2>
      <Currency />
    </header>
  );
};

export default Header;
