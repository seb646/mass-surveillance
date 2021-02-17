<!-- ---
home: true
heroImage: /images/surveillance.png
heroText: The United States of Surveillance
tagline: Hero subtitle
actionText: Learn More →
actionLink: /learn/getting-started/
features:
- title: The Legislation
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: The Programs
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Court Cases
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: Copyright © 2021 United States of Surveillance | GitHub | MIT License
--- -->

<p align="center">
  <img src="https://masssurveillance.net/images/surveillance.png" width="300px">
</p>

<h1 align="center">The United States of Surveillance</h1>
<p align="center">
  <a href="https://github.com/seb646/mass-surveillance/issues">Report a Bug</a> • 
  <a href="#contribute">Contribute</a>
</p>

## Overview
The **United States of Surveillance** aims to present a comprehensive summary of all relevant material related to programmatic surveillance in the United States. Our project helps educators, students, and the general public understand the laws, programs, and court cases related to U.S. mass surveillance. We use credible sources, including journalists, scholars, and government documents, to compile all of our articles. The project is open source; anyone can contribute to the information on our website. 

## Table of Contents
- [Introduction](https://masssurveillance.net)
- [Understanding Legislation](https://masssurveillance.net/legislation)
  - [Foreign Intelligence Surveillance Act (FISA)](https://masssurveillance.net/legislation/fisa)
  - [USA PATRIOT Act](https://masssurveillance.net/legislation/patriot-act)
  - [Executive Order 12333](https://masssurveillance.net/legislation/eo-12333)
  - [Third Party Doctrine](https://masssurveillance.net/legislation/third-party-doctrine)
  - [UKUSA Agreement](https://masssurveillance.net/legislation/ukusa)
- [Surveillance Programs](https://masssurveillance.net/programs)
  - [NSA XKeyScore](https://masssurveillance.net/programs/xkeyscore)
  - [NSA PRISM](https://masssurveillance.net/programs/prism)
  - [NSA MYSTIC](https://masssurveillance.net/programs/mystic)
  - [NSA FASCIA](https://masssurveillance.net/programs/fascia)
  - [FAMS Quiet Skies](https://masssurveillance.net/programs/quiet-skies)
  - [Five Eyes Network](https://masssurveillance.net/programs/five-eyes)
- [Court Cases](https://masssurveillance.net/cases)
  - [FISA Court Opinion (2011)](https://masssurveillance.net/cases/fisa2011)
  - [FISA Court Opinion (2015)](https://masssurveillance.net/cases/fisa20115)
  - [FISA Court Opinion (2016)](https://masssurveillance.net/cases/fisa2016)
  - [FISA Court Opinion (2018)](https://masssurveillance.net/cases/fisa2018)
  - [United States v. Moalin](https://masssurveillance.net/cases/us-v-moalin)
- [Resources](https://masssurveillance.net/resources)

## Contribute
If you'd like to contribute to this project, please fork our GitHub repository and begin development on your own branch. To work on the project in a local environment, input the following commands into your shell terminal.

### Install VuePress
This step assumes that you have [Node.js](https://nodejs.org) and [Node Package Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (NPM). If you do not have Node, please install it before you proceed. 
```
npm install -g vuepress
```

### Clone the Repository
We recommend using Git to clone the repository. This will initialize your repository with git and allow you to contribute to the master branch of our project. Instead of using the command line, you can also use your preferred Git GUI (such as [GitHub Desktop](https://desktop.github.com/)) or [download the source files](https://github.com/seb646/mass-surveillances/archive/main.zip).
```
git clone https://github.com/seb646/mass-surveillance.git
```

### Start the Development Environment
You can test the changes you've made by starting the VuePress development environment. This will load a page on your computer's `localhost` namespace where you can navigate a demo version of the website.
```
vuepress dev
```

### Editing & Creating Articles
All of our articles are written in [Markdown](https://www.markdownguide.org/), with original copies hosted in our GitHub repository. The three sections of files are located in the following folders:
- **Understanding Legislation:** `/legislation`
- **Surveillance Programs:** `/programs`
- **Court Cases:** `/cases`
- **Resources:** `/resources.md` (root directory)

Before committing any change to our master branch, we will thoroughly review your article and your sources. Since this is an academic project, please use proper Chicago style citations (including in-text for every idea or quote that isn't your own material). Once a change is accepted, our website automatically updates itself from our GitHub repository at midnight eastern U.S. time.

## Credits
The **United States of Surveillance** was created by [**Sebastian Rodriguez**](https://srod.ca) as part of a digital humanities research project at the [University of Toronto](https://utoronto.ca). View a list of our [contributors](https://github.com/seb646/mass-surveillance/graphs/contributors).


### License
Copyright (c) 2021 Sebastian Rodriguez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.