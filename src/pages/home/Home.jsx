import './home.css'
import Scrolltotop from '../../components/scrolltotop/Scrolltotop'
import Nav from '../../components/navbar/Nav'
import Story from '../../components/story/Story'
import Swipermenu from '../../components/swipermenu/Swipermenu'
import PureWater from '../../components/purewater/PureWater'
import Translateiceberti from '../../components/transalteiceberti/Translateiceberti'
import Placeimages from '../../components/placeImages/Placeimages'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
// const Footer = React.lazy(() => import('../../components/footer/Footer'));
// const Nav = React.lazy(() => import('../../components/navbar/Nav'));
// const Contact = React.lazy(() => import('../../components/contact/Contact'));
// const PureWater = React.lazy(() => import('../../components/purewater/PureWater'));
// const Scrolltotop = React.lazy(() => import('../../components/scrolltotop/Scrolltotop'));
// const Story = React.lazy(() => import('../../components/story/Story'));
// const Swipermenu = React.lazy(() => import('../../components/swipermenu/Swipermenu'));
// const Translateiceberti = React.lazy(() => import('../../components/transalteiceberti/Translateiceberti'));
// const Placeimages = React.lazy(() => import('../../components/placeImages/Placeimages'));

export default function Home() {
    return (
        <>
            <Scrolltotop />
            <Nav />
            <Story />
            <Swipermenu />
            <PureWater />
            <Translateiceberti />
            <Placeimages />
            <Contact />
            <Footer />
        </>
    );
}
