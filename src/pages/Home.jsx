import Menu from '../components/menu/Menu'
import Nav from '../components/navbar/Nav'
import Story from '../components/story/Story'
import Swipermenu from '../components/swipermenu/Swipermenu'
import Translateiceberti from '../components/transalteiceberti/Translateiceberti'

export default function Home() {
    return (
        <>
            <Nav />
            <Story />
            <Swipermenu />
            <Translateiceberti />
            <Menu />
        </>
    )
}
