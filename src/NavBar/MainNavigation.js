import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavBarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src='https://i.pinimg.com/originals/78/f5/c2/78f5c2cfc7c4f1045563693747c4cae6.png' width="64rem" height="64rem"alt='logo'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/journal' activeStyle>
                        Journal
                    </NavLink>
                    <NavLink to='/data' activeStyle>
                        Data
                    </NavLink>
                    <NavLink to='meditation' activeStyle>
                        Meditation
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
