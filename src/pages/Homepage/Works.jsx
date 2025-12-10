import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import projectImage from "../../assets/brims.png";
import civilImage from "../../assets/civil.png";
import dbestImage from "../../assets/dbest.png";
import auroraImage from "../../assets/aurora.png";
import pos1Image from "../../assets/pos1.png";
import pos2Image from "../../assets/pos2.png";
import cAndsImage from "../../assets/c_ands.png";
import lumbiaImage from "../../assets/lumbia.png";
import yslImage from "../../assets/ysl.png";
// Graphic Design Works images
import graphicDesign1 from "../../assets/Graphic Design Works I've Created/1.png";
import graphicDesign2 from "../../assets/Graphic Design Works I've Created/2.png";
import graphicDesign3 from "../../assets/Graphic Design Works I've Created/3.png";
import graphicDesign4 from "../../assets/Graphic Design Works I've Created/4.png";
import graphicDesign5 from "../../assets/Graphic Design Works I've Created/5.png";
import graphicDesign6 from "../../assets/Graphic Design Works I've Created/6.png";
import graphicDesign7 from "../../assets/Graphic Design Works I've Created/7.png";
import graphicDesign8 from "../../assets/Graphic Design Works I've Created/8.png";
import graphicDesign9 from "../../assets/Graphic Design Works I've Created/9.png";
import graphicDesign10 from "../../assets/Graphic Design Works I've Created/10.png";
import graphicDesign11 from "../../assets/Graphic Design Works I've Created/11.png";
import graphicDesign12 from "../../assets/Graphic Design Works I've Created/12.png";
import graphicDesign13 from "../../assets/Graphic Design Works I've Created/13.png";
import graphicDesign14 from "../../assets/Graphic Design Works I've Created/14.png";
import graphicDesign15 from "../../assets/Graphic Design Works I've Created/15.png";

const brimsManualModules = import.meta.glob(
  "../../assets/BRIMS/**/*.{png,jpg,jpeg}",
  { eager: true }
);

const brimsSectionTitles = {
  FEATURES: "Features",
  ADMIN: "Admin",
  BARANGAY: "Barangay",
};

// Override captions here if you want custom text for a specific image
// Keyed by section then by screen number (string) or filename base.
const brimsCaptionOverrides = {
  FEATURES: {},
  ADMIN: {},
  BARANGAY: {},
};

const buildBrimsCaption = (sectionRaw, number, labelBase) => {
  const sectionKey = sectionRaw.toUpperCase();
  const sectionTitle = brimsSectionTitles[sectionKey] || "BRIMS";
  const overrideKey = number || labelBase;
  const override = brimsCaptionOverrides[sectionKey]?.[overrideKey];
  if (override) return override;
  const screenLabel = number ? `Screen ${Number(number)}` : labelBase || "View";
  return `${sectionTitle} – ${screenLabel}`;
};

const brimsManualImages = Object.entries(brimsManualModules)
  .map(([path, module]) => {
    const normalizedPath = path.replace("../../assets/BRIMS/", "");
    const [section = "BRIMS", filename = ""] = normalizedPath.split("/");
    const numberMatch = filename.match(/(\d+)/);
    const sortKey = `${section}-${numberMatch ? numberMatch[1].padStart(4, "0") : filename}`;
    const labelBase = filename
      .replace(/\.(png|jpg|jpeg)$/i, "")
      .replace(/[-_]/g, " ")
      .trim();
    const label = buildBrimsCaption(section, numberMatch?.[1], labelBase);
    return {
      src: module.default,
      label,
      sortKey,
    };
  })
  .sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(({ src, label }) => ({ src, label }));

// Automated Civil Records manual images
const civilRecordsManualModules = import.meta.glob(
  "../../assets/AutomatedCivilRecords/*.{png,jpg,jpeg}",
  { eager: true }
);

// Override captions here if you want custom text for a specific screen
// Keyed by screen number (string)
const civilRecordsCaptionOverrides = {};

const buildCivilRecordsCaption = (number) => {
  const override = civilRecordsCaptionOverrides[number];
  if (override) return override;
  return `Screen ${Number(number)}`;
};

const civilRecordsManualImages = Object.entries(civilRecordsManualModules)
  .map(([path, module]) => {
    const filename = path.split("/").pop() || "";
    const numberMatch = filename.match(/(\d+)/);
    const number = numberMatch ? numberMatch[1] : null;
    const sortKey = number ? number.padStart(4, "0") : filename;
    const label = buildCivilRecordsCaption(number || "0");
    return {
      src: module.default,
      label,
      sortKey,
    };
  })
  .sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(({ src, label }) => ({ src, label }));

// Inventory System manual images
const inventorySystemManualModules = import.meta.glob(
  "../../assets/InventorySystem/**/*.{png,jpg,jpeg}",
  { eager: true }
);

const inventorySystemSectionTitles = {
  ACCOUNTING: "Accounting",
  "ICT ADMIN": "ICT Admin",
  PERSONNEL: "Personnel",
  "PROPERTY CUSTODIAN": "Property Custodian",
};

// Override captions here if you want custom text for a specific image
// Keyed by section then by screen number (string) or filename base.
const inventorySystemCaptionOverrides = {
  ACCOUNTING: {},
  "ICT ADMIN": {},
  PERSONNEL: {},
  "PROPERTY CUSTODIAN": {},
};

const buildInventorySystemCaption = (sectionRaw, number, labelBase) => {
  const sectionKey = sectionRaw.toUpperCase();
  const sectionTitle = inventorySystemSectionTitles[sectionKey] || "Inventory System";
  const overrideKey = number || labelBase;
  const override = inventorySystemCaptionOverrides[sectionKey]?.[overrideKey];
  if (override) return override;
  const screenLabel = number ? `Screen ${Number(number)}` : labelBase || "View";
  return `${sectionTitle} – ${screenLabel}`;
};

const inventorySystemManualImages = Object.entries(inventorySystemManualModules)
  .map(([path, module]) => {
    const normalizedPath = path.replace("../../assets/InventorySystem/", "");
    const [section = "InventorySystem", filename = ""] = normalizedPath.split("/");
    const numberMatch = filename.match(/(\d+)/);
    const sortKey = `${section}-${numberMatch ? numberMatch[1].padStart(4, "0") : filename}`;
    const labelBase = filename
      .replace(/\.(png|jpg|jpeg)$/i, "")
      .replace(/[-_]/g, " ")
      .trim();
    const label = buildInventorySystemCaption(section, numberMatch?.[1], labelBase);
    return {
      src: module.default,
      label,
      sortKey,
    };
  })
  .sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(({ src, label }) => ({ src, label }));

// Aurora Waterworks Payflow manual images
const auroraWaterworksManualModules = import.meta.glob(
  "../../assets/AuroraWaterworksPayflow/**/*.{png,jpg,jpeg}",
  { eager: true }
);

const auroraWaterworksSectionTitles = {
  ADMIN: "Admin",
  CUSTOMER: "Customer",
};

// Override captions here if you want custom text for a specific image
// Keyed by section then by screen number (string) or filename base.
const auroraWaterworksCaptionOverrides = {
  ADMIN: {},
  CUSTOMER: {},
};

const buildAuroraWaterworksCaption = (sectionRaw, number, labelBase) => {
  const sectionKey = sectionRaw.toUpperCase();
  const sectionTitle = auroraWaterworksSectionTitles[sectionKey] || "Aurora Waterworks";
  const overrideKey = number || labelBase;
  const override = auroraWaterworksCaptionOverrides[sectionKey]?.[overrideKey];
  if (override) return override;
  const screenLabel = number ? `Screen ${Number(number)}` : labelBase || "View";
  return `${sectionTitle} – ${screenLabel}`;
};

const auroraWaterworksManualImages = Object.entries(auroraWaterworksManualModules)
  .map(([path, module]) => {
    const normalizedPath = path.replace("../../assets/AuroraWaterworksPayflow/", "");
    const [section = "AuroraWaterworks", filename = ""] = normalizedPath.split("/");
    const numberMatch = filename.match(/(\d+)/);
    const sortKey = `${section}-${numberMatch ? numberMatch[1].padStart(4, "0") : filename}`;
    const labelBase = filename
      .replace(/\.(png|jpg|jpeg)$/i, "")
      .replace(/[-_]/g, " ")
      .trim();
    const label = buildAuroraWaterworksCaption(section, numberMatch?.[1], labelBase);
    return {
      src: module.default,
      label,
      sortKey,
    };
  })
  .sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(({ src, label }) => ({ src, label }));

// RG's Garage POS manual images
const rgGaragePOSManualModules = import.meta.glob(
  "../../assets/RGGaragePOS/*.{png,jpg,jpeg}",
  { eager: true }
);

// Override captions here if you want custom text for a specific screen
// Keyed by screen number (string)
const rgGaragePOSCaptionOverrides = {};

const buildRGGaragePOSCaption = (number) => {
  const override = rgGaragePOSCaptionOverrides[number];
  if (override) return override;
  return `Screen ${Number(number)}`;
};

const rgGaragePOSManualImages = Object.entries(rgGaragePOSManualModules)
  .map(([path, module]) => {
    const filename = path.split("/").pop() || "";
    const numberMatch = filename.match(/(\d+)/);
    const number = numberMatch ? numberMatch[1] : null;
    const sortKey = number ? number.padStart(4, "0") : filename;
    const label = buildRGGaragePOSCaption(number || "0");
    return {
      src: module.default,
      label,
      sortKey,
    };
  })
  .sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(({ src, label }) => ({ src, label }));

// MJ Printing & Tailoring POS System manual images
const mjPOSSystemManualModules = import.meta.glob(
  "../../assets/MJPOSSystem/*.{png,jpg,jpeg}",
  { eager: true }
);

// Override captions here if you want custom text for a specific screen
// Keyed by screen number (string)
const mjPOSSystemCaptionOverrides = {};

const buildMJPOSSystemCaption = (number) => {
  const override = mjPOSSystemCaptionOverrides[number];
  if (override) return override;
  return `Screen ${Number(number)}`;
};

const mjPOSSystemManualImages = Object.entries(mjPOSSystemManualModules)
  .map(([path, module]) => {
    const filename = path.split("/").pop() || "";
    const numberMatch = filename.match(/(\d+)/);
    const number = numberMatch ? numberMatch[1] : null;
    const sortKey = number ? number.padStart(4, "0") : filename;
    const label = buildMJPOSSystemCaption(number || "0");
    return {
      src: module.default,
      label,
      sortKey,
    };
  })
  .sort((a, b) =>
    a.sortKey.localeCompare(b.sortKey, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  )
  .map(({ src, label }) => ({ src, label }));

const Works = ({ onOpenManual }) => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visibleProjects, setVisibleProjects] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const projectRefs = useRef({});
  const graphicScrollRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

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

  const cardStyle = {
    backgroundColor: "transparent",
    borderRadius: "0.75rem",
    overflow: "visible",
  };

  const imageWrapperStyle = {
    backgroundColor: "#020617",
    position: "relative",
    borderRadius: "0.75rem",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    display: "block",
    objectFit: "cover",
    height: "488px",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "#A6A9B3",
    mixBlendMode: "multiply",
    pointerEvents: "none",
  };

  const metaWrapperStyle = {
    paddingTop: "1.5rem",
  };

  const labelStyle = {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#22c55e",
    marginBottom: "0.75rem",
  };

  const projectTitleStyle = {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#f9fafb",
    marginBottom: "1rem",
    marginTop: 0,
  };

  const descriptionBoxStyle = {
    backgroundColor: "#131415",
    borderRadius: "0.5rem",
    border: "1px solid #1f2937",
    padding: "1.1rem 1.4rem",
    fontSize: "0.9rem",
    color: "#9ca3af",
    lineHeight: 1.6,
    marginBottom: "1rem",
    marginTop: 0,
  };

  const techListStyle = {
    fontSize: "0.9rem",
    color: "#9ca3af",
    marginBottom: "1.25rem",
    marginTop: 0,
  };

  const buttonRowStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "0.5rem",
  };

  const primaryButtonStyle = {
    padding: "0.5rem 0.85rem",
    borderRadius: "0.35rem",
    fontSize: "0.8rem",
    fontWeight: 600,
    border: "none",
    backgroundColor: "#22c55e",
    color: "#020617",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.1s ease",
    whiteSpace: "nowrap",
    flex: "0 1 auto",
  };

  const secondaryButtonStyle = {
    ...primaryButtonStyle,
    backgroundColor: "transparent",
    color: "#e5e7eb",
    border: "1px solid #374151",
  };

  const primaryButtonHover = {
    backgroundColor: "#16a34a",
    transform: "translateY(-1px)",
  };

  const secondaryButtonHover = {
    backgroundColor: "rgba(15,23,42,0.8)",
    transform: "translateY(-1px)",
  };

  const featuredProjects = [
    {
      type: "Client Project - Heraldo Juan Cadampog",
      title: "BRIMS - Barangay Real Time Incident Monitoring System",
      description:
        "Designed and developed a real-time incident reporting platform for municipal administrators and barangay personnel, developed for use by the Municipality of Kumalarang. The system replaces manual paper-based workflows by allowing barangays to submit detailed incident reports—including affected individuals, demographic data, and injury details—directly to the municipal dashboard. Admin users can review, validate, and investigate incidents, manage relief assistance, and quickly assess the total affected population. BRIMS also provides automated reports and analytics to help decision-makers respond faster and improve overall disaster and incident management.",
      technologies: ["React.js", "JavaScript", "PHP (Laravel)", "MySQL", "Bootstrap", "DigitalOcean"],
      manualUrl: "#",
      manualImages: brimsManualImages,
      manualHelperText:
        "UI walkthrough covering BRIMS features for municipality admins and barangay personnel, including reporting, validation, assistance management, and analytics.",
      demoUrl: "https://brimsclient-ihpwt.ondigitalocean.app/",
      demoButtonUrl: "https://youtu.be/-tScqcKdlLM?si=Ivho6Nkq6lK1EjjB",
      image: projectImage,
    },
    {
      type: "Client Project - College Students",
      title: "Automated Civil Records Management & Certification Issuance System",
      description:
        "Designed and developed an automated records management system for the City of Pagadian that replaces the manual, logbook-based process used for registering birth, marriage, and death records. The system enables staff to digitally encode and store records in a centralized database, making searches faster and more accurate. It also automates the generation of official certificates, reducing processing time and minimizing human errors. With built-in analytics and reporting tools, the platform provides a more organized, efficient, and reliable workflow for civil registry operations.",
      technologies: ["React.js", "JavaScript", "PHP (Laravel)", "MySQL", "Bootstrap", "DigitalOcean"],
      manualUrl: "#",
      manualImages: civilRecordsManualImages,
      manualHelperText:
        "UI walkthrough covering the Automated Civil Records Management system for staff and administrators, including record registration, certificate generation, search functionality, and system administration features.",
      demoUrl: "https://automatedcivilrecords-client-3s725.ondigitalocean.app/",
      image: civilImage,
    },
    {
      type: "Client Project - Chisan Jane Ochotorena",
      title: "Inventory System for the Schools Division of Zamboanga del Sur (DepEd)",
      description:
        "Designed and developed an inventory management system to automate the tracking, assignment, and monitoring of DepEd resources across all schools. The system replaces manual record-keeping by allowing ICT Admins, Property Custodians, Teachers, and Accounting personnel to manage accounts, record inventory, assign equipment, and generate certificates automatically. With built-in analytics and reporting, the platform enables faster decision-making, improves accountability, and ensures efficient resource distribution throughout the division.",
      technologies: ["React.js", "JavaScript", "PHP (Laravel)", "MySQL", "Bootstrap", "DigitalOcean"],
      manualUrl: "#",
      manualImages: inventorySystemManualImages,
      manualHelperText:
        "UI walkthrough covering the Inventory System features for ICT Admins, Property Custodians, Personnel, and Accounting staff, including inventory management, equipment assignment, certificate generation, and system administration.",
      demoUrl: "https://dbest-client-cobe7.ondigitalocean.app/",
      image: dbestImage,
    },
    {
      type: "Client Project - Zarah Philmae Cabahug Llanos",
      title: "Aurora Waterworks Payflow",
      description:
        "Designed and developed an online water billing and payment system for the Municipality of Aurora, enabling customers to securely view their profile, water usage, billing details, and payment history, and make payments online. The system replaces manual, in-office transactions, streamlining the payment process for both residents and municipal staff. Administrators can manage all customer accounts, generate bills, and access reports and analytics to monitor total billing, water usage trends, and operational performance, improving efficiency and decision-making across the municipality.",
      technologies: ["React.js", "JavaScript", "PHP (Laravel)", "MySQL", "Bootstrap", "DigitalOcean"],
      manualUrl: "#",
      manualImages: auroraWaterworksManualImages,
      manualHelperText:
        "UI walkthrough covering Aurora Waterworks Payflow features for administrators and customers, including account management, billing, payment processing, water usage tracking, and analytics.",
      demoUrl: "https://aurorawaterworkspayflow-client-suowc.ondigitalocean.app/",
      image: auroraImage,
    },
  ];

  const otherProjects = [
    {
      type: "Client Project - Eya Reyes",
      title: "RG's Garage POS & Service Tracking System",
      description:
        "Custom Windows-based POS system for automotive services in Quezon. Replaced manual logbooks with digital transaction tracking, service history management, and automated sales/expense reporting to improve business performance.",
      technologies: ["C#", ".NET Windows Forms", "Microsoft SQL Server", "SSMS", "RDLC/Crystal Reports"],
      manualUrl: "#",
      manualImages: rgGaragePOSManualImages,
      manualHelperText:
        "UI walkthrough covering RG's Garage POS system features, including transaction tracking, service history management, sales reporting, and expense monitoring.",
      demoUrl: "#",
      image: pos1Image,
    },
    {
      type: "Client Project - Jay Dy",
      title: "MJ Printing & Tailoring Business Management and POS System",
      description:
        "Offline Windows-based POS system for printing and tailoring services in Pagadian City. Streamlined order management, transaction tracking, expense monitoring, and automated financial reporting with built-in analytics.",
      technologies: ["C#", ".NET Windows Forms", "Microsoft SQL Server", "SSMS", "RDLC/Crystal Reports"],
      manualUrl: "#",
      manualImages: mjPOSSystemManualImages,
      manualHelperText:
        "UI walkthrough covering MJ Printing & Tailoring POS system features, including order management, transaction tracking, expense monitoring, and automated financial reporting.",
      demoUrl: "#",
      image: pos2Image,
    },
    {
      type: "Client Project - Arjohn Paciencia Campaner",
      title: "C&S Cakes and Bakery Products Brand Landing Page",
      description:
        "Responsive landing page for C&S Cakes and Bakery Products in Pagadian City. Showcases cake creations, bakery menus, flavors, and gallery with essential contact information to enhance online presence and attract customers.",
      technologies: ["HTML", "CSS", "JavaScript"],
      manualUrl: "https://github.com/jeffersonbalde/CSCakesAndBakeryProductsWebsite",
      demoUrl: "https://cands.vercel.app/",
      image: cAndsImage,
    },
    {
      type: "Client Project - Barangay Lumbia SK",
      title: "Barangay Lumbia SK Official Website",
      description:
        "Modern website for the Sangguniang Kabataan of Barangay Lumbia, Pagadian City. Features official profiles, committee roles, project showcases, and community events to improve civic engagement and information accessibility.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      manualUrl: "https://github.com/jeffersonbalde/SKLumbiaWebsite",
      demoUrl: "https://sk-lumbia.vercel.app/",
      image: lumbiaImage,
    },
    {
      type: "Client Project - Ysl Ron Hepos",
      title: "Ysl Ron Hepos – Personal Portfolio Website",
      description:
        "Professional portfolio website showcasing creative works, client collaborations, and expertise. Features skills, hobbies, featured projects, and contact section to enhance online branding and opportunities.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    manualUrl: "https://github.com/jeffersonbalde/aisledesigns.com",
    demoUrl: "https://ysl-portfolio.vercel.app/",
      image: yslImage,
    },
  ];

  const graphicDesignWorks = [
    { image: graphicDesign1 },
    { image: graphicDesign2 },
    { image: graphicDesign3 },
    { image: graphicDesign4 },
    { image: graphicDesign5 },
    { image: graphicDesign6 },
    { image: graphicDesign7 },
    { image: graphicDesign8 },
    { image: graphicDesign9 },
    { image: graphicDesign10 },
    { image: graphicDesign11 },
    { image: graphicDesign12 },
    { image: graphicDesign13 },
    { image: graphicDesign14 },
    { image: graphicDesign15 },
  ];

  // Auto-scroll for graphic design section
  useEffect(() => {
    if (graphicScrollRef.current && graphicDesignWorks.length > 0) {
      const container = graphicScrollRef.current;

      const autoScroll = () => {
        if (isPaused || !container) return;

        const scrollAmount = 0.5; // smooth, slow scroll
        const maxScroll = container.scrollWidth / 2; // because we duplicate the list
        const currentScroll = container.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          container.scrollLeft = 0; // reset for seamless loop
        } else {
          container.scrollLeft += scrollAmount;
        }
      };

      autoScrollIntervalRef.current = setInterval(autoScroll, 16); // ~60fps

      return () => {
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
        }
      };
    }
  }, [isPaused, graphicDesignWorks.length]);

  useEffect(() => {
    // Scroll direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;
    };

    // Intersection Observer for individual project visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = entry.target.dataset.projectId;
          if (projectId) {
            setVisibleProjects((prev) => ({
              ...prev,
              [projectId]: entry.isIntersecting,
            }));
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3],
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    // Observe all project elements after a short delay to ensure refs are set
    const observeProjects = () => {
      Object.values(projectRefs.current).forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    };

    // Use setTimeout to ensure refs are set after render
    const timeoutId = setTimeout(observeProjects, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      Object.values(projectRefs.current).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} style={sectionStyle} id="work">
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
          style={titleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Some Things I&apos;ve Built
        </motion.h2>

        {featuredProjects.map((project, index) => {
          const projectId = `featured-${index}`;
          const isVisible = visibleProjects[projectId] ?? false;
          
          return (
            <motion.div
              key={index}
              id={`featured-project-${index}`}
              ref={(el) => {
                if (el) {
                  el.dataset.projectId = projectId;
                  projectRefs.current[projectId] = el;
                }
              }}
              style={{
                ...cardStyle,
                marginBottom: index === featuredProjects.length - 1 ? "6rem" : "4rem",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : (scrollDirection === "down" ? -40 : 40),
              }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
          {project.demoUrl && project.demoUrl !== "#" ? (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textDecoration: "none" }}
            >
              <motion.div
                style={imageWrapperStyle}
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={imageStyle}
                  className="works-project-image"
                />
                <motion.div
                  style={overlayStyle}
                  variants={{
                    rest: { opacity: 0.55 },
                    hover: {
                      opacity: 0,
                      transition: { duration: 0.45, ease: "easeOut" },
                    },
                  }}
                />
              </motion.div>
            </motion.a>
          ) : (
            <motion.div
              style={imageWrapperStyle}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={imageStyle}
                className="works-project-image"
              />
              <motion.div
                style={overlayStyle}
                variants={{
                  rest: { opacity: 0.55 },
                  hover: {
                    opacity: 0,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              />
            </motion.div>
          )}

          <div style={metaWrapperStyle}>
            <div style={labelStyle}>{project.type}</div>
            <h3 style={projectTitleStyle}>{project.title}</h3>

            <div style={descriptionBoxStyle}>{project.description}</div>

            <p style={techListStyle}>{project.technologies.join("  •  ")}</p>

            <div style={buttonRowStyle}>
              {project.manualImages && onOpenManual ? (
                <motion.button
                  type="button"
                  style={secondaryButtonStyle}
                  onClick={() =>
                    onOpenManual({
                      title: `${project.title} — System Manual`,
                      helperText: project.manualHelperText,
                      images: project.manualImages,
                      projectId: `featured-project-${index}`,
                    })
                  }
                  whileHover={secondaryButtonHover}
                  whileTap={{ scale: 0.97 }}
                >
                  View System Manual
                </motion.button>
              ) : (
                <motion.a
                  href={project.manualUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={secondaryButtonHover}
                  whileTap={{ scale: 0.97 }}
                >
                  <button type="button" style={secondaryButtonStyle}>
                    View System Manual
                  </button>
                </motion.a>
              )}

              <motion.a
                href={project.demoButtonUrl || project.demoUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={secondaryButtonHover}
                whileTap={{ scale: 0.97 }}
              >
                <button type="button" style={secondaryButtonStyle}>
                  View System Demo
                </button>
              </motion.a>
            </div>
          </div>
          </motion.div>
          );
        })}

        {/* Other Noteworthy Projects Section */}
        <motion.div
          style={{ marginTop: "6rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            style={{ textAlign: "center", marginBottom: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    color: "#A6A9B3",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Other Noteworthy Projects
                </h2>
                <motion.a
                href="https://github.com/jeffersonbalde"
                target="_blank"
                rel="noopener noreferrer"
                  style={{
                    fontSize: "0.9rem",
                    color: "#04D27B",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "color 0.2s ease",
                  }}
                  whileHover={{ color: "#22c55e" }}
                >
                  View the archive
                </motion.a>
              </motion.div>
              
          <motion.ul
            className="other-projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {otherProjects.map((project, index) => {
              const projectId = `other-${index}`;
              const isVisible = visibleProjects[projectId] ?? false;
              
              // Check if this is one of the 3 projects that need different button text
              const isSpecialProject = 
                project.title === "C&S Cakes and Bakery Products Brand Landing Page" ||
                project.title === "Barangay Lumbia SK Official Website" ||
                project.title === "Ysl Ron Hepos – Personal Portfolio Website";
              
              const manualButtonText = isSpecialProject ? "View Github Repo" : "View System Manual";
              const demoButtonText = isSpecialProject ? "View Live Website" : "View System Demo";
              
              return (
                <motion.li
                  key={index}
                  id={`other-project-${index}`}
                  ref={(el) => {
                    if (el) {
                      el.dataset.projectId = projectId;
                      projectRefs.current[projectId] = el;
                    }
                  }}
                  style={{ display: "flex" }}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : (scrollDirection === "down" ? -25 : 25),
                  }}
                  transition={{
                    duration: 1.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                <motion.div
                  className="other-project-card"
                  style={{
                    backgroundColor: "#131415",
                    borderRadius: "0.5rem",
                    border: "1px solid #1f2937",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    width: "100%",
                    minHeight: "320px",
                  }}
                  whileHover={{
                    borderColor: "#374151",
                    transform: "translateY(-4px)",
                  }}
                >
                  {/* Content */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      {/* Folder Icon */}
                      <div style={{ marginBottom: "1rem" }}>
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          stroke="#9ca3af"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </div>

                      {/* Client Name */}
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#22c55e", marginBottom: "0.75rem" }}>
                        {project.type}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#e5e7eb",
                          marginBottom: "0.75rem",
                          marginTop: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#9ca3af",
                          lineHeight: 1.6,
                          marginBottom: "1rem",
                          marginTop: 0,
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div
                        style={{
                          fontSize: "0.9rem",
                          color: "#9ca3af",
                          marginBottom: "1.25rem",
                          marginTop: 0,
                        }}
                      >
                        {project.technologies.join("  •  ")}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginTop: "auto",
                      }}
                    >
                      {project.manualImages && onOpenManual ? (
                        <motion.button
                          type="button"
                          style={{ ...secondaryButtonStyle, width: "100%", whiteSpace: "nowrap", flex: "1 1 auto", minWidth: "0" }}
                          onClick={() =>
                            onOpenManual({
                              title: `${project.title} — System Manual`,
                              helperText: project.manualHelperText,
                              images: project.manualImages,
                              projectId: `other-project-${index}`,
                            })
                          }
                          whileHover={secondaryButtonHover}
                          whileTap={{ scale: 0.97 }}
                        >
                          {manualButtonText}
                        </motion.button>
                      ) : (
                        <motion.a
                          href={project.manualUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={secondaryButtonHover}
                          whileTap={{ scale: 0.97 }}
                          style={{ flex: "1 1 auto", minWidth: "0" }}
                        >
                          <button type="button" style={{ ...secondaryButtonStyle, width: "100%", whiteSpace: "nowrap" }}>
                            {manualButtonText}
                          </button>
                        </motion.a>
                      )}
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={secondaryButtonHover}
                        whileTap={{ scale: 0.97 }}
                        style={{ flex: "1 1 auto", minWidth: "0" }}
                      >
                        <button type="button" style={{ ...secondaryButtonStyle, width: "100%", whiteSpace: "nowrap" }}>
                          {demoButtonText}
                        </button>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

      {/* Graphic Design Works Section */}
      {graphicDesignWorks.length > 0 && (
        <motion.div
          style={{ marginTop: "6rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            style={{ textAlign: "center", marginBottom: "3rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#A6A9B3",
                marginBottom: "0.5rem",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Graphic Design Works I&apos;ve Created
            </h2>
          </motion.div>

          {/* Horizontal auto-scroll container with gradients */}
          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "2rem",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient Overlays */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "150px",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(19, 20, 21, 1), rgba(19, 20, 21, 0.8), rgba(19, 20, 21, 0.3), transparent)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "150px",
                height: "100%",
                background:
                  "linear-gradient(to left, rgba(19, 20, 21, 1), rgba(19, 20, 21, 0.8), rgba(19, 20, 21, 0.3), transparent)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />

            <div
              ref={graphicScrollRef}
              style={{
                overflowX: "auto",
                overflowY: "hidden",
                scrollBehavior: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                paddingBottom: "1rem",
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  width: "max-content",
                }}
              >
                {[...graphicDesignWorks, ...graphicDesignWorks].map((work, index) => (
                  <motion.div
                    key={index}
                    style={{
                      flexShrink: 0,
                      width: "clamp(280px, 40vw, 480px)",
                      maxWidth: "calc(100vw - 6rem)",
                      backgroundColor: "#131415",
                      borderRadius: "0.5rem",
                      border: "1px solid #1f2937",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      borderColor: "#374151",
                      transform: "translateY(-4px)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "68%",
                        overflow: "hidden",
                        backgroundColor: "#020617",
                      }}
                    >
                      <motion.img
                        src={work.image}
                        alt={`Graphic design work ${index + 1}`}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          backgroundColor: "#020617",
                          display: "block",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      </div>
    </section>
  );
};

export default Works;
