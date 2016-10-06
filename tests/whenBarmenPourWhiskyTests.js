import assert from 'assert'
import { pour } from '../src/barmen'

suite('when barmen pour whisky', function () {
    setup(function () {

    });

    // * <Arrange>.<Assert>
    suite('i ask 50 grams', function () {
        test('get 50 grams of whisky', function () {
            assert.equal(50, pour(50));
        });
    });

    //<Assert>.<Arrange>
    suite('I get 50 grams of whisky', function() {
        test('if barmen is free', function() {
            assert.equal(50, pour(50));
        });

        test('if I won a promo glass', function() {
            assert.equal(50, pour(50));
        });

        test('My friend ordered 50 grams to me', function() {
            assert.equal(50, pour(50));
        })
    });
});




// * When<Action>.<Arrange><Assert>
// * <Arrange>.<Assert>
// * <Assert>.<Arrange>
// * <ClassName>Should.<Act><Assert>
// * <ClassNameTests>.<Act>_<Arrange>_<Assert>