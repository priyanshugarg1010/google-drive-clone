import explorer from "./fileData";
import FolderContainer from "./components/FolderContainer";

export default function App() {
  return (
    <div className="App bg-gray-900 h-[100vh]">
      <h1 className="mb-4 text-4xl text-center pt-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Google Drive clone
      </h1>

      <FolderContainer explorer={explorer} />
    </div>
  );
}
