import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const membersData = {
  boardMembers: [
    { name: "Eya Rejeb", role: "President", avatar: "https://s3-alpha-sig.figma.com/img/268f/b9ea/46a99a916a05b59109ef230b9a5d7883?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tFcphIX6vtF27EJT8z9uv94Thq-qS1M2D~f8GMwgmfbOZOjOS5KnyeaT-s6vjaA2-6VprIEWSQZN21Ts8uGpgKcdB9o1ABwtY-dXP8-c5UKfJY7OiG9JjHgL9i-qoMN0I5EgbWOG1LMUKD2Cqwbp2dhgR~s0hFEaZuIrGYjg~TyHR9W-MFfiy2j4HQb4uzVCbbn3DezfFDoHrui3F0N8PoPTkqaayTJuwf9qB4KPlcr7t9a-a-Vn8hdZ4PFIrSCKVHx4DTMTWPFzwyw1ihyVAGyLuJE1-1XW2FwJj3TsyN1wqb0N99Of6N9omnChdZayGIkalnY9GZwZFlhGZi6xUw__" },
    { name: "Rima Jerbi", role: "Vice President", avatar: "https://s3-alpha-sig.figma.com/img/af54/245d/e6472a4a5b92db375e400189c4b34406?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kh3LNEA3BM2yH1Iph~w1SNsgIA3L2FErQEgZn7a98B11PfoeKhhGkCwZuDV32aQysTfoVLanelp38Z0Em11u9LJRU9xAlxBeehxcWqP9YeTTXJKVew-e1pZZRQyUTQMZoDpcQ8MdV7TQQw98JjebBQjNyDANdr2cA9LxCX1776e52ozku0fFaacoomwjFaipIos~y3Tf8gORcRWRKWrVWgCEabtH4PIIdRDqLE7~5DFDVZWZ4aiHCGxJSoruhRN0Nvg3pZ8kjJkxjwyI~PS7F~9xZ17XLaVHQPHwfPTQ36y~Fy13VHVUvoxMs5vWcre8Nu-6j-6~Da2jU8MQ7mK7kw__" },
    { name: "Yosser Ammar", role: "General Secretary", avatar: "https://s3-alpha-sig.figma.com/img/89b7/6739/8356e8b1913f863fc2ab604835872a0a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QGLMldaiktN2EkfPoP~MjQ79kVFjDoZi6tdfA~q4YvOIZRiIazGVMY9QEpl4F3QWB8DiXHf-BASLa7kKJhMa57XFTQi5qVHguobWVNih~BTcuHUicNTg7mNjIG8tcdS4Q3K8cb9-GQRnhovZ97rPF2ALvuZkWsWoKgYmBUaMBfVpAK2~EHTB9A8T4Z4Ty4jr~7mYHGatrlzj3JeyYBUHHgIgiDtSIywbjOYQn2zHHxR0R7l-VugFigDPsJfPgvsXaqtRzIxMkXtZ6yE8eZqJ8symnO9N6Qndb9IY1-8lXgSu15MGQ-AJ3WSTtWVke7l4Ne0S1mYC0YXSzQrMavyGAA__" },
    { name: "Emna Masri", role: "Financial Manager", avatar: "https://s3-alpha-sig.figma.com/img/dfbf/49ad/c71caa5742e0f0e7fe4bcfc211ae969c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dLqIvpV4QwW4OzvwSTncF~kZDiOqu6XbCKwSheTWODzl1tFTErFNSzbAZkkbJ3h1mGSm1rormVOXx44fZZnJ8HWt3gXHevbO3eORMGs3Mak4rLAURa~WrjOO2dT8B2V2rke8yREAUC2QEyv01JHygrXpbsCniyx-C6mrecA1wlTrbHkPi6qvbdNH~eEfBy83ATWw736wyqEQshFInor~DJmXG5uDbcOudLiG8QWEXR1guvHY52iIvmYzYUYKIgmTZf5LqB4QyZpIurFQ6TdgTDj4k6E8q-jMwjHgJlLI76KzsM4UbJ179GMNbjtPBdV8PG9wHI607bqx29S5V6yDmg__" },
    { name: "Ahmed Baya", role: "Community Manager", avatar: "https://s3-alpha-sig.figma.com/img/9b8e/8692/651d8c3a36bb23fe7d89bb600e9d31d5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bYiPokYBF7n67HeRpRdRg~F0uwhS5Dze7vLRlFlACoEq3V3XXRzvPOVjamNsuIv4bnWm35JwVy0CUwbvamCg7kzN1HJ0jaVH9~i7Fq6P8aWzHYEo4vkvgNoGSm2zH0WH3VvAG1oaTG9HbELqxRbdrH3WBFq9kaCUxUhI-NV9o8Uh6tPK5wE7rpks~qHnCyMfboJEpGghwVJsxLtaf6gUSPY1uQpaa9UBrpcls7jgJ3mrnZZjpxxg~itmhR3JsupheQuobNLXa2uIT8boAFRslSopuDNho0EX1sCOSTmjQmVcOrqhsnBohsLqdUkXh1GqqgnjL9G3UmjlmB63-R1mkw__" },
    { name: "Dheker Kraiem", role: "HR Manager", avatar: "https://s3-alpha-sig.figma.com/img/1ec6/a884/9c3d7964f03727a39746dbd463734d4c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WvrEdxhoYRegajgQuDtsHLcsopJEqsBuHY4vRzHbR1lZJmkkdapjpw4uoq5HJxD~gnIMxHJ4ruIzCx~zO1vIO~2qXwW-MSC43sygM2PityXIcN3IKTT9NeqYKd6BVtWGpJgtrpJ9ihkgeS15-QUvwZQtTZ2a49OPqdzxKJq6GR2s9SgK3zlb8vkZfdWimwAaoLAE5qb-yUEDuMopOqv91MgohUu826riOFS8lJ78PHM3AGwxTFNCHQR-IuIr-2H05eWlpjYPuC10p1AlZV~dc0jhB6HzN3EWtMFaYATrK6wWvGob4ywo1tATq7jd1wUlqflNHD5yreXniOCuOCZsGA__" },
    { name: "Ghofrane Bouallegue", role: "Sponsoring Manager", avatar: "https://s3-alpha-sig.figma.com/img/1962/02c0/7e52f2e9bfb21be6ac26999dec0ab59f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E27wKyu5l81gq8xTTHEurqHmhziK-gq1g5-TMINLrHMFSUPVYDNZRBtP5DH9Yeg-jPs0A~tESLKtMXTskJRzeixGzBLIIW72uGWNzHIif~L~MQpdzbZ0D-JWPt2b8gIvFmq7k2qfTdmmYx4BB4usBYXZwvUD3~X1GOpApPoo-2lkCKWjGO9KBYAn~HAEcX7X4vSCaCAdZb16~HebJE7fFhoFxyjlvWAf~txgQiEX8Z54XWOV6y4cvi8uxHDav6xT5PNdoDQZJ2SeEKsShwVmT55BtRg9szT0aqDqm8R6h6ZaPxniBm-XFxVnnx4IhkoKzWDyG-05JNRQFvbwgLTPaw__" },
    { name: "Fares Mrabet", role: "Event Manager", avatar: "https://s3-alpha-sig.figma.com/img/c714/e4b7/922ee1284ea5bbf871926cd951b7f270?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=McLRV1cy-yoWL7fUKGf~Vaai2Rsbttf8873qljA05Jfeld0zCrAYRXSjPCvmCaqEad5RouKJJT4yv-jXpcpGaRw-nYHnqpJcvJbAIg-OxEzXwxFAZNpImPVZYmw8UA8dN9qEk2wMQjI17ECOkDtKzDiJlp-UYzbZeN~ssIec1UQGP6rVxeJAQFgN6CyeQbz8zfo53mGb9d~5JycESq0gZtwrOWfz-aBfV6Pd2OZlKvoRVLhwupeOg0Pr-f8wpk5oG1td9I7Vf~MjkzIf77cV2ByoK~6sq09-9CK52AiWcGZ0Bsx902ZWf-6MWupyhZn8ZFyGiPiaKwhF~krPAHdXNA__" },
  ],
  members: [
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z7GhUarGqi3GfO5CjMjyXEOwRXH24x8scAvgWpFrcc6TRGQMIEV7SqdPZm7nRsKIjzGnheleepQWByOKEn7TAFXZVZg~QQJIu6iKTe5rNFIsMOLqPIVN36E6xbPvUcqHgzsD7yZzxs6OubF7IMLmDuJ9wRE~oJ4w4cPduXiGjRnN98KFZPiEiSkWCj0-05wMWp8d8TIrDjZ8MZVEpNJtLDBhRmnveWbpVvkfUbhG2EazjEDVyJ31zNBhJD2tp3ZwTmPDdUhGO7yQU0J6EO1mpuVf0ZowM5qXCuN6ogfQUxxlkQjmXJMBM1S00sWNgXD4YXQUNKay6iR4lbIdkaTx9A__" },
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z7GhUarGqi3GfO5CjMjyXEOwRXH24x8scAvgWpFrcc6TRGQMIEV7SqdPZm7nRsKIjzGnheleepQWByOKEn7TAFXZVZg~QQJIu6iKTe5rNFIsMOLqPIVN36E6xbPvUcqHgzsD7yZzxs6OubF7IMLmDuJ9wRE~oJ4w4cPduXiGjRnN98KFZPiEiSkWCj0-05wMWp8d8TIrDjZ8MZVEpNJtLDBhRmnveWbpVvkfUbhG2EazjEDVyJ31zNBhJD2tp3ZwTmPDdUhGO7yQU0J6EO1mpuVf0ZowM5qXCuN6ogfQUxxlkQjmXJMBM1S00sWNgXD4YXQUNKay6iR4lbIdkaTx9A__" },
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z7GhUarGqi3GfO5CjMjyXEOwRXH24x8scAvgWpFrcc6TRGQMIEV7SqdPZm7nRsKIjzGnheleepQWByOKEn7TAFXZVZg~QQJIu6iKTe5rNFIsMOLqPIVN36E6xbPvUcqHgzsD7yZzxs6OubF7IMLmDuJ9wRE~oJ4w4cPduXiGjRnN98KFZPiEiSkWCj0-05wMWp8d8TIrDjZ8MZVEpNJtLDBhRmnveWbpVvkfUbhG2EazjEDVyJ31zNBhJD2tp3ZwTmPDdUhGO7yQU0J6EO1mpuVf0ZowM5qXCuN6ogfQUxxlkQjmXJMBM1S00sWNgXD4YXQUNKay6iR4lbIdkaTx9A__" },
    { name: "Flen Foulani", avatar: "https://s3-alpha-sig.figma.com/img/3706/f385/ed6b147558f49058ca4b05a1b70b71ff?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z7GhUarGqi3GfO5CjMjyXEOwRXH24x8scAvgWpFrcc6TRGQMIEV7SqdPZm7nRsKIjzGnheleepQWByOKEn7TAFXZVZg~QQJIu6iKTe5rNFIsMOLqPIVN36E6xbPvUcqHgzsD7yZzxs6OubF7IMLmDuJ9wRE~oJ4w4cPduXiGjRnN98KFZPiEiSkWCj0-05wMWp8d8TIrDjZ8MZVEpNJtLDBhRmnveWbpVvkfUbhG2EazjEDVyJ31zNBhJD2tp3ZwTmPDdUhGO7yQU0J6EO1mpuVf0ZowM5qXCuN6ogfQUxxlkQjmXJMBM1S00sWNgXD4YXQUNKay6iR4lbIdkaTx9A__" },

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
