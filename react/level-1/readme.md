### Applications To Build:

---

### Calculator Application using html and jsx (can see [jsx docs](https://reactjs.org/docs/introducing-jsx.html))

##### Initializing the application by CRA ([ Create React App ](https://create-react-app.dev/)):

##### Application requirements:

       1. It has two numeric values as inputs and perform mathematical operation,
       2. It displays the result

_Remember_:

- _All you need to do is **copy and paste the code** in the boxes below into their respective files._

- _When following the steps below, save the work and access the application on the browser (http://localhost:3000) **to see the changes**._

- _To test (see [testing](#testing) at the bottom_) before submission.

_Steps to follow_ (4 steps):

- First: inside level-1 application directory:

```bash
cd level-1
```

- Second: setup application development environment, run the following commands respectively:

```bash
npx create-react-app app

cd app
```

start the application by:

```
yarn start
```

- If you can access a page at http://localhost:3000, it means the development environment is ready.

- Third: edit the App.js file inside the src directory

  - Import React library (_copy & paste the following line into the file App.js_):
    ```jsx
    import React, { useState } from "react";
    ```
  - Initialize state variables and define the necessary functions:
    (_copy and paste the following inside the function App(){....}_):

    - ```js
      // defining state variables
      const [values, setValues] = useState({
        firstNumber: 0,
        secondNumber: 0,
        mathOperator: "+",
      });
      const [result, setResult] = useState(0);
      ```
    - ```js
      // define input handling function
      const inputHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        values[name] = value;
        setValues(values);
      };
      ```
    - ```js
      // defining math operating function
      const handleMathOperation = () => {
        let mathResult = 0;
        switch (values.mathOperator) {
          case "+":
            mathResult =
              Number(values.firstNumber) + Number(values.secondNumber);
            setResult(mathResult);
            break;
          case "-":
            mathResult =
              Number(values.firstNumber) - Number(values.secondNumber);
            setResult(mathResult);
            break;
          case "*":
            mathResult =
              Number(values.firstNumber) * Number(values.secondNumber);
            setResult(mathResult);
            break;
          case "/":
            mathResult =
              Number(values.firstNumber) / Number(values.secondNumber);
            setResult(mathResult);
            break;
          case "%":
            mathResult =
              Number(values.firstNumber) % Number(values.secondNumber);
            setResult(mathResult);
            break;
        }
      };
      ```

  - Fourth: remove the code inside the return():

    - then, insert this code in the return() :

      ```html
      return(
      <div className="App">
        <br />
        <div>
          <label htmlFor="firstNumber"> First Number: </label>
          <input
            type="number"
            name="firstNumber"
            onChange={inputHandler}
            placeholder="1"
          />
        </div>
        <br />

        <div>
          <label htmlFor="mathOperator"> </label>
          <input
            type="text"
            name="mathOperator"
            onChange={inputHandler}
            placeholder="+,-,/,*,%"
          />
        </div>
        <br />

        <div>
          <label htmlFor="secondNumber"> Second Number: </label>
          <input
            type="number"
            name="secondNumber"
            onChange={inputHandler}
            placeholder="1"
          />
        </div>
        <div>
          <br />

          <button
            type="text"
            onClick={handleMathOperation}
            name="btnMathOperator"
          >
            =
          </button>
        </div>
        <br />
        <div id="result">Result: {result}</div>
      </div>
      );
      ```

    - The style of the inputs and button are not aligned (not a good UI), and you may add some css.

    - Finally, after testing you can send your local changes to your online github repository

  ### Testing:

  - Testing: outside the **react/level-1/app** directory, go to the **react/level-1** directory, then:

    - `yarn install`

    - `yarn test`

  - Git operations:

    - add all changes by

      `git add .`

    - commit it by

      `git commit -m "commit message"`

    - push the changes by

      `git push`
