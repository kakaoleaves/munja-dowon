import { Fragment, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from './../component/Header';

function Layout(){
        const {pathname} = useLocation();

        // pathname이 변경될 때마다 페이지 최상위로 이동
        useEffect(() => {
            document.querySelector('html')?.scrollTo(0, 0);
          }, [pathname]);
        
          const navigate = useNavigate();
        
          // 최초 접근 시, page 이동
          useEffect(() => {
            if (process.env.NODE_ENV === 'development' && (pathname === '/' || pathname === '/munja-dowon' || pathname === '')) {
              navigate('/Home');
            }
            if (process.env.NODE_ENV === 'production' && 
                (pathname === '/munja-dowon' || pathname === '/munja-dowon/')) {
              navigate('/munja-dowon/Home', { replace: true });
            }
          }, [pathname]);
      
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