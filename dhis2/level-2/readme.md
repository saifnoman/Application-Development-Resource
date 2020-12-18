### Applications To Build:

---

##### An application that displays lists and details

##### Completion requirements:

This level is based on the application described in this [assignment](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/) and you may read the requirements there.

_Remember_:

- _All you need to do is follow the steps and make required changes in each step._

- _When following the steps below, save the work and you may reload the browser (http://localhost:3000) **to see the changes**._

- _To test (see [testing](#testing) at the bottom_) before submission.

_Steps to follow_ (5steps):

- First: go to the application directory called `level-2` and you could use:

  ```bash
  cd level-2
  ```

- Second: in a new terminal, fire up DHIS2 instance by executing the command: `dhis-portal --server=play --instance=dev`, which can be accessed at http://localhost:9999
- Third: in another terminal of the `level-2` directory:

  - Install the node modules:

  `yarn install`

  - Start the application by executing the command:

  `yarn start`

  - access it at http://localhost:3000 on your browser (Chrome preferably)

- Fourth: the starting source code of the application is found in the `src` directory:

  - To build the application, start editing the file: `App.js`:

  So, follow the steps below (copy & paste the code):

  - To start, you might need ReactJS library, **so add the following line on the top**:

  ```jsx
  import React, { useState } from "react";
  ```

  - You might use `useDataQuery` to fetch data from the DHIS2 instance to the application, see the example at [DHIS2 Application Runtime](https://runtime.dhis2.nu/#/hooks/useDataQuery), **so add the following code on the top**:

  ```jsx
  import { useDataQuery } from "@dhis2/app-runtime";
  ```

  - The application need to make it look like [design](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/), so **so add the following code on the top**:

  ```jsx
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableCellHead,
    TableRow,
    TableRowHead,
  } from "@dhis2/ui-core";
  ```

  - The application would need React components, so **so add the following component outside** the MyApp component.

  ```jsx
  // Query
  const query = (type) => ({
    programs: {
      resource: type,
      params: {
        fields: ["id", "name", "created"],
        paging: false,
      },
    },
  });

  const Details = ({ details }) => {
    return (
      <div>
        <h1>Details</h1>
        {details.id !== "" && (
          <Table dataTest="dhis2-uicore-table">
            <TableHead dataTest="dhis2-uicore-tablehead">
              <TableRowHead dataTest="dhis2-uicore-tablerowhead">
                <TableCellHead dataTest="dhis2-uicore-tablecellhead">
                  Key
                </TableCellHead>
                <TableCellHead dataTest="dhis2-uicore-tablecellhead">
                  Value
                </TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody dataTest="dhis2-uicore-tablebody">
              <TableRow dataTest="dhis2-uicore-tablerow">
                <TableCell dataTest="dhis2-uicore-tablecell">ID</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell">
                  {details.id}
                </TableCell>
              </TableRow>
              <TableRow dataTest="dhis2-uicore-tablerow">
                <TableCell dataTest="dhis2-uicore-tablecell">name</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell">
                  {details.name}
                </TableCell>
              </TableRow>
              <TableRow dataTest="dhis2-uicore-tablerow">
                <TableCell dataTest="dhis2-uicore-tablecell">Created</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell">
                  {details.created}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </div>
    );
  };

  const List = ({ programs }) => {
    const list =
      programs.programs !== undefined ? programs.programs : programs.dataSets;
    const [details, updateDetails] = useState({
      id: "",
      name: "",
      created: "",
    });
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <h1>List</h1>
            <pre>
              {list.map((el) => (
                <div key={el.id}>
                  <MenuItem
                    label={i18n.t(el.name)}
                    dataTest="menu-programs"
                    onClick={() => {
                      updateDetails({ ...el });
                    }}
                  />
                </div>
              ))}
            </pre>
          </div>
          <Details details={details} />
        </div>
      </div>
    );
  };
  ```

- Fifth: after having the above React components, now we change the content of the MyApp component as:

  ```jsx
  const queryProgramResult = useDataQuery(query("programs"));
  const queryDatasetResult = useDataQuery(query("dataSets"));
  const [queryResult, updateQueryResult] = useState(queryProgramResult);
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("Menu")} />
        <Menu>
          <MenuItem
            label={i18n.t("Programs")}
            dataTest="menu-list"
            onClick={() => {
              updateQueryResult(queryProgramResult);
            }}
          />
          <MenuItem
            label={i18n.t("Data sets")}
            dataTest="menu-dataSets"
            onClick={() => {
              updateQueryResult(queryDatasetResult);
            }}
          />
        </Menu>
      </nav>
      <div></div>
      <main className={styles.main}>
        {queryResult.loading && <span> ... </span>}
        {queryResult.error && (
          <span>{`ERROR: ${queryResult.error.message}`}</span>
        )}
        {queryResult.data && <List {...queryResult.data} />}
      </main>
    </div>
  );
  ```

At this point the application UI would behave like the finished [assignment](https://www.fiftythreetwenty.com/learn/mandatory-exercises/individual/two/) section.

### Testing

- Finally, remember to **run** `yarn test` at the same directory of Level-2,
- Then
  - add all of your changes by `git add .`,
  - commit it by `git commit -m "commit message"` and
  - push the changes by `git push`
