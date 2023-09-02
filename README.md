# Streetmode
![Screenshot 2023-08-14 182753](https://github.com/laxmanPal/StreetMode/assets/105804213/2276aa15-2246-4b6c-8de4-aed59e664e1d)

## Live Site

https://streetmode.onrender.com/


#### For Admin Panel
```bash
email : admin@gmail.com
password : 123456
```


## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Stripe Payment](#stripe-payment)
- [Technologies Used](#technologies-used)

## Features

- User authentication and registration
- Product browsing
- Shopping cart functionality
- Wishlist functionality
- Secure payment processing using Stripe
- Admin panel for managing products and orders
- Responsive design for mobile and desktop users

## Prerequisites
- Node.js: [https://nodejs.org/](https://nodejs.org/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- Stripe Account: : [https://stripe.com/](https://stripe.com/)

# Installation

#### Make sure you follow step-by-step instructions for getting the project up and running locally.

    
   1. Clone or Download the repository

```bash
  git clone https://github.com/laxmanPal/StreetMode.git
  cd Streetmode
```
   2. Install Dependencies

```bash
  npm install
```

3. Set your environment variables
```bash
MONGO_URI
SESSION_SECRET
STRIPE_PK
WEB_URL
```
4. Seed Database
    <p>At root you will find seed.js file it contains some products to seed your MongoDB</p>

  ```bash
  node seed.js
  ```

5. Start the Application
```bash
npm run dev
```
## Stripe Payment

For stripe payment use any testing debit card number from
https://stripe.com/docs/testing

## Technologies Used

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Express.js: [https://expressjs.com/](https://expressjs.com/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- EJS: [https://ejs.co/](https://ejs.co/)
- Stripe: [https://stripe.com/](https://stripe.com/)

