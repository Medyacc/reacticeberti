import Menu from '../components/menu/Menu'
import Nav from '../components/navbar/Nav'
import Story from '../components/story/Story'
import Swipermenu from '../components/swipermenu/Swipermenu'

export default function Home() {
    return (
        <>
            <Nav />
            <Story />
            <Swipermenu />
            <Menu />
        </>
    )
}
