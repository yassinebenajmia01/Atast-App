import { ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaLock, FaUsers, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TitleImage from "../assests/AtastLogo.png";
import Isitomm from "../assests/isitcom.png";
import SS from "../assests/redstudentsection.png";
import Epi from "../assests/epi.png";
import Fms from "../assests/fms.png";
import Issat from "../assests/issat.png";
import Tbs from "../assests/tbs.png";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showClubList, setShowClubList] = useState(false);
  const [selectedClub, setSelectedClub] = useState("Club");
  const [club, setClub] = useState("");

  const [showPostList, setShowPostList] = useState(false);
  const [selectedPost, setSelectedPost] = useState("Post");
  const [post, setPost] = useState("");


  const navigate = useNavigate();
  const clubDropdownRef = useRef(null);
const postDropdownRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (clubDropdownRef.current && !clubDropdownRef.current.contains(event.target)) {
      setShowClubList(false);
    }
    if (postDropdownRef.current && !postDropdownRef.current.contains(event.target)) {
      setShowPostList(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);


  const clubs = [
    { name: "Atast Student Section", img: SS },
    { name: "Atast Club ISITCOM", img: Isitomm },
    { name: "Atast Club FMS", img: Fms },
    { name: "Atast Club EPI", img: Epi },
    { name: "Atast Club ISSATso", img: Issat },
    { name: "Atast Club TBS", img: Tbs }
  ];

  const posts = [
    { name: "President", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "Vice President", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "General Secretary", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "Financial Manager", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "Community Manager", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "HR Manager", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "Event Manager", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" },
    { name: "Sponsoring Manager", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <button className="text-white mb-4 absolute left-8 top-12" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} className="mr-2" />
        </button>

        <div className="flex justify-center mb-4">
          <img src={TitleImage} alt="Logo" className="w-[136px] h-[148px]" />
        </div>

        <form>
          <div className="space-y-4">
            <InputWithIcon icon={<FaEnvelope />} placeholder="Email" />
            <InputWithIcon icon={<FaUser />} placeholder="First Name" />
            <InputWithIcon icon={<FaUser />} placeholder="Last Name" />

            <DropdownWithIcon
  icon={<FaUsers />}
  label={selectedClub}
  options={clubs}
  show={showClubList}
  setShow={setShowClubList}
  setSelected={(clubName) => {
    setSelectedClub(clubName);
    setClub(clubName);
  }}
  dropdownRef={clubDropdownRef}
/>


<DropdownWithIcon
  icon={<FaBriefcase />}
  label={selectedPost}
  options={posts}
  show={showPostList}
  setShow={setShowPostList}
  setSelected={(postName) => {
    setSelectedPost(postName);
    setPost(postName);
  }}
  dropdownRef={postDropdownRef}
/>


            <PasswordInputWithIcon
              icon={<FaLock />}
              placeholder="Password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <PasswordInputWithIcon
              icon={<FaLock />}
              placeholder="Confirm Password"
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
            />

            <button
              className="w-[62%] bg-white ml-16 text-black font-bold py-2 rounded-3xl mt-8 hover:bg-gray-200"
              onClick={() => navigate("/signupsuccess")}
            >
              Sign In
            </button>

            <p className="text-center text-gray-400">
              Already have an account? <a href="/login" className="font-[urbanist]" style={{ color: "rgba(0, 160, 155, 1)" }}>Log In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputWithIcon({ icon, placeholder }) {
  return (
    <div className="relative flex items-center border-b-2 border-gray-500">
      <div className="pl-2 text-gray-400">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 pl-4 p-2 bg-black focus:outline-none text-white"
      />
    </div>
  );
}

function PasswordInputWithIcon({ icon, placeholder, showPassword, setShowPassword }) {
  return (
    <div className="relative flex items-center border-b-2 border-gray-500">
      <div className="pl-2 text-gray-400">
        {icon}
      </div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="flex-1 pl-4 p-2 bg-black focus:outline-none text-white"
      />
      <div className="pr-2 text-gray-400 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
}

function DropdownWithIcon({ icon, label, options, show, setShow, setSelected, dropdownRef }) {
  return (
<div className="relative border-b-2 border-gray-500" ref={dropdownRef}>
<div
        className="flex items-center w-full pl-2 p-2 bg-black text-white cursor-pointer select-none"
        onClick={() => setShow((prev) => !prev)}
        role="button"
      >
        <div className="text-gray-400">
          {icon}
        </div>
        <div className="pl-4">
          {label || 'Select one'}
        </div>
      </div>

      {show && (
        <div className="absolute w-full text-white rounded-lg mt-1 shadow-lg z-10 p-2 border border-gray-600"
          style={{ background: 'linear-gradient(180deg, rgba(157, 1, 1, 1) 0%, rgba(88, 1, 1, 1) 100%)' }}
        >
          {options.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center p-3 space-x-3 border border-black rounded-3xl hover:bg-red-500 cursor-pointer font-bold transition duration-300"
              onClick={() => {
                setSelected(option.name); // <- Correct way
                setShow(false);
              }}
            >
              <img src={option.img} alt={option.name} className="w-7 h-7 mr-2 rounded-full bg-gray-200" />
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
