# Flying Circus

## Story

You work for an English school named Flying Circus. Your boss came up with the
wonderful idea of having an online English test for the customers of the company
to help them practice their vocabulary knowledge. It is important to keep the
application secure (protected by a password), but we don't want to store anything
about our customers, just provide them the opportunity to practice and give feedback.

## What are you going to learn?

- web routing and redirects
- authentication
- sessions
- hashed passwords

## Tasks

1. Create a webform through which the user can log into the applicaton.
    - Opening the `/login` page of the application in a web browser shows a web form with an email and a password input field and a submit button.
    - Entering a correct email-password pair that is built in the program and clicking the submit button redirects to the index (`/`) page.
    - Entering an invalid email-password pair and clicking the submit button shows an `Invalid login attempt` error message.
    - Passwords are stored in a hashed form with salt, using some modern key stretching algorithms such as bcrypt, PBKDF2 or scrypt.

2. Create an index page with some welcome text, an indication of whether the user is logged in, a link to log out, and a link to the test page.
    - Opening the index (`/`) page of the application in a web browser shows a web page with some welcome text.
    - If the user is not logged in, opening the index (`/`) page of the application in a web browser shows a web page with a link to the `/login` page.
    - If the user is logged in, opening the index (`/`) page of the application in a web browser shows a web page showing the email address of the logged-in user, a link to the `/logout` route and a link to the `/test` page.
    - If the user is logged in and the index (`/`) page of the application is refreshed, the user stays logged in.

3. Create a route through which the user can log out from the application.
    - Opening the `/logout` route of the application in a web browser logs the user out and redirects the user to the index (`/`) page.

4. Create a test page which shows one question and the corresponding answers at a time. The user can answer all the questions. After answering them, the user is redirected to the results.
    - If the user is logged in, opening the `/test` page of the application in a web browser shows a web page showing one question, the corresponding answers as radio buttons, and a submit button.
    - If the user is not logged in, opening the `/test` page of the application in a web browser redirects the user to the index (`/`) page.
    - Clicking the submit button loads the next question or, if there are no more questions, redirects the user to the `/result` page.
    - Refreshing the `/test` page keeps the actual answer shown (the browser does not ask about resending POST data).

5. Create a result page where the number of correctly answered questions is displayed.
    - If the user is logged in, opening the `/result` page of the application in a web browser shows a web page displaying the number of correctly answered questions.
    - If the user is not logged in, opening the `/result` page of the application in a web browser redirects the user to the index (`/`) page.

## General requirements

- The application is built with Express.js framework and Passport.js middleware.
- User can register and be logged as an Admin or General User. Add a page visible only for Admins.

## Hints

- Send data in JSON with the `response.json(data)` method when sending data to the client side.
- Use a JS middleware, such as `Passport.js`, for authentication.


## Background materials

- <i class="far fa-exclamation"></i> [Sessions](project/curriculum/materials/pages/web/authentication-sessions.md)
- <i class="far fa-book-open"></i> [Cookies](project/curriculum/materials/pages/web/authentication-cookies.md)
- <i class="far fa-exclamation"></i> [Salted password hashing](project/curriculum/materials/pages/web-security/salted-password-hashing.md)
- <i class="far fa-exclamation"></i> [Passport.js documentation](http://www.passportjs.org/)
- <i class="far fa-book-open"></i> [HTTP is stateless](project/curriculum/materials/pages/web/authentication-http-stateless.md)
