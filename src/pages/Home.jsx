import './home.css'
import React, { Suspense } from 'react';
const Footer = React.lazy(() => import('../components/footer/Footer'));
const Nav = React.lazy(() => import('../components/navbar/Nav'));
const Ouriceddrinks = React.lazy(() => import('../components/ouriceddrinks/Ouriceddrinks'));
const PureWater = React.lazy(() => import('../components/purewater/PureWater'));
const Scrolltotop = React.lazy(() => import('../components/scrolltotop/Scrolltotop'));
const Story = React.lazy(() => import('../components/story/Story'));
const Swipermenu = React.lazy(() => import('../components/swipermenu/Swipermenu'));
const Translateiceberti = React.lazy(() => import('../components/transalteiceberti/Translateiceberti'));


export default function Home() {
    return (
        <Suspense fallback={<div className='loading'>
            <div className="ring"></div>
            <span>loading...</span>
        </div>}>
            <Scrolltotop />
            <Nav />
            <Story />
            <Swipermenu />
            <Ouriceddrinks />
            <Translateiceberti />
            <PureWater />
            <Footer />
        </Suspense>
    );
}
