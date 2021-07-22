import { descendingOrder } from "./descending-order"

describe('descendingOrder', () => {
    it('should return zero when the number is zero ', async () => {
      const given = 1;

      const actual = descendingOrder(given);

      expect(actual).toBe(1);
    })

    it('should return the string "negative" when the number is negative ', async () => {
      const given = -100;

      const actual = descendingOrder(given);

      expect(actual).toBe('negative');
    })

    it('should return some sample numbers in descending order ', async () => {
      const given = 123456789;

      const actual = descendingOrder(given);

      expect(actual).toBe(987654321);
    })
})
