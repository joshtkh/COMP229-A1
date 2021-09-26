/* This is a helper function that copys our resources into the dist folder before building,
so that all the transpiled js files can access their needed resources after building.
It is used in package.json */

import shell from "shelljs";
// Copy all the view templates and assets located in src/views and src/public
shell.cp("-R", ["src/views", "src/public"], "dist/");
// Clean up unnecessary ts and json files 
shell.rm(["dist/public/js/*.ts", "dist/public/js/*.json"]);