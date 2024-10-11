const data = () => {
  const dataCover = {
    id: "1",
    image: "/images/cover.jpg",
    video: "/video/video.mp4",
  };

  const dataMempelai = {
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
  };

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
    image2: "/images/groom&bride2.jpg",
  };

  const timeline = {
    detailInvite:
      "We invite you to join our happy day. Your presence at our wedding is an honor for us",
    startDate: "2024-09-22T13:00:00",
    endDate: "2024-12-12T16:00:00",
  };

  const audio = {
    audio: "/audio/Indonesia-Raya.mp3",
  };

  const rsvp = [
    {
      id: "f33e",
      nama: "test",
      ucapan: "asd",
      konfirmasi_kehadiran: "Hadir",
      waktu_submit: "2024-08-19T12:04:19.406Z",
    },
    {
      id: "a65d",
      nama: "s",
      ucapan: "s",
      konfirmasi_kehadiran: "Tidak Hadir",
      waktu_submit: "2024-08-19T12:18:11.143Z",
    },
    {
      id: "3dff",
      nama: "cas",
      ucapan: "asd",
      konfirmasi_kehadiran: "Masih Ragu",
      waktu_submit: "2024-08-19T12:18:16.687Z",
    },
    {
      id: "6580",
      nama: "asdasd",
      ucapan: "asdasda",
      konfirmasi_kehadiran: "Hadir",
      waktu_submit: "2024-08-20T16:40:28.253Z",
    },
  ];

  const Banner = [
    {
      id: "1",
      img: "/images/bg.jpg",
      type: "image",
    },
    {
      id: "2",
      img: "/video/banner_video.mp4",
      type: "video",
    },
  ];

  const TamuHadir = [
    {
      id: "1",
      name: "Dr. Ahmad Zaki Prabowo, M.Si.",
      vip: true,
    },
    {
      id: "2",
      name: "Siti Aisyah binti Rahmat, M.Pd.",
      vip: false,
    },
    {
      id: "3",
      name: "H. Budi Santoso, S.E., Ak., C.A.",
      vip: false,
    },
    {
      id: "4",
      name: "Prof. Dr. Maria Ulfah Sari, S.H., M.H.",
      vip: false,
    },
    {
      id: "5",
      name: "Ir. Yulianti Ningsih, M.Sc., P.Eng.",
      vip: false,
    },
    {
      id: "6",
      name: "Rudi Hartono, S.T., M.T., C.Eng.",
      vip: false,
    },
    {
      id: "7",
      name: "Dra. Anita Sari Putri, M.Psi., Psikolog",
      vip: false,
    },
    {
      id: "8",
      name: "Dr. H. Joko Widodo, M.M.",
      vip: false,
    },
    {
      id: "9",
      name: "Syaiful Hidayat, S.Pd., M.Pd.",
      vip: true,
    },
    {
      id: "10",
      name: "Nani Susanti, M.M., C.P.A.",
      vip: true,
    },
    {
      id: "11",
      name: "Dr. Ir. Surya Prabowo, M.T., P.Eng.",
      vip: false,
    },
    {
      id: "12",
      name: "Hj. Fatimah binti Ahmad, S.Ag.",
      vip: false,
    },
    {
      id: "13",
      name: "Agus Setiawan, S.T., M.Eng., A.Md.",
      vip: false,
    },
    {
      id: "14",
      name: "Dra. Lestari Indah, M.Psi., Psikolog",
      vip: true,
    },
    {
      id: "15",
      name: "Dr. Citra Anggraini, S.Pd., M.Si.",
      vip: true,
    },
    {
      id: "16",
      name: "H. M. Ridwan, S.H., M.H.",
      vip: true,
    },
    {
      id: "17",
      name: "Ir. Dewi Lestari, M.A., P.Eng.",
      vip: true,
    },
    {
      id: "18",
      name: "Samsul Bahri, S.P., M.Sc., C.P.A.",
      vip: false,
    },
    {
      id: "19",
      name: "Dr. Nurdiana Rahman, M.Pd., P.Hd.",
      vip: false,
    },
    {
      id: "20",
      name: "Marlina Sari Dewi, S.Sos., M.Si.",
      vip: false,
    },
  ];

  return {
    dataMempelai,
    dataCover,
    weddingEvent,
    rekening,
    penerimaGift,
    youtubeLink,
    gallery,
    loveStory,
    timeline,
    audio,
    rsvp,
    Banner,
    TamuHadir,
  };
};

export default data;
