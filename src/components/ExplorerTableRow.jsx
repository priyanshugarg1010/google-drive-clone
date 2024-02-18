import moment from "moment";
import Button from "./Button";
import file from "../assets/file.svg";
import folder from "../assets/folder.svg";

const ExplorerTableRow = ({ explorer, onNavigate, addNewFolder }) => {
  return (
    <tr
      className={`${
        explorer.isFolder ? "cursor-pointer" : ""
      } odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}
      onClick={() => explorer.isFolder && onNavigate(explorer)}
    >
      <td className="px-6 py-4">
        {explorer.isFolder ? "📁" : "📄"}
        {explorer.name}
      </td>
      <td className="px-6 py-4">{explorer.size || "N/A"}</td>

      <td className="px-6 py-4">
        {moment(explorer.modifiedTime).format("h:mm A DD/MM/YY") || "N/A"}
      </td>
      <td className="px-6 py-4">
        {moment(explorer.createdTime).format("h:mm A DD/MM/YY") || "N/A"}
      </td>
      <td className="px-6 py-4">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addNewFolder(e, true, explorer.id);
          }}
          icon={folder}
          ariaLabel="add folder icon"
        >
          📁 +
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addNewFolder(e, false, explorer.id);
          }}
          icon={file}
          ariaLabel="add file icon"
        >
          📄 +
        </Button>
      </td>
    </tr>
  );
};

export default ExplorerTableRow;
