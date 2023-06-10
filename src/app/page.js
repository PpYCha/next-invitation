"use client";

import { ninangs, ninongs } from "@/data";
import { useState } from "react";

export default function Home() {
  const [ninongsList, setNinongsList] = useState(ninongs);
  const [ninangList, setNinangList] = useState(ninangs);
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="/images/1.jpg" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Month 1!</h2>
          <p>
            Wow, everything is so new and fascinating! I spend most of my time
            sleeping, eating, and cuddling with my parents. I love the sound of
            their voices and feeling their gentle touch. They are my world!
          </p>
        </div>
      </div>

      {/* <div class="bg-month2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">
        Hello
      </div>
      <div class="bg-month3 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>
      <div class="bg-month4 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>
      <div class="bg-month5 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>
      <div class="bg-month6 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div> */}
    </>
  );
}
