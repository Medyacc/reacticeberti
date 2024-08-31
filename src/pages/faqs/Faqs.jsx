import './faqs.css'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'

export default function Faqs() {
    return (
        <div className='faqs'>
            <Nav />
            <div className='container'>
                <div className='privacy-info'>

                    <h1>FAQs</h1>

                    <h2>About Our Ice Cream:</h2>
                    <ul className='information-collect'>
                        <li>
                            <b>What makes Ice Berti’s ice cream special?</b>
                            <li>IceBerti is more than just an ice cream shop- it's a destination. Our bright,
                                cheerful shop is the perfect place to relax and enjoy a sweet treat with friends and
                                family. Come experience the magic of Mirleft with us, one scoop at a time.</li>
                        </li>
                        <li>
                            <b>What’s your most popular flavor?</b>
                            <li>Our “Coupeglacée au chocolat” is a real crowd-pleaser! This classic sundae,
                                featuring our rich and creamy chocolate ice cream, is a timeless treat that never
                                goes out of style.</li>
                        </li>
                    </ul>

                    <h2>About Your Visit:</h2>
                    <ul className='use-information'>
                        <li>
                            <b>What are your hours of operation?</b>
                            <li>We're open every day from 9:00 AM to 9:30 PM.</li>
                        </li>
                        <li>
                            <b>Do you have seating?</b>
                            <li>Absolutely! We have plenty of comfortable seating options, both indoors and
                                outdoors. Enjoy your treats inside our charming shop, soak up the sun at one of
                                our outdoor tables, or take a stroll and savor the flavors of Mirleft!</li>
                        </li>
                        <li>
                            <b>Do you take reservations?</b>
                            <li>Thereservations aren't usually needed! Just swing by anytime during our opening
                                hours. However, if you have a large group (8 people or more) and would like to
                                check for availability, feel free to give us a call at [+212-676-173-597].</li>
                        </li>
                        <li>
                            <b>Can I order online for pickup or delivery?</b>
                            <li>Wedonotcurrently offer online ordering or delivery services. We encourage you
                                to visit us at our shop to enjoy our handcrafted treats.
                            </li>
                        </li>
                    </ul>

                    <h2>About Mirleft:</h2>
                    <ul className='about-mirleft'>
                        <li><b> I’m new t oMirleft – what else is there to see and do near Ice Berti?</b></li>
                    </ul>
                    <p>Mirleft is a hidden gem, known for its laid-back vibe, stunning beaches, and incredible sunsets.
                        Here are a few ideas:</p>
                    <ul className='about-mirleft-two'>
                        <li>
                            <b>HittheBeach: </b>Mirleft Beach is famous for its dramatic arches and caves, perfect
                            for exploring at low tide. If you're feeling adventurous, try surfing or paragliding!
                        </li>
                        <li>
                            <b>CatchaSunset at the Kasbah: </b>The ruins of the old Kasbah offer panoramic
                            views of the coastline– an ideal spot to watch the sunset.
                        </li>
                        <li>
                            <b>Explore the Souk: </b>Wander through the local market and soak up the sights,
                            smells, and sounds of Mirleft. You'll find unique souvenirs, spices, and local
                            crafts.
                        </li>
                        <li>
                            <b>TakeaHike: </b>The coastline around Mirleft is dotted with scenic trails. Ask a local
                            for recommendations based on your fitness level!
                        </li>
                    </ul>
                    <p>Don’t forget to fuel up for your adventures with a delicious treat from Ice Berti before you go!</p>
                    <h2>Got another question?</h2>
                    <ul className='about-mirleft'>
                        <li>We love chatting with our customers! Feel free to send us a message on our social media</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
