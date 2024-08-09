import Footer from '../components/footer/Footer'
// import Menu from '../components/menu/Menu'
import Nav from '../components/navbar/Nav'
import Ouriceddrinks from '../components/ouriceddrinks/Ouriceddrinks'
import PureWater from '../components/purewater/PureWater'
import Scrolltotop from '../components/scrolltotop/Scrolltotop'
import Story from '../components/story/Story'
import Swipermenu from '../components/swipermenu/Swipermenu'
import Translateiceberti from '../components/transalteiceberti/Translateiceberti'

export default function Home() {
    return (
        <>
            <Scrolltotop />
            <Nav />
            <Story />
            <Swipermenu />
            {/* <Menu /> */}
            <Ouriceddrinks />
            <Translateiceberti />
            <PureWater />
            <Footer />
        </>
    )
}
