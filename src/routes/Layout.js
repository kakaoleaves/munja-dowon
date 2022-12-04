import { Fragment, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './../component/Header';
import {useIdleTimer} from 'react-idle-timer';

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

    const onPrompt = () => {
      // Fire a Modal Prompt
    }
  
    const onIdle = () => {
      // Close Modal Prompt
      // Do some idle action like log out your user
      navigate('/munja-dowon/Home', { replace: true });
    }
  
    const onActive = (event) => {
      // Close Modal Prompt
      // Do some active action
    }
  
    const onAction = (event) => {
      // Do something when a user triggers a watched event
    }

    // timer
    const timer = useIdleTimer({
      onPrompt,
      onIdle,
      onActive,
      onAction,
      timeout: 1000 * 60 * 10,
      promptTimeout: 0,
      events: [
        'mousemove',
        'keydown',
        'wheel',
        'DOMMouseScroll',
        'mousewheel',
        'mousedown',
        'touchstart',
        'touchmove',
        'MSPointerDown',
        'MSPointerMove',
        'visibilitychange'
      ],
      immediateEvents: [],
      debounce: 0,
      throttle: 0,
      eventsThrottle: 200,
      element: document,
      startOnMount: true,
      startManually: false,
      stopOnIdle: false,
      crossTab: false,
      name: 'idle-timer',
      syncTimers: 0,
      leaderElection: false
    })


    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Layout;