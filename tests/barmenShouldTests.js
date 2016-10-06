import assert from 'assert'
import { pour } from '../src/barmen'

//<ClassName>Should.<Act><Assert>
suite('Barmen should', function() {
    suite('pour me 50 grams', function() {
        test('when I ask 50 grams', function() {
            assert.equal(50, pour(50));
        })
    })

})