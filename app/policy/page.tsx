"use client";

import Image from "next/image";
import PrivacyPolicy from "@/components/Policy";
import LegalInformation from "@/components/LegalInformation";

import Footer from "@/components/Footer";

export default function Policy() {
  return (
    <section className="bg-zinc-50 h-fit">
       
<PrivacyPolicy/>
<LegalInformation/>
<Footer/>
    </section>
  );
}