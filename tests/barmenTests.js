import assert from 'assert'
import { pour } from '../src/barmen'

// <ClassNameTests>.<Act>_<Arrange>_<Assert>
suite('BarmenTests', function() {
    test('PourMeWhisky_IAsk50Grams_IGotGlassWith50Gram', function() {

    });

    suite('pour me whisky', function() {
        suite('when I ask 50 grams', function() {
            test('I got glass with 50 grams whisky', function() {
                assert.equal(50, pour(50));
            })
        })
    })
});