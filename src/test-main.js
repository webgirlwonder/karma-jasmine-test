var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
    baseUrl: '/base/src/',
    deps: tests,

    paths: {
      index: 'index'
    }
});