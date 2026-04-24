// CSS imports
import './../index.css';
import './../styles/PrivacyPolicy.css';

// React-router import
import { Link } from 'react-router';

// Component imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Display mode hook import
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

function PrivacyPolicy() {
    // Style variables depending on display mode
    const { bg, text, boxBg, boxText, border, boxLink } = DisplayModeHook()

    return (
        <>
            {/* Navbar */}
            <Navbar activeLink="Privacy" />

            {/* Privacy Policy page */}
            <main className={`page-main ${bg}`}>
                <h1 className={`main-header ${text}`}>
                    Privacy Policy
                </h1>

                {/* Contains the Privacy Policy itself */}
                <div className={`privacy-policy ${boxBg} ${border}`}>

                    {/* Effective Date section */}
                    <section className="mb-4">
                        <p className={`text-base ${boxText}`}>
                            <strong>Effective Date:</strong> April 23, 2026
                        </p>
                    </section>

                    {/* 1. Overview */}
                    <section>
                        <h2 className={`${boxText}`}>
                            1. Overview
                        </h2>
                        <p className={`${boxText}`}>
                            This Privacy Policy covers how I (William Ackerman) use this website to collect and handle personal data from website 
                            visitors. This includes what data is collected from visitors and how the data is collected, stored, and used.
                        </p>

                        <span className={`mt-2 block ${boxText}`}>
                            This Privacy Policy also covers:
                        </span>
                        <ul>
                            <li className={`${boxText}`}>
                                This website&apos;s use of cookies
                            </li>
                            <li className={`${boxText}`}>
                                Information regarding children under the age of 13
                            </li>
                            <li className={`${boxText}`}>
                                Updates to this Privacy Policy
                            </li>
                            <li className={`${boxText}`}>
                                How to contact me
                            </li>
                        </ul>
                    </section>

                    {/* 2. What Data is Collected */}
                    <section>
                        <h2 className={`${boxText}`}>
                            2. What Data is Collected
                        </h2>

                        <p className={`${boxText}`}>
                            Personal data collected from you includes the following:
                        </p>

                        <span className={`mt-2 block ${boxText}`}>
                            Name:
                        </span>
                        <ul>
                            <li className={`${boxText}`}>
                                Collected when you make a submission using the contact form (You provide your name)
                            </li>
                        </ul>

                        <span className={`mt-2 block ${boxText}`}>
                            Email address:
                        </span>
                        <ul>
                            <li className={`${boxText}`}>
                                Collected when you make a submission using the contact form (You provide your email address)
                            </li>
                        </ul>

                        <span className={`mt-2 block ${boxText}`}>
                            In addition, this website is hosted using Vercel. Vercel collects the following personal data from you when you use this website:
                        </span>
                        <ul>
                            <li className={`${boxText}`}>
                                IP address
                            </li>
                            <li className={`${boxText}`}>
                                Location information derived from your IP address
                            </li>
                            <li className={`${boxText}`}>
                                System configuration information
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            For information on how Vercel handles personal data of website visitors, please visit their Privacy Policy: <Link to={"https://vercel.com/legal/privacy-policy"} target="_blank" rel="noreferrer" className={`breakWord ${boxLink} general-link`}>
                            https://vercel.com/legal/privacy-policy
                            </Link>
                        </p>
                    </section>

                    {/* 3. How Your Data is Collected */}
                    <section>
                        <h2 className={`${boxText}`}>
                            3. How Your Data is Collected
                        </h2>

                        <p className={`${boxText}`}>
                            Your personal data is collected using the following methods:
                        </p>

                        <span className={`mt-2 block ${boxText}`}>
                            Contact form:
                        </span>
                        <ul>
                            <li className={`${boxText}`}>
                                You provide your name and email address when you make a submission using the contact form.
                            </li>
                            <li className={`${boxText}`}>
                                You provide your name by typing it into the input field labeled &quot;Name&quot;, then making a submission.
                            </li>
                            <li className={`${boxText}`}>
                                You provide your email address by typing it into the input field labeled &quot;Email&quot;, then making a submission.
                            </li>
                        </ul>
                    </section>

                    {/* 4. How Your Data is Stored */}
                    <section>
                        <h2 className={`${boxText}`}>
                            4. How Your Data is Stored
                        </h2>

                        <p className={`${boxText}`}>
                            This website has no underlying database dedicated to storing personal data of visitors.
                        </p>

                        <p className={`${boxText}`}>
                            When you make a submission using the contact form, your name and email address are used to construct 
                            an email message, which is sent to and stored in my Gmail inbox at the following email address: <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`breakWord ${boxLink} general-link`}>
                            williamjohnackerman@gmail.com
                            </Link>.
                        </p>
                    </section>

                    {/* 5. How Your Data is Used */}
                    <section>
                        <h2 className={`${boxText}`}>
                            5. How Your Data is Used
                        </h2>

                        <p className={`${boxText}`}>
                            Your personal data is used in the following ways:
                        </p>

                        <span className={`mt-2 block ${boxText}`}>
                            Contact form:
                        </span>
                        <ul>
                            <li className={`${boxText}`}>
                                By providing your name and email address and making a submission using the contact form, the name and email address you provide are 
                                used in sending an email message. The message is constructed and sent using Nodemailer. The message is sent to my Gmail inbox where I may 
                                view it at any time.
                            </li>
                            <li className={`${boxText}`}>
                                Your name is included in the &quot;from&quot; field of the email message in order to indicate who the message is from.
                            </li>
                            <li className={`${boxText}`}>
                                Your email address is included in the &quot;reply-to&quot; field of the email message. This is so that I can reply to your email message, establishing 
                                a means of communication between you and me.
                            </li>
                            <li className={`${boxText}`}>
                                I do not disclose or share any of the personal information you submit to me via the contact form.
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            If you have sent a message to me using the contact form and would like the message to be deleted, please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`breakWord ${boxLink} general-link`}>
                            williamjohnackerman@gmail.com</Link> explaining the situation and specifying which message you would like me to delete. I will delete any messages you specify from my Gmail inbox.
                        </p>
                    </section>

                    {/* 6. Cookies */}
                    <section>
                        <h2 className={`${boxText}`}>
                            6. Cookies
                        </h2>

                        <p className={`${boxText}`}>
                            This website does not store or use any form of cookies.
                        </p>
                    </section>

                    {/* 7. Children Under 13 */}
                    <section>
                        <h2 className={`${boxText}`}>
                            7. Children Under 13
                        </h2>

                        <p className={`${boxText}`}>
                            This website is not intended for use by children under the age of 13. If you believe a child under the age of 13 
                            has used this website, please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`breakWord ${boxLink} general-link`}>
                            williamjohnackerman@gmail.com
                            </Link> explaining the situation and I will get back to you within 3 business days.
                        </p>

                        <p className={`${boxText}`}>
                            If you believe a child under the age of 13 has used this website to send a message to me via the contact form, please email me 
                            explaining the situation and I will delete the message from my inbox.
                        </p>
                    </section>

                    {/* 8. Updates to this Privacy Policy */}
                    <section>
                        <h2 className={`${boxText}`}>
                            8. Updates to this Privacy Policy
                        </h2>

                        <p className={`${boxText}`}>
                            This Privacy Policy is subject to future updates.
                        </p>
                    </section>

                    {/* 9. Contact */}
                    <section>
                        <h2 className={`${boxText}`}>
                            9. Contact
                        </h2>

                        <p className={`${boxText}`}>
                            If you would like to contact me, you can email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`breakWord ${boxLink} general-link`}>
                            williamjohnackerman@gmail.com
                            </Link> and I will respond to your message within 3 business days.
                        </p>

                        <p className={`${boxText}`}>
                            If you believe someone sent a message including your personal information using this website&apos;s contact form, please email me explaining 
                            the situation and I will delete the message from my inbox.
                        </p>
                    </section>

                </div>
            </main>
            {/* End of Privacy Policy page */}

            {/* Footer */}
            <Footer />
        </>
    )
}

export default PrivacyPolicy;