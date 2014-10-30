#Grunt Boilerplate

A bare bones project with a grunt build process that gets you up and running with:

* Sass
* autoprefixer
* CSSLint
* JSHint - enforcing the airB&b styleguide
* Jasmine units (including jasmine-jquery) will enables testing user interface javascript in a headless browser from the command line and/or in a real browser
* livereload
* deploying files to guthub pages


Start by install node modules:
    npm install

You can then run the following tasks:

grunt server - Start a server and live reload and run tests when files change
grunt test - Run tests in the console
grunt test:browser - Run tests in a browser
grunt release - Generate files, runs tests, build to dist and copy files to gh-pages branch
grunt clean - Delete all generated and temporary files
grunt version - Shows version number


