import add from "./add";

test('expect it to throw', () => {
    expect(() => add(1, 2)).toThrow()
});