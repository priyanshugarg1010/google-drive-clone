import explorer from "./fileData";
import FolderContainer from "./components/FolderContainer";
import Lottie from "lottie-react";
import github from "../src/assets/github.json";

export default function App() {
  return (
    <div className="App bg-gray-900 min-h-[100vh]">
      <div className="fixed top-0 z-50 right-0">
        <a
          href="https://github.com/priyanshugarg1010/google-drive-clone"
          target="blank"
        >
          <Lottie
            animationData={github}
            style={{ height: "100px" }}
            loop={true}
            height={10}
            width={10}
          />
        </a>
      </div>
      <h1 className="mb-4 text-4xl text-center pt-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Google Drive clone
      </h1>

      <FolderContainer explorer={explorer} />
    </div>
  );
}
