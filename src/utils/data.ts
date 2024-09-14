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

  const rekening = [
    {
      id: "1",
      icon: "/images/BCA.png",
      noRekening: "123-456-788",
      namaRekening: "Nama pemelik rekening",
    },
    {
      id: "2",
      icon: "/images/BNI.png",
      noRekening: "123-456-788",
      namaRekening: "Nama pemelik rekening",
    },
    {
      id: "3",
      icon: "/images/SHOPEEPAY.png",
      noRekening: "123-456-788",
      namaRekening: "Nama pemelik rekening",
    },
  ];

  const penerimaGift = {
    id: "1",
    namaPenerima: "Nama Penerima",
    alamat:
      "Address : Blossom Residence No 20 Jl. Angsana, Pademangan Timur, Kec. Pademangan, Kota Jkt Utara, DKI Jakarta 14410",
  };

  const youtubeLink = {
    id: "1",
    link: "https://www.youtube.com/embed/ycgEPFrIySo?start=2",
  };

  const gallery = [
    {
      id: "1",
      image: "/images/gallery1.jpg",
    },
    {
      id: "2",
      image: "/images/gallery2.jpg",
    },
    {
      id: "3",
      image: "/images/gallery3.jpg",
    },
    {
      id: "4",
      image: "/images/gallery4.jpg",
    },
    {
      id: "5",
      image: "/images/gallery5.jpg",
    },
    {
      id: "6",
      image: "/images/gallery6.jpg",
    },
    {
      id: "7",
      image: "/images/gallery7.jpg",
    },
    {
      id: "8",
      image: "/images/gallery8.jpg",
    },
    {
      id: "9",
      image: "/images/gallery9.jpg",
    },
    {
      id: "10",
      image: "/images/gallery10.jpg",
    },
    {
      id: "11",
      image: "/images/gallery11.jpg",
    },
    {
      id: "12",
      image: "/images/gallery12.jpg",
    },
  ];

  const loveStory = {
    id: "1",
    image: "/images/love_story.jpg",
    stroy: [
      {
        id: "1",
        title: "first meeting",
        story:
          "At the beginning of our acquaintance, we were in the same class when we were in college. He sent a private chat because he knew that we were from the same city. From there we got to know each other.",
      },
      {
        id: "2",
        title: "two become one",
        story:
          "At the beginning of our acquaintance, we were in the same class when we were in college. He sent a private chat because he knew that we were from the same city. From there we got to know each other.",
      },
      {
        id: "3",
        title: "new journey",
        story:
          "At the beginning of our acquaintance, we were in the same class when we were in college. He sent a private chat because he knew that we were from the same city. From there we got to know each other.",
      },
    ],
  };

  return {
    dataMempelai,
    dataCover,
    weddingEvent,
    rekening,
    penerimaGift,
    youtubeLink,
    gallery,
    loveStory,
  };
};

export default data;
