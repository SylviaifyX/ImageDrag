
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {auth} from "./../../firebase"

function Navbar() {
    return (
        <header className=" p-[10px]  border-b-2 border-gray-200" >
            <div className="max-w-[1200px] m-auto  flex items-center justify-between">
                <div className='flex gap-[5px] items-center'>
                    <CameraAltIcon className="text-blue-900" />
                    <h1 className="text-sm">Gallery.</h1>
                </div>
                <div className="">
                    <button onClick={()=>auth.signOut()} className="font-bold p-[8px]">LogOut</button>
                </div>


            </div>

        </header>
    )
}
export default Navbar