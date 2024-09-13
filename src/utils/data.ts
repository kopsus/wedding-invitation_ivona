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

  const weddingEvent = [
    {
      id: "1",
      title: "Holy Matrimony",
      date: "10/22/2024",
      timeStart: "09.00 - 11.00",
      timeEnd: "11.00",
      place: "GBKP Cilitan",
      maps: "Jl. Mayjen Sutoyo No.51, RT.2/RW.8, Cililitan, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13640",
    },
    {
      id: "2",
      title: "Reception",
      date: "10/22/2024",
      timeStart: "09.00 - 11.00",
      time: "09.00 - 11.00",
      place: "Jambur Djawata Function Hall",
      maps: "Jl. Raya Jatiwaringin No.49, RT.001/RW.010, Jatiwaringin, Kec. Pd. Gede, Kota Bks, Jawa Barat 17411",
    },
  ];

  return {
    dataMempelai,
    dataCover,
    weddingEvent,
  };
};

export default data;
