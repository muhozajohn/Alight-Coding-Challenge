import profile from "../assets/paints.jpg"
import Labs from "../assets/labs.png"
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center text-sm  text-white gap-2 justify-end p-3">
      <Link>Gmail</Link>
      <Link>Images</Link>
      <div className="flex hover:bg-primary cursor-pointer rounded-full w-10 h-10 items-center justify-center p-1">
        <img src={Labs} alt="Profile" className=" object-cover rounded-full aspect-square " />
      </div>
      <div className="flex hover:bg-primary cursor-pointer rounded-full w-10 h-10 items-center justify-center p-1">
        <TbGridDots className="text-2xl" />
      </div>
      <div className="flex hover:bg-primary cursor-pointer rounded-full w-10 h-10 items-center justify-center p-1">
        <img src={profile} alt="Profile" className=" object-cover rounded-full aspect-square " />
      </div>
    </div>
  )
}

export default NavBar