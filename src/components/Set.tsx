import { useState } from "react";

interface IRow {
  id: string;
  name: string;
}
const rows: IRow[] = [
  { id: "1", name: "Row 1" },
  { id: "2", name: "Row 2" },
  { id: "3", name: "Row 3" },
  { id: "4", name: "Row 4" },
];

function SetMethod() {
  const [selectId, setSelctId] = useState(new Set<string>()); // iniitalized the empty set
  const handleChange = (id: string) => {
    const prevId = new Set(selectId);
    if (prevId.has(id)) {
      prevId.delete(id);
    } else {
      prevId.add(id);
    }
    setSelctId(prevId);
  };
  return (
    <div>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectId.has(row.id)}
                  onChange={() => handleChange(row.id)}
                />
              </td>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SetMethod;
