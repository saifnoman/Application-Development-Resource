### Level-2

##### Application with React & DHIS2

##### Application requirements

This level is based on the application described in this [assignment](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/).

##### Steps to follow:

- Go to the appliction directory called `level-2` and you could use:

  ```bash
  cd level-2
  ```

- In a new terminal, fire up DHIS2 instance by executing the command: `dhis-portal --server=play --instance=dev`, which can be accessed at http://localhost:9999
- In another terminal of the `level-2` directory:
  - Install the node modules: `yarn install`
  - Start the application by executing the command: `yarn start`,
    - access it at http://localhost:3000 on your browser (Chrome preferably)
- The starting source code of the application is found in the `src` directory:
  - To build the application, start editing the file: `App.js`:
    - Remember: make it look like [design](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/) at the bottom of the assignment page
  - You could add React components using [JSX](https://ui.dhis2.nu/demo/?path=/story/alertbar--default)
  - You might use `useDataQuery` to fetch data from the DHIS2 instance to your application, see the example at [DHIS2 Application Runtime](https://runtime.dhis2.nu/#/hooks/useDataQuery)
- After creating React components, fetched and displayed data, make sure your UI behaves like the finished [assignment](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/) section.

- Finally, you can send your local changes to your online github repository:

- In the same directory of Level-2, **run** `yarn test`
- Now, you might need `cd ..` to get to the root directory:
  - add all of your changes by `git add .`,
  - commit it by `git commit -m "commit message"` and
  - push the changes by `git push`
