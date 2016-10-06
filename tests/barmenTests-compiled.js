'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _barmen = require('../src/barmen');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <ClassNameTests>.<Act>_<Arrange>_<Assert>
suite('BarmenTests', function () {
    test('PourMeWhisky_IAsk50Grams_IGotGlassWith50Gram', function () {});

    suite('pour me whisky', function () {
        suite('when I ask 50 grams', function () {
            test('I got glass with 50 grams whisky', function () {
                _assert2.default.equal(50, (0, _barmen.pour)(50));
            });
        });
    });
});

//# sourceMappingURL=barmenTests-compiled.js.map