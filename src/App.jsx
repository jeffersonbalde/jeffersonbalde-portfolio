import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import CertificateGallery from "./pages/Homepage/CertificateGallery";

const App = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const handleOpenGallery = (galleryPayload) => {
    if (!galleryPayload) return;

    setActiveGallery({
      title: galleryPayload.title || "Certificate Gallery",
      images: galleryPayload.images || [],
      certificateIndex: galleryPayload.certificateIndex,
    });
  };

  // Ensure we start at the top when entering the gallery view
  useEffect(() => {
    if (activeGallery) {
      const html = document.documentElement;
      const body = document.body;
      const originalHtmlScrollBehavior = html.style.scrollBehavior;
      const originalBodyScrollBehavior = body.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      body.style.scrollBehavior = "auto";

      requestAnimationFrame(() => {
        html.scrollTop = 0;
        body.scrollTop = 0;
        window.scrollTo(0, 0);
        html.style.scrollBehavior = originalHtmlScrollBehavior;
        body.style.scrollBehavior = originalBodyScrollBehavior;
      });
    }
  }, [activeGallery]);

  const handleBackToHomepage = () => {
    const certificateIndex = activeGallery?.certificateIndex;
    setActiveGallery(null);

    // Temporarily disable smooth scrolling on html and body
    const html = document.documentElement;
    const body = document.body;
    const originalHtmlScrollBehavior = html.style.scrollBehavior;
    const originalBodyScrollBehavior = body.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    // Wait for React to render, then scroll instantly using direct assignment
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (certificateIndex !== undefined && certificateIndex !== null) {
          const targetCard = document.getElementById(`certificate-card-${certificateIndex}`);
          if (targetCard) {
            const rect = targetCard.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2;
            // Direct assignment - most instant method
            document.documentElement.scrollTop = targetY;
            document.body.scrollTop = targetY;
          } else {
            // Fallback to certifications section if card not found
            const targetSection = document.getElementById("certifications-section");
            if (targetSection) {
              const rect = targetSection.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              document.documentElement.scrollTop = rect.top + scrollTop;
              document.body.scrollTop = rect.top + scrollTop;
            }
          }
        } else {
          // Fallback to certifications section if no index stored
          const targetSection = document.getElementById("certifications-section");
          if (targetSection) {
            const rect = targetSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            document.documentElement.scrollTop = rect.top + scrollTop;
            document.body.scrollTop = rect.top + scrollTop;
          }
        }
        
        // Restore original scroll behavior
        html.style.scrollBehavior = originalHtmlScrollBehavior;
        body.style.scrollBehavior = originalBodyScrollBehavior;
      });
    });
  };

  if (activeGallery) {
    return (
      <CertificateGallery
        title={activeGallery.title}
        images={activeGallery.images}
        onBack={handleBackToHomepage}
      />
    );
  }

  return <Homepage onOpenGallery={handleOpenGallery} />;
};

export default App;
