"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");
const prompt = require("prompt");

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'single-double',
	float: "left"
};

// Text + chalk definitions
const data = {
	name: chalk.white("              Gregory Wild-Smith"),
	handle: chalk.white("abritinthebay"),
	work: chalk.white("Senior Engineer") + chalk.gray(" @ ") + chalk.red("Netflix"),
	twitter: chalk.gray("https://twitter.com/") + chalk.cyan("abritinthebay"),
	npm: chalk.gray("https://npmjs.com/") + chalk.red("~abritinthebay"),
	github: chalk.gray("https://github.com/") + chalk.green("abritinthebay"),
	linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("gregorywildsmith"),
	web: chalk.cyan("https://www.wild-smith.com"),
	npx: chalk.red("npx") + " " + chalk.white("abritinthebay"),
	labelWork: chalk.white.bold("       Work:"),
	labelOpenSource: chalk.white.bold("Open Source:"),
	labelTwitter: chalk.white.bold("    Twitter:"),
	labelnpm: chalk.white.bold("        npm:"),
	labelGitHub: chalk.white.bold("     GitHub:"),
	labelLinkedIn: chalk.white.bold("   LinkedIn:"),
	labelWeb: chalk.white.bold("        Web:"),
	labelCard: chalk.white.bold("       Card:")
};

// Actual strings we"re going to output
const newline = "\n";
const heading = chalk.gray(`${data.name} / ${data.handle}`);
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
							 newline + newline + // Add one whole blank line
							 working + newline + newline + // data.labelWork + data.work
							 twittering + newline + // data.labelTwitter + data.twitter
							 npming + newline + // data.labelnpm + data.npm
							 githubing + newline + // data.labelGitHub + data.github
							 linkedining + newline + // data.labelLinkedIn + data.linkedin
							 webing + newline + newline + // data.labelWeb + data.web
							 carding; // data.labelCard + data.npx
							 
const rendered = chalk.red(boxen(output, options));
							 
const promptSchema = {
	name: "ok",
	message: "Does this look good? [y/n]",
	validator: /y[es]*|n[o]?/,
	warning: "Must respond (y)es or (n)o",
	default: "y"
};

console.log(rendered);

prompt.start();
prompt.get(promptSchema, (err, results) => {
	if(results.ok && results.ok.charAt(0).toLowerCase() === "y") {
			fs.writeFileSync(path.join(__dirname, "bin/output"), rendered);
			console.log(`Output written to: ${path.join(__dirname, "bin/output")}`);
	}
});
