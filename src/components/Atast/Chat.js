import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const messages = [
  { id: 1, name: "Ahmed_Baya", role: "Community_Manager", time: "1 hour", message: "", avatar: "https://s3-alpha-sig.figma.com/img/9b8e/8692/651d8c3a36bb23fe7d89bb600e9d31d5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FFtWQNqkaK~J3dtqos13mEe8tTboJ4BvaXCtXwekOndOk-S8mkxTZlHdBnkDkBD2yOAY1KsGEtSJQc1xgoXU0AU7BrauUnE2UeA4jotbm1VsqS~J6jWqYimFxDwHo3J1Bd89~jyJ0kb4lLsPCBVkqBXZrM0LBtr28SXAljD5aJTSe4JuZNaW5XCY6-JNvYxGX6vzNIcTSgSAIuGQd-akUanKmN4pSaJ5VoJ699phF9iSA6xnL6CdAfMEyol4kFnpE0D3oR82znLfeUcvcTQ2XmWI400NTtyZxdCbv2SZ8HfPNhdO6~LQ30MqrIm9zIPEkvmpzZIi5KCKhlhqgBoLOA__" },
  { id: 2, name: "Rima_Jerbi", role: "Vise_President", time: "3 hour", message: "", avatar: "https://s3-alpha-sig.figma.com/img/af54/245d/e6472a4a5b92db375e400189c4b34406?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iLNtQcIaUWj8-88gz8UHhPWVfLFYKOAeHH4f9M9-NXApkK60pRIUMUVwxreeiYslAK422cNJAWNF63ZtOcJm7xX3KXFqXMlophC4eqDXgJpCvb5C9TJSEeoBr95Fdrr6UlYBF3lNn1Xzz5drP8Zz7R2ADPFqDgiyL8FO6nhDjlXaGLTNCddiI-57dwHHG~QAdYJkus4TnaJqBNbQbqoKW85umM3O~ra1W6GXHlPCS5oVqWqburNAEohq99yPoMeuNWShINNRs7RuKIqTq47E7x~MYS8z1ooPS~KIecMETX--MqicMu-~LjTSBM7Nkr4WaKGO3GziCCWkXemtEMwHrQ__" },
  { id: 3, name: "Ahmed_Baya", role: "Community_Manager", time: "11 hour", message: "", avatar: "https://s3-alpha-sig.figma.com/img/9b8e/8692/651d8c3a36bb23fe7d89bb600e9d31d5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FFtWQNqkaK~J3dtqos13mEe8tTboJ4BvaXCtXwekOndOk-S8mkxTZlHdBnkDkBD2yOAY1KsGEtSJQc1xgoXU0AU7BrauUnE2UeA4jotbm1VsqS~J6jWqYimFxDwHo3J1Bd89~jyJ0kb4lLsPCBVkqBXZrM0LBtr28SXAljD5aJTSe4JuZNaW5XCY6-JNvYxGX6vzNIcTSgSAIuGQd-akUanKmN4pSaJ5VoJ699phF9iSA6xnL6CdAfMEyol4kFnpE0D3oR82znLfeUcvcTQ2XmWI400NTtyZxdCbv2SZ8HfPNhdO6~LQ30MqrIm9zIPEkvmpzZIi5KCKhlhqgBoLOA__" },
  { id: 4, name: "Eya_Rejeb", role: "President", time: "1 day", message: "", avatar: "https://s3-alpha-sig.figma.com/img/268f/b9ea/46a99a916a05b59109ef230b9a5d7883?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QmuKVySUxFQOx-5ZGeETbQUbNEN8-RMQIR4-mLqfBHVCVupKodJteACvvuEXNjWwKirelBSBNYcnNZxtxXMUYJ~AqFXLUfaPj2HHwTj~1xmfK6QVmVWPE~AokMVR9r--0mJA4vl8MYYgf2EScK22bLwm7J2QjYgBq0-89ytIku24yDpRyChgobP9deeF5J~jllSCInTJS5WfGsyspyRsyNaktUwXBGexx8F0rhzMfD-MavohNIUcpx~BJeTQm7c6KmnAbh-81nznsXe0x2kfs2u4vHwNJPSX8ZemJDWqXu-g9KEG-tpe8TGiOxe61Mr0e-uD3mJBPpUTJHcwvtd54w__" },
  { id: 5, name: "Eya_Rejeb", role: "President", time: "1 day", message: "", avatar: "https://s3-alpha-sig.figma.com/img/268f/b9ea/46a99a916a05b59109ef230b9a5d7883?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QmuKVySUxFQOx-5ZGeETbQUbNEN8-RMQIR4-mLqfBHVCVupKodJteACvvuEXNjWwKirelBSBNYcnNZxtxXMUYJ~AqFXLUfaPj2HHwTj~1xmfK6QVmVWPE~AokMVR9r--0mJA4vl8MYYgf2EScK22bLwm7J2QjYgBq0-89ytIku24yDpRyChgobP9deeF5J~jllSCInTJS5WfGsyspyRsyNaktUwXBGexx8F0rhzMfD-MavohNIUcpx~BJeTQm7c6KmnAbh-81nznsXe0x2kfs2u4vHwNJPSX8ZemJDWqXu-g9KEG-tpe8TGiOxe61Mr0e-uD3mJBPpUTJHcwvtd54w__" }
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
