import React from 'react';
import './Header.css';

class Header extends React.Component {
   render() {
   		const { text } = this.props;
        return (
           <div className="Header">
               <h1 className="Header__logo">{text}</h1>
               <ul className="Navigation">
                   <li className="Navigation_item"><a className="Navigation_link" href="">About</a></li>
                   <li className="Navigation_item"><a className="Navigation_link" href="">Browse</a></li>
                   <li className="Navigation_item"><a className="Navigation_link" href="">Login</a></li>
               </ul>
           </div>
        );
   }
}

export default Header;