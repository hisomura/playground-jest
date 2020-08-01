import {greet} from "./sample1";

test('return "Hello, world!"', () => {
  expect(greet()).toBe('Hello, world!')
})