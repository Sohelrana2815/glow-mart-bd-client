
# Glow Mart BD

Glow Mart BD is an e-commerce platform designed to help a wholesale cosmetic business transition online. This project allows users to browse products, filter by category, make secure payments, and provides an intuitive admin panel for managing products, sales, and inventory.




## Quick Links
• [Live Website](https://glow-mart-bd.web.app/) 

• [Client Repository](https://github.com/Sohelrana2815/glow-mart-bd-client) 

• [Server Repository](https://github.com/Sohelrana2815/glow-mart-bd-server) 



## Project Overview
Glow Mart BD is built using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a seamless and responsive online shopping experience. Key features include a smooth product browsing interface, category-based filtering, user authentication, and a robust admin panel for business management.




## Key Features
• User Authentication: Secure login and registration.

• Product Filtering: Browse by categories.

• Payment Integration: Test payment via Stripe.

• Admin Dashboard: Manage inventory, view sales analytics, and track trends.

• User Dashboard: Order history and profile management.

• Map Integration: Shows shop location on an interactive map.


## Tech Stack

• Frontend: React.js, Tailwind CSS, DaisyUI, Firebase

• Backend: Node.js, Express.js, MongoDB, Vercel

• Payment Integration: Stripe API

• Other: Recharts for analytics, SweetAlert2, Swiper for product carousels, and JWT for authentication      
## Getting Started
Follow these instructions to set up the project locally for development or testing.

Prerequisites


• Node.js (v14+)

• MongoDB (local instance or MongoDB Atlas)

• Firebase for authentication

• Stripe Account for payment integration


* Client Setup

1 Clone the client repository and install dependencies:


git clone: https://github.com/Sohelrana2815/glow-mart-bd-client

cd glow-mart-bd-client

npm install

2 Create a .env file for Firebase configuration:


* REACT_APP_FIREBASE_API_KEY=your-firebase-api-key

* REACT_APP_AUTH_DOMAIN=your-auth-domain

3 Start the client

npm run dev


* Server Setup

1 Clone the server repository and install dependencies:


git clone https://github.com/Sohelrana2815/glow-mart-bd-server

cd glow-mart-bd-server

npm install

2  Configure environment variables in a .env file:


* DB_USER=your-mongodb-username
* DB_PASS=your-mongodb-password
* STRIPE_SECRET_KEY=your-stripe-secret-key

3 Start the server:


nodemon index.js


