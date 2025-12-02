import { motion } from "framer-motion";

const Technologies = () => {
  const technologies = ["React", "Laravel", "SQL", "Bootstrap", "Digital Ocean"];

  const sectionStyle = {
    paddingTop: "10rem",
    paddingBottom: "6rem",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#A6A9B3",
    marginBottom: "2rem",
    fontWeight: 600,
    textAlign: "left",
  };

  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
    justifyContent: "flex-start",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#A6A9B3",
    fontSize: "0.95rem",
  };

  const gearIconStyle = {
    width: "16px",
    height: "16px",
    color: "#A6A9B3",
  };

  return (
    <section style={sectionStyle}>
      <div className="container" style={{ maxWidth: "880px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="technologies-title"
            style={titleStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          >
            Technologies I&apos;ve been working with recently:
          </motion.h2>
          <ul className="technologies-list" style={listStyle}>
            {technologies.map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index === 0 ? 0 : 0.1 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={itemStyle}
              >
                <svg
                  style={gearIconStyle}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{tech}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

