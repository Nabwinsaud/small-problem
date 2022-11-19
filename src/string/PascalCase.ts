export const PascalCase = (text: string) => {
  return ("" + text)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr: string) => {
      return chr.toUpperCase();
    });
};
