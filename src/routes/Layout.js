import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from './../component/Header';

function Layout(){
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;