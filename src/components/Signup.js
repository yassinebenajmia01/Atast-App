import { ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaLock, FaUsers, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showClubList, setShowClubList] = useState(false);
  const [selectedClub, setSelectedClub] = useState("Club");
  const [showPostList, setShowPostList] = useState(false);
  const [selectedPost, setSelectedPost] = useState("Post");
  const [email, setEmail] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [club, setClub] = useState('');
const [post, setPost] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [isLoading, setIsLoading] = useState(false);

const navigate = useNavigate();
const { signup } = useAuth();
const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowClubList(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectClub = (clubName) => {
    setSelectedClub(clubName);
    setClub(clubName);
    setShowClubList(false);
  };
const handleSignUp = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Password strength check
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }

  try {
    setIsLoading(true);
  
    const clientData = {
      email,
      firstName,
      lastName,
      club,
      post,
      password
    };
  
    // Call signup function
    const response = await signup(clientData);
  
    console.log("Sent Data:", clientData);
    console.log("Signup Response:", response);
  
    // Check response status or fallback to a success indicator
    if (response?.status >= 200 && response?.status < 300) {
      navigate('/signupsuccess'); // Navigate on success
    } else {
      const errorMessage = response?.data?.error || "Unexpected response from server";
      console.warn("Signup failed:", errorMessage);
      alert(`Signup failed: ${errorMessage}`);
    }
  } catch (error) {
    // Handle Axios errors
    if (error.response) {
      console.error('Server Error:', error.response.data);
      alert(`Signup failed: ${error.response.data?.message || 'Server error'}`);
    } else if (error.request) {
      console.error('Network Error: No response received', error.request);
      alert('Network error: No response received from server');
    } else {
      console.error('Unexpected Error:', error.message);
      alert(`Signup failed: ${error.message}`);
    }
  } finally {
    setIsLoading(false);
  }
  
};

  const clubs = [
    { name: "Atast Student Section", img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/320701792_706953237460702_1007915427923838734_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=j0jbUUsul_IQ7kNvgHEnFX9&_nc_oc=AdjVXfnoFeLBh0S3KWjVfQtpgrgioEthPlSJ7Zu4I8UcBwL7V1XzYCju4VYWjyQeOH4&_nc_zt=23&_nc_ht=scontent.ftun10-2.fna&_nc_gid=A1EdgswA9RVvdpckxNlmTI6&oh=00_AYDUKidT7asKaRJTN-ZpL2Eh_L1_9kqyb1qAw-ugzKiwrw&oe=67B16534" },
    { name: "Atast Club ISITCOM", img: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/270085024_101991029031263_5855595920102629950_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EMVk_m5yK8IQ7kNvgHc3fpp&_nc_oc=Adh90Nai0XdRrRds_BmCj4THhUIHjM_RDnSIDQYjO2Wp5NeRDQLkgl-pk_oRpd9ejCg&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=AUuej_cCBUPDlwR908Eyaii&oh=00_AYBpIGlOmOoEJRWQZOYGgBR37yHZv18673G0obR15eHsaQ&oe=67B153D5" },
    { name: "Atast Club FMS", img: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/307040906_388423186832397_8791958202986286510_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rwQjfvqqj6EQ7kNvgED8QF7&_nc_oc=Adi4OojRVLIZgfIforKqIXXAV0spgs2M4N63ZNNCxuj--eTwwrtArYz3F63rNhQemJg&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=AATdDZBEj-ubEpaJLJPFeBK&oh=00_AYAQS23AWNgHlvOl08ZFxlwNCoHWvKzMlOUckBxwt7ZRxA&oe=67B15FEE" },
    { name: "Atast Club EPI", img: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/306918786_401439698851167_607665771533365062_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=y-O-C0jITFMQ7kNvgF3qyqX&_nc_oc=Adh8OYVncovINZmj-fNAg1ffi8FSyDLMPD66UlXa7mUl8_VipcKFUQX5nOp01LfP-P4&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=A9Mniez4Dwuf2gW8abvGzU0&oh=00_AYBxIV1YxJiMNGpOC_2HTBwGElBQVAshDF0ThYEqFsSdBQ&oe=67B17DE5" },
    { name: "Atast Club ISSATso", img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/271904655_966688133979034_2376239177038694652_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bMoz0N8BMaUQ7kNvgGx8Ovo&_nc_oc=AdjP6ph1LkpjtKiqudZULDSWcJHlsoKe-ewnP6CBfnysdsg7yznFb5-Nz_PDkymDhns&_nc_zt=23&_nc_ht=scontent.ftun10-2.fna&_nc_gid=AuAmT9xzVBW6VmXOI_24Ygd&oh=00_AYClsNfR8aDcTD7HYmfEWVcN6OEx-IGVjkLmmcpfE3VOXQ&oe=67B15E3F" },
    { name: "Atast Club TBS", img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/272268996_104916528766017_8733698649832292543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3Nx9JzLI5zsQ7kNvgGBqsjN&_nc_oc=Adgm6K8dAZntQSjlJCVfrMRjK8Fq2O5pvcITn30TJ2mQA8zvA2oaiHrkvJBd_IzeqWw&_nc_zt=23&_nc_ht=scontent.ftun10-2.fna&_nc_gid=A_LSKp5yCXeGSToTsdJ13Gx&oh=00_AYA2lp2cJYDAzSI_bDjE-D1AR1yDy87UraNSIqt7lKpD-A&oe=67B17E72" }
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
        <button 
          className="text-white mb-4 absolute left-8 top-12" 
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={20} className="mr-2" /> 
        </button>
        <div className="flex justify-center mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=glwhmfxh8~53oiraWtYTQKF7XUsvGqyTMd-HTuwqRBXZ9BmpHFAm1izmbrrH65SaoEU0BuIeSKaIkeEgKySwUuCRc5kkc1hTyiCWfyXlQc63xu~Hl3gjFcJkb4jabO-b9YRnT1v4MNKtM~fRbENIXICtgRXtrZr4M8GotjKqyRKNMYV~ixCFltV1adosJrcMarAZyDGCmXOuoPlN5D88gf2XxQj3NtQctz~n91xsicI7s-DIJHVLICiDugDKcUxNStR-Sw3FGtr9GhvMrqaa2MCCSjyXHmQ-sysJz4is8q2NWJAfgiyXIaEjm5~rcaUnSYoxhONKQHz6Ok0u655pDg__"
            alt="Logo"
            className="w-[136px] h-[148px]  "
          />
        </div>
        <form  onSubmit={handleSignUp}>
          <div className="space-y-4">
            <div className="relative border-b-2 border-gray-500">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input type="email" placeholder="Email" className="w-full pl-10 p-2 bg-black focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="First Name" className="w-full pl-10 p-2 bg-black focus:outline-none"  onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input type="text" placeholder="Last Name" className="w-full pl-10 p-2 bg-black focus:outline-none" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="relative border-b-2 border-gray-500" ref={dropdownRef}>
      <FaUsers className="absolute left-3 top-3 text-gray-400" />
      <div
        className="w-full pl-10 p-2 bg-black text-white cursor-pointer select-none"
        onClick={() => setShowClubList((prev) => !prev)}
        role="button"
      >
        {selectedClub || 'Select a club'}
      </div>

      {showClubList && (
        <div
          className="absolute w-full text-white rounded-lg mt-1 shadow-lg z-10 p-2 border border-gray-600"
          style={{
            background: 'linear-gradient(180deg, rgba(157, 1, 1, 1) 0%, rgba(88, 1, 1, 1) 100%)',
          }}
        >
          {clubs.map((club, index) => (
            <div
              key={index}
              className="flex items-center p-3 space-x-3 border border-black rounded-3xl hover:bg-red-500 cursor-pointer font-bold transition duration-300"
              onClick={() => handleSelectClub(club.name)}
            >
              <img src={club.img} alt={club.name} className="w-7 h-7 mr-2 rounded-full" />
              {club.name}
            </div>
          ))}
        </div>
      )}
    </div>
<div className="relative border-b-2 border-gray-500" onClick={() => setShowPostList(!showPostList)}>
  <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
  <div className="w-full pl-10 p-2 bg-black cursor-pointer" onChange={(e) => setPost(e.target.value)}>{selectedPost}</div>
  {showPostList && (
    <div className="absolute w-full text-white rounded-lg mt-1 shadow-lg z-10 p-2 border border-gray-600" style={{
      background: "linear-gradient(180deg, rgba(157, 1, 1, 1) 0%, rgba(88, 1, 1, 1) 100%)"
    }}>
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex items-center p-4 border border-black rounded-lg hover:bg-red-500 cursor-pointer font-bold space-x-4"
          onClick={() => { setSelectedPost(post.name); setPost(post.name); setShowPostList(false); }}
        >
          <img src={post.img} alt={post.name} className="w-7 h-7 mr-2 rounded-full" />
          {post.name}
        </div>
      ))}
    </div>
  )}
</div>
            <div className="relative border-b-2 border-gray-500">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full pl-10 p-2 bg-black focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
              <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="relative border-b-2 border-gray-500">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full pl-10 p-2 bg-black focus:outline-none" onChange={(e) => setConfirmPassword(e.target.value)} />
              <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            
            <button className="w-[62%] bg-white ml-16 text-black font-bold py-2 rounded-3xl mt-[80%] hover:bg-gray-200"  disabled={isLoading} > 
            {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
            <p className="text-center text-gray-400">Already have an account? <a href="login" className="font-[urbanist]" style={{ color: "rgba(0, 160, 155, 1)" }}>Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};