import fs from "fs";

interface ICompany {
  name: string;
  location: string;
}
let company: ICompany = {
  name: "google",
  location: "USA",
};

export let writeable = fs.createWriteStream("./company.json");
writeable.write(JSON.stringify(company));
