# Program 17 – Shopping Cart Using useReducer

## Aim

To develop a React Shopping Cart application using the `useReducer` Hook.

## Problem Statement

Create a React application that displays a list of products and provides shopping cart functionality using the `useReducer` Hook.

The application should allow the user to:

1. View available products.
2. Add products to the shopping cart.
3. Increase the quantity of a product.
4. Decrease the quantity of a product.
5. Remove a product from the cart.
6. Display the total number of items in the cart.
7. Display the total price of the cart.

## Learning Objectives

After completing this practical, the student should be able to:

* Understand the purpose of `useReducer`.
* Create a reducer function.
* Define an initial state.
* Dispatch actions from React components.
* Update state based on different action types.
* Build a shopping-cart application using reducer-based state management.

## Required React Concepts

* Functional Components
* `useReducer`
* State management
* Props
* Event handling
* Array methods such as `map`, `find`, `filter`, and `reduce`

## Required Actions

The reducer should support the following actions:

### ADD

Adds a product to the cart.

If the product already exists in the cart, its quantity should be increased.

### INCREASE

Increases the quantity of the selected product by 1.

### DECREASE

Decreases the quantity of the selected product by 1.

If the quantity reaches 0, the product may be removed from the cart.

### REMOVE

Removes the selected product from the cart.

## Required Project Structure

```text
src/
├── App.js
├── index.js
├── index.css
├── reducer.js
└── components/
    ├── ProductList.js
    └── Cart.js
```

## Instructions

1. Clone or create the repository provided by the faculty.
2. Open the project in VS Code.
3. Install the dependencies:

```bash
npm install
```

4. Start the React application:

```bash
npm start
```

5. Complete all TODO sections.
6. Do not remove the required component files.
7. Implement the cart state using `useReducer`.
8. Use `dispatch()` to perform cart operations.
9. Test the application using:

```bash
npm test
```

10. Create a production build:

```bash
npm run build
```

## Expected Application

The application should contain:

### Products Section

Display:

* Laptop – ₹50000
* Headphones – ₹2000
* Keyboard – ₹1500

Each product should have an **Add to Cart** button.

### Shopping Cart Section

The cart should display:

* Product name
* Product price
* Quantity
* `+` button
* `-` button
* Remove button
* Total number of items
* Total cart price

## GitHub Submission

Students must:

1. Complete the practical in the assigned GitHub repository.
2. Commit the changes.
3. Push the changes to GitHub.
4. Ensure GitHub Actions completes successfully.
5. Ensure the GitHub Pages website is accessible.
6. Submit the GitHub repository URL and deployed website URL as instructed by the faculty.

## GitHub Actions

The repository automatically performs:

* Dependency installation
* React test execution
* Production build
* GitHub Pages deployment

A successful workflow should show a green check mark.

## Deployment

After a successful GitHub Pages deployment, the website will be available at:

```text
https://<username>.github.io/<repository-name>/
```

Replace `<username>` and `<repository-name>` with the student's GitHub username and repository name.

## Evaluation – 10 Marks

| Criteria                                         |  Marks |
| ------------------------------------------------ | -----: |
| `useReducer` implementation                      |      2 |
| Reducer actions: ADD, INCREASE, DECREASE, REMOVE |      2 |
| Product list and Add to Cart functionality       |      2 |
| Quantity and Remove operations                   |      1 |
| Total item count and total price                 |      1 |
| Component structure and React implementation     |      1 |
| GitHub Actions, testing and deployment           |      1 |
| **Total**                                        | **10** |

## Student Checklist

Before submission, verify:

* [ ] `useReducer` is used.
* [ ] Initial cart state is created.
* [ ] `ADD` action works.
* [ ] `INCREASE` action works.
* [ ] `DECREASE` action works.
* [ ] `REMOVE` action works.
* [ ] Product list is displayed.
* [ ] Cart contents are displayed.
* [ ] Total item count is displayed.
* [ ] Total price is displayed.
* [ ] `npm test` passes.
* [ ] `npm run build` succeeds.
* [ ] GitHub Actions succeeds.
* [ ] GitHub Pages deployment works.
