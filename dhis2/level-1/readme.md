### Applications To Build:

---

### Initializing a local DHIS2 Application:

##### Completion requirements:

       1. It has a DHIS2 header
       2. It displays Hello World!

_Remember_:

- _All you need to do is follow the steps and make required changes in each step._

- _When following the steps below, save the work and you may reload the browser (http://localhost:3000) **to see the changes**._

- _To test (see [testing](#testing) at the bottom_) before submission.

_Steps to follow_ (4 steps):

- First: go to the level-1 application environment:

```bash
cd level-1
```

- Second: setup a dhis2 appliction development environment, run the following commands respectively:
  `d2 app scripts init .`
  If you get an error, you might need to install d2 (read about [d2](https://github.com/dhis2/d2)) by running:
  `yarn add d2`
- After setting up the application development environment, start to install node_modules by:

  ```
  yarn install
  ```

  then you might start the appplication by:

  ```
  yarn start
  ```

- Third: you need also a running DHIS2 server.
  To start a DHIS2 server instance, run the following commands (in a new terminal window):

  ```
  dhis-portal --server=play --instance=dev
  ```

  If you get an error or dhis-portal is not installed, run the following command and try to run the above command again:

  ```
  yarn global add dhis-portal
  ```

  For more info about the DHIS2 server instance: to start a DHIS2 server instance and login, please check [ref](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/dhis2-instance/)

- At this stage, you can access the application at http://localhost:3000, then proceed to login with
  server _http://localhost:9999_, username _admin_, password _district_
- If logged-in, it means requirement #1 is completed 🎉:
- To complete requirement #2, change the existing application to display the following image.
  ![Hello_Wolrd!](./assets/hello_world.png)

- Fourth: display a 'Hello World!' on your application, thus requirement #2 is completed 🎉

- Finally, after testing you can send your local changes to your online github repository:

### Testing

- In the same directory of Level-1, **run** `yarn test`
- Now, you might need `cd ..` to get to the root directory:
  - add all of your changes by `git add .`,
  - commit it by `git commit -m "commit message"` and
  - push the changes by `git push`
