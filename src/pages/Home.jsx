import Gmaps from '../components/gmaps/Gmaps'
import Menu from '../components/menu/Menu'
import Nav from '../components/navbar/Nav'
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
            <Translateiceberti />
            <Menu />
            <Gmaps />
        </>
    )
}
