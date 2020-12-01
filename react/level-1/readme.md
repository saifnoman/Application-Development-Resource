### Applications To Build:
---

  ### Calculator Application
  ##### Initializing the application by CRA ([ Create React App ](https://create-react-app.dev/)):
  ##### Application requirements:
    
       1. Should take two numeric values as inputs and perform mathematical operation,
       2. Should display results

  ##### Steps to follow:

   - Inside level-1 application directory:
   ```bash
   cd level-1
   ```

  - Setup application development environment, run the following commands respectively: 
  ```bash
  npx create-react-app app

  cd app
  ```
  Install node modules by:
  ```
  yarn install
  ```
  start the application by:
  ```
  yarn start
  ```


   - If you can access a page at http://localhost:3000, it means the development environment is ready.
   
   - To complete the requirements:
      - Edit the App.js file inside src directory
        -   Import React library (*copy & paste the following line into the file App.js*):
            ```jsx
            import React, {useState} from 'react';
            ```
        -   Initialize state variables and define the necessary functions:
            (*copy and paste the following inside the function App(){....}*): 
            - ```js 
              // defining state variables
              const [values,setValues] = useState({
              firstNumber:0,
              secondNumber:0,
              mathOperator:'+',
               });
              const [result, setResult] = useState(0);
              ```
            - ```js 
              // define input handling function
              const inputHandler = (e) =>{
              let name= e.target.name;
              let value= e.target.value;
              values[name]=value;
              setValues(values);
              };
              ```
            - ```js 
              // defining math operating function
              const handleMathOperation = () =>{
              let mathResult = 0;
              switch(values.mathOperator){
                case '+':
                  mathResult = Number(values.firstNumber) + Number(values.secondNumber);
                  setResult(mathResult);
                  break;
                case '-':
                  mathResult = Number(values.firstNumber) - Number(values.secondNumber);
                  setResult(mathResult);
                  break;
                case '*':
                  mathResult = Number(values.firstNumber) * Number(values.secondNumber);
                  setResult(mathResult);
                  break;
                case '/':
                  mathResult = Number(values.firstNumber) / Number(values.secondNumber);
                  setResult(mathResult);
                  break;
                case '%':
                  mathResult = Number(values.firstNumber) % Number(values.secondNumber);
                  setResult(mathResult);
                  break;
              }
              }
              ```

        -   Remove the code inside the return():

            - Then, insert this code in the return() :
                ```html
              return(
              <div className="App">
              <br/>
              <div>
              <label htmlFor='firstNumber'> First Number: </label>
              <input type='number' name='firstNumber'  onChange={inputHandler} placeholder="1"/>
              </div><br/>

              <div>
              <label htmlFor='mathOperator'> </label>
              <input type='text' name='mathOperator' onChange={inputHandler} placeholder="+,-,/,*,%" />
              </div><br/>

              <div>
              <label htmlFor='secondNumber'> Second Number: </label>
              <input type='number' name='secondNumber'  onChange={inputHandler} placeholder="1" />
              </div>
              <div><br/>
          
              <button type='text' onClick={handleMathOperation} name='btnMathOperator'>=</button>
              </div><br/>
              <div id='result'> Result: {result} </div>
              </div>
              );

                ```
      - Finally, you can send your local changes to your online github repository 

        - Testing: outside the **react/level-1/app** directory, go to the **react/level-1**  directory, then: 
          - ```yarn install```

          - ```yarn test``` 

        - Git operations:
            - add all changes by 

              ```git add .```
            - commit it by 

              ```git commit -m "commit message"```
            - push the changes by 
            
              ```git push``` 

      