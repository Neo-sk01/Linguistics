function readPackage(pkg) {
  // Allow all build scripts
  pkg.scripts = pkg.scripts || {};
  for (const script of ['preinstall', 'install', 'postinstall', 'prepublish', 'prepare']) {
    if (pkg.scripts[script]) {
      pkg.scripts[script] = `echo 'Running ${script} for ${pkg.name}' && ${pkg.scripts[script]}`;
    }
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};
