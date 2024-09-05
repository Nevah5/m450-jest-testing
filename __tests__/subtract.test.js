import { subtract } from '../src/app/page'
import 'jest'

test('Subtracts 3 - 1 to equal 2', () => {
  expect(subtract(3, 1)).toBe(2);
})
