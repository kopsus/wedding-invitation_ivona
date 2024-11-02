import React, { useState } from "react";

const FormAddRsvp = () => {
  const konfirmasiKehadiran = ["Hadir", "Tidak Hadir", "Masih Ragu"];
  const [reply, setReply] = useState(null);

  const cancelReply = () => {
    setReply(null);
  };

  (React.useImperativeHandle = () => {
    return {
      selectForReply: (d: React.SetStateAction<null>) => {
        setReply(d);
      },
    };
  }),
    [];

  return (
    <form className="w-[90%] mx-auto flex flex-col items-start gap-3 mt-3 border-b border-slate-200 pb-3">
      <input
        type="text"
        placeholder="Nama"
        className="w-full p-2 outline-none rounded-md"
        name="name"
        required
      />
      <textarea
        className="h-20 w-full outline-none rounded-md p-2"
        name="ucapan"
        placeholder="Ucapan"
        required
      />
      <select
        className="w-full outline-none p-2 rounded-md"
        name="konfirmasi_kehadiran"
        required
      >
        <option disabled value="">
          Konfirmasi Kehadiran
        </option>
        {konfirmasiKehadiran.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        {reply && (
          <button
            type="button"
            onClick={cancelReply}
            className="bg-[#B69569] px-6 py-2 rounded-md text-white font-medium"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="bg-[#B69569] px-6 py-2 rounded-md text-white font-medium"
        >
          Kirim
        </button>
      </div>
    </form>
  );
};

export default FormAddRsvp;
