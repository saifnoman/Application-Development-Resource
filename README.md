## Preparing the environment:
- Fork this repository by clicking the fork button in the upper right hand corner of this page
- Head over to [tokens](https://github.com/settings/tokens), generate a new token with **gist scope**
   - After that, *COPY* the token, e.g a token can look like *e5565bedd8ff5cb53a367d9b2dac4602df4b8242*. After copying the token, head over to Setting, then click on Secrets. In Secrets add a variable called *AUTH* and paste the token you copied.
- Head over to [gist](https://gist.github.com) and create two **gist files** with content  of {} for each, and name them as: **badge_level1.json** and **badge_level2.json**
   - After you create a gist of **badge_level1.json**, do the following three steps: 
     - click on the raw button, then in the browser url you can find hash after the username/; *COPY* the hash (everything after your github username/ and before the /raw), e.g. in this sample url of badge_level1.json, we copy only the **67879aa1f153c6b783303f177fdbaf73** part  of *https://gist.githubusercontent.com/yonatanhf/67879aa1f153c6b783303f177fdbaf73/raw/920af8d64ec652ddabc3ff8feb6d0354a0a71173/badge_level1.json*. 
     - After you copy the correct hash, create a new repository secret, call it *BADGE_LEVEL1* and paste the hash you copied.
     - Finally, we do little editing in this page. Just under the status part below where the badges are displayed, use the same copied hash and paste it in the url of the badge level-1 in the **pastecopiedhashoflevel-1here** part of the url.
   - Do the same three steps for **badge_level2.json**, with a secret called *BADGE_LEVEL2* and paste the hash from url of the badge level-2 in to the **pastecopiedhashoflevel-2here** part of the url.


- At last, to get started with a level, head on to the directory of each a level and read the readme part of the level.

## Levels' completion status
##### Status:


Level-1: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/yonatanhf/8b10356e67ae08eba75cd9ea538db8ab/raw/badge_level1.json)



level-2: ![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/yonatanhf/49f0991261a948a3cf304fac38dd976b/raw/badge_level2.json)
