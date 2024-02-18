import { useState } from "react";
import ExplorerTable from "./ExplorerTable";

const FolderContainer = ({ explorer }) => {
  const [currentExplorer, setCurrentExplorer] = useState(explorer);
  const [navigationPath, setNavigationPath] = useState([explorer]);

  const handleFolderClick = (folder) => {
    setNavigationPath((prevPath) => [...prevPath, folder]);
    setCurrentExplorer(folder);
  };

  const handleBreadcrumbClick = (index) => {
    const newPath = navigationPath.slice(0, index + 1);
    setNavigationPath(newPath);
    setCurrentExplorer(newPath[index]);
  };

  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const addNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      const newFolder = {
        id: new Date().getTime().toString(),
        name: e.target.value,
        isFolder: showInput.isFolder,
        items: [],
      };

      setCurrentExplorer((prevExplorer) => {
        const updatedItems = [newFolder, ...prevExplorer.items];
        return { ...prevExplorer, items: updatedItems };
      });

      setShowInput({
        visible: false,
        isFolder: false,
      });
    }
  };

  const handleBackToRoot = () => {
    setCurrentExplorer(explorer);
    setNavigationPath([explorer]);
  };

  return (
    <div className="flex flex-col gap-10 p-10">
      <nav
        className=" px-5 py-3 flex justify-between items-center  text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <div className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
          {navigationPath.map((pathItem, index) => (
            <span
              key={pathItem.id}
              className=" cursor-pointer  items-center text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              onClick={() => handleBreadcrumbClick(index)}
            >
              {index !== 0 ? " > " : ""}
              {pathItem.name}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={handleBackToRoot}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Back to root
        </button>
      </nav>
      <section className="">
        <div className=" justify-center items-center">
          <ExplorerTable
            items={currentExplorer.items}
            onNavigate={handleFolderClick}
            addNewFolder={addNewFolder}
          />
        </div>
      </section>
      {showInput.visible && (
        <div>
          <input
            autoFocus
            type="text"
            onBlur={() => setShowInput({ ...showInput, visible: false })}
            onKeyDown={handleNewFolder}
          />
        </div>
      )}
    </div>
  );
};

export default FolderContainer;
