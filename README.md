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
    cd steppers/frontend
    ```
2. Install the required npm packages: 
    ```bash
    npm install
    ```
3. Start the React development server: 
    ```bash
    npm start
    ```

Open your browser and navigate to `http://localhost:3000` to see the Steppers application running locally. The backend server must be running concurrently with the frontend server for the application to work properly.

## Usage
1. **Navigate to the hompage**
Here will be a brief description on how the application can be used. It is recommended this page is reviewed prior to starting. The descriptions of each page here will give a summary of how they can be used together.

2. **Navigate to the Add Item page**
Going directly to the Inventory page will only show you a header because no items have been added at the start of the application. The Add Item page allows users to add items and get their inventory started. This page consists of a single form with eight input fields: Category, Name, Vendor, Description, Status, Flag Amount, On Hand, Unit of Measure.

### Category
The Category input is the set or group that an item can belong to. For example, if you were inventorying cars and wanted to group them by manufacturer, you could select Ford for all ford models or Toyota for all Toyota models. When the application is initially opened there will not be any categories to choose from. This is because the user is responsible for creating their own categories based on specific needs. 

To add a category to the list, simply select 'Other' from the drop down menu. A new field will appear that will allow an input to be typed. Type any string into this field and continue to the 'Name' field. *As of right now, there is no way to delete a category once it has been added except through modifying the db.json file*

After all the fields are input and the item is submitted, this category will be available from the drop down menu.

### Name
The name of the item.

### Vendor
Vendor is the location or manufacturer that the item is purchased from.

### Description
Description is used to explain what the item is and how it is used in specific applications.

### Status
Status is used to denote the current state the item is in. Example: if an item is fully stocked, the user could write 'In Stock' in the field. If the item is low or out, 'Out of Stock' could be input, or 'On Order' if the item has already been ordered. 

### Flag Amount
The Flag Amount is the point at which the application should notify you that the quantity of stock is at it's lowest point. If you always need to have 5 of an specific item and the storage drops to 5 or lower, then the item will be flagged for reorder.

### On Hand
The On Hand amount is the current stock available for a specific item.

### UoM (Unit of Measure)
Unit of measure is the way an item is counted. String can be counted in linear feet or 'LF', pens will most likely be counted in boxes or 'BOX' and larger items could potentially be listed as each or 'EA'.

## Examples
![Example](./images/video1765546443.gif)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.