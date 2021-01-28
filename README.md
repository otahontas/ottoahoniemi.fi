## Homesite based on Gatsbys hello-world boilerplate

Built with help from

- Official Gatsby tutorial: <https://www.gatsbyjs.com/tutorial/>
- Mvp.css: <https://andybrewer.github.io/mvp/>

Working:

- Homesite + resume in English
- Styling based on semantic HTML
- Prettier, eslint etc. configs
- Deployment, currently with basic rsync to server, where site is running behind traefik reverse proxy + nginx container (see docker-compose for more info). If you want to use this, you need to setup your own deployment script.

Todo:

- Get resume data from json file / even directly from LinkedIn.
- Add i18n localization / internalization (especially for Finnish resume)
- Make resume look better, more visuals
- Add Github actions for tests & deployment
- Add Lisence 
