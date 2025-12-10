import { useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#1A1B1E",
  color: "#f9fafb",
  padding: "96px 1.5rem 3rem",
};

const contentStyle = {
  maxWidth: "1040px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const headerStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.75rem",
};

const backButtonStyle = {
  border: "1px solid #1f2937",
  backgroundColor: "#111214",
  color: "#e5e7eb",
  padding: "0.4rem 0.85rem",
  borderRadius: "0.35rem",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "0.9rem",
  transition: "background-color 0.2s ease, transform 0.1s ease",
};

const buttonHoverStyle = {
  backgroundColor: "rgba(15,23,42,0.8)",
  transform: "translateY(-1px)",
};

const eyebrowStyle = {
  fontSize: "0.85rem",
  color: "#9ca3af",
  margin: 0,
};

const titleStyle = {
  margin: "0.2rem 0 0 0",
  fontSize: "2rem",
  fontWeight: 700,
  color: "#f3f4f6",
};

const helperTextStyle = {
  marginTop: "0.35rem",
  color: "#9ca3af",
  fontSize: "0.95rem",
  maxWidth: "720px",
  lineHeight: 1.5,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "0.85rem",
};

const cardStyle = {
  backgroundColor: "#1A1B1E",
  border: "1px solid #1f2937",
  borderRadius: "0",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0.5rem",
};

const imageShellStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "720px",
  height: "420px",
  backgroundColor: "#0c0d10",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const loaderStyle = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9ca3af",
  fontSize: "0.9rem",
  background:
    "linear-gradient(120deg, rgba(31,41,55,0.4), rgba(17,24,39,0.8))",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "contain",
  transition: "opacity 0.3s ease",
};

const captionStyle = {
  marginTop: "0.6rem",
  color: "#d1d5db",
  fontSize: "0.95rem",
  lineHeight: 1.4,
  textAlign: "center",
};

const emptyStateStyle = {
  gridColumn: "1 / -1",
  padding: "2rem",
  border: "1px dashed #1f2937",
  borderRadius: "0",
  textAlign: "center",
  color: "#9ca3af",
  backgroundColor: "#1A1B1E",
};

const loadingBannerStyle = {
  padding: "0.75rem 0.9rem",
  borderRadius: "0.35rem",
  border: "1px solid #1f2937",
  backgroundColor: "#1A1B1E",
  color: "#e5e7eb",
  fontSize: "0.9rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  width: "fit-content",
};

const SystemManualGallery = ({ title, helperText, images = [], onBack }) => {
  const [loadedMap, setLoadedMap] = useState({});
  const [isBackHover, setIsBackHover] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visibleImages, setVisibleImages] = useState({});
  const lastScrollY = useRef(0);
  const imageRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageId = entry.target.dataset.imageId;
          if (imageId) {
            setVisibleImages((prev) => ({
              ...prev,
              [imageId]: entry.isIntersecting,
            }));
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3],
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    const observeImages = () => {
      Object.values(imageRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    };

    const timeoutId = setTimeout(observeImages, 100);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      Object.values(imageRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  const isLoading = useMemo(
    () => images.some((_, index) => !loadedMap[index]),
    [images, loadedMap]
  );

  const handleImageLoad = (index) => {
    setLoadedMap((prev) => ({ ...prev, [index]: true }));
  };

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const showNext = () => {
    if (!images.length) return;
    setModalIndex((prev) => ((prev ?? 0) + 1) % images.length);
  };

  const showPrev = () => {
    if (!images.length) return;
    setModalIndex((prev) => {
      const nextIndex = (prev ?? 0) - 1;
      return nextIndex < 0 ? images.length - 1 : nextIndex;
    });
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <button
            type="button"
            style={{
              ...backButtonStyle,
              ...(isBackHover ? buttonHoverStyle : null),
            }}
            onClick={onBack}
            disabled={!onBack}
            onMouseEnter={() => setIsBackHover(true)}
            onMouseLeave={() => setIsBackHover(false)}
          >
            ← Go back
          </button>
          <div>
            <p style={eyebrowStyle}>System manual &amp; UI walkthrough</p>
            <h1 style={titleStyle}>{title}</h1>
            {helperText ? <p style={helperTextStyle}>{helperText}</p> : null}
          </div>
        </div>

        {isLoading && (
          <div style={loadingBannerStyle}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#10b981",
                display: "inline-block",
              }}
            />
            Loading images...
          </div>
        )}

        <div style={gridStyle}>
          <AnimatePresence>
            {images.length === 0 ? (
              <div style={emptyStateStyle}>
                No images available for this system manual yet.
              </div>
            ) : (
              images.map((item, index) => (
                <motion.div
                  key={`${item.src}-${index}`}
                  ref={(el) => {
                    if (el) {
                      el.dataset.imageId = `image-${index}`;
                      imageRefs.current[`image-${index}`] = el;
                    }
                  }}
                  style={cardStyle}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: visibleImages[`image-${index}`] ? 1 : 0,
                    y: visibleImages[`image-${index}`]
                      ? 0
                      : scrollDirection === "down"
                      ? -25
                      : 25,
                  }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div
                    style={imageShellStyle}
                    onClick={() => openModal(index)}
                  >
                    {!loadedMap[index] && (
                      <div style={loaderStyle}>Loading image...</div>
                    )}
                    <motion.img
                      key={`${item.src}-${index}-img`}
                      src={item.src}
                      alt={item.label || `${title} UI ${index + 1}`}
                      style={{
                        ...imageStyle,
                        opacity: loadedMap[index] ? 1 : 0,
                        cursor: "pointer",
                      }}
                      onLoad={() => handleImageLoad(index)}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity:
                          loadedMap[index] && visibleImages[`image-${index}`]
                            ? 1
                            : 0,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                  {item.label ? <p style={captionStyle}>{item.label}</p> : null}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {modalIndex !== null && (
            <motion.div
              key="manual-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.65)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: "1.5rem",
              }}
              onClick={closeModal}
            >
              <motion.div
                key="manual-modal-card"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "relative",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  background: "#0c0d10",
                  border: "1px solid #1f2937",
                  borderRadius: "0",
                  padding: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    border: "1px solid #1f2937",
                    background: "#111214",
                    color: "#e5e7eb",
                    padding: "0.35rem 0.65rem",
                    cursor: "pointer",
                    fontWeight: 700,
                    transition: "background-color 0.2s ease, transform 0.1s ease",
                  }}
                  onClick={closeModal}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.8)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#111214";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ✕
                </button>

                <button
                  type="button"
                  aria-label="Previous image"
                  style={{
                    position: "absolute",
                    left: "0.35rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid #1f2937",
                    background: "#111214",
                    color: "#e5e7eb",
                    padding: "0.35rem 0.55rem",
                    cursor: "pointer",
                    fontWeight: 700,
                    transition: "background-color 0.2s ease, transform 0.1s ease",
                  }}
                  onClick={showPrev}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.8)";
                    e.currentTarget.style.transform =
                      "translateY(-50%) translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#111214";
                    e.currentTarget.style.transform = "translateY(-50%)";
                  }}
                >
                  ←
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  style={{
                    position: "absolute",
                    right: "0.35rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid #1f2937",
                    background: "#111214",
                    color: "#e5e7eb",
                    padding: "0.35rem 0.55rem",
                    cursor: "pointer",
                    fontWeight: 700,
                    transition: "background-color 0.2s ease, transform 0.1s ease",
                  }}
                  onClick={showNext}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.8)";
                    e.currentTarget.style.transform =
                      "translateY(-50%) translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#111214";
                    e.currentTarget.style.transform = "translateY(-50%)";
                  }}
                >
                  →
                </button>

                <div
                  style={{
                    maxWidth: "86vw",
                    maxHeight: "82vh",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={modalIndex}
                      src={images[modalIndex]?.src}
                      alt={
                        images[modalIndex]?.label ||
                        `${title} UI ${modalIndex + 1}`
                      }
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                      }}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SystemManualGallery;


