# enterprise-showcase

Showcase all the great work that your peers are working on and happily sharing internally. 

`enterprise-showcase` is a static web site, hosted on *GitHub Pages* and generated through *GitHub Actions*. No need for a separate runtime or server, and you can fine tune how often you want the site to be generated. 

## Features
- Browse every `internal` repository across all organizations of your GitHub Enterpise Account. 
- Create collections of repositories so that you can highlight great projects. 
- Easily extended so you can customize it to your needs

`enterprise-showcase` is built with GitHub Pages, GitHub Actions, [Nuxt.js](https://nuxtjs.org/) and [Vuetify](https://vuetifyjs.com/)


## Setup
- Fork this repository
- Enable GitHub Pages by setting `gh-pages` as the source branch 
![Screen Shot 2021-01-11 at 16 16 46](https://user-images.githubusercontent.com/2787414/104200209-ad6da080-5428-11eb-8103-da14ee7d654d.png)
- Create a `GH_EA_TOKEN` secret and provide a Personal Access Token as the value 
- Configure the repository retrieval job by editing the `.github\workflows\repo-list.yml` and provide the name of your GitHub Enterprise Account

```yaml

    steps:
    - uses: actions/checkout@v2
    - name: Get the repos
      uses: helaili/ea-repo-list@master
      with:
        enterprise: <replace with GitHub Enteprise Account name>
        outputFilename: repositories.json
        token: ${{secrets.GH_EA_TOKEN}}
```
- Manually trigger a first repository list retrieval by starting the *Generate repository list* workflow. The Actions workflow should execute succesfully and you should get a freshly commited `repositories.json` file at the root of your repository. 
![Screen Shot 2021-01-11 at 17 03 17](https://user-images.githubusercontent.com/2787414/104205785-16581700-542f-11eb-9b9f-1886699cbb80.png)
- Create collections by creating a `.md` file per collection in `content/collections`. The *front matter* header allow you to set the collection title, description and list of repositories. The body of the document is available to provide a more detailed description of the collection.

```markdown
---
title: C.R.E.A.M.
description: Cheese Rules Everything Around Me
repositories:
- octocheese/camembert
- octocheese/roquefort
- amsterdam/gouda
- vermont/cheddar
---

# All of them!!! 

We love them all 
```
<img width="1383" alt="Screen Shot 2021-01-11 at 21 49 45" src="https://user-images.githubusercontent.com/2787414/104236613-2126a200-5457-11eb-9bef-f45e890886c5.png">

- The web site should be published to `https://<your org or account name>/enterprise-showcase/`. In case you renamed the repository, change `router.base` accordingly in the `nuxt.config.js` file. Remove completly this variable if you are publishing to your organization or account-level site (`<user>.github.io` or `<organization>.github.io`)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
