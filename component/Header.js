import React, { useState } from 'react';
import { APP_NAME } from '../config';
import Link from 'next/link'
import Nprogress from 'nprogress'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';
import Search from './blog/search';
Router.onRouteChangeStart = url => Nprogress.start();
Router.onRouteChangeComplete = url => Nprogress.done();
Router.onRouteChangeError = url => Nprogress.done();
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavbarBrand className="font-weight-bold" style={{ cursor: 'pointer' }}>{APP_NAME}</NavbarBrand>
                </Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/blogs">
                                <NavLink style={{ cursor: 'pointer' }}>
                                    blogs
                                    </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/Contact">
                                <NavLink style={{ cursor: 'pointer' }}>
                                    Contact
                                    </NavLink>
                            </Link>
                        </NavItem>
                        {!isAuth() && (
                            <React.Fragment>
                                <NavItem>
                                    <Link href="/signin">
                                        <NavLink style={{ cursor: 'pointer' }}>
                                            signin
                                    </NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/signup">
                                        <NavLink style={{ cursor: 'pointer' }}>
                                            signup
                                    </NavLink>
                                    </Link>
                                </NavItem>
                            </React.Fragment>
                        )}
                        {isAuth() && isAuth().role == 1 && (
                            <NavItem>
                                <Link href="/admin">
                                    <NavLink style={{ cursor: 'pointer' }}>
                                        {`${isAuth().name}'s Dashboard`}
                                    </NavLink>
                                </Link>
                            </NavItem>
                        )}
                        {isAuth() && isAuth().role == 0 && (
                            <NavItem>
                                <Link href="/user">
                                    <NavLink style={{ cursor: 'pointer' }}>
                                        {`${isAuth().name}'s Dashboard`}
                                    </NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && (
                            <NavItem>
                                <NavLink onClick={() => { signout(() => { Router.replace(`/signin`) }) }} style={{ cursor: 'pointer' }}>
                                    signout
                                </NavLink>
                            </NavItem>
                        )}

                    </Nav>
                </Collapse>
            </Navbar>
            <Search />
        </React.Fragment>
    );
}

export default Header;