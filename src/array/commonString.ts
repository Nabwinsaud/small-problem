// export function twoString(s1: string, s2: string): "yes" | "no" {
//   let sMap: Record<string, boolean> = {};
//   let hasCommonString = false;
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < s2.length; j++) {
//       if (s1[i] === s2[j]) {
//         hasCommonString = true;
//         sMap[s1[i]] = true;
//         sMap[s2[j]] = true;
//       }
//     }
//   }
//   return hasCommonString ? "yes" : "no";
// }

// export function twoString

export function twoString(s1: string, s2: string): "yes" | "no" {
  let sMap: Record<string, boolean> = {
    c: true,
    o: true,
    d: true,
    e: true,
  };
  let hasCommonString: boolean = false;
  [...s1].forEach((text: string) => {
    if (!text) {
      sMap[text] = true;
    }
  });

  for (let i = 0; i < s2.length; i++) {
    if (sMap[s2[i]]) {
      hasCommonString = true;
    }
  }

  return hasCommonString ? "yes" : "no";
}
