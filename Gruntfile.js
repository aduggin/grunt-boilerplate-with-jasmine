module.exports = function (grunt) {
  'use strict';

  // Load Grunt tasks declared in the package.json file
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  // Configure Grunt
  var sassFiles = [
    {
      expand: true,
      cwd: 'app/sass/',
      dest: '.tmp/styles/',
      src: '**/*.scss',
      ext: '.css'
    }
  ];

  grunt.initConfig({
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['.tmp/styles/*.css']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'app/js/**/*.js',
        '!app/js/vendor/**/*.js',
        'test/**/*.js',
        '!test/lib/*.js'
      ]
    },

    sass: {
      options: {
        cacheLocation: '.tmp/.sass-cache'
      },
      dev: {
        options: {
          style: 'expanded',
          lineComments: true
        },
        files: sassFiles
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: sassFiles
      }
    },

    autoprefixer: {

      options: {
        browsers: ['> 1%', 'last 2 versions', 'ff 17', 'opera 12.1']
      },
      no_dest: {
        src: '.tmp/styles/*.css'
      }
    },


    connect: {
      server: {
        options: {
          port: 9000,
          middleware: function (connect) {
            var path = require('path');
            return [
              connect.static(path.resolve('app')),
              connect.static(path.resolve('.tmp'))
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001
        }
      }
    },
    jasmine: {
      dev: {
        src: ['app/js/**/*.js']
      },
      options: {
        vendor: [
          'app/vendor/js/jquery.js',
          'test/lib/jasmine-jquery.js'],
        specs: ['test/spec/*_spec.js'],
        outfile: 'test/index.html'
      }
    },
    watch: {
      html: {
        files: ['app/index.html'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['app/sass/*.scss'],
        tasks: ['sass:dev', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['.tmp/styles/*.css'],
        tasks: ['csslint']
      },
      js: {
        files: [
          'Gruntfile.js',
          'app/js/**/*.js',
          '!app/js/vendor/**/*.js',
          'test/**/*.js'
        ],
        tasks: ['jshint', 'jasmine:shell'],
        options: {
          livereload: true
        }
      }
    },

    open: {
      server: {
        path: 'http://0.0.0.0:9000'
      },
      test: {
        path: 'http://0.0.0.0:9001/test'
      }
    },

    clean: {
      all: [
        '.tmp',
        '.grunt',
        'test/index.html',
        'dist'
      ]
    },

    copy: {
      release: {
        files: [
          {
            expand: true,
            cwd: 'app',
            dest: 'dist',
            src: ['README.md', '*.html', 'js/**/*', 'vendor/js/**/*']
          },
          {
            expand: true,
            cwd: '.tmp',
            dest: 'dist',
            src: ['styles/*']
          }
        ]
      }
    },

    build_gh_pages: {
      gh_pages: {}
    }
  });

  grunt.registerTask('server', 'Run a server', [
    'csslint',
    'jshint',
    'sass:dev',
    'connect:server',
    'open:server',
    'watch'
  ]);

  grunt.registerTask('test', 'Run tests in the console', [
    'csslint',
    'jshint',
    'jasmine'
  ]);

  grunt.registerTask('travis', [
    'test'
  ]);

  grunt.registerTask('test:browser', 'Run tests in a browser', [
    'csslint',
    'jshint',
    'jasmine:dev:build',
    'connect:test',
    'open:test',
    'watch'
  ]);

  grunt.registerTask('release', 'Generate files, runs tests, build to dist and copy files to gh-pages branch', [
    'clean',
    'sass:prod',
    'autoprefixer',
    'test',
    'copy:release',
    'build_gh_pages:gh_pages'
  ]);

  grunt.registerTask('version', 'Shows version number', function () {
    var pkg = grunt.file.readJSON('package.json');
    console.log(pkg.name, pkg.version);
  });
};
