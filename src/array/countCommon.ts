let text: string = "common";
let commonObj: Record<string, number> = {};

[...text].forEach((common: string) => {
  commonObj[common] = 1;
});

console.log(commonObj);
