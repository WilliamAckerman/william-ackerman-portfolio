# About this Project

Privacy Policy effective date: November 29, 2025.

Hello, thank you for your interest in my portfolio website! There's a fair amount of features and technologies to cover.

## Technology Stack

This website uses a Vite/React frontend deployed using Vercel. Also, TailwindCSS and Material UI are used to design responsive, user-friendly interfaces. TanStack query is used to fetch data from the website's backend.

On the other hand, the backend is a RESTful API created using Node.js and Express.js. Data is fetched from a MongoDB database. Just like the frontend, the backend is deployed using Vercel.

## Pages

Here is an overview of the different pages of my portfolio website.

### Home

This page provides an overview of what to expect regarding my website. There is a hero section designed to catch users' attention.

Featured projects are also displayed. The user can click on one of the boxes to display a modal that provides extra details regarding a project, including its title, month/year started, month/year ended (if ended), description, details, link to the project's Github repository, and technologies used. There is also a link to the projects page.

The "Skills" section of the homepage displays five of my "featured" skills, or skills that I am notably proficient in. A link to the skills page is also provided.

The "About Me", "Contact", and "View Resume/CV" sections of the homepage are in similar formats; a short blurb and a link to their respective pages.

Finally, the end of the page features a section stating the effective date of this website's Privacy Policy.

### Projects

The "Projects" page displays all of my projects. The user can click on one of the boxes to display a modal that provides extra details regarding a project, including its title, month/year started, month/year ended (if ended), description, details, link to the project's Github repository, and technologies used.

Data on projects and project skills is stored in a MongoDB database and fetched from the Node.js/Express.js backend API through TanStack Query.

### Skills

The "Skills" page has skills grouped into five categories: "Frontend", "Backend", "Database", "Tools", and "Soft Skills". The page features six tabs. 

The "All Skills" tab displays all skills, starting with frontend skills, then backend skills, then database skills, then tool-related skills, and finally, soft skills. 

There is also a tab for each category of skills; clicking one of these tabs only displays skills of a specified type.

Data on skills is stored in a MongoDB database and is retrieved from the Node.js/Express.js backend API through TanStack Query.

### About

The About page provides some information on me, including some of my past experiences.

This page also features a section detailing my website, including any technologies used.

### Contact

The Contact page provides links to my email address, phone number, Github profile, and LinkedIn profile.

There is also a contact form that users can fill out to send an email message to me. In order to make a submission using the form, the user must provide:
- Their name (Indicated by "Name")
- Their email address (Indicated by "Email")
- The subject line of their message (Indicated by "Subject")
- The body of their message (Indicated by "Message")

The user must also check a checkbox labeled "I agree to this website's Privacy Policy". In order to make a submission to the contact form, the user must agree to this website's Privacy Policy. Above the checkbox, a link to this website's Privacy Policy is also provided.

The user can send a message by clicking the "SEND EMAIL" button on the form. React-hook-form and additional JavaScript validation are used to validate the information the user entered into the contact form. The message is only sent if validation passes for both React-hook-form and JavaScript validation.

A request to the Node.js/Express.js backend API is made if the user's input passes input validation. Nodemailer is used to compose an email message based on the information the user entered. The email message is sent to my Gmail inbox through Nodemailer and Gmail.

### View Resume/CV

This page has three main features:

1. The user can view a resume on the page itself.

2. The user can view a 1-page of my resume by clicking on a link to the PDF.

3. The user can view my CV by clicking on a link to the CV.

### Privacy Policy

This page provides my website's Privacy Policy. By using my website, you agree to the terms of my website's Privacy Policy.

## Other Components

### Navbar

The navbar provides an easy way for the user to navigate my website. On larger screen sizes, the navbar displays links to pages; the user can click a link to visit that link's respective page. On smaller screen sizes, a hamburger menu icon is shown in the navbar instead; clicking on it reveals a side menu that contains any links that were present in the navbar.

The navbar also has a display mode toggle, indicated by a sun icon and a moon icon. When the sun icon is clicked, the display mode switches to light mode (enabled by default). Meanwhile, clicking the moon icon will switch the display mode to dark mode.

### Footer

The footer provides links to my email address, phone numbers, Github profile, and LinkedIn profile. A link to my website's Privacy Policy is also included.

# Contact Me

I'm more than happy to get in touch with you! You can reach me through the following methods:
- Email: williamjohnackerman@gmail.com
- Phone: (+1) 516-252-8285
- Github: https://github.com/WilliamAckerman
- LinkedIn: https://www.linkedin.com/in/william-ackerman-6a4005290/