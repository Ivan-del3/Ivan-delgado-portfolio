import { useEffect } from "react";

export default function DropdownMenu() {
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    if (btn && menu) {
      const handleClick = () => {
        menu.classList.toggle("hidden");
      };

      btn.addEventListener("click", handleClick);

      return () => {
        btn.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <button id="menu-btn" className="menu-btn">
      ☰
    </button>
  );
}