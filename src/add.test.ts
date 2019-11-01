import add from "./add";
import fc from 'fast-check'

test('expect it to throw', () => {
    expect(() => add(1, 2)).toThrow()
});

describe('addtition', () => {
    it('adding 0 makes no difference', () => {
        fc.assert(fc.property(fc.integer(), number => {
            return add(number, 0)===number && add(0, number)===number
        }))
    })

    it('order makes no difference', () => {
        fc.assert(fc.property(fc.integer(), fc.integer(), (x, y) => {
            return add(x, y) === add(y, x)
        }))
    })

    it('is additive', () => {
        fc.assert(fc.property(fc.integer(), number => {
            return add(number, 2) === add(add(number,1), 1)
        }))
    })

})
