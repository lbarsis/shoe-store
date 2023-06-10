# Steppers E-Commerce Website Summary
Steppers is a sophisticated, full-stack E-Commerce web application developed with a focus on illustrating robust database integration between a Rails backend and a React frontend. As an online webstore prototype, Steppers provides a comprehensive demonstration of key functionalities typical in the e-commerce domain.

In addition to showcasing the symbiotic interplay between frontend and backend technologies, Steppers places particular emphasis on the practical application of the renowned Stripe gem. This inclusion enables the webstore to leverage Stripe's powerful API, thus introducing seamless and secure online purchasing capabilities.

The overarching objective of Steppers is to provide a tangible learning resource for developers interested in e-commerce application development. The combination of intuitive user interfaces, secure payment processing, and comprehensive backend services reflects the best practices for creating commercially viable online marketplaces.

## Description
Steppers is structured around six core navigation routes: Home, Shop, About, Contact, Add Product, and Account. The Account section unveils a dropdown menu which, upon user authentication, provides access to the user's cart and a logout feature for terminating sessions.

The Home page hosts a captivating banner, embracing the store's name and a navigational button that reroutes visitors to the About page. Three distinct product cards, highlighting unique offerings of the business with brief descriptions, add charm to the Home page's lower section.

The Shop page exhibits a grid-style layout featuring all product cards. Upon hovering, users are presented with product details. The user-friendly 'Add to Cart' button enables product selection, with the convenience of quantity adjustment via '+' and '-' buttons once the product is in the cart.

Administrative capabilities are embedded within the product card. Administrators have the leverage to delete or modify product details directly from the Shop page. The Edit button reroutes to the 'Edit Product' page, pre-filled with current product data. Administrators can alter any attribute and the changes are reflected immediately across both the local and Stripe databases, ensuring data consistency.

The About page offers a brief company overview, recounting its inception and outlining its goals. The Contact page shares multiple contact methods to facilitate easy communication with Steppers, although the details are placeholders.

Admin users can spot an 'Add Product' tab within the navbar, leading to a form for adding product data. Upon submission, the new product is added to both the local and Stripe databases simultaneously.

Lastly, the Cart page presents users with their current selection of products and respective quantities. Once reviewed, clicking on 'Checkout' generates a Stripe checkout session and redirects the user to the secure external checkout page of Stripe. This ensures safe collection of essential data such as email and payment details without storing it on the local database for enhanced security.

Upon successful checkout, users receive a confirmation and are redirected back to Steppers' Home page. This flow encapsulates a full e-commerce transaction within the Steppers application.

Please make any necessary adjustments to match the exact features and capabilities of your Steppers application.

<!-- ## Installation
1. **Copy the repository:** 
```
git@github.com:lbarsis/shoe-store.git
```
2. **Open up the terminal and clone the repository into the desired directory using:**
```
git clone git@github.com:lbarsis/shoe-store.git
```
3. **Install Bundle** 
```
bundle install
```
3. **Install npm** 
```
npm install --prefix client
```
3. **Start Server and enter password** 
```
sudo service postgresql start
```
4. **Run Server** 
```
rails s
```
5. **Run application using:** 
```
npm start
``` -->

# Steppers Installation Instructions

## Step 1: Prerequisites

1. **Ruby 2.7.4**
    - Check the installed version by typing `ruby -v` in your terminal. 
    - If the correct version isn't installed, download and install from [the Ruby website](https://www.ruby-lang.org/en/downloads/).
2. **Rails 7.0.4**
    - Check the installed version by typing `rails -v` in your terminal. 
    - If the correct version isn't installed, install it with the command `gem install rails -v 7.0.4`.
3. **Node.js**
    - Check the installed version by typing `node -v` in your terminal. 
    - If the correct version isn't installed, download and install from [the Node.js website](https://nodejs.org/en/download/).
4. **PostgreSQL 1.1**
    - Check the installed version by typing `psql -V` in your terminal. 
    - If the correct version isn't installed, download and install from [the PostgreSQL website](https://www.postgresql.org/download/).

## Step 2: Cloning the repository

Clone the Steppers repository into the location of your choice using the terminal:

```bash
git clone https://github.com/your-github-username/steppers.git
```

## Step 3: Setting up the Backend

1. Navigate to the backend directory of the project: 
    ```bash
    cd steppers/backend
    ```
2. Install the required gems: 
    ```bash
    bundle install
    ```
3. Setup the database:
    - Create the database: 
        ```bash
        rails db:create
        ```
    - Run the migrations: 
        ```bash
        rails db:migrate
        ```
    - Seed the database: 
        ```bash
        rails db:seed
        ```
4. Start the Rails server: 
    ```bash
    rails s
    ```

## Step 4: Setting up the Frontend

1. In a new terminal window or tab, navigate to the frontend directory: 
    ```bash
    cd steppers/client
    ```
2. Install the required npm packages: 
    ```bash
    npm install
    ```
3. Start the React development server: 
    ```bash
    npm start
    ```

Open your browser and navigate to `http://localhost:4000` to see the Steppers application running locally. The backend server must be running concurrently with the frontend server for the application to work properly.

## Usage

Once you have the application up and running, you can navigate the website via the navigation bar at the top of the page. Here's a brief description of each page:

- **Home**: Displays a banner with the store name and a button that redirects you to the About page. You will also see three cards featuring unique products and a short description for each.

- **Shop**: Contains a grid layout of all the product cards. Hover over a product to see more information and click the 'Add to Cart' button to add items to your cart. If you are an admin, you will also see options to edit or delete a product.

- **About**: Learn more about the company, its founding, and its goals on this page.

- **Contact**: This page provides information on how to contact Steppers (note: all information here is fictitious).

- **Add Product**: If you are an admin, this tab will be visible in the navigation bar. Fill out the form with the required product data and click submit to add a new product to both the website and the Stripe database.

- **Account**: Access this dropdown menu to view your cart and the logout button.

To purchase items, add them to your cart and then navigate to the Cart page. Here you can review your items and proceed to checkout by clicking the 'Checkout' button. This will generate a Stripe checkout session and redirect you to the secure Stripe checkout page. After successful payment, you will receive confirmation and be redirected to the Steppers home page.


## Examples
![Example](./images/video1765546443.gif)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.