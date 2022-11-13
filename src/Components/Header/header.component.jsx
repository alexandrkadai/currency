import Currency from '../currency/currency.component';
import './header.styles.scss';

const Header = (props) => {
  const datas = props;

  let names = datas.ccy;
  // for (let i = 0; i < 2; i++) {
  //   names.push(datas[i].ccy);
  // }

  console.log(names);

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
