import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const messages = [
  { id: 1, name: "Ahmed_Baya", role: "Community_Manager", time: "1 hour", message: "", avatar: "https://s3-alpha-sig.figma.com/img/9b8e/8692/651d8c3a36bb23fe7d89bb600e9d31d5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bYiPokYBF7n67HeRpRdRg~F0uwhS5Dze7vLRlFlACoEq3V3XXRzvPOVjamNsuIv4bnWm35JwVy0CUwbvamCg7kzN1HJ0jaVH9~i7Fq6P8aWzHYEo4vkvgNoGSm2zH0WH3VvAG1oaTG9HbELqxRbdrH3WBFq9kaCUxUhI-NV9o8Uh6tPK5wE7rpks~qHnCyMfboJEpGghwVJsxLtaf6gUSPY1uQpaa9UBrpcls7jgJ3mrnZZjpxxg~itmhR3JsupheQuobNLXa2uIT8boAFRslSopuDNho0EX1sCOSTmjQmVcOrqhsnBohsLqdUkXh1GqqgnjL9G3UmjlmB63-R1mkw__" },
  { id: 2, name: "Rima_Jerbi", role: "Vise_President", time: "3 hour", message: "", avatar: "https://s3-alpha-sig.figma.com/img/af54/245d/e6472a4a5b92db375e400189c4b34406?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kh3LNEA3BM2yH1Iph~w1SNsgIA3L2FErQEgZn7a98B11PfoeKhhGkCwZuDV32aQysTfoVLanelp38Z0Em11u9LJRU9xAlxBeehxcWqP9YeTTXJKVew-e1pZZRQyUTQMZoDpcQ8MdV7TQQw98JjebBQjNyDANdr2cA9LxCX1776e52ozku0fFaacoomwjFaipIos~y3Tf8gORcRWRKWrVWgCEabtH4PIIdRDqLE7~5DFDVZWZ4aiHCGxJSoruhRN0Nvg3pZ8kjJkxjwyI~PS7F~9xZ17XLaVHQPHwfPTQ36y~Fy13VHVUvoxMs5vWcre8Nu-6j-6~Da2jU8MQ7mK7kw__" },
  { id: 3, name: "Ahmed_Baya", role: "Community_Manager", time: "11 hour", message: "", avatar: "https://s3-alpha-sig.figma.com/img/9b8e/8692/651d8c3a36bb23fe7d89bb600e9d31d5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bYiPokYBF7n67HeRpRdRg~F0uwhS5Dze7vLRlFlACoEq3V3XXRzvPOVjamNsuIv4bnWm35JwVy0CUwbvamCg7kzN1HJ0jaVH9~i7Fq6P8aWzHYEo4vkvgNoGSm2zH0WH3VvAG1oaTG9HbELqxRbdrH3WBFq9kaCUxUhI-NV9o8Uh6tPK5wE7rpks~qHnCyMfboJEpGghwVJsxLtaf6gUSPY1uQpaa9UBrpcls7jgJ3mrnZZjpxxg~itmhR3JsupheQuobNLXa2uIT8boAFRslSopuDNho0EX1sCOSTmjQmVcOrqhsnBohsLqdUkXh1GqqgnjL9G3UmjlmB63-R1mkw__" },
  { id: 4, name: "Eya_Rejeb", role: "President", time: "1 day", message: "", avatar: "https://s3-alpha-sig.figma.com/img/268f/b9ea/46a99a916a05b59109ef230b9a5d7883?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tFcphIX6vtF27EJT8z9uv94Thq-qS1M2D~f8GMwgmfbOZOjOS5KnyeaT-s6vjaA2-6VprIEWSQZN21Ts8uGpgKcdB9o1ABwtY-dXP8-c5UKfJY7OiG9JjHgL9i-qoMN0I5EgbWOG1LMUKD2Cqwbp2dhgR~s0hFEaZuIrGYjg~TyHR9W-MFfiy2j4HQb4uzVCbbn3DezfFDoHrui3F0N8PoPTkqaayTJuwf9qB4KPlcr7t9a-a-Vn8hdZ4PFIrSCKVHx4DTMTWPFzwyw1ihyVAGyLuJE1-1XW2FwJj3TsyN1wqb0N99Of6N9omnChdZayGIkalnY9GZwZFlhGZi6xUw__" },
  { id: 5, name: "Eya_Rejeb", role: "President", time: "1 day", message: "", avatar: "https://s3-alpha-sig.figma.com/img/268f/b9ea/46a99a916a05b59109ef230b9a5d7883?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tFcphIX6vtF27EJT8z9uv94Thq-qS1M2D~f8GMwgmfbOZOjOS5KnyeaT-s6vjaA2-6VprIEWSQZN21Ts8uGpgKcdB9o1ABwtY-dXP8-c5UKfJY7OiG9JjHgL9i-qoMN0I5EgbWOG1LMUKD2Cqwbp2dhgR~s0hFEaZuIrGYjg~TyHR9W-MFfiy2j4HQb4uzVCbbn3DezfFDoHrui3F0N8PoPTkqaayTJuwf9qB4KPlcr7t9a-a-Vn8hdZ4PFIrSCKVHx4DTMTWPFzwyw1ihyVAGyLuJE1-1XW2FwJj3TsyN1wqb0N99Of6N9omnChdZayGIkalnY9GZwZFlhGZi6xUw__" }
];

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center py-4" style={{ scrollbarWidth: "none", backgroundColor: "rgba(18, 18, 18, 1)" }}>
      <div className="h-screen overflow-y-auto p-0 space-y-4" style={{ scrollbarWidth: "none", backgroundColor: "rgba(18, 18, 18, 1)" }}>
        {/* Back Arrow - Navigate to Previous Page */}
        <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6 mt-4" />
        </button>

        {/* Profile Title - Centered */}
        <h1 className="text-gray-100 text-2xl font-semibold mx-auto ml-[40%]">Chat</h1>

        <div className="space-y-4 bg-gradient-to-r from-red-900 to-black rounded-3xl">
          {messages.map((msg) => (
            <div key={msg.id} className="text-white p-3 rounded-lg flex items-center space-x-3">
              <img src={msg.avatar} alt={msg.name} className="w-10 h-10 rounded-full mb-16" />
              <div>
                <p className="font-bold text-sm">{msg.name} <span className="text-gray-400">(@{msg.role})</span></p>
                <div className="h-16 w-64 mt-2 rounded" style={{ backgroundColor: 'rgba(217, 217, 217, 0.8)', scrollbarWidth: 'none' }}></div>
                <p className="text-gray-400 text-xs mt-1">{msg.time} <span className="ml-2">Like</span></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Chat;
