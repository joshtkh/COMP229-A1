/* This is a helper function that copys our resources into the dist folder before building,
so that all the transpiled js files can access their needed resources after building. */

import * as shell from "shelljs";
// Copy all the view templates and assets in the public folder
shell.cp("-R", ["src/views", "src/public"], "dist/");

// Remove unnecessary ts and json files
shell.rm(["dist/public/js/*.ts", "dist/public/js/*.json"]);