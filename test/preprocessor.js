'use strict';

var hasArrows = false;
try {
	Function('() => {}')(); // eslint-disable-line no-new-func
	hasArrows = true;
} catch (e) { /**/ }

// TODO: remove anything annotated with this
function TODO(condition) {
	return !process.env.RUN_TODOS && condition;
}

function hasUnsupportedAttrs(test) {
	if (typeof Symbol !== 'function') {
		if (
			test.attrs.features.indexOf('Symbol')
			|| (typeof Symbol.species !== 'symbol' && test.attrs.features.indexOf('Symbol.species'))
			|| (typeof Symbol.unscopables !== 'symbol' && test.attrs.features.indexOf('Symbol.unscopables'))
			|| (typeof Symbol.iterator !== 'symbol' && test.attrs.features.indexOf('Symbol.iterator'))
			|| (typeof Symbol.toStringTag !== 'symbol' && test.attrs.features.indexOf('Symbol.toStringTag'))
		) {
			return true;
		}
	}
	if (!hasArrows && test.attrs.features.indexOf('arrow-function') > -1) {
		return true;
	}
	return false;
}

module.exports = function (test) {
	if (test && test.attrs) {
		if (
			test.attrs.esid && (
				TODO(test.attrs.esid.startsWith('sec-date-'))
				|| TODO(test.attrs.esid.startsWith('sec-date.'))
				|| TODO(test.attrs.esid === 'sec-expanded-years')
				|| TODO(test.attrs.esid === 'sec-constructor-properties-of-the-global-object-date')
				|| TODO(test.attrs.esid === 'sec-aggregate-error.prototype.constructor')
				|| TODO(test.attrs.esid === 'sec-regexp.prototype-@@replace')
				|| TODO(test.attrs.esid === 'sec-symbol.prototype-@@toprimitive')
				|| test.attrs.esid === 'sec-decodeuri-encodeduri'
				|| test.attrs.esid === 'sec-decodeuricomponent-encodeduricomponent'
				|| test.attrs.esid === 'sec-invariants-of-the-essential-internal-methods'
			)
		) {
			return null;
		}

		if (
			test.attrs.es5id
			&& (
				TODO(test.attrs.es5id === '10.2.3_A2.1_T3') // TODO: non-enumerable globals; "Date"
				|| TODO(test.attrs.es5id === '10.2.3_A2.3_T3') // TODO: non-enumerable globals; "Date"
				|| TODO(test.attrs.es5id === '15.2.3.3-4-210') // TODO: Date.prototype descriptor
				|| TODO(test.attrs.es5id === '15.2.3.14-2-3') // TODO: weird Object.keys failure
				|| TODO(test.attrs.es5id === '15.2.3.7-6-a-24') // TODO: weird Object.defineProperties failure
				|| TODO(test.attrs.es5id === '15.2.3.7-2-18') // TODO: weird Object.defineProperties failure
			)
		) {
			return null;
		}

		if (
			test.attrs.description
			&& TODO(test.attrs.description.startsWith('Checking parseInt.prototype'))
		) { // TODO: investigate using Function.call in parseInt shim
			return null;
		}

		if (
			test.attrs.includes
			&& (
				test.attrs.includes.indexOf('detachArrayBuffer.js') > -1
				|| test.attrs.includes.indexOf('nativeFunctionMatcher.js') > -1
			)
		) {
			return null;
		}

		if (
			test.attrs.features
			&& (
				TODO(test.attrs.features.indexOf('Reflect.construct') > -1) // TODO: investigate using Function.call in parseInt
				|| hasUnsupportedAttrs(test)
			)
		) {
			return null;
		}
	}

	return test;
};
