import React from "react";

const stories = [
  { name: "ISITCOM", img: "https://s3-alpha-sig.figma.com/img/11d8/cb1b/206cc6a5919229cb6210826a4ea6e574?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QMKKb4LIcB31NT1852ny5dyOJG2MqdPmo8LpcjFP6PAYnFRzl8xSmiyiJgyk61Fj45gdmcW4DQWg7JVuQxZx7vt7ymmsqzgAXXPqOdNnK6PB-FsOMpzfypqW4nuxGIQe6omPtD8uymP7A4GwrbSoVEgk0KtkLLZQGpRDaKyP1NqsWkwQ0WZ4p4j42wN0Aff4OG7AlwOJAiq95REQYr0uHcPIp67sJxfcyoF12szaHF~rFlKAuA4dMEdi6M7QBfhTFv9sRnOCpwzE0VoWblGr7whXMxNjpSJ~jWNQ1-s-AiQw~7ImI62a96pME0~vz~c--gOI1kuidFKLlGnJBi4MyA__" },
  { name: "FMS", img: "https://s3-alpha-sig.figma.com/img/5db9/55f2/74677ec53a18179039b780b12df46c61?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fG5YjQjxaoEzW~tZ6I8nJrmkRF4oIpGCPFY7zfsVu6TjZWlUr0iTEnPMNF-HVm4r4LEIBM9v-C5q6zPWCCTbf~x~N6Qb7WB-PgfvJUKlzemzzFFw2cY7i3kTI-~hH3zoRjrMWgXgbkVtDdl6MlWp0A1-Y6eZTgXOqhlgbUyuc9xaduTj0bOq5i3IPrBdFJUMLyEhTnecu6Wse9l4Qy5uT1me9vaQxoVVRrR1FcnqgIok00znS1TG5979JV5u3hSIhj2VtrES26hrcJ5pFxR1oz3LeqJ2A8oEZKf3cJK8njL818o1vkQfYIBIh-VcCqKY5cxvrnGpWtKVYn8TeiZ69Q__" },
  { name: "ISSATSo", img: "https://s3-alpha-sig.figma.com/img/c48c/54d0/6a5e0df1008741a5b09a8fdd49cf7c6c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dOoavdVLub7qsc3EY~zQP91oSQjVwNmYPwmKYMn2rjf3AAwrnay5jiYyFo43tF5WKW6exA5G4jBR50eeYpQgnvI-5aRQvQDa1FCJtlMAsb8QHqBqfLY~P~luV7hoOZ1gczPcLQEVmYZQkVq3rpw3~00O7pc65DdMX6k-1fpjF~RITYw2dB2e~18Xd5rkNcS10tYZg24QSrM7AiqmAA4RLgb~Pf53WUr6AuXZQbINybuo4pDKlipnYEWN~zJcJU7n6i3GCzsC1~VYGOipm2bCj8hv9ZTnnTMhdszI3T9tkV0hfT1tOI7RC2lF3P8DVDuKtxPFSbwXkxiiKgCXnwVZsQ__" },
  { name: "EPI", img: "https://s3-alpha-sig.figma.com/img/5fe1/05b9/765579524abe9a02dfafbcd45e3614b1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BMBcDTUMZPslPo2N7m49RIqZ13D~BotnCkLNOsx-it3jtq9Z3f223sZMAT2kN2T543XXcpclt9JtAYKNGLDE2nW-YLOiDZcMJ2bPK1w1QvCdEvQ80KFYOC-sGR6MYf2RrUeLge-~RMRX3-sZBt2ScAOfoA5tv4g-b9dg7DbPAJ99TUCoG1m-YGaYhzw0zWFlTndEK5gu9TblNVFeHqVxCP0tLDbiW0UKdjUqSSRV8fNJVEssLGQZtwkbrVpGWltVnWgu22SKkADJws1sGSxIaoxV0Me~3bBbOVZ6n-0rB9l96O5G00lmGb0qHZ9pl1FrYc4mfobk8Gr70lR8Yr7daA__" },
  { name: "Student Section", img: "https://s3-alpha-sig.figma.com/img/a905/4850/93db31770e856822d73edafbec9658bd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NY8zGy9ZXoKZeZPtHUexfGCJ5VbrcuMmGCFaxxkJIwbzVAB9gMgjSBzCYSY-Mt4b1cdGsYr9OgjsdY4lEwu2~UqWSq8ljtaUj9nvYQSbOw~WF8YeU1JgwpaBYuqXxKacSZxjOQKvZmMiYXt2VxGB9uOKbTJtCGwTsvMyau4qY40toUoS4DHzS32CiOjCpK-FJSg3RZw7jY6PMJ~MODLd8miF3EBB9sZY7UABNOmKEb~y06V2XboAqldYnfA4FtVA7-2Pfdt5EDPOvHqdyQWz-zqjnSc8GwST9Y0AvUmHWw~5mWHcKIPgr6mlEN0O6n2yAuC7C2RfUVxKGD93ZeleLg__" },
  { name: "TBS", img: "https://s3-alpha-sig.figma.com/img/b4a7/9bbd/fe31a540ca1ae6ae010cf8049cd3891c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FNZO7aj5UMFDmu4J3GBrsHRyECM3TCohFy4y3Arb8P~dkdHFXS-uVaj1qfAaje2o~AWScPzqhhs1Q~7Kk3cg2~qfqKHJ5WLUw7UgkdGmj2cDXqBHZV3r5D4ejapf-9CnJcyqiQHlrP3dmkXSNu~KpaovebQk34C9hasJQxi9enhUHcCB1NIm~-ktAy41jxkjbeJC0OxDXsvJ8G2nPOV9a1wcOM-BUneieY1GRkB9kgbjW8y~U5uD1rHu29olspVmHmsOHWclsrLjU2oGYbEazjvLJpSdOiFlWxikiq2DgzlUGILfC6L~Cb0ToR30OVaQlssiRx9zXpKafIhT~B8D4w__" }

];

const Stories = () => {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto whitespace-nowrap" style={{ backgroundColor: "rgba(18, 18, 18, 1)", scrollbarWidth: "none" }}>
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 border-4 border-red-900 rounded-full flex items-center justify-center overflow-hidden">
            <img src={story.img} alt={story.name} className="w-full h-full object-cover bg-gray-300" />
          </div>
          <span className="text-white mt-2 text-sm font-bold">{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
