import React, { useEffect, useRef, useState } from "react";
import { loadRecaptcha } from "../utils/recaptchaLoader";

export default function Recaptcha({ siteKey }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadRecaptcha().then((grecaptcha) => {
      if (cancelled || !containerRef.current) return;
      
      const isMobile = window.innerWidth < 550;

      grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        size: isMobile ? "compact" : "normal",
        callback: (token) => {
          const input = document.getElementById("g-recaptcha-response");
          if (input) input.value = token;

          window.__recaptchaVerified = true;

          window.dispatchEvent(
            new CustomEvent("recaptcha:verified", { detail: token })
          );
        },
      });

      setReady(true);
    });

    return () => { cancelled = true; };
  }, [siteKey]);

  useEffect(()=>{
    window.__recaptchaVerified = false;
  },[])

return (
  <div style={{ 
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    overflowX: "auto"
  }}>
    {!ready && <div>Cargando validación...</div>}
    <div ref={containerRef}></div>
  </div>
);;
}
