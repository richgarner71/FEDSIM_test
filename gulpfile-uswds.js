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

uswds.paths.dist.css = './_assets/css';
uswds.paths.dist.img = './_assets/img';
uswds.paths.dist.theme = './sass';

uswds.paths.src.uswds	= "./node_modules/@uswds";
uswds.paths.src.sass	= "./node_modules/@uswds/uswds/packages";
uswds.paths.src.theme	= "./node_modules/@uswds/uswds/dist/theme";
uswds.paths.src.fonts	= "./node_modules/@uswds/uswds/dist/fonts";	
uswds.paths.src.img   = "./node_modules/@uswds/uswds/dist/img";	
uswds.paths.src.js    = "./node_modules/@uswds/uswds/dist/js";
uswds.paths.src.projectSass = "./sass";
uswds.paths.src.projectIcons = "";
uswds.paths.dist.theme = "./sass";
uswds.paths.dist.img = "./_assets/img";
uswds.paths.dist.fonts = "./_assets/fonts";
uswds.paths.dist.js = "./_assets/js";
uswds.paths.dist.css = "./_assets/css";
uswds.sprite.projectIconsOnly = false;	


/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;