import React from 'react'
import './NavbarMobiStyles.css';

const NavbarMobi = () => {
    return (
        <div className="navbar-mobi container-fluid" >
            <div className="row">
                <ul className="menu-mobi">
                    <li>
                        <a href="foo">Home</a>
                    </li>
                    <li>
                        <a href="foo">About</a>
                    </li>
                    <li>
                        <a href="foo">Services</a>
                    </li>
                    <li>
                        <a href="foo">Prices</a>
                    </li>
                    <li>
                        <a href="foo">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
// NavbarMobi.propTypes = {
//     style : PropTypes.shape({
//         display : PropTypes.string
//     }),
// }
// NavbarMobi.defaultProps = {
//     style: PropTypes.shape({
//         display: 'block'
//     })
// }

export default  NavbarMobi;
