### Applications To Build:

---

### A registration form using HTML, CSS and JS.

##### Completion requirements:

    1. It has fields for username, first name, last name, email, password and repeated password,
    2. It has submit button and clicking on submit a pop up box should thank the user for registration.

You could read more from the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event).

_Remember_:

- _All you need to do is **copy and paste the code** in the boxes below into their respective files._

- _When following the steps below, save the work and reload the browser (http://localhost:3000) **to see the changes**._

- _To test (see [testing](#testing) at the bottom_) before submission.

_Steps to follow_ (4 steps):

- First: start the application:

  - In your terminal in the **html-css-js/level-1/** directory, run:

    - `yarn start`

- Second: find the index.html and edit the file:
  - Change the content inside the `<body> </body>` with the following:

```html
<form id="form">
  <div id="formContainer">
    <h2>Register</h2>
    <p>Please fill in this form</p>
    <hr />
    <label for="username"><b>Username: </b></label>
    <input
      type="text"
      placeholder="Enter username"
      name="username"
      id="username"
      required
    />
    <br />
    <label for="firstname"><b>First Name: </b></label>
    <input
      type="text"
      placeholder="First Name"
      name="firstname"
      id="firstname"
      required
    />
    <br />
    <label for="email"><b>Email: </b></label>
    <input
      type="text"
      placeholder="Enter Email"
      name="email"
      id="email"
      required
    />
    <br />
    <label for="passwordInput"><b>Password:</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="passwordInput"
      id="passwordInput"
      required
    />
    <br />
    <label for="passwordInput-repeat"><b>Repeat Password</b></label>
    <input
      type="password"
      placeholder="Repeat Password"
      name="passwordInput-repeat"
      id="passwordInput-repeat"
      required
    />
    <br />
    <br />
    <button type="submit" onclick="handleSubmit()" id="submitButton">
      Register
    </button>
  </div>
</form>
```

- Third: improve the visual of the form and add some CSS.
  - You could use your own CSS code or copy the CSS code below and past it inside the `<style></style>`:

```css
label {
  width: 100px;
  clear: left;
  text-align: right;
  padding-right: 10px;
}
input,
label {
  float: left;
}

button {
  width: 70px;
  clear: left;
  text-align: right;
  margin-left: 110px;
}
```

- Fourth: to give a thank you a pop-up message, add a function that handles the click event of the button.
  - Copy the JavaScript code below and past it inside the `<script></script>`

```js
function handleSubmit(event) {
  var firstname = document.getElementById("firstname").value;
  alert(" Thank you " + firstname + " for registering! ");
}
```

### Testing:

- Now, the application looks better, but still it needs to be tested:

  - _**Testing**_: on terminal inside the **html-css-js/level-1/** directory, run:

    - `yarn install`
    - `yarn test`

- Finally, send the changes to the github repository:

  - add all changes by

    `git add .`

  - commit it by

    `git commit -m "any commit message"`

  - push the changes by

    `git push`
