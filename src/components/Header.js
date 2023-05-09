import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const { currentUser } = useAuth();
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <Link href="/">
          <h1 className="select-none text-4xl capitalize">
            Part time job search
          </h1>
        </Link>
        {currentUser && (
          <i
            onClick={() => setOpenModal(true)}
            className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"
          ></i>
        )}
      </div>
    </>
  );
}
