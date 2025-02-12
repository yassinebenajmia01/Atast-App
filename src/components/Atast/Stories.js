import React from "react";

const stories = [
  { name: "ISITCOM", img: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/270085024_101991029031263_5855595920102629950_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EMVk_m5yK8IQ7kNvgHc3fpp&_nc_oc=Adh90Nai0XdRrRds_BmCj4THhUIHjM_RDnSIDQYjO2Wp5NeRDQLkgl-pk_oRpd9ejCg&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=AUuej_cCBUPDlwR908Eyaii&oh=00_AYBpIGlOmOoEJRWQZOYGgBR37yHZv18673G0obR15eHsaQ&oe=67B153D5" },
  { name: "FMS", img: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/307040906_388423186832397_8791958202986286510_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rwQjfvqqj6EQ7kNvgED8QF7&_nc_oc=Adi4OojRVLIZgfIforKqIXXAV0spgs2M4N63ZNNCxuj--eTwwrtArYz3F63rNhQemJg&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=AATdDZBEj-ubEpaJLJPFeBK&oh=00_AYAQS23AWNgHlvOl08ZFxlwNCoHWvKzMlOUckBxwt7ZRxA&oe=67B15FEE" },
  { name: "ISSATSo", img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/271904655_966688133979034_2376239177038694652_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bMoz0N8BMaUQ7kNvgGx8Ovo&_nc_oc=AdjP6ph1LkpjtKiqudZULDSWcJHlsoKe-ewnP6CBfnysdsg7yznFb5-Nz_PDkymDhns&_nc_zt=23&_nc_ht=scontent.ftun10-2.fna&_nc_gid=AuAmT9xzVBW6VmXOI_24Ygd&oh=00_AYClsNfR8aDcTD7HYmfEWVcN6OEx-IGVjkLmmcpfE3VOXQ&oe=67B15E3F" },
  { name: "EPI", img: "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/306918786_401439698851167_607665771533365062_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=y-O-C0jITFMQ7kNvgF3qyqX&_nc_oc=Adh8OYVncovINZmj-fNAg1ffi8FSyDLMPD66UlXa7mUl8_VipcKFUQX5nOp01LfP-P4&_nc_zt=23&_nc_ht=scontent.ftun10-1.fna&_nc_gid=A9Mniez4Dwuf2gW8abvGzU0&oh=00_AYBxIV1YxJiMNGpOC_2HTBwGElBQVAshDF0ThYEqFsSdBQ&oe=67B17DE5" },
  { name: "Student Section", img: "https://s3-alpha-sig.figma.com/img/6f88/a6dc/1756e446fa78dc5ccb59b81bc1121448?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KrARwPqQnYYjD~JscX93hsQDjiiJBMIW32SR1AKbFmu2BLatM9upR49JWx7c7GvxsmH7QsooMkNim2rJclGdi~7x0g-zbyQW04COLxfddJXDOJDNvWmuU2z0gtOAqn2M9MDaOEHnI-V8RVwGvqL3Bf6i5F0uteObszXOVuWtaEzr3-wONWVADgE51LFVyIJNyc2LdoEPhJ~k~vOEra~hvzTOO8AKv6~aq4RI3tkfxLFL-XKxVplsh1~ulAGikpYsarHKvAZsmO5A3N9Sz4zhgulCFe6ZwV2hFubdT6ds5aCFtlFN0Fdj5GfAmbCfWENvZdj4ZAChxZZfPMBx4BAimg__" },
  { name: "TBS", img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/272268996_104916528766017_8733698649832292543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3Nx9JzLI5zsQ7kNvgGBqsjN&_nc_oc=Adgm6K8dAZntQSjlJCVfrMRjK8Fq2O5pvcITn30TJ2mQA8zvA2oaiHrkvJBd_IzeqWw&_nc_zt=23&_nc_ht=scontent.ftun10-2.fna&_nc_gid=A_LSKp5yCXeGSToTsdJ13Gx&oh=00_AYA2lp2cJYDAzSI_bDjE-D1AR1yDy87UraNSIqt7lKpD-A&oe=67B17E72" }

];

const Stories = () => {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto whitespace-nowrap" style={{ backgroundColor: "rgba(18, 18, 18, 1)", scrollbarWidth: "none" }}>
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">
          <div className="w-20 h-20 border-4 border-red-900 rounded-full flex items-center justify-center overflow-hidden">
            <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-white mt-2 text-sm font-bold">{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
