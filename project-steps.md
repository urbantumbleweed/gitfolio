step 1 install packages and complete package.json.
  REACT, WEBPACK, REACT-ROUTER, WEBPACK-DEV-SERVER, FLUX, 
step 2: create folder structure for flux
step 3: entry point files (index.html, app.js).  Include normalize, boilerplate, bootstrap.

-- test that we can see something

step 4: configure webpack to create bundle.js
step 5: mvp features: look at github api, wireframe.  WHAT DATA DO WE HAVE ACCESS TO. WHAT DOES IT LOOK LIKE.
step 6: decide component hierarchy (component folders), routing(nested routes)
step 7: create  components with render methods
  -start with parent components first

  --test visibility of each component

  -data in state comes from stores.
  -give our html structure. 
  -identify and include props and refs.
  -validate props (React.PropTypes.type)
  -styling comes later!!

step 8: create needed data stores
  -data structure
  -internal methods (getters/setters)
  -public api (what is called by componentActions.js)
  -Events register to Dispatcher
  -module exports
step 8.5: React-router, configure route definitions.
  -map routes to component handlers.
  -account for dynamic routes (/:route)
step 9: Create Dispatcher for app
step 10: create constants for app
step 11: create util folder and files for external resources
step 12: Create storeActions files for each store
step 13: Create handlers within components
step 14: Populate lifecycle methods within components


repo component:
https://api.github.com/users/:username/repos
  "id": 28833672,
  "full_name": "dasebast/JS-Basics"
  "stargazers_count": 0,
  "description": ""
  "homepage": null || html_url": "https://github.com/dasebast/JS-Basics",
  "updated_at": "2015-01-09T19:35:48Z"

user:
https://api.github.com/users/dasebast
  "login": "dasebast",
  "id": 10407991,
  "avatar_url": "https://avatars.githubusercontent.com/u/10407991?v=3",
  
  
  "html_url": "https://github.com/dasebast",

  "repos_url": "https://api.github.com/users/dasebast/repos",
  
  "name": "Doug Sebastian",
  "company": "",
  "blog": "",
  "location": "Provo, Utah",
  "email": "dasebast@gmail.com",
  "hireable": false,
  "bio": null,
  "public_repos": 56,
  
  "followers": 4,
  
  "created_at": "2015-01-05T21:03:31Z",
  "updated_at": "2015-03-13T06:18:41Z"