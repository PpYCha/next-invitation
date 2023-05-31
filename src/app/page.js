"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ninangs, ninongs } from "@/data";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ninongsList, setNinongsList] = useState(ninongs);
  const [ninangList, setNinangList] = useState(ninangs);
  return (
    <>
      <div className="bg-red-900">
        <h1>Hello</h1>
      </div>
      <div className="flex justify-around bg-white p-3">
        <div className="text-4xl font-extrabold ">
          <div className="text-bold">Ninongs</div>
          <Card godParents={ninongsList} />
        </div>
        <div className="">
          <div className="text-4xl font-extrabold ">Ninangs</div>
          <Card godParents={ninangList} />
        </div>
      </div>
    </>
  );
}
