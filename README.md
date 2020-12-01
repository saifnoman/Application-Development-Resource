## Preparing the environment:
- Fork this repository:
   - You might need to join in [github](https://github.com/join),
   - Then proceed to forking this repository by clicking the fork button in the upper right hand corner of this page
- Head over to [tokens](https://github.com/settings/tokens), generate a new token with **gist scope**
   - After that, *COPY* the token, e.g a token can look like *e5565bedd8ff5cb53a367d9b2dac4602df4b8242*. After copying the token, head over to Setting, then click on Secrets. In Secrets add a variable called *AUTH* and paste the token you copied.
- Before starting each level, head over to [gists](https://gist.github.com) and create a gist file for that level. E.g. create a **react_level1.json** for the *React Level-1* level with a content of {}.
   - After creating a gist file for a given level, do the following three steps. 
   
      E.g. for the **badge_level1.json**: 
     - When it is open in browser, click on the raw button, then in the *browser url* you can find id of the gist file just after the **username/**. *COPY* the id (everything after your github **username/** and before the **/raw**).

     In this sample url of badge_level1.json, copy the id **67879aa1f153c6b783303f177fdbaf73** part of *https://gist.githubusercontent.com/yonatanhf/67879aa1f153c6b783303f177fdbaf73/raw/920af8d64ec652ddabc3ff8feb6d0354a0a71173/react_level1.json*. 
     - After you copy the id, head over to secrets of your repository and create a new repository secret. Call it *REACT_LEVEL1* and paste the id you copied.
     - Finally, we do little editing in this page. Just under the status part below where the badges are displayed, use the same copied id and paste it in the url of the badge level-1 in the **pastecopiedidof-react-level-1** part of the url.

   - Remember to do the same three steps for **react_level2.json**, with a secret called *REACT_LEVEL2* and paste the id from url of the badge level-2 in to the **pastecopiedidof-reactlevel-2** part of the url.


- You might need [git](https://git-scm.com/downloads) and [nodejs](https://nodejs.org/en/download) installed on your machine.
- At last, to get started with a level, you might read the readme of that level in browser and follow those steps for that level.

## Levels' completion status
##### React:


level-1: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-react-level-1/raw/react_level1.json)

level-2: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-react-level-2/raw/react_level2.json)

##### DHIS2:

Level-1: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-dhis2-level-1/raw/dhis2_level1.json)



level-2: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/your-username/pastecopiedidof-dhis2-level-2/raw/dhis2_level2.json)
