This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

For additional help and information(including additional commands etc) please read the guide at the link above before proceeding.


## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
  - [Copy relevant files and folders](#copy-relevant-files-and-folders)
  - [Clone the repository](#clone-the-repository)
- [TODO](#todo)


## Introduction

The project is a simple solution (primarily as a self-study initiative) for an accordion-like interaction using ReactJS and Flux. Considering that this is a self-study effort, the solution is heavily inspired from the [official documents available](https://facebook.github.io/flux/docs/overview.html) as well as quite a few [blogs](https://github.com/tylermcginnis/Flux-Todolist) and web pages that had releveant content on ReactJS and Flux. 


This solution should service needs where:

* an accordion-like interaction is required
* there is a need for a solution architecture that is not too convoluted. Flux is an excellent choice for the basic need that this solution solves since it enhances performance
* there should be an ability to modify the title/header with HTML content. Some off-the-shelf accordion solutions restricted default header content to simple plain text with perhaps an additional possibility of an icon or two that could be added
* ability to easily modify for other needs like, for eg., having only a header which expands/collapses on interaction (i.e. no need for accordion body separation)
* there is a need to populate data from a JSON source


## Installation

Get [Create React App](https://github.com/facebookincubator/create-react-app). Follow instructions to bootstrap a project. Once done, continue on with any one of the two following options:

### Copy relevant files and folders

* replace the default copies of  `package.json` with the one that this project comes with
* replace the default copies of  `index.js` and `index.css` and  with the one that this project comes with
* copy the `data.json` file to the root 
* copy the `app` directory into  the `src` directory.
* issue a `npm install` from the command line. The dependencies will now install
* issue a `npm start` to start the compilation. Shortly a browser window should open with the default page

### Clone the repository 

* clone the repository
* issue a `npm install` from the command line inside the local directory. The dependencies will now install
* issue a `npm start` to start the compilation. Shortly a browser window should open with the default page

## TODO

* Animate the interaction responses (slide-up, slide-down etc).
* Code clean up
* Enhance styling with CSS
* Inline comments in files
* Bug-fixes, as i find them
* Basic tests
* More ES6
* Create a sample full page where the accordion can be viewed in actual action