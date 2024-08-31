import './privacy.css'
import Nav from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'

export default function Privacy() {
    return (
        <div className='privacy'>
            <Nav />
            <div className='container'>
                <div className='privacy-info'>

                    <h1>Privacy Policy</h1>

                    <p><b>Last updated:</b> August 24, 2024</p>
                    <p>At Ice Berti, we respect your privacy and are committed to protecting your personal information.
                        This Privacy Policy explains what information we collect, how we use it, and your choices
                        regarding your information.</p>

                    <h3>1. Information We Collect</h3>
                    <ul className='information-collect'>
                        <li>
                            <b>Information You Provide:</b>
                            <span>We may collect information that you voluntarily provide to
                                us, such as your name, email address, and phone number when you contact us through
                                our website or social media, sign up for a newsletter (if applicable), or participate in a
                                promotion.</span>
                        </li>
                        <li>
                            <b>Information Automatically Collected:</b>
                            <span>When you visit our website, we may
                                automatically collect certain information about your device and usage, such as your IP
                                address, browser type, operating system, referring/exit pages, and date/time stamps. This
                                information is collected using cookies and similar tracking technologies.</span>
                        </li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>Wemayuse the information we collect for various purposes, including:</p>
                    <ul className='use-information'>
                        <li>Torespond to your inquiries and fulfill your requests.</li>
                        <li>Toimprove our website, products, and services.</li>
                        <li>Tosendyoumarketing communications (if you have opted in).</li>
                        <li>Toanalyze website traffic and usage patterns.</li>
                        <li>Toprotect against fraud and unauthorized activity.</li>
                    </ul>

                    <h3>3. Cookies and Tracking Technologies</h3>
                    <p>Wemayuse cookies and similar tracking technologies to enhance your experience on our
                        website. Cookies are small data files that are placed on your device to help us recognize your
                        browser, remember your preferences, and track your usage patterns. You can disable cookies
                        through your browser settings, but please note that this may limit your use of our website.</p>

                    <h3>4. Sharing Your Information</h3>
                    <p>Wedonot sell, trade, or rent your personal information to third parties. We may share your
                        information with trusted third-party service providers who assist us with operating our website
                        and conducting our business (e.g., website hosting, email marketing). These service providers are
                        obligated to protect your information and only use it on our behalf.</p>

                    <h3>5. Your Choices</h3>
                    <p>You can opt out of receiving marketing communications from us by following the unsubscribe
                        instructions provided in any email we send. You can also contact us directly to update your
                        preferences.</p>

                    <h3>6. Children's Privacy</h3>
                    <p>Our website is not intended for children under the age of [Age]. We do not knowingly collect
                        personal information from children. If you are a parent or guardian and believe that your child
                        has provided us with personal information, please contact us.</p>

                    <h3>7. Security</h3>
                    <p>Wetake reasonable measures to protect your personal information from unauthorized access,
                        disclosure, alteration, or destruction. However, no website or online service is completely secure.</p>

                    <h3>8. Links to Other Websites</h3>
                    <p>Our website may contain links to other websites. We are not responsible for the privacy practices
                        of these websites. We encourage you to read the privacy policies of any websites you visit.
                    </p>

                    <h3>9. Changes to This Policy</h3>
                    <p> Wemayupdate this Privacy Policy from time to time. We will post any changes on this page and
                        update the "Last Updated" date at the top of the policy.</p>

                    <h3>10. Contact Us</h3>
                    <p> If you have any questions about this Privacy Policy, please contact us at:</p>
                    <ul className='privacy-contact'>
                        <li><a href='mailto:"info@icebertimirlet.com"'>info@icebertimirlet.com</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
