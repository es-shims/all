'use strict';

require('es5-shim');
require('es6-shim');

require('es-map/auto');
require('es-set/auto');

require('array-includes/auto');
require('array.from/auto');
require('array.of/auto');
require('array.prototype.at/auto');
require('array.prototype.concat/auto');
require('array.prototype.copywithin/auto');
require('array.prototype.entries/auto');
require('array.prototype.every/auto');
require('array.prototype.filter/auto');
require('array.prototype.find/auto');
require('array.prototype.findindex/auto');
require('array.prototype.findlast/auto');
require('array.prototype.findlastindex/auto');
require('array.prototype.flat/auto');
require('array.prototype.flatmap/auto');
require('array.prototype.foreach/auto');
require('array.prototype.group/auto');
require('array.prototype.grouptomap/auto');
require('array.prototype.indexof/auto');
require('array.prototype.join/auto');
require('array.prototype.keys/auto');
require('array.prototype.lastindexof/auto');
require('array.prototype.map/auto');
require('array.prototype.push/auto');
require('array.prototype.reduce/auto');
require('array.prototype.reduceright/auto');
require('array.prototype.some/auto');
require('array.prototype.slice/auto');
require('array.prototype.splice/auto');
require('array.prototype.toreversed/auto');
require('array.prototype.tosorted/auto');
require('array.prototype.tospliced/auto');
require('array.prototype.unshift/auto');
require('array.prototype.values/auto');
require('array.prototype.with/auto');
require('date/auto');
require('error-cause/auto');
require('es-aggregate-error/auto');
require('es-string-html-methods/auto');
require('function.prototype.name/auto');
require('globalthis/auto');
require('is-nan/auto');
require('math.acosh/auto');
require('math.atanh/auto');
require('math.cbrt/auto');
require('math.clz32/auto');
require('math.fround/auto');
require('math.imul/auto');
require('math.log10/auto');
require('math.log1p/auto');
require('math.sign/auto');
require('number.isfinite/auto');
require('number.isinteger/auto');
require('number.issafeinteger/auto');
require('number.parsefloat/auto');
require('number.parseint/auto');
require('number.prototype.toexponential/auto');
require('object-is/auto');
require('object-keys');
require('object.assign/auto');
require('object.defineproperties/auto');
require('object.entries/auto');
require('object.fromentries/auto');
require('object.getownpropertydescriptors/auto');
require('object.getprototypeof/auto');
require('object.hasown/auto');
require('object.values/auto');
require('parseint/auto');
require('reflect.apply/auto');
require('reflect.getprototypeof/auto');
require('reflect.ownkeys/auto');
require('set.prototype.difference/auto');
require('set.prototype.intersection/auto');
require('set.prototype.isdisjointfrom/auto');
require('set.prototype.issubsetof/auto');
require('set.prototype.issupersetof/auto');
require('set.prototype.symmetricdifference/auto');
require('set.prototype.union/auto');
require('string.fromcodepoint/auto');
require('string.raw/auto');
require('string.prototype.at/auto');
require('string.prototype.iswellformed/auto');
require('string.prototype.lastindexof/auto');
require('string.prototype.matchall/auto');
require('string.prototype.padend/auto');
require('string.prototype.padstart/auto');
require('string.prototype.replaceall/auto');
require('string.prototype.split/auto');
require('string.prototype.substr/auto');
require('string.prototype.towellformed/auto');
require('string.prototype.trim/auto');
require('string.prototype.trimend/auto');
require('string.prototype.trimleft/auto');
require('string.prototype.trimright/auto');
require('string.prototype.trimstart/auto');
require('string.raw/auto');
require('suppressed-error/auto');
require('symbol.prototype.description/auto');

require('es-iterator-helpers/auto');

try {
	require('arraybuffer.prototype.detached/auto');
	require('arraybuffer.prototype.transfer/auto');
	require('promise.allsettled/auto');
	require('promise.any/auto');
	require('promise.prototype.finally/auto');
	require('regexp.prototype.flags/auto');
} catch (e) {
	/* these shims should fail silently in a pre-ES5 env */
}
