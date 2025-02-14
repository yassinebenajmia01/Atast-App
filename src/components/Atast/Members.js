import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const membersData = {
  boardMembers: [
    { name: "Eya Rejeb", role: "President", avatar: "https://s3-alpha-sig.figma.com/img/268f/b9ea/46a99a916a05b59109ef230b9a5d7883?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QmuKVySUxFQOx-5ZGeETbQUbNEN8-RMQIR4-mLqfBHVCVupKodJteACvvuEXNjWwKirelBSBNYcnNZxtxXMUYJ~AqFXLUfaPj2HHwTj~1xmfK6QVmVWPE~AokMVR9r--0mJA4vl8MYYgf2EScK22bLwm7J2QjYgBq0-89ytIku24yDpRyChgobP9deeF5J~jllSCInTJS5WfGsyspyRsyNaktUwXBGexx8F0rhzMfD-MavohNIUcpx~BJeTQm7c6KmnAbh-81nznsXe0x2kfs2u4vHwNJPSX8ZemJDWqXu-g9KEG-tpe8TGiOxe61Mr0e-uD3mJBPpUTJHcwvtd54w__" },
    { name: "Rima Jerbi", role: "Vice President", avatar: "https://s3-alpha-sig.figma.com/img/af54/245d/e6472a4a5b92db375e400189c4b34406?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iLNtQcIaUWj8-88gz8UHhPWVfLFYKOAeHH4f9M9-NXApkK60pRIUMUVwxreeiYslAK422cNJAWNF63ZtOcJm7xX3KXFqXMlophC4eqDXgJpCvb5C9TJSEeoBr95Fdrr6UlYBF3lNn1Xzz5drP8Zz7R2ADPFqDgiyL8FO6nhDjlXaGLTNCddiI-57dwHHG~QAdYJkus4TnaJqBNbQbqoKW85umM3O~ra1W6GXHlPCS5oVqWqburNAEohq99yPoMeuNWShINNRs7RuKIqTq47E7x~MYS8z1ooPS~KIecMETX--MqicMu-~LjTSBM7Nkr4WaKGO3GziCCWkXemtEMwHrQ__" },
    { name: "Yosser Ammar", role: "General Secretary", avatar: "https://s3-alpha-sig.figma.com/img/89b7/6739/8356e8b1913f863fc2ab604835872a0a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AyQHXor~~2fDDK0Goy2DrRDICij2dmBwT9opij5RMtPOT3KajaKmYyZKYpyUYV20mNUTzP4tcQO1UkkXPpvQc~9H5zGtIKrB-oLBneCdyGCDyQdHoGGXJroMw2illyRbioruNBYEKcrB3Muopk-29sk88vG9v7OeS37j6CIX4DecZalAB5nKYMV884oaCqIvB28VOYJQmHDoLsYFel~XesCluFD6RK3iEvEXvFLRC~Ly9YHYoHxa2LgVHCWhtsdp1f6BsEcSissMqovz5mD8wc652QzV6FBduIHHwAmvnJ1zTXaXtUYw~qzz5XGvSBrKA2rsxSQorv7u3g4AytlJlA__" },
    { name: "Emna Masri", role: "Financial Manager", avatar: "https://s3-alpha-sig.figma.com/img/dfbf/49ad/c71caa5742e0f0e7fe4bcfc211ae969c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A2lQH9y87LbGur4ZS8A-ZXPjdGjQR1qh6rOBGSaerIj-ylzlJcSlMlJJW~5JSExOCIkYciHEja4znKbDkGKHqFLxaJqYmHBoX6rRYjoDxNjbOxMzTqY-XJ-6V2vZ6EjQ1JHs3HfPEbh07A0K7kz-DgaFaiSy7VLq4wM7IWPhnhiYWcXV5iUS8vjIeFfvuqNdLSCdNhq~DQ9urI7xNM3rPy0P3dGsHjpxsWnC18YETyW5eS1OhqvHdVkfrKrGEJgOHAb-HheIoKJ7uaIPrV92Yo7WuIuf1Woy-JkUnaI6kQ4Hg22Naqlkx8RGDPYJHXR7NtZLw2cfy6paxFViFTn07g__" },
    { name: "Ahmed Baya", role: "Community Manager", avatar: "https://s3-alpha-sig.figma.com/img/9b8e/8692/651d8c3a36bb23fe7d89bb600e9d31d5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FFtWQNqkaK~J3dtqos13mEe8tTboJ4BvaXCtXwekOndOk-S8mkxTZlHdBnkDkBD2yOAY1KsGEtSJQc1xgoXU0AU7BrauUnE2UeA4jotbm1VsqS~J6jWqYimFxDwHo3J1Bd89~jyJ0kb4lLsPCBVkqBXZrM0LBtr28SXAljD5aJTSe4JuZNaW5XCY6-JNvYxGX6vzNIcTSgSAIuGQd-akUanKmN4pSaJ5VoJ699phF9iSA6xnL6CdAfMEyol4kFnpE0D3oR82znLfeUcvcTQ2XmWI400NTtyZxdCbv2SZ8HfPNhdO6~LQ30MqrIm9zIPEkvmpzZIi5KCKhlhqgBoLOA__" },
    { name: "Dheker Kraiem", role: "HR Manager", avatar: "https://s3-alpha-sig.figma.com/img/1ec6/a884/9c3d7964f03727a39746dbd463734d4c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e5VeIWmjX7s2N1-Vy~rQ7FlBQr-V~7DMDjy1~KNk3eNC5lkEuRtQ3QL3azxyYFBULrmJcXkWV7SW6okIIDiMkCC9dUDyBM1oJb9pmghnXkQ3LJhZFsHGkMNxU-qGQoSgFyJ4Xwss3X0T6fc3W~rXmR8IXJH0JREHu8Efyk7YMtu8-Uh3IDGWeTqM1ACNZxUWb-GVSDglCdKyZDimp0EL2e5mygkHjvEmAgLRFOz2-dW2ab0-fYunJOeX~guSsLEEvacaLAhEBJoz8GXypqaqZYCB0uUcTVfOhXVDgLNfmqx6N6Gsooi7oWouQrhvhFF3RAkHEwIip3gsjnc6W~uiDw__" },
    { name: "Ghofrane Bouallegue", role: "Sponsoring Manager", avatar: "https://s3-alpha-sig.figma.com/img/1962/02c0/7e52f2e9bfb21be6ac26999dec0ab59f?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lOcryqHpRUDG-YyJTkwCutoxIwUxxegeQrPSLNETP2-p8ujTJJYHcnrB3Dq7t9aX9ptuJC5LyM7opHY9D03r2dpNuqZHExjVFeMplvqSTQRFlZikjXYV-bRsFmnMJ4qi7IbB7gE-oigqeEXpQMff02VJSJsf5kn9Neawghcmh~h2dIhKJyN~jsQkTfbOQI~VpiDQO3Nv~T8xJM9cWbLJBPHG2Dd8YGy39P41VpiZHlpB8p6YZsEh2WZV5QVIjn5-rESoXtw5XDNCIFZf6GsfiswUBEuPccUcr5jQRiY0fNf4gej5uFaucOz5NWIZiFvP1KOUv1pHrEovuUGNgNKZIg__" },
    { name: "Fares Mrabet", role: "Event Manager", avatar: "https://s3-alpha-sig.figma.com/img/c714/e4b7/922ee1284ea5bbf871926cd951b7f270?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NYcDBVRIVA4yKTVP3I0ZELCgygp3rC9a62WIgV2d4nzA1GVpc0bboxttyezetZSmfCznKVgbM3PhdhvA6XqKk6paoTHanCumKG06n5CWbvuij3I61uGFN5YlAehqyK1DT8JddagSJ-Aj5lNJEa1ZC922EoQN9hXquQOmx2WSPQlqR31Hw9mBch-mupKW08BMfhtKHapUs5Dk67QPcwO5-1i~Rona1blRZVibn~bxpRPHioSS3~wVNzasyKc7vq4GVDqqJh75ZzxZgYZrArz~WH4jQfDUmhdWlbaa8Giuon2GQ9y8E54OsRDsR7NQZqYkoGqYklbHatKsiYn-7zkZ4g__" },
  ],
  members: [
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PVKyGgEVE2QB2BXMp4rwgSm3cy73XlHwWK9bOYHw1n6lFObcLYkXHnFfuIe1EaV7XSJ8xQJv-c747d1YpIplB-j8Pp4aR62Njd8IIXeYSQioSfQQsMsf0YFXSFbSk7ymm9TO-IbmpbZ1MFTDq5-wypoLMVeKZ~xz300yzOR9XGjfhS9O81bNOQWhUGljcWksCwItWj9mRvGQY~6CuHoQOsTZLGv9IWfYe7gx48yV5e7IO-xl0PlE-kXFDGZj6vCQbiwajd112aZAbD7ha~~rLjAj88kzW83VSB0axddS4LzdHzldxtJhWLFRhxz39noVfF99n7mHF-yQicSzrV0UoQ__" },
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PVKyGgEVE2QB2BXMp4rwgSm3cy73XlHwWK9bOYHw1n6lFObcLYkXHnFfuIe1EaV7XSJ8xQJv-c747d1YpIplB-j8Pp4aR62Njd8IIXeYSQioSfQQsMsf0YFXSFbSk7ymm9TO-IbmpbZ1MFTDq5-wypoLMVeKZ~xz300yzOR9XGjfhS9O81bNOQWhUGljcWksCwItWj9mRvGQY~6CuHoQOsTZLGv9IWfYe7gx48yV5e7IO-xl0PlE-kXFDGZj6vCQbiwajd112aZAbD7ha~~rLjAj88kzW83VSB0axddS4LzdHzldxtJhWLFRhxz39noVfF99n7mHF-yQicSzrV0UoQ__" },
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PVKyGgEVE2QB2BXMp4rwgSm3cy73XlHwWK9bOYHw1n6lFObcLYkXHnFfuIe1EaV7XSJ8xQJv-c747d1YpIplB-j8Pp4aR62Njd8IIXeYSQioSfQQsMsf0YFXSFbSk7ymm9TO-IbmpbZ1MFTDq5-wypoLMVeKZ~xz300yzOR9XGjfhS9O81bNOQWhUGljcWksCwItWj9mRvGQY~6CuHoQOsTZLGv9IWfYe7gx48yV5e7IO-xl0PlE-kXFDGZj6vCQbiwajd112aZAbD7ha~~rLjAj88kzW83VSB0axddS4LzdHzldxtJhWLFRhxz39noVfF99n7mHF-yQicSzrV0UoQ__" },
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PVKyGgEVE2QB2BXMp4rwgSm3cy73XlHwWK9bOYHw1n6lFObcLYkXHnFfuIe1EaV7XSJ8xQJv-c747d1YpIplB-j8Pp4aR62Njd8IIXeYSQioSfQQsMsf0YFXSFbSk7ymm9TO-IbmpbZ1MFTDq5-wypoLMVeKZ~xz300yzOR9XGjfhS9O81bNOQWhUGljcWksCwItWj9mRvGQY~6CuHoQOsTZLGv9IWfYe7gx48yV5e7IO-xl0PlE-kXFDGZj6vCQbiwajd112aZAbD7ha~~rLjAj88kzW83VSB0axddS4LzdHzldxtJhWLFRhxz39noVfF99n7mHF-yQicSzrV0UoQ__" },

  ],
};

const MemberCard = ({ name, role, avatar }) => (
  <div className="bg-gradient-to-r from-red-900 to-red-700 text-white p-4 rounded-lg shadow-lg flex items-center gap-4">
    {/* If avatar exists, show it, otherwise show the first letter */}
    {avatar ? (
      <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
    ) : (
      <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center text-xl font-bold">
        {name.charAt(0)}
      </div>
    )}
    <div>
      <p className="font-semibold text-lg">{name}</p>
      {role && <p className="text-sm text-gray-300">@{role.replace(" ", "_")}</p>}
    </div>
  </div>
);

const Members = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-md mx-auto min-h-screen text-white" style={{ scrollbarWidth: "none", backgroundColor: "rgba(18, 18, 18, 1)" }}>
      {/* Back Button */}
      <button className="text-white absolute left-6" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-6 h-6 mt-4" />
      </button>

      {/* Title */}
      <h1 className="text-gray-100 text-2xl font-semibold mx-auto text-center">Members</h1>

      {/* Board Members */}
      <h2 className="text-lg font-semibold font-[poppins] mt-6 mb-3" style={{ color: "rgba(115, 115, 115, 1)" }}>Board Members</h2>
      <div className="space-y-3">
        {membersData.boardMembers.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} avatar={member.avatar} />
        ))}
      </div>

      {/* Members */}
      <h2 className="text-lg font-semibold font-[poppins] mt-6 mb-3"style={{ color: "rgba(115, 115, 115, 1)" }}>Members</h2>
      <div className="space-y-3">
        {membersData.members.map((member, index) => (
          <MemberCard key={index} name={member.name} role={"Member"} avatar={member.avatar} />
        ))}
      </div>
    </div>
  );
};

export default Members;
