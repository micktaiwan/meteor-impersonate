Package.describe({
  name: "gwendall:impersonate",
  summary: "Impersonate users in Meteor",
  version: "0.2.2",
  git: "https://github.com/gwendall/meteor-impersonate.git",
});

Package.onUse(function(api, where) {

  api.use([
    "accounts-base",
    "reactive-var",
    "templating",
    "gwendall:body-events@0.1.6",
    "tracker",
  ], "client");

  api.use([
    'ecmascript',
    "random",
    "alanning:roles@3.2.3",
  ]);

  api.addFiles([
    "server/lib.js",
  ], "server");

  api.addFiles([
    "client/lib.js",
  ], "client");

  api.export("Impersonate");

});
