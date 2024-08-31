import './terms.css'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'

export default function Terms() {
    return (
        <div className='terms'>
            <Nav />
            <div className='container'>
                <div className='privacy-info'>

                    <h1>Terms of Use</h1>

                    <p><b>Last updated:</b> August 24, 2024</p>
                    <p>Welcome to the Ice Berti Coffee & Ice Cream Shop website <b>"Icebertimirleft.com"</b>. By
                        accessing or using our Website, you agree to comply with and be bound by the following terms
                        and conditions ("Terms of Use"). Please read them carefully. If you do not agree to these Terms
                        of Use, you must not use this Website.</p>

                    <h2>1. General Use</h2>
                    <h3 className='title-h3'>1.1 Purpose</h3>
                    <p>This Website is intended to provide information about Ice Berti Coffee & Ice Cream Shop
                        located in Mirleft, Morocco. The Website may include details about our products, services, hours
                        of operation, and other relevant information.</p>
                    <h3 className='title-h3'>1.2 Eligibility</h3>
                    <p> You must be at least 18 years old to use this Website. By using the Website, you represent and
                        warrant that you meet this requirement.</p>
                    <h3 className='title-h3'>1.3 Content</h3>
                    <p>All content provided on the Website is for informational and commercial purposes. We reserve
                        the right to modify or update any content at any time without prior notice.</p>

                    <h2>2. Intellectual Property</h2>
                    <h3 className='title-h3'>2.1 Ownership</h3>
                    <p> All content on this Website, including but not limited to text, images, logos, and graphics, is the
                        property of Ice Berti Coffee & Ice Cream Shop and is protected by copyright, trademark, and
                        other intellectual property laws.
                    </p>
                    <h3 className='title-h3'>2.2 Restrictions</h3>
                    <p> You may not reproduce, distribute, modify, or create derivative works from any content on this
                        Website without our express written permission.</p>

                    <h2>3. User Conduct</h2>
                    <h3 className='title-h3'> 3.1 Prohibited Activities</h3>
                    <p>When using our Website, you agree not to:</p>
                    <ul>
                        <li>- Engage in any unlawful or fraudulent activities.</li>
                        <li>- Transmit any harmful or malicious software.</li>
                        <li>- Interfere with the functionality of the Website or the servers and networks connected to it.</li>
                        <li>- Use the Website for any purpose that is harmful to Ice Berti Coffee & Ice Cream Shop or any
                            third party.</li>
                    </ul>

                    <h2>4. Links to Third-Party Websites</h2>
                    <h3 className='title-h3'>4.1 External Links</h3>
                    <p>Our Website may contain links to third-party websites that are not operated by Ice Berti Coffee
                        &Ice Cream Shop. We are not responsible for the content or privacy practices of these external
                        sites and recommend that you review their terms and policies before using them.</p>

                    <h2>5. Limitation of Liability</h2>
                    <h3 className='title-h3'> 5.1 No Warranties</h3>
                    <p> This Website is provided on an "as-is" and "as-available" basis. Ice Berti Coffee & Ice Cream
                        Shop makes no representations or warranties of any kind, express or implied, regarding the
                        accuracy, reliability, or availability of the Website or its content.
                    </p>
                    <h3 className='title-h3'>5.2 Limitation of Liability</h3>
                    <p> To the fullest extent permitted by law, Ice Berti Coffee & Ice Cream Shop shall not be liable for
                        any damages arising from your use of the Website, including but not limited to direct, indirect,
                        incidental, punitive, or consequential damages.</p>

                    <h2>6. Changes to the Terms of Use</h2>
                    <p>Wereserve the right to modify these Terms of Use at any time. Any changes will be effective
                        immediately upon posting on this page, with the updated date indicated at the top of the Terms of
                        Use. Your continued use of the Website after such changes constitutes your acceptance of the
                        new Terms of Use.</p>

                    <h2>7. Governing Law</h2>
                    <p>These Terms of Use shall be governed by and construed in accordance with the laws of Morocco.
                        Any disputes arising under or in connection with these Terms shall be subject to the exclusive
                        jurisdiction of the courts in Morocco.</p>

                    <h2>8. Contact Us</h2>
                    <p>If you have any questions about these Terms of Use, please contact us at:</p>
                    <ul className='privacy-contact'>
                        <li><a href='mailto:"info@icebertimirlet.com"'>info@icebertimirlet.com</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
