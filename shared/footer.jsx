/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import logo from "../assets/home/footer_logo.png";
import fbIcon from "../assets/icons/fbIcon.png";
import InIcon from "../assets/icons/lnIcon.png";
import instagramIcon from "../assets/icons/instagramIcon.png";
import youtubeIcon from "../assets/icons/youtubeIcon.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const flexStyle = "flex flex-col";
  const path = usePathname();
  return (
    <>
      {path.startsWith("/dashboard") ? null : (
        <div className="w-full border bg-secondary mt-[83px]">
          <footer className="w-full lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-white md:px-2 lg:px-0 md:gap-5 px-5 ">
            <div className="md:w-1/2 lg:w-[323px] md:pt-[44px] pb-[31px]">
              <Image
                width={300}
                height={300}
                src={logo}
                alt="logo"
                className=""
              ></Image>
              <div className=" ">
                <p className="text-[14px] mt-3 text-justify">
                  Riseup, where affordability meets literary passion! At Riseup,
                  we're dedicated to bringing{" "}
                </p>
                <p className="text-[14px] mt-5 text-justify">
                  Start your next reading adventure with us at Riseup.
                  Affordable books, boundless stories, and endless possibilities
                  await
                </p>
              </div>
              <div className="w-[92px] mt-2 flex justify-center items-center">
                <Image
                  width={300}
                  height={300}
                  src={fbIcon}
                  alt="facebook icon"
                  className="w-[23px] "
                ></Image>
                <Image
                  width={300}
                  height={300}
                  src={InIcon}
                  alt="LinkedIn icon"
                  className="w-[23px] "
                ></Image>
                <Image
                  width={300}
                  height={300}
                  src={instagramIcon}
                  alt="instagram icon"
                  className="w-[23px] "
                ></Image>
                <Image
                  width={300}
                  height={300}
                  src={youtubeIcon}
                  alt="youtube icon"
                  className="w-[23px] "
                ></Image>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-end pt-[81px] pb-[27px]">
              <div className=" h-[41px] flex justify-end">
                <input className="rounded-tl-md rounded-bl-md text-[#000] px-2 overflow-hidden"></input>
                <button className="px-2 bg-[#D9D9D9] rounded-tr-md rounded-br-md text-[#000] ">
                  Subscribe
                </button>
              </div>
              <div className="text-[13px] font-semibold space-y-[15px]">
                <p className={`${flexStyle} mt-[10px]`}>
                  <span>Hotline</span>
                  <span>+88 096 666 666</span>
                </p>
                <p className={`${flexStyle}`}>
                  <span>Support Mail</span>
                  <span>Support@riseuppublication.com</span>
                </p>
                <p className={`${flexStyle}`}>
                  <span>Affiliate Support</span>
                  <span>Affiliate@riseuppublication.com</span>
                </p>
              </div>
              <p className="text-[13px] mt-[15px]">
                Copyright © Riseup Publication 2024
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Footer;
