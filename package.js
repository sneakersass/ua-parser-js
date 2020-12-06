Package.describe({
  name: 'sneakersass:ua-parser-js',
  version: '0.7.22',
  summary: 'Lightweight JavaScript-based user-agent string parser (fork)',
  git: 'https://github.com/sneakersass/ua-parser-js.git',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.addFiles("src/ua-parser.js");
  api.export("UAParser");
});
