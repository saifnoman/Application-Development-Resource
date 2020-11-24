### Level-2
  ##### Application with React & DHIS2
  ##### Application requirements
  Build the applicaiton described in this [assignment](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/).

  ##### Steps to follow:
  - Go to the appliction directory called `level-2` and you could use:
    ```bash
    cd level-2
    ```

   - Download the [application layout](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/starting-point.zip) and extract the content to the previously created directory `level-2`
   
      - When you run command `ls` inside the directory `level-2`:

      ```bash
      ls
      ```
      the following files are found: 

        ```bash
        README.md
        cypress
        cypress-cucumber-preprocessor.config.js
        cypress.env.json
        cypress.json
        d2.config.js
        i18n
        package.json
        src
        yarn.lock
        ```

  - In a new terminal, fire up DHIS2 instance by executing the command: `dhis-portal --server=play --instance=2.34.1`, which can be accessed at http://localhost:9999
  - In another terminal of the `level-2` directory, start the application by executing the command: `yarn start` and access it at http://localhost:3000 on your browser (Chrome preferably)
  - The starting source code of the application is found in the `src` directory:
    - To make changes edit the file: `App.js`
    - To display on your application add React components using JSX. When using JSX this could be useful [JSX reference](https://ui.dhis2.nu/demo/?path=/story/alertbar--default)
    - To use `useDataQuery` to fetch data from the DHIS2 instance to your application, see the example at [DHIS2 Application Runtime](https://runtime.dhis2.nu/#/hooks/useDataQuery)
  - After creating React components, fetched and displayed data, make sure your UI behaves like the finished [assignment](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/) section.
 
 
  - Finally, you can send your local changes to your online github repository: 

  - In the same directory of Level-2, **run** ```yarn test```
  - Now, you might need ```cd ..``` to get to the root directory:
    - add all of your changes by ```git add .```, 
    - commit it by ```git commit -m "commit message"``` and 
    - push the changes by ```git push``` 

  
