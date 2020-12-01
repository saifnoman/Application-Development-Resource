## Preparing the environment:

- Fork this repository:
  - First, you might need to join in [github](https://github.com/join),
  - Second, proceed to forking this repository by clicking the fork button in the upper right hand corner of this page.
  - Third, head over to [tokens](https://github.com/settings/tokens), generate a new token with **gist scope**
    - After that, _COPY_ the token, e.g a token can look like _e5565bedd8ff5cb53a367d9b2dac4602df4b8242_. After copying the token, head over to Setting of your repository, then click on Secrets.
    - In Secrets add a variable called _AUTH_ and paste the token (you can creat new, if you forget to copy it).
- Working on a level:

  - Before starting each level, head over to [gists](https://gist.github.com) and create a gist file for that level. E.g. when working on React Level-1, create a **react_level1.json** for the _React Level-1_ level with a content of {}.
  - After creating the gist file for a given level, do the following **important three steps**.

    E.g. for the **react_level1.json**:

    - First, find and copy the id of the created gist file:

      - Open the gist in a browser (you can find the created gist file in [gists](https://gist.github.com)),
      - then click on the button named _raw_ (found on the right side of the file),
      - then in your _browser url_ _COPY_ the id (everything after your github **username/** and before the **/raw**).

        In this sample url of a gist react_level1.json, the id is **67879aa1f153c6b783303f177fdbaf73** from the url *https://gist.githubusercontent.com/yonatanhf/67879aa1f153c6b783303f177fdbaf73/raw/920af8d64ec652ddabc3ff8feb6d0354a0a71173/react_level1.json*.

    - Second, head over to secrets of your repository and create a new repository secret to hold the id of the gist file.
      - E.g. you can call the secret _REACT_LEVEL1_ and give it the id (**67879aa1f153c6b783303f177fdbaf73**) as its value.
    - Third and final, do a little editing **in this page** to help display the badge of the level.
      - Just under the status part below where the badges are displayed, use the same copied id and paste it in the url of the badge level-1 in the **pastecopiedidof-react-level-1** part of the url.
      - Replace the **your-username** part of the url by your github username.

  - Remember to do the same three steps for every level you are working on. E.g.: if started React level-2, then create a [gist](https://gist.github.com) file called **react_level2.json**, then define a secret called _REACT_LEVEL2_. The conent of the secret is id of the react_level-2.json (found in the url). At last, paste the same id in to the **pastecopiedidof-reactlevel-2** at the level-2 badge below.

- You might need [git](https://git-scm.com/downloads) and [nodejs](https://nodejs.org/en/download) installed on your machine.
- At last, to get started with a level, go to the directory of the level and read the readme of that level and follow those steps for that level.

## Levels' completion status

##### HTML-CSS-JS

level-1: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-html-level-1/raw/html_level1.json)

##### React:

level-1: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-react-level-1/raw/react_level1.json)

level-2: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-react-level-2/raw/react_level2.json)

##### DHIS2:

Level-1: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-dhis2-level-1/raw/dhis2_level1.json)

level-2: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-dhis2-level-2/raw/dhis2_level2.json)
