#Grunt boilerplate with Jasmine

[![Build Status](https://travis-ci.org/aduggin/grunt-boilerplate-with-jasmine.svg?branch=master)](https://travis-ci.org/aduggin/grunt-boilerplate-with-jasmine)
[![Coverage Status](https://img.shields.io/coveralls/aduggin/grunt-boilerplate-with-jasmine.svg)](https://coveralls.io/r/aduggin/grunt-boilerplate-with-jasmine)
[![devDependency Status](https://david-dm.org/aduggin/grunt-boilerplate-with-jasmine/dev-status.svg)](https://david-dm.org/aduggin/grunt-boilerplate-with-jasmine#info=devDependencies)

A bare bones project with a grunt build process that gets you up and running with:

* Sass
* autoprefixer
* CSSLint
* JSHint - enforcing the Airbnb JavaScript Style Guide
* Jasmine unit tests (including jasmine-jquery) in a headless browser from the command line and/or in a real browser
* Generating production files and deploying files to GitHub Pages


Start by installing the required node modules:
`npm install`

You can then run the following tasks:

* `grunt server` - Start a server and run tests when files change
* `grunt test` - Run tests in the console
* `grunt test:browser` - Run tests in a browser
* `grunt release` - Generate files, runs tests, build to dist and copy files to gh-pages branch
* `grunt clean` - Delete all generated and temporary files
* `grunt version` - Shows version number

The generated production files are visible on Github Pages at
[http://aduggin.github.io/grunt-boilerplate-with-jasmine/](http://aduggin.github.io/grunt-boilerplate-with-jasmine/)

CSSLint, JSHint and the Jasmine Unit Tests are run on Travis CI