// CSS imports
import './../index.css';
import './../styles/PrivacyPolicy.css';

// React-router import
import { Link } from "react-router"

// Components imports
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Display mode hook import
import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';

function PrivacyPolicy() {
    // Style variables depending on display mode
    const { bg, text, boxBg, boxText, link, border, boxLink } = DisplayModeHook()

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
                            <strong>Effective Date:</strong> April 8, 2026
                        </p>
                    </section>

                    {/* 1. Introduction */}
                    <section>
                        <h2 className={`${boxText}`}>
                            1. Introduction
                        </h2>
                        <p className={`${boxText}`}>
                            This Privacy Policy describes how I (William Ackerman) collect, store, and use your personal data. By 
                            using this website (
                                <Link to={"https://william-ackerman-portfolio.vercel.app"} className={`${boxLink} general-link breakWord`}>
                                    https://william-ackerman-portfolio.vercel.app
                                </Link>
                            ), you agree to the terms of this website's Privacy Policy. This Privacy Policy may be updated as I see fit.
                        </p>
                    </section>

                    {/* 2. Data Collected */}
                    <section>
                        <h2 className={`${boxText}`}>
                            2. Data Collected
                        </h2>

                        {/* Contact Form text */}
                        <p className={`${boxText}`}>
                            My website's contact page (Link: <Link to={"https://william-ackerman-portfolio.vercel.app/contact"} className={`${boxLink} general-link breakWord`}>
                                    https://william-ackerman-portfolio.vercel.app/contact
                                </Link>) features
                            a contact form where you can send an email message to my Gmail inbox. In order to do so, you 
                            must enter the following information into the form:
                        </p>

                        <ul>
                            <li className={`${boxText}`}>
                                Your name (labeled in the contact form as "Name")
                            </li>
                            <li className={`${boxText}`}>
                                Your email address (labeled in the contact form as "Email")
                            </li>
                            <li className={`${boxText}`}>
                                The subject line of your message (labeled in the contact form as "Subject")
                            </li>
                            <li className={`${boxText}`}>
                                The body of your message (labeled in the contact form as "Message")
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            You must also check two checkboxes in the contact form:
                        </p>

                        <ul>
                            <li className={`${boxText}`}>
                                One labeled "I agree to this website's Privacy Policy" (Indicates that you agree to this website's Privacy Policy)
                            </li>
                            <li className={`${boxText}`}>
                                One labeled "I'm not a robot" (Used for bot protection via Altcha)
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            The contact form involves the use of react-hook-form. React-hook-form uses validation to determine whether 
                            the information you enter in the contact form and submit through the contact form is valid. When you try {/*submitting an email message */}to make a submission using the contact form, if 
                            there are any invalid entries (i.e. no input provided for text fields, checkbox labeled "I agree to this website's Privacy Policy" not checked, etc.), 
                            error messages in red text will be displayed under the inputs (text fields, checkbox labeled "I agree to this website's Privacy Policy") where your input was invalid. Note that although certain input can be deemed valid 
                            by react-hook-form validation, the same input can also be deemed invalid by additional JavaScript validation executed when you submit the form (i.e. submitting the contact form with 
                            only a space (" ") entered in the "Name" text field of the contact form).
                        </p>

                        <p className={`${boxText}`}>
                            When you make a submission using the contact form, additional JavaScript validation is used to determine whether the information you submitted via the form is valid.
                        </p>

                        <p className={`${boxText}`}>
                            If any of the information is invalid, the message will not be sent, and you will be notified of what information you entered is missing or invalid.
                        </p>

                        <p className={`${boxText}`}>
                            When valid information has been provided for all four fields (Name, Email, Subject, and Message) of the form, the checkbox labeled "I agree to this website's Privacy Policy" has been checked, and the checkbox labeled "I'm not a robot" has been checked, an attempt will be made to send 
                            your message to my Gmail inbox when you click the "SEND MESSAGE" button on the form. During message submission, the form's text fields, checkbox labeled "I agree to this website's Privacy Policy", and "SEND MESSAGE" button are temporarily disabled 
                            until form submission is completed and the pop-up window notifying you if your submission was successful is closed.
                        </p>

                        <p className={`${boxText}`}>
                            If the form was submitted successfully and passes react-hook-form validation, you will either be notified that your message has been sent successfully, be notified of errors with your submission, or be 
                            notified that your message failed to send.
                        </p>

                        <p className={`${boxText}`}>
                            If the information you submitted through the form is considered valid by the additional JavaScript validation and your message is sent successfully, the 
                            information you entered into the contact form's text fields will be cleared, and the checkbox labeled "I agree to this website's Privacy Policy" will be unchecked.
                        </p>

                        <p className={`${boxText}`}>
                            If the information you submitted through the form is considered invalid by the additional JavaScript validation or your message is not sent successfully, the 
                            information you entered into the contact form's text fields will not be cleared, and the checkbox labeled "I agree to this website's Privacy Policy" 
                            will remain checked. If the information you submitted through the form is considered invalid by the additional JavaScript validation, you will be notified of errors in your submission.
                        </p>

                        <p className={`${boxText}`}>
                            By submitting a message using the contact form, you agree to this website's Privacy Policy.
                        </p>

                        <p className={`${boxText}`}>
                            Both the Vite/React frontend and the Node.js/Express.js backend of this 
                            website are hosted through Vercel. As a reseller of Vercel's services, I am responsible for notifying you, 
                            the end user, that Vercel collects your IP address, location information derived from your IP address, 
                            and system configuration information.
                        </p>

                    </section>

                    {/* 3. What is Done With Your Data */}
                    <section>
                        <h2 className={`${boxText}`}>
                            3. What is Done With Your Data
                        </h2>

                        <p className={`${boxText}`}>
                            When you successfully send a message through the contact form, the information you entered (name, email, message subject line, message body) is used 
                            in the body of a POST request to the Node.js/Express.js backend API. The information you entered is also used in composing your email message that will be sent to my Gmail inbox. 
                            From there, your message is sent using Nodemailer and Gmail. Your message is sent to my Gmail inbox.
                        </p>
                        <p className={`${boxText}`}>
                            For the transport created to use in sending your message, 
                            "gmail" is used for the "service" attribute, while for "auth", my email address <span className="breakWord">(williamjohnackerman@gmail.com)</span> is used for the "user" attribute, and an app password is used for the "pass" attribute.
                            If the message is sent successfully, you will be notified that your message was sent successfully.
                        </p>

                        <p className={`${boxText}`}>
                            Email messages you send to my Gmail inbox using the contact form are sent as plaintext messages.
                        </p>

                    </section>

                    {/* 4. How Your Data is Stored */}
                    <section>
                        <h2 className={`${boxText}`}>
                            4. How Your Data is Stored
                        </h2>

                        <p className={`${boxText}`}>
                            When you make a submission using the contact form, the information you submitted via the form (name, email address, message subject line, message body) is used in the body 
                            of a POST request to the Node.js/Express.js backend API to make it possible to send an email message to my Gmail inbox through 
                            the Node.js/Express.js backend. The backend accomplishes this through the use of Nodemailer, Gmail, and 
                            an app password.
                        </p>
                        <p className={`${boxText}`}>
                            Here is how the data you submit through the contact form is used in constructing and sending the email message you send to me:
                        </p>

                        <ul>
                            <li className={`${boxText}`}>
                                <strong>Name:</strong> Included in the "from" header of the email message you send to me. Used to indicate the 
                                name of the person sending the email message (in this case, the name you submitted through the contact form).
                            </li>
                            <li className={`mt-2 ${boxText}`}>
                                <strong>Email:</strong> Included in the "reply-to" header of the email message you send to me. This allows me to 
                                reply to the email address you submitted through the contact form through the email message you submitted through the contact form. This is because although the email address you submitted through the contact form 
                                is used in the "from" field of the sendMail function of the transport created for sending your email message{/* the Node.js/Express.js backend API's POST request*/}, Gmail changes 
                                it to my own email address <span className="breakWord">(williamjohnackerman@gmail.com)</span>. This is why the email address you submitted through the contact form is included in the  
                                "reply-to" header of the email message you send to me.
                            </li>
                            <li className={`mt-2 ${boxText}`}>
                                <strong>Subject line:</strong> Indicates the subject line of the email message you send to me (in this case, the subject line (indicated by the "Subject" field of the contact form) you submitted through the contact form). Also indicated in the "subject" header of the email message you send to me.
                            </li>
                            <li className={`mt-2 ${boxText}`}>
                                <strong>Message body:</strong> Provides the body of the email message you send to me (in this case, the message body (indicated by the "Message" field of the contact form) you submitted through the contact form).
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            The email message you send to me is sent to my Gmail inbox in the following format:
                        </p>
                        <p className={`${boxText}`}>
                            <strong>Headers:</strong>
                        </p>
                            
                        <ul>
                            <li className={`${boxText}`}>
                                <strong>from:</strong> <strong>[The name you submitted through the contact form]</strong> <span className="breakWord">&lt;williamjohnackerman@gmail.com&gt;</span> (The email address you submitted through the contact form is used in the "from" field of the sendMail function of the transport created for sending your email message to my Gmail inbox{/* the backend API's POST request*/}, but my own email 
                                address <span className="breakWord">(williamjohnackerman@gmail.com)</span> is used in the "from" header of the email message you send to me. The email address you submitted through the contact form being replaced by my own email address <span className="breakWord">(williamjohnackerman@gmail.com)</span> is done automatically by Gmail. This is 
                                because for the "from" header, Gmail uses the authenticated account's email address for the sender's email address; in this case, my own email 
                                address <span className="breakWord">(williamjohnackerman@gmail.com)</span>).
                            </li>
                            <li className={`${boxText}`}>
                                <strong>reply-to:</strong> [The email address you submitted through the contact form]
                            </li>
                            <li className={`${boxText}`}>
                                <strong>to:</strong> <span className="breakWord">williamjohnackerman@gmail.com</span> (My email address)
                            </li>
                            <li className={`${boxText}`}>
                                <strong>date:</strong> (The date and time when the email message was sent)
                            </li>
                            <li className={`${boxText}`}>
                                <strong>subject:</strong> [The subject line of the message (the subject line you submitted through the contact form)]
                            </li>
                            <li className={`${boxText}`}>
                                <strong>mailed-by:</strong> gmail.com
                            </li>
                        </ul>

                        <p className={`mb-2 ${boxText}`}>
                            [The body of the message (the message body you submitted through the contact form)]
                        </p>
                    </section>

                    {/* 5. How Your Data is Used */}
                    <section>
                        <h2 className={`${boxText}`}>
                            5. How Your Data is Used
                        </h2>
                        <p className={`${boxText}`}>
                            When you successfully send a message using this website's contact form, your email message 
                            will be sent to my Gmail inbox, where I can keep the message stored indefinitely and view it at any time. 
                            I may reply to your email message if I have any questions and/or a response regarding your message. If I see fit, I may delete your email message. {/*I do not share your 
                            email message, your email message's information, or the information you submitted through this website's contact form with anyone, although 
                            */}{/*I may reply to your email message if I have any questions and/or a response regarding your message.*/}
                        </p>
                        <p className={`${boxText}`}>
                            I do not use your data for analytics of any kind.
                        </p>
                    </section>

                    {/* 6. About Vercel */}
                    <section>
                        <h2 className={`${boxText}`}>
                            6. About Vercel
                        </h2>
                        <p className={`${boxText}`}>
                            Vercel is used in deploying both the Vite/React frontend and the Node.js/Express.js backend of this website. As a reseller of 
                            Vercel's services, I am responsible for notifying you, the end user, that Vercel collects your IP address, 
                            location information derived from your IP address, and system configuration information.
                        </p>
                        <p className={`${boxText}`}>
                            For more information 
                            on Vercel's Privacy Policy, please visit <Link to={"https://vercel.com/legal/privacy-policy"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                                https://vercel.com/legal/privacy-policy
                            </Link>.
                        </p>
                    </section>

                    {/* 7. About Nodemailer */}
                    <section>
                        <h2 className={`${boxText}`}>
                            7. About Nodemailer
                        </h2>
                        <p className={`${boxText}`}>
                            Nodemailer is used in the Node.js/Express.js backend of this website. When you 
                            send an email message using the contact form, Nodemailer is used to compose your email message that will be sent 
                            to my Gmail inbox. The information used to compose your email message includes the name, email address, 
                            subject line, and message body that you submitted through the contact form.
                        </p>
                        <p className={`${boxText}`}>
                            A transport is created in order to send your email message. This transport uses "gmail" for its "service" attribute. As for 
                            "auth", I use my own email address <span className="breakWord">(williamjohnackerman@gmail.com)</span> for the "user" attribute, and an app password for the "pass" attribute.
                        </p>
                    </section>

                    {/* 8. About Google */}
                    <section>
                        <h2 className={`${boxText}`}>
                            8. About Google and Gmail
                        </h2>
                        <p className={`${boxText}`}>
                            Gmail is an email service provided by Google. Gmail, along with an app password and Nodemailer, are used 
                            to send your email message to my Gmail inbox should you successfully send an email message using the contact form of this website's contact page. 
                            Please visit <Link to={"https://policies.google.com/privacy?hl=en-US"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                                https://policies.google.com/privacy?hl=en-US
                            </Link> if 
                            you would like to learn more about Google's Privacy Policy.
                        </p>
                    </section>

                    {/* 9. Cookies */}
                    <section>
                        <h2 className={`${boxText}`}>
                            9. Cookies
                        </h2>
                        <p className={`${boxText}`}>
                            This website does not use or store any form of cookies.
                        </p>
                    </section>

                    {/* 10. GDPR Compliance */}
                    <section>
                        <h2 className={`${boxText}`}>
                            10. GDPR Compliance
                        </h2>
                        <p className={`${boxText}`}>
                            The General Data Protection Regulation (GDPR) is a data protection law in Europe. 

                            {/*If you are an EU citizen or resident, this section applies to you.*/}
                        </p>
                        <p className={`${boxText}`}>
                            You can find more information about the GDPR here: <Link to={"https://gdpr.eu/what-is-gdpr/"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                                https://gdpr.eu/what-is-gdpr/
                            </Link>.
                        </p>
                        <p className={`${boxText}`}>
                            Regarding data processing, when you successfully {/*submit an email message*/}make a valid submission using the contact form, I use the information you submitted (name, email address, what you 
                            provide for the email message's subject line, and what you provide for the email message's message body) to 
                            send an email message through the Node.js/Express.js backend API, Nodemailer, and Gmail to my Gmail inbox. 
                        </p>
                        <p className={`${boxText}`}>
                            To send your email message, a transport is created that uses "gmail" for its "service" attribute. For "auth", the transport uses my own email address <span className="breakWord">(williamjohnackerman@gmail.com)</span> for the "user" attribute, and an app password for the "pass" attribute. {/* Newly added */} 
                        </p>

                        <p className={`${boxText}`}>
                            The "data subjects" in this context refer to visitors of this website; as such, you are considered a "data subject". The "data controller" in this context is me (William Ackerman). 
                            Gmail is a "data processor", as it is used to send email messages to my Gmail inbox.
                        </p>

                        <p className={`${boxText}`}>
                            {/*I do not disclose any of your personal data. */}The contact form 
                            is used as a means of reliable communication should you voluntarily decide to use it. If you would like to submit an email message using the contact form, you must indicate 
                            that you agree to the terms of this Privacy Policy by marking the checkbox labeled "I agree to this website's Privacy Policy" in the contact form as checked.
                        </p>

                        <p className={`${boxText}`}>
                            {/*As data subjects, h*/}Here is a rundown of the privacy rights of {/*EU citizens and residents*/}data subjects (Source: <Link className={`${boxLink} general-link breakWord`} to="https://gdpr.eu/what-is-gdpr/" target="_blank" rel="noreferrer">
                            https://gdpr.eu/what-is-gdpr/</Link>):
                        </p>

                        <ul>
                            <li className={`${boxText}`}>
                                The right to be informed
                            </li>
                            <li className={`${boxText}`}>
                                The right of access
                            </li>
                            <li className={`${boxText}`}>
                                The right to rectification
                            </li>
                            <li className={`${boxText}`}>
                                The right to erasure
                            </li>
                            <li className={`${boxText}`}>
                                The right to restrict processing
                            </li>
                            <li className={`${boxText}`}>
                                The right to data portability
                            </li>
                            <li className={`${boxText}`}>
                                The right to object
                            </li>
                            <li className={`${boxText}`}>
                                Rights in relation to automated decision making and profiling.
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            If you sent an email message to me and would like to be able to view it, please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you would like to view. I will forward you the email message you specified within 3 business days.
                        </p>

                        <p className={`${boxText}`}>
                            If you sent an email message to me and would like me to delete the email message, such as if the email message you sent to me contained incorrect information, please email 
                            me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you would like me to delete. I will delete the email message within 3 business days.
                        </p>

                        <p className={`${boxText}`}>
                            Altcha, which is used in the contact form of this website's contact page, is GDPR compliant.
                        </p>

                        <p className={`${boxText}`}>
                            The following source was used for information on the GDPR: <Link className={`${boxLink} general-link breakWord`} to="https://gdpr.eu/what-is-gdpr/" target="_blank" rel="noreferrer">
                            https://gdpr.eu/what-is-gdpr/</Link>
                        </p>
                    </section>

                    {/* 11. CCPA and CPRA Compliance */}
                    <section>
                        <h2 className={`${boxText}`}>
                            11. CCPA and CPRA Compliance
                        </h2>
                        <p className={`${boxText}`}>
                            The California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA) are 
                            two laws pertaining to the U.S. state of California regarding guidelines about data privacy. 

                            If you are a California resident, the information in this section applies to you.
                        </p>
                        <p className={`${boxText}`}>
                            Regarding the CCPA, personal data I collect using the contact form includes the name, email address, message subject line, 
                            and message body that you submit through the contact form, as well as the content of the email message sent to my Gmail inbox. I use the 
                            name, email address, message subject line, and message body you submit through the contact form to compose an email message 
                            using the Node.js/Express.js backend API, Nodemailer, and Gmail. The email message is then sent to my Gmail inbox. {/*I do not 
                            buy, sell, or share your personal data. However, */}I may reply to any email messages you send to me through the contact form. 
                            
                            {/*If you would like me to delete 
                            an email message you sent to me, please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you sent to me that you would like deleted. I will delete the email message within 3 business days.*/}

                            {/*Regarding the CCPA, I do not buy, sell, or share your personal data. This data includes anything you may 
                            submit through the contact form (name, email address, message subject line, and message body). However, I may reply to any 
                            email messages you submit to me through the contact form.*/}
                        </p>

                        <p className={`${boxText}`}>
                            Under the CCPA, privacy rights of California consumers include:
                        </p>

                        <ul>
                            <li className={`${boxText}`}>
                                The <strong>right to know</strong> about the personal information a business collects about them and how it is used and shared;
                            </li>
                            <li className={`${boxText}`}>
                                The <strong>right to delete</strong> personal information collected from them (with some exceptions);
                            </li>
                            <li className={`${boxText}`}>
                                The <strong>right to opt-out</strong> of the sale or sharing of their personal information including via the GPC;
                            </li>
                            <li className={`${boxText}`}>
                                The <strong>right to non-discrimination</strong> for exercising their CCPA rights.
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            Additional consumer rights as of January 1, 2023 include:
                        </p>

                        <ul>
                            <li className={`${boxText}`}>
                                The <strong>right to correct</strong> inaccurate personal information that a business has about them; and
                            </li>
                            <li className={`${boxText}`}>
                                The <strong>right to limit</strong> the use and disclosure of sensitive personal information collected about them.
                            </li>
                        </ul>

                        <p className={`${boxText}`}>
                            To learn more about the California Consumer Privacy Act (CCPA), please visit <Link to={"https://oag.ca.gov/privacy/ccpa"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                                https://oag.ca.gov/privacy/ccpa
                            </Link>.
                        </p>

                        <p className={`${boxText}`}>
                            Regarding the CPRA, I only use your data if you decide to make a submission through this website's contact form 
                            and if you agree to this Privacy Policy.
                        </p>

                        <p className={`${boxText}`}>
                            When you send a message through this website's contact form, I use the name,  
                            email address, message subject line, and message body you submitted through the contact form 
                            to compose an email message to send to my Gmail inbox. From there, I can reply to the email 
                            message you sent to my Gmail inbox. I may also delete the email message you sent me if I see 
                            fit. Email messages you send to me using the contact form are stored indefinitely in my Gmail inbox. 
                            
                            {/*I also use an app password in sending the email message through Nodemailer. Newly added */}
                        </p>

                        <p className={`${boxText}`}>
                            The information you submit through the contact form (name, email address, message subject line, 
                            and message body) is used in composing an email message and sending it to my 
                            Gmail inbox through the Node.js/Express.js backend API, Nodemailer, and Gmail.
                        </p>

                        <p className={`${boxText}`}>
                            If you sent an email message to me and would like to be able to view it, 
                            please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you would 
                            like to view. I will forward you the email message you specified within 3 business days.
                        </p>
                        <p className={`${boxText}`}>
                            If you sent an email message to me and would like me to delete the email message, such as 
                            if the email message you sent to me contained incorrect information, please email 
                            me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you would like me to 
                            delete. I will delete the email message within 3 business days.
                        </p>
                        {/*<p className={`${boxText}`}>
                            I do not buy, sell, or share your personal information.
                        </p>*/}

                        <p className={`${boxText}`}>
                            To learn more about the California Privacy Rights Act (CPRA), please visit <Link to={"https://thecpra.org/"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                                https://thecpra.org/
                            </Link>.
                        </p>
                    </section>

                    {/* 12. More Information */}
                    <section className="mb-0">
                        <h2 className={`${boxText}`}>
                            12. More Information
                        </h2>
                        <p className={`${boxText}`}>
                            For more information regarding this Privacy Policy, you can email me 
                            at <Link to={"mailto:williamjohnackerman@gmail.com"} className={`${link} breakWord`}>
                                williamjohnackerman@gmail.com
                            </Link> and I will get back to you within 3 business days.
                        </p>
                        <p className={`${boxText}`}>
                            If you believe someone submitted a message through this website's contact form involving your personal information, 
                            please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} className={`${link} general-link breakWord`}>
                                williamjohnackerman@gmail.com
                            </Link>.
                        </p>

                        {/* Added */}
                        {/*<p className={`${boxText}`}>
                            If you sent an email message to me and would like to be able to view it, please email me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you would like to view. I will forward you the email message you specified within 3 business days.
                        </p>
                        <p className={`${boxText}`}>
                            If you sent an email message to me and would like me to delete the email message, such as if the email message you sent to me contained incorrect information, please email 
                            me at <Link to={"mailto:williamjohnackerman@gmail.com"} target="_blank" rel="noreferrer" className={`${boxLink} general-link breakWord`}>
                            williamjohnackerman@gmail.com</Link>, specifying which email message you would like me to delete. I will delete the email message within 3 business days.
                        </p>*/}
                    </section>

                    {/*<section>
                        <h2>
                            13. Prior Versions
                        </h2>
                        <p>
                            I have provided prior versions of this website's Privacy Policy.
                        </p>
                        <ul>
                            <li>
                                <Link to={`${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_Portfolio_Privacy_Policy_11_23_2025_7.pdf`} className="general-link" target="_blank" rel="noreferrer">November 23, 2025</Link>
                            </li>
                        </ul>
                    </section>*/}
                </div>
            </main>
            {/* End of Privacy Policy page */}

            {/* Footer */}
            <Footer />
        </>
    );
}

export default PrivacyPolicy;