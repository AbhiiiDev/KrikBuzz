import React, { useState } from "react";

const MoveToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300); // Show button when scrolled down 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to top
    });
  };

  // Add scroll event listener to toggle button visibility
  window.addEventListener("scroll", toggleVisibility);

  return (
    <button
      className={`fixed bottom-4 left-1/2 bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center transition-opacity ${
        isVisible ? "opacity-80" : "opacity-0"
      }`}
      onClick={scrollToTop}
      title="Move to Top"
    >
 &#9650;
    </button>
  );
};

export default MoveToTopButton;
