# JsPlaywright_FirstTest

Task:

1. Create a new repository in GitHub
2. Create an empty Readme.md file
3. Create 2 tests for https://www.saucedemo.com/ (search for tests below).
4. Tests and written code should be committed to a new branch.
5. Add .gitignore file
6. Add a description in the Readme file, explaining how to use the repository and the written code

Test 1 - Perform Login:
1. Perform login using "standard_user"
2. On the opened page verify: 
3. Products (1) title is displayed
4. Shopping Cart icon (2) is displayed
5. More than 1 product (3) is displayed

Test 2 - Add product to the cart:
1. Perform login using "standard_user"
2. Add the first product to the cart by clicking Add to Cart button
3. Verify Shopping Cart icon contains the number of products added (equal 1)
4. Open the Shopping Cart and verify the added product is displayed (the data should be taken from the Products page and used here to as an expected result)
5. Remove the product by clicking Remove
6. Verify no products are available in the Shopping Cart


HJow to use:
1. Clone the repo
2. Run all tests by using Playwright
