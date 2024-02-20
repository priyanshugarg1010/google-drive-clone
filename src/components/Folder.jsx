import { useState } from "react";

const Folder = ({ explorer, onNavigate }) => {
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const addNewFolder = (e, isFolder) => {
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleNewFolder = (e) => {
    const currentTime = new Date();
    const createdTime = currentTime.toISOString();

    const modifiedTime = new Date(
      currentTime.getTime() + 45 * 60000
    ).toISOString();

    const randomSize = `${Math.floor(
      Math.random() * (2000 - 100 + 1) + 100
    )}kb`;

    if (e.keyCode === 13 && e.target.value) {
      const newFolder = {
        id: new Date().getTime().toString(),
        name: e.target.value,
        isFolder: showInput.isFolder,
        createdTime: createdTime,
        modifiedTime: modifiedTime,
        size: randomSize,
        items: [],
      };
      explorer.items.unshift(newFolder);

      setShowInput({
        visible: false,
        isFolder: false,
      });
    }
  };

  return (
    <>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Modified Time</th>
            <th>Created Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          <tr onClick={() => onNavigate(explorer)}>
            <td>
              {explorer.isFolder ? "📁 " : "📄"}
              {explorer.name}
            </td>
            <td>{explorer.size || "N/A"}</td>
            <td>{explorer.modifiedTime || "N/A"}</td>
            <td>{explorer.createdTime || "N/A"}</td>
            <td>
              <button
                onClick={(e) => addNewFolder(e, false)}
                style={{ cursor: "pointer", marginRight: "10px" }}
              >
                📄 Add File
              </button>
              <button
                onClick={(e) => addNewFolder(e, true)}
                style={{ cursor: "pointer" }}
              >
                📁 Add Folder
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginLeft: "25px" }}>
        {showInput.visible && (
          <div>
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              autoFocus
              type="text"
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              onKeyDown={handleNewFolder}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Folder;
