/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.theme = "./assets/sass";
uswds.paths.dist.img = "./assets/img";
uswds.paths.dist.fonts = "./assets/fonts";
uswds.paths.dist.js = "./assets/js";
uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.sass = "./assets/sass";
uswds.sprite.projectIconsOnly = false;	


/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;