import add from "./add";
import fc from 'fast-check'

test('expect it to throw', () => {
    expect(() => add(1, 2)).toThrow()
});

describe('addtition', () => {
    it('adding 0 makes no difference', () => {
        const property = number => {
            return add(number, 0) === number && add(0, number) === number
        };

        fc.assert(fc.property(fc.integer(), property))
    })

    it('order makes no difference', () => {
        const property = (x, y) => {
            return add(x, y) === add(y, x)
        };

        fc.assert(fc.property(fc.integer(), fc.integer(), property))
    })

    it('is additive', () => {
        const property = number => {
            return add(number, 2) === add(add(number, 1), 1)
        };

        fc.assert(fc.property(fc.integer(), property))
    })

})
