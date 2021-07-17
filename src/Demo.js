/* =============== React Deploy on github =================
    
    link-youtube:  https://www.youtube.com/watch?v=F8s4Ng-re0E

    1) First create react app by => npx create-react-app Name
    2) go that folder and run on your browser => npm start
    3)  now create New Repository 
    4) now your app folder on laptop: => npm install gh-pages --save-dev
    5) then go to package.json and see that
       
    "devDependencies": {
        "gh-pages": "^3.2.3"
      }
    
    6) now add top 
      "homepage": "http://userNameYourGitHub.gitgub.io/RepositoryName",
      "homepage": "http://mehedi-66.github.io/Course_app_by_React",
    
    7) in the script in pacage.json file
      add 
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build",

    8) => git init
    9) git remote add origin https://github.com/mehedi-66/Course_app_by_React.git
    10)

*/