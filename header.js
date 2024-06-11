import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';
function Header() {
    const[{basket,user},dispatch]=useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    
  return (
    <div className='header'>
        <Link to="/">
      <img className="header_logo " src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
      </Link>
    <div className="header_search">
        <input className="header_searchInput" type="text"/>
         </div>
         <SearchIcon className='headersearchicon'/>
         <div className="header_nav">
            <Link to='/login'>
            <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="headerlineon">Hello {!user ? 'Guest' : user.email}</span>
            <span className="headerlinetw">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
            </Link>
            <div className="header_option">
            <span className='headerlineon'>
                    Returns
                </span>
                <span className='headeroptionlinetw'>
                    & Orders
                </span>
                 </div>
            <div className="header_option">
            <span className='headerlineon'>
                    Your
                </span>
                <span className='headeroptionlinetw'>
                    Prime
                </span> </div>
                <Link to ="/checkout">
            <div className='headeroptionbasket'>
                <ShoppingBasketIcon/>
                <span className='headeroptionlinetw headerbasketcount'>{basket?.length}</span>
            </div>
            </Link>
         </div>
     </div>
  )
}

export default Header
