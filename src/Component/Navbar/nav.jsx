import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { auth } from "./../../firebase";

function Navbar() {
  return (
    <header className="md:p-2 border-b-2 border-gray-200">
      <div className="max-w-[1200px] m-auto  flex items-center justify-between p-2">
        <div className="flex gap-[5px] items-center">
          <CameraAltIcon className="text-blue-900" />
          <h1 className="text-sm">Gallery.</h1>
        </div>

        <button
          onClick={() => auth.signOut()}
          className="font-bold p-[10px] bg-blue-500 hover:bg-blue-900 text-white rounded"
        >
          LogOut
        </button>
      </div>
    </header>
  );
}
export default Navbar;
