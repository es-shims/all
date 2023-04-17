'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});

const failures = { __proto__: null };

let inFailure = false;
rl.on('line', (line) => {
	const match = line.match(/^FAIL (?<path>\S+) \((?<mode>default|strict mode)\)$/);
	if (match) {
		const { groups: { path, mode } } = match;
		if (!failures[path]) {
			failures[path] = [];
		}
		const testCase = {
			message: [],
			mode,
			path,
		};
		failures[path].push(testCase);
		inFailure = testCase;
	} else if (inFailure) {
		if (line.trim() === '') {
			inFailure.message = inFailure.message.join('\n');
			inFailure = false;
		} else {
			inFailure.message.push(line);
		}
	}
});

new Promise((resolve) => { rl.on('close', resolve); }).then(() => {
	Object.entries(failures).forEach(([path, cases]) => {
		cases.sort((a, b) => a.message.localeCompare(b.message) || a.mode.localeCompare(b.mode));

		const modesByMessage = { __proto__: null };
		cases.forEach(({ message, mode }) => {
			if (!modesByMessage[message]) {
				modesByMessage[message] = [];
			}
			modesByMessage[message].push(mode);
		});

		Object.entries(modesByMessage).forEach(([message, modes]) => {
			console.log(`FAIL ${path} (${modes.join(', ')})`);
			console.log(message.replace(process.execPath, 'node'));
			console.log('');
		});
	});
});
