// Greedy, Easy
// Time: O(n)
// Space: O(1)
function lemonadeChange(bills: number[]): boolean {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (fives > 0) {
        fives--;
        tens++;
      } else {
        return false;
      }
    } else {
      if (tens > 0 && fives > 0) {
        tens--;
        fives--;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

// Greedy, Math, Easy
// Time: O(n)
// Space: O(n)
function lemonadeChange1(bills: number[]): boolean {
  const price = 5;
  const cashMap = new Map([[5, 0], [10, 0], [20, 0]]);

  for (const bill of bills) {
    let rest = bill - price;

    if (rest) {
      for (const value of [20, 10, 5] as const) {
        rest = decreaseBy(rest, value);
        if (!rest) break;
      }

      if (rest) return false;
    }

    cashMap.set(bill, cashMap.get(bill)! + 1)
  }

  function decreaseBy(rest: number, value: 5 | 10 | 20) {
    if (rest < value || !cashMap.get(value)) return rest;

    const count = Math.floor(rest / value);
    const amount = Math.min(cashMap.get(value)!, count);
    cashMap.set(value, cashMap.get(value)! - amount);

    return rest - amount * value;
  }

  return true;
};
