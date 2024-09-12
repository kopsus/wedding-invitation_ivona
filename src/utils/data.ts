const data = () => {
  const dataCover = {
    id: "1",
    image: "/images/cover.jpg",
    video: "/video/video.mp4",
  };

  const dataMempelai = [
    {
      id: "1",
      nama_lengkap_pria: "Jay See Low",
      nama_lengkap_Wanita: "Micheala Jesisca",
      nama_panggilan_pria: "Jay See",
      nama_panggilan_wanita: "Micheala",
      nama_ayah_pria: "Eldest Son of Mr. Swee Lik Low",
      nama_ibu_pria: "Mrs. Sock Tin Tan",
      nama_ayah_wanita: "Eldest Son of Mr. Swee Lik Low",
      nama_ibu_wanita: "Mrs. Sock Tin Tan",
      instagram_pria: "https://www.instagram.com/",
      instagram_wanita: "https://www.instagram.com/",
      timeline: "2025-6-28",
      foto_pria: "/images/groom.webp",
      foto_wanita: "/images/bride.webp",
    },
  ];

  return {
    dataMempelai,
    dataCover,
  };
};

export default data;
