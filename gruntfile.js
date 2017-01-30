/// <binding AfterBuild="clean:js, ts, uglify:beautify" Clean="clean:js" />
module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-ts");

    // configure plugins
    grunt.initConfig({
        clean: {
            js: [
                "scripts/**/*.js",
                "scripts/**/*.js.map"
            ]
        },

        ts: {
            default: {
                src: ["scripts/**/*.ts"],
                options: {
                    sourceMap: false
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "Contents/css/style.css": [
                        "contents/style.css"
                    ]
                }
            }
        },

        uglify: {
            beautify: {
                options: {
                    beautify: true,
                    sourceMap: true
                },
                files: {
                    "scripts/bundle.js": [
                        "scripts/app.js",
                        "scripts/**/*.js"
                    ]
                }
            },
            deploy: {
                options: {
                    sourceMap: false
                },
                files: {
                    "scripts/bundle.js": [
                        "scripts/app.js",
                        "scripts/**/*.js"
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: ["scripts/**/*.ts"],
                tasks: ["clean:js", "ts", "uglify:beautify"]
            }
        }
    });

    // define tasks
    grunt.registerTask("build", ["clean:js", "ts", "uglify:beautify", "cssmin"]);
    grunt.registerTask("deploy", ["clean:js", "ts", "uglify:deploy", "cssmin", "clean:deploy"]);
};
