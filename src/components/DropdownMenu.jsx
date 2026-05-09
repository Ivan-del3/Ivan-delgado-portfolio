import { useEffect } from "react";

export default function DropdownMenu() {
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    if (btn && menu) {
      const handleBtnClick = (e) => {
        e.stopPropagation(); 
        menu.classList.toggle("hidden");
      };

      const handleOutsideClick = (e) => {
        if (!menu.contains(e.target)) { 
          menu.classList.add("hidden");
        }
      };

      const handleLinkClick = () => menu.classList.add("hidden");
      const links = menu.querySelectorAll("a");

      btn.addEventListener("click", handleBtnClick);
      document.addEventListener("click", handleOutsideClick);
      links.forEach((link) => link.addEventListener("click", handleLinkClick));

      return () => {
        btn.removeEventListener("click", handleBtnClick);
        document.removeEventListener("click", handleOutsideClick);
        links.forEach((link) => link.removeEventListener("click", handleLinkClick));
      };
    }
  }, []);



  return (
    <button id="menu-btn" className="menu-btn">
      ☰
    </button>
  );
}