// show the fizz buzz inside the array

function fizzbuzz(n: number): string[] {
  return [...Array(n)].map((_, index) => {
    // return [...Array(n).keys(n)].map((index) => {
    const nums = index + 1;
    console.log(nums);
    if (nums % 2 == 0 && nums % 3 == 5) return "Fizzbuzz";
    if (nums % 3 == 0) return "buzz";
    if (nums % 2 == 0) return "fizz";
    return nums.toString();
  });
}

export default fizzbuzz;
