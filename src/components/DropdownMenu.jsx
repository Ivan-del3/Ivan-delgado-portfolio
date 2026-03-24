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

      btn.addEventListener("click", handleBtnClick);
      document.addEventListener("click", handleOutsideClick);

      return () => {
        btn.removeEventListener("click", handleBtnClick);
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, []);



  return (
    <button id="menu-btn" className="menu-btn">
      ☰
    </button>
  );
}