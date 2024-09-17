import React from "react";
import { CiClock2 } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import iconHadir from "@/../public/icons/icon_hadir.svg";
import iconRagu from "@/../public/icons/icon_ragu.svg";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

interface ICommentItem {
  value: {
    id: string;
    nama: string;
    ucapan: string;
    konfirmasi_kehadiran: string;
    waktu_submit: string;
  };
  key: React.Key | null | undefined;
}

const CommentItem = ({ value }: ICommentItem) => {
  return (
    <div className="px-10 py-5 border">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-sm font-bold text-primary">{value.nama}</p>
        <div className="flex items-center gap-2">
          {value.konfirmasi_kehadiran === "Hadir" ? (
            <Image src={iconHadir} alt="" width={0} height={0} />
          ) : value.konfirmasi_kehadiran === "Masih Ragu" ? (
            <Image src={iconRagu} alt="" width={0} height={0} />
          ) : (
            <MdCancel color="red" />
          )}
        </div>
      </div>
      <p className="text-sm">{value.ucapan}</p>
      <div className="flex items-center gap-1 text-[11px] text-primary mt-1">
        <CiClock2 size={14} />
        <p>
          {value.waktu_submit
            ? formatDistanceToNow(new Date(value.waktu_submit), {
                addSuffix: true,
                locale: id,
              })
            : "Waktu tidak tersedia"}
        </p>
        <p className="font-bold cursor-pointer">Reply</p>
      </div>
    </div>
  );
};

export default CommentItem;
