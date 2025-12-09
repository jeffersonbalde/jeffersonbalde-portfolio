import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import dict1Image from "../../assets/dict1.png";
import rescomImage from "../../assets/rescom.png";
import provinceImage from "../../assets/province.png";
import h4g1Image from "../../assets/h4g1.jpg";
import h4g2Image from "../../assets/h4g2.jpg";
import h4g3Image from "../../assets/h4g3.jpg";
import h4g4Image from "../../assets/h4g4.jpg";
import oneImage from "../../assets/1.jpg";
import twoImage from "../../assets/2.jpg";
import threeImage from "../../assets/3.jpg";
import programmingContestImage from "../../assets/programming_contest.png";
import himugso2024Image from "../../assets/himugso2024.jpg";
import himugso2025Image from "../../assets/himugso2025.jpg";
import cAndSCertificateImage from "../../assets/c_and_s_certificate.jpg";
import udemyImage from "../../assets/udemy.png";
import scrimbaImage from "../../assets/scrimba.png";
import freecodecampImage from "../../assets/freecodecamp.png";
// ICT Diagnostics Exam Passer images
import ictDiag1 from "../../assets/ICT Diagnostics Exam Passer (Level 1) — DICT Region IX/1.png";
import ictDiag2 from "../../assets/ICT Diagnostics Exam Passer (Level 1) — DICT Region IX/2.png";
// Provincial Hack4Gov Champion images
import provH4g1 from "../../assets/Provincial Hack4Gov Champion — DICT-ZDS/1.jpg";
import provH4g2 from "../../assets/Provincial Hack4Gov Champion — DICT-ZDS/2.jpg";
import provH4g3 from "../../assets/Provincial Hack4Gov Champion — DICT-ZDS/3.jpg";
import provH4g4 from "../../assets/Provincial Hack4Gov Champion — DICT-ZDS/4.jpg";
import provH4g5 from "../../assets/Provincial Hack4Gov Champion — DICT-ZDS/5.jpg";
import provH4g6 from "../../assets/Provincial Hack4Gov Champion — DICT-ZDS/6.jpg";
// Regional Qualifier Hack4Gov 3 images
import regH4g3_1 from "../../assets/Regional Qualifier — Hack4Gov 3 Cybersecurity Challenge (Zen4 Alpha Team)/1.jpg";
import regH4g3_2 from "../../assets/Regional Qualifier — Hack4Gov 3 Cybersecurity Challenge (Zen4 Alpha Team)/2.jpg";
import regH4g3_3 from "../../assets/Regional Qualifier — Hack4Gov 3 Cybersecurity Challenge (Zen4 Alpha Team)/3.jpg";
import regH4g3_4 from "../../assets/Regional Qualifier — Hack4Gov 3 Cybersecurity Challenge (Zen4 Alpha Team)/4.jpg";
import regH4g3_5 from "../../assets/Regional Qualifier — Hack4Gov 3 Cybersecurity Challenge (Zen4 Alpha Team)/5.jpg";
// Cyber Exercise Champion images
import cyberEx1 from "../../assets/Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)/1.jpg";
import cyberEx2 from "../../assets/Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)/2.jpg";
import cyberEx3 from "../../assets/Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)/3.jpg";
import cyberEx4 from "../../assets/Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)/4.jpg";
import cyberEx5 from "../../assets/Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)/5.jpg";
import cyberEx6 from "../../assets/Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)/6.png";
// Regional Qualifier Hack4Gov IX images
import regH4gIX_1 from "../../assets/Regional Qualifier — Hack4Gov IX Cybersecurity Challenge (ONE GROUP Team)/1.jpg";
import regH4gIX_2 from "../../assets/Regional Qualifier — Hack4Gov IX Cybersecurity Challenge (ONE GROUP Team)/2.jpg";
import regH4gIX_3 from "../../assets/Regional Qualifier — Hack4Gov IX Cybersecurity Challenge (ONE GROUP Team)/3.jpg";
import regH4gIX_4 from "../../assets/Regional Qualifier — Hack4Gov IX Cybersecurity Challenge (ONE GROUP Team)/4.jpg";
// 2nd Placer ICT Summit Programming Competition images
import ictSummit1 from "../../assets/2nd Placer — 1st ICT Summit Programming Competition (Pagadian City)/1.jpg";
import ictSummit2 from "../../assets/2nd Placer — 1st ICT Summit Programming Competition (Pagadian City)/2.jpg";
import ictSummit3 from "../../assets/2nd Placer — 1st ICT Summit Programming Competition (Pagadian City)/3.jpg";
// Certificate of Completion — Complete Web Developer (Udemy) images
import udemyCert1 from "../../assets/Certificate of Completion — Complete Web Developer (Udemy, 39.5 Hours)/1.png";
// Champion — CCS Himugso 2024 images
import himugso2024Cert1 from "../../assets/Champion — CCS Himugso 2024 Web Development Competition/1.jpg";
// Champion — CCS Himugso 2025 images
import himugso2025Cert1 from "../../assets/Champion — CCS Himugso 2025 Web Programming Competition/1.jpg";
// Frontend Developer Career Path Graduate — Scrimba images
import scrimbaCert1 from "../../assets/Frontend Developer Career Path Graduate — Scrimba (81.6 Hours)/1.png";
import scrimbaCert2 from "../../assets/Frontend Developer Career Path Graduate — Scrimba (81.6 Hours)/2.png";
// Responsive Web Design Certification — freeCodeCamp images
import freecodecampCert1 from "../../assets/Responsive Web Design Certification — freeCodeCamp (300 Hours)/1.png";
import freecodecampCert2 from "../../assets/Responsive Web Design Certification — freeCodeCamp (300 Hours)/2.png";
// Web Developer Completion Certificate — C&S Cakes images
import cAndSCert1 from "../../assets/Web Developer Completion Certificate — C&S Cakes and Bakery Products (Nov 2023 – May 2024)/1.jpg";
// TRON CUP 2026 — Philippine Army Cyber Defense Exercise images
import tron1 from "../../assets/TRON CUP 2026 — Philippine Army Cyber Defense Exercise (TABAK-LEG) 1st Place/1.png";
import tron2 from "../../assets/TRON CUP 2026 — Philippine Army Cyber Defense Exercise (TABAK-LEG) 1st Place/2.png";
import tron3 from "../../assets/TRON CUP 2026 — Philippine Army Cyber Defense Exercise (TABAK-LEG) 1st Place/3.png";
import tron4 from "../../assets/TRON CUP 2026 — Philippine Army Cyber Defense Exercise (TABAK-LEG) 1st Place/4.png";

const Certifications = ({ onOpenGallery }) => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visibleCerts, setVisibleCerts] = useState({});
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const certRefs = useRef({});

  useEffect(() => {
    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;
    };

    // Observe individual certification cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const certId = entry.target.dataset.certId;
          if (certId) {
            setVisibleCerts((prev) => ({
              ...prev,
              [certId]: entry.isIntersecting,
            }));
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3],
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    const observeCerts = () => {
      Object.values(certRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    };

    const timeoutId = setTimeout(observeCerts, 100);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      Object.values(certRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sectionStyle = {
    paddingTop: "10rem",
    paddingBottom: "6rem",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#A6A9B3",
    marginBottom: "2.5rem",
    fontWeight: 600,
    textAlign: "left",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.25rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const cardStyle = {
    backgroundColor: "#131415",
    borderRadius: "0.5rem",
    border: "1px solid #1f2937",
    padding: 0,
    transition: "all 0.3s ease",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
  };

  const imageWrapperStyle = {
    position: "relative",
    width: "100%",
    height: "160px",
    overflow: "hidden",
    backgroundColor: "#020617",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const imageOverlayStyle = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(19, 20, 21, 0.3) 0%, rgba(19, 20, 21, 0.85) 100%)",
    pointerEvents: "none",
  };

  const iconWrapperStyle = {
    position: "absolute",
    top: "0.75rem",
    left: "0.75rem",
    zIndex: 2,
  };

  const folderIconStyle = {
    width: "32px",
    height: "32px",
    color: "#04D27B",
    flexShrink: 0,
  };

  const contentWrapperStyle = {
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#131415",
  };

  const certificateTitleStyle = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#f9fafb",
    marginBottom: "0.625rem",
    marginTop: 0,
    lineHeight: 1.4,
  };

  const descriptionStyle = {
    fontSize: "0.8rem",
    color: "#A6A9B3",
    lineHeight: 1.5,
    marginBottom: "1rem",
    flex: 1,
  };

  const buttonRowStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "0.5rem",
  };

  const secondaryButtonStyle = {
    padding: "0.45rem 0.75rem",
    borderRadius: "0.35rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    border: "1px solid #374151",
    backgroundColor: "transparent",
    color: "#e5e7eb",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.1s ease",
    whiteSpace: "nowrap",
    flex: "0 1 auto",
    textDecoration: "none",
    display: "inline-block",
  };

  const secondaryButtonHover = {
    backgroundColor: "rgba(15,23,42,0.8)",
    transform: "translateY(-1px)",
  };

  // Placeholder certifications - you can add your actual certifications here
  const certifications = [
    {
      type: "Certification",
      title: "ICT Diagnostics Exam Passer (Level 1) — DICT Region IX",
      description:
        "Passed the DICT ICT Diagnostics Examination (Level 1), qualifying for the ICT Proficiency Certification Exam under the Programming track and demonstrating strong foundational knowledge in software development and technical competency—an eligibility pathway recognized for Civil Service accreditation.",
      certificateUrl:
        "https://drive.google.com/file/d/1OVBccUnFpfVJQNYg5-v3ZXqlMh9sqKE5/view?usp=drive_link",
      image: dict1Image,
      buttonText: "View Certificate",
      galleryImages: [
        {
          src: ictDiag1,
          label: "DICT ICT Diagnostics certificate",
        },
        {
          src: ictDiag2,
          label: "DICT ICT Diagnostics certificate",
        },
      ],
    },
    {
      type: "Certification",
      title: "Provincial Hack4Gov Champion — DICT-ZDS",
      description:
        "Awarded Grand Champion in the first-ever provincial DICT-ZDS Hack4Gov Cybersecurity Challenge, competing against teams from across all schools in Pagadian City and demonstrating exceptional technical expertise in cyber defense operations.",
      certificateUrl:
        "https://drive.google.com/drive/folders/1vpaZ1gbCdXRbMY99Nhxd_WS3jZjXLKX_?usp=sharing",
      image: provinceImage,
      buttonText: "View Certificate & Photos",
      galleryImages: [
        { src: provH4g1, label: "Provincial Hack4Gov champion photo" },
        { src: provH4g2, label: "Provincial Hack4Gov champion photo" },
        { src: provH4g3, label: "Provincial Hack4Gov champion photo" },
        { src: provH4g4, label: "Provincial Hack4Gov champion photo" },
        { src: provH4g5, label: "Provincial Hack4Gov champion photo" },
        { src: provH4g6, label: "Provincial Hack4Gov champion photo" },
      ],
    },
    {
      type: "Certification",
      title:
        "Cyber Exercise Champion — 1st RCPA-Wide Cyber Exercise (9RCDG Team HDIUAC)",
      description:
        "Recognized as Champion in the 1st RCPA-Wide Cyber Exercise, competing with regional participants across the Philippines and earning 18,086 points, demonstrating excellence in cybersecurity operations and technical proficiency.",
      certificateUrl:
        "https://drive.google.com/drive/folders/1c1123Qda73i1Lm-eIg-_yYluqxeR7U6N?usp=sharing",
      image: rescomImage,
      buttonText: "View Plaque & Photos",
      galleryImages: [
        { src: cyberEx1, label: "Cyber Exercise Champion photo" },
        { src: cyberEx2, label: "Cyber Exercise Champion photo" },
        { src: cyberEx3, label: "Cyber Exercise Champion photo" },
        { src: cyberEx4, label: "Cyber Exercise Champion photo" },
        { src: cyberEx5, label: "Cyber Exercise Champion photo" },
        { src: cyberEx6, label: "Cyber Exercise Champion photo" },
      ],
    },
    {
      type: "Certification",
      title:
        "TRON CUP 2026 — Philippine Army Cyber Defense Exercise (TABAK-LEG) 1st Place",
      description:
        "Achieved 1st Place in the TRON CUP 2026 Philippine Army Cyber Defense Exercise (TABAK-LEG). Competed against seven teams from top institutions across the region—including MSU, La Salle University Ozamiz, and others.",
      certificateUrl: "",
      image: tron3,
      buttonText: "View Certificate & Photos",
      galleryImages: [
        { src: tron1, label: "TRON CUP 2026 TABAK-LEG photo" },
        { src: tron2, label: "TRON CUP 2026 TABAK-LEG photo" },
        { src: tron3, label: "TRON CUP 2026 TABAK-LEG photo" },
        { src: tron4, label: "TRON CUP 2026 TABAK-LEG photo" },
      ],
    },
    {
      type: "Certification",
      title:
        "Regional Qualifier — Hack4Gov 3 Cybersecurity Challenge (Zen4 Alpha Team)",
      description:
        "Competed in the Hack4Gov 3 Regional Qualifying Round in Zamboanga City, representing Saint Columban College as part of the Zen4 Alpha Team and engaging in hands-on cybersecurity challenges against top institutions across the region.",
      certificateUrl: "",
      image: h4g4Image,
      buttonText: "View Certificate & Photos",
      galleryImages: [
        { src: regH4g3_1, label: "Hack4Gov 3 Regional Qualifier photo" },
        { src: regH4g3_2, label: "Hack4Gov 3 Regional Qualifier photo" },
        { src: regH4g3_3, label: "Hack4Gov 3 Regional Qualifier photo" },
        { src: regH4g3_4, label: "Hack4Gov 3 Regional Qualifier photo" },
        { src: regH4g3_5, label: "Hack4Gov 3 Regional Qualifier photo" },
      ],
    },
    {
      type: "Certification",
      title:
        "Regional Qualifier — Hack4Gov IX Cybersecurity Challenge (ONE GROUP Team)",
      description:
        "Represented Saint Columban College in the Hack4Gov IX Regional Qualifying Round in Zamboanga City, competing against leading colleges and universities across Region IX and demonstrating strong cybersecurity fundamentals and teamwork as part of the ONE GROUP team.",
      certificateUrl: "",
      image: twoImage,
      buttonText: "View Certificate & Photos",
      galleryImages: [
        { src: regH4gIX_1, label: "Hack4Gov IX Regional Qualifier photo" },
        { src: regH4gIX_2, label: "Hack4Gov IX Regional Qualifier photo" },
        { src: regH4gIX_3, label: "Hack4Gov IX Regional Qualifier photo" },
        { src: regH4gIX_4, label: "Hack4Gov IX Regional Qualifier photo" },
      ],
    },
    {
      type: "Certification",
      title:
        "2nd Placer — 1st ICT Summit Programming Competition (Pagadian City)",
      description:
        "Placed 2nd in the first-ever ICT Summit Programming Competition in Pagadian City (2023), solving real-world programming challenges under time pressure and showcasing strong problem-solving skills and technical expertise.",
      certificateUrl: "",
      image: programmingContestImage,
      buttonText: "View Event Photos",
      galleryImages: [
        { src: ictSummit1, label: "ICT Summit Programming Competition photo" },
        { src: ictSummit2, label: "ICT Summit Programming Competition photo" },
        { src: ictSummit3, label: "ICT Summit Programming Competition photo" },
      ],
    },
    {
      type: "Certification",
      title: "Champion — CCS Himugso 2024 Web Development Competition",
      description:
        "Awarded Champion in the CCS Himugso 2024 Web Development Competition after building a full website showcasing event information and features, competing against students from 1st year to 4th year and demonstrating exceptional web development skills.",
      certificateUrl: "",
      image: himugso2024Image,
      buttonText: "View Certificate",
      galleryImages: [
        {
          src: himugso2024Cert1,
          label: "CCS Himugso 2024 Web Development Competition certificate",
        },
      ],
    },
    {
      type: "Certification",
      title: "Champion — CCS Himugso 2025 Web Programming Competition",
      description:
        "Awarded Champion for delivering a fully functional event website, demonstrating strong UI/UX design, clean architecture, and responsive layout implementation while competing against multi-year participants from 1st year to 4th year.",
      certificateUrl: "",
      image: himugso2025Image,
      buttonText: "View Certificate",
      galleryImages: [
        {
          src: himugso2025Cert1,
          label: "CCS Himugso 2025 Web Programming Competition certificate",
        },
      ],
    },
    {
      type: "Certification",
      title:
        "Web Developer Completion Certificate — C&S Cakes and Bakery Products (Nov 2023 – May 2024)",
      description:
        "Completed a 6-month engagement as a Web Developer, creating the store's official landing page and helping enhance their online branding and product presentation.",
      certificateUrl: "",
      image: cAndSCertificateImage,
      buttonText: "View Certificate",
      galleryImages: [
        {
          src: cAndSCert1,
          label: "C&S Cakes and Bakery Products completion certificate",
        },
      ],
    },
    {
      type: "Certification",
      title:
        "Certificate of Completion — Complete Web Developer (Udemy, 39.5 Hours)",
      description:
        "Completed Andrei Neagoie's Complete Web Developer course on Udemy, covering full-stack web development fundamentals and hands-on projects spanning frontend, backend, and deployment workflows.",
      certificateUrl: "",
      image: udemyImage,
      buttonText: "View Certificate",
      galleryImages: [
        { src: udemyCert1, label: "Complete Web Developer Udemy certificate" },
      ],
    },
    {
      type: "Certification",
      title: "Frontend Developer Career Path Graduate — Scrimba (81.6 Hours)",
      description:
        "Completed Scrimba's Frontend Developer Career Path, an 81.6-hour program focused on modern frontend development, interactive projects, and real-world web application workflows.",
      certificateUrl: "",
      image: scrimbaImage,
      buttonText: "View Certificate",
      galleryImages: [
        {
          src: scrimbaCert1,
          label: "Scrimba Frontend Developer Career Path certificate",
        },
        {
          src: scrimbaCert2,
          label: "Scrimba Frontend Developer Career Path certificate",
        },
      ],
    },
    {
      type: "Certification",
      title: "Responsive Web Design Certification — freeCodeCamp (300 Hours)",
      description:
        "Earned the Legacy Responsive Web Design Developer Certification, completing over 300 hours of hands-on training and building multiple full-feature projects.",
      certificateUrl: "",
      image: freecodecampImage,
      buttonText: "View Certificate",
      galleryImages: [
        {
          src: freecodecampCert1,
          label: "freeCodeCamp Responsive Web Design certificate",
        },
        {
          src: freecodecampCert2,
          label: "freeCodeCamp Responsive Web Design certificate",
        },
      ],
    },
  ];

  const FolderIcon = () => (
    <svg
      style={folderIconStyle}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  );

  const handleViewGallery = (cert, index) => {
    const galleryPayload = {
      title: cert.title,
      images:
        cert.galleryImages && cert.galleryImages.length > 0
          ? cert.galleryImages
          : [
              {
                src: cert.image || dict1Image,
                label: cert.title,
              },
            ],
      certificateIndex: index,
    };

    if (onOpenGallery) {
      onOpenGallery(galleryPayload);
    } else if (cert.certificateUrl) {
      window.open(cert.certificateUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section ref={sectionRef} id="certifications" style={sectionStyle}>
      <div
        className="container"
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <motion.h2
          className="certifications-title"
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Certifications &amp; Achievements I&apos;ve Earned
        </motion.h2>

        <motion.ul
          style={gridStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence>
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                id={`certificate-card-${index}`}
                ref={(el) => {
                  if (el) {
                    el.dataset.certId = `cert-${index}`;
                    certRefs.current[`cert-${index}`] = el;
                  }
                }}
                initial={{ opacity: 0, y: 25 }}
                animate={{
                  opacity: visibleCerts[`cert-${index}`] ? 1 : 0,
                  y: visibleCerts[`cert-${index}`]
                    ? 0
                    : scrollDirection === "down"
                    ? -25
                    : 25,
                }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  delay: index * 0.12,
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  style={cardStyle}
                  whileHover={{
                    borderColor: "#374151",
                    transform: "translateY(-4px)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={imageWrapperStyle}>
                    <motion.img
                      src={cert.image || dict1Image}
                      alt={cert.title}
                      style={imageStyle}
                      className="certification-image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div style={imageOverlayStyle} />
                    <div style={iconWrapperStyle}>
                      <FolderIcon />
                    </div>
                  </div>

                  <div style={contentWrapperStyle}>
                    <h3 style={certificateTitleStyle}>{cert.title}</h3>
                    <p style={descriptionStyle}>{cert.description}</p>

                    <div style={buttonRowStyle}>
                      <motion.button
                        type="button"
                        style={secondaryButtonStyle}
                        whileHover={secondaryButtonHover}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleViewGallery(cert, index)}
                      >
                        {cert.buttonText || "View Certificate"}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
};

export default Certifications;
