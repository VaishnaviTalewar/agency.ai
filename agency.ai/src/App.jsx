import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWork.jsx";
import Meet from "./components/Meet.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [isMobile, setIsMobile] = useState(false);

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    // Disable custom cursor on mobile
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.1;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px,0)`;

        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 20
        }px, ${position.current.y - 20}px,0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="dark:bg-black relative">
      <Toaster />

      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Meet />
      <Contact />

      <Footer theme={theme} />

      {/* Custom Cursor only for Desktop */}
      {!isMobile && (
        <>
          {/* Cursor Ring */}
          <div
            ref={outlineRef}
            className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
            style={{ transition: "transform 0.1s ease-out" }}
          ></div>

          {/* Cursor Dot */}
          <div
            ref={dotRef}
            className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
          ></div>
        </>
      )}
    </div>
  );
};

export default App;