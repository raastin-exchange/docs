# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### How it Works?
Our code / docs exists in branch master. When yarn build is called a new commit is triggered to gh-pages branch (default settings).
In github site in Settings > Pages > Build & Deployment, gh-pages configured.


### How to extend?
* For writing docs write it in docs folder
* For enhancing UI write it in src
* For installing plugins add it to docusaurus.config.js

### Installation
```
$ yarn
```

### Local Development
```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
