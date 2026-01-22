"use client";

import { FooterLinkType } from "@/app/types/footerlinks";
import { getDataPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer>

      <div className="py-3">
        <p className="text-center">
          @2026 - All Rights Reserved by{" "}
          <Link
            href="https://getnextjstemplates.com/"
            target="_blank"
            className="hover:text-primary dark:hover:text-primary"
          >
            {" "}
            Jeric Conzales
          </Link>
          {/* {" - Distributed by "}
          <Link
            href="https://themewagon.com"
            target="_blank"
            className="hover:text-primary dark:hover:text-primary"
          >
            ThemeWagon
          </Link> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
