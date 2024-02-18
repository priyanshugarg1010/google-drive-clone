import ExplorerTableRow from "./ExplorerTableRow";
import Button from "./Button";
import { useState, useMemo } from "react";
import upArrow from "../assets/up-arrow.svg";

const ExplorerTable = ({ items, onNavigate, addNewFolder }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table
        style={{ width: "100%", borderCollapse: "collapse" }}
        className="w-full text-md  rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3 ">
              Name <Button onClick={() => requestSort("name")} icon={upArrow} />
            </th>
            <th className="px-6 py-3 ">
              Size <Button onClick={() => requestSort("size")} icon={upArrow} />
            </th>
            <th className="px-6 py-3 ">
              Modified Time{" "}
              <Button
                onClick={() => requestSort("modifiedTime")}
                icon={upArrow}
              />
            </th>
            <th className="px-6 py-3 ">
              Created Time{" "}
              <Button
                onClick={() => requestSort("createdTime")}
                icon={upArrow}
              />
            </th>
            <th className="px-6 py-3 ">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {sortedItems.map((item) => (
            <ExplorerTableRow
              key={item.id}
              explorer={item}
              onNavigate={onNavigate}
              addNewFolder={addNewFolder}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExplorerTable;
