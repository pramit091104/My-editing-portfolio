import { useNavigate, useLocation } from "react-router-dom";

export function useContactScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (e) => {
    if (e) e.preventDefault();

    const doScroll = () => {
      const el = document.getElementById("contact");
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }
  };

  return scrollToContact;
}
