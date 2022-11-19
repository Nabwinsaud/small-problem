export function suggestProduct(products: string[], searchWord: string) {
  products.sort();
  const result = new Array(searchWord.length).fill([]);
  for (let idx = 0; idx < searchWord.length; idx++) {
    const next: string[] = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i][idx] === searchWord[idx]) {
        console.log(searchWord[idx]);
        // products['Samsung'] ['S'] == searchWord['S']
        next.push(products[i]);
        result[idx].push(products[i]);
        // result[idx].length < 3 && result[idx].push(products[i]);
      }
    }
    products = result;
  }
  return result;
}
