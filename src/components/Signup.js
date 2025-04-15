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
    { name: "Atast Student Section", img: "https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NY8zGy9ZXoKZeZPtHUexfGCJ5VbrcuMmGCFaxxkJIwbzVAB9gMgjSBzCYSY-Mt4b1cdGsYr9OgjsdY4lEwu2~UqWSq8ljtaUj9nvYQSbOw~WF8YeU1JgwpaBYuqXxKacSZxjOQKvZmMiYXt2VxGB9uOKbTJtCGwTsvMyau4qY40toUoS4DHzS32CiOjCpK-FJSg3RZw7jY6PMJ~MODLd8miF3EBB9sZY7UABNOmKEb~y06V2XboAqldYnfA4FtVA7-2Pfdt5EDPOvHqdyQWz-zqjnSc8GwST9Y0AvUmHWw~5mWHcKIPgr6mlEN0O6n2yAuC7C2RfUVxKGD93ZeleLg__" },
    { name: "Atast Club ISITCOM", img: "https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QMKKb4LIcB31NT1852ny5dyOJG2MqdPmo8LpcjFP6PAYnFRzl8xSmiyiJgyk61Fj45gdmcW4DQWg7JVuQxZx7vt7ymmsqzgAXXPqOdNnK6PB-FsOMpzfypqW4nuxGIQe6omPtD8uymP7A4GwrbSoVEgk0KtkLLZQGpRDaKyP1NqsWkwQ0WZ4p4j42wN0Aff4OG7AlwOJAiq95REQYr0uHcPIp67sJxfcyoF12szaHF~rFlKAuA4dMEdi6M7QBfhTFv9sRnOCpwzE0VoWblGr7whXMxNjpSJ~jWNQ1-s-AiQw~7ImI62a96pME0~vz~c--gOI1kuidFKLlGnJBi4MyA__" },
    { name: "Atast Club FMS", img: "https://s3-alpha-sig.figma.com/img/5db9/55f2/74677ec53a18179039b780b12df46c61?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fG5YjQjxaoEzW~tZ6I8nJrmkRF4oIpGCPFY7zfsVu6TjZWlUr0iTEnPMNF-HVm4r4LEIBM9v-C5q6zPWCCTbf~x~N6Qb7WB-PgfvJUKlzemzzFFw2cY7i3kTI-~hH3zoRjrMWgXgbkVtDdl6MlWp0A1-Y6eZTgXOqhlgbUyuc9xaduTj0bOq5i3IPrBdFJUMLyEhTnecu6Wse9l4Qy5uT1me9vaQxoVVRrR1FcnqgIok00znS1TG5979JV5u3hSIhj2VtrES26hrcJ5pFxR1oz3LeqJ2A8oEZKf3cJK8njL818o1vkQfYIBIh-VcCqKY5cxvrnGpWtKVYn8TeiZ69Q__" },
    { name: "Atast Club EPI", img: "https://s3-alpha-sig.figma.com/img/5fe1/05b9/765579524abe9a02dfafbcd45e3614b1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BMBcDTUMZPslPo2N7m49RIqZ13D~BotnCkLNOsx-it3jtq9Z3f223sZMAT2kN2T543XXcpclt9JtAYKNGLDE2nW-YLOiDZcMJ2bPK1w1QvCdEvQ80KFYOC-sGR6MYf2RrUeLge-~RMRX3-sZBt2ScAOfoA5tv4g-b9dg7DbPAJ99TUCoG1m-YGaYhzw0zWFlTndEK5gu9TblNVFeHqVxCP0tLDbiW0UKdjUqSSRV8fNJVEssLGQZtwkbrVpGWltVnWgu22SKkADJws1sGSxIaoxV0Me~3bBbOVZ6n-0rB9l96O5G00lmGb0qHZ9pl1FrYc4mfobk8Gr70lR8Yr7daA__" },
    { name: "Atast Club ISSATso", img: "https://s3-alpha-sig.figma.com/img/c48c/54d0/6a5e0df1008741a5b09a8fdd49cf7c6c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dOoavdVLub7qsc3EY~zQP91oSQjVwNmYPwmKYMn2rjf3AAwrnay5jiYyFo43tF5WKW6exA5G4jBR50eeYpQgnvI-5aRQvQDa1FCJtlMAsb8QHqBqfLY~P~luV7hoOZ1gczPcLQEVmYZQkVq3rpw3~00O7pc65DdMX6k-1fpjF~RITYw2dB2e~18Xd5rkNcS10tYZg24QSrM7AiqmAA4RLgb~Pf53WUr6AuXZQbINybuo4pDKlipnYEWN~zJcJU7n6i3GCzsC1~VYGOipm2bCj8hv9ZTnnTMhdszI3T9tkV0hfT1tOI7RC2lF3P8DVDuKtxPFSbwXkxiiKgCXnwVZsQ__" },
    { name: "Atast Club TBS", img: "https://s3-alpha-sig.figma.com/img/b4a7/9bbd/fe31a540ca1ae6ae010cf8049cd3891c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FNZO7aj5UMFDmu4J3GBrsHRyECM3TCohFy4y3Arb8P~dkdHFXS-uVaj1qfAaje2o~AWScPzqhhs1Q~7Kk3cg2~qfqKHJ5WLUw7UgkdGmj2cDXqBHZV3r5D4ejapf-9CnJcyqiQHlrP3dmkXSNu~KpaovebQk34C9hasJQxi9enhUHcCB1NIm~-ktAy41jxkjbeJC0OxDXsvJ8G2nPOV9a1wcOM-BUneieY1GRkB9kgbjW8y~U5uD1rHu29olspVmHmsOHWclsrLjU2oGYbEazjvLJpSdOiFlWxikiq2DgzlUGILfC6L~Cb0ToR30OVaQlssiRx9zXpKafIhT~B8D4w__" }
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
            src="https://s3-alpha-sig.figma.com/img/b1d1/e571/66c9a73d629027eb6697c03cec62c28c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tdGTqoTY10VvwZnYj3UX6j5ZZ7Qu~qkT1A~MjvouLookZNmhfjIVU85pEKY1~taYh789T6G82e1HNviSUyXIeLdCAUUSKl~-GoQHk3yHx5X4SuwJllTCkb~Ym2TH1uTEJ1VbrVZGU0ecHqNiLhtaODj3UeHlLg-QqJFUJdxh6LH75n~DkzV2AhIwhu~WwEAIedod-Tehn6xeDlYfU6~-yk8nGqvEg2if1yN2nutE9vH9pMDhYl6iGPdblgaUX2LMX4HgdTNsezm5~dokNSvADqIzixNp2m7Gpj6y-RKjH-dv9Kx-~5e4foeLLImaKPpWEoyYVEGk~s-Rh~4cnrcGZg__"
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
              <img src={club.img} alt={club.name} className="w-7 h-7 mr-2 rounded-full bg-gray-200" />
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