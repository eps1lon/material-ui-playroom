/**
 * updates playroom/demos.js with all the demos from docs/src/pages/components
 * it's basically a poor mans require.context which threw in playroom:
 * require.context is not a function
 */
const fs = require("fs");
const glob = require("glob");
const path = require("path");

const outputDir = path.join(__dirname, "../playroom");
const requireDemosFile = path.join(outputDir, "demos.js");
const demoDirectory = path.join(
  __dirname,
  "../material-ui/docs/src/pages/components/"
);

function getDemoName(requirePath) {
  return path.basename(requirePath, ".js");
}

const demoBlacklist = [
  // these demos have a dependency on th docs src
  "ChipsPlayground",
  "InteractiveGrid",
  "BreakpointDown",
  "BreakpointOnly",
  "BreakpointUp",
  "GridIntegration",
  "AnchorPlayground",
  "ScrollPlayground",
  // empty
  "SvgMaterialIconsAll"
];
function shouldKeepDemo(requirePath) {
  return (
    demoBlacklist.find(demoName => demoName === getDemoName(requirePath)) ===
    undefined
  );
}

const demos = glob
  .sync(path.join(demoDirectory, "**/*.js"))
  .map(demoFilename => {
    return path.relative(outputDir, demoFilename);
  })
  .filter(shouldKeepDemo);

const requireDemosSource = `module.exports = {
${demos
  .map(requirePath => {
    return `  ${getDemoName(
      requirePath
    )}: require("${requirePath}").default`;
  })
  .join(",\n")}    
};\n`;

fs.writeFileSync(requireDemosFile, requireDemosSource, { encoding: "utf8" });
