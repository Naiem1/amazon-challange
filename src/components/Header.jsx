import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';
import { auth } from '../firebase.config';

console.log(Link);

const Header = () => {

  const [state, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!state.user && '/login'} style={{ textDecoration: 'none'}}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello, user</span>
            <span className="header__optionLineTwo">{state.user ? 'Sign Out' :'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Order</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" style={{textDecoration: 'none'}} >
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{ state.basket?.length }</span>
          </div>
        </Link>
      </div>
    </div>
  )
}


export default Header;