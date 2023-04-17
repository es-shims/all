'use strict';

const os = require('os');
const semver = require('semver');

const features = [
	'Array.fromAsync',
	'resizable-arraybuffer',
	'regexp-unicode-property-escapes',
	'regexp-named-groups',
	'regexp-v-flag',
	'cross-realm',
	'TypedArray',
	'Temporal',
	'Atomics',
	'ShadowRealm',
	'Proxy',
	'FinalizationRegistry',
	'WeakRef',
	'symbols-as-weakmap-keys',
	'regexp-duplicate-named-groups',
];

const args = [].concat(
	`-t ${os.cpus().length - 1}`,
	'--prelude=./browser.js',
	semver.satisfies(process.version, '^10.17 || >= 12') ? '--host-args=\'--unhandled-rejections=none\'' : [],
	`--features-exclude=${features.join(',')}`,
	'--preprocessor=./test/preprocessor.js',
	'--test262-dir=node_modules/test262',
	'\'node_modules/test262/test/built-ins/**/*.js\'',
);

console.log(`test262-harness ${args.join(' ')}`);
