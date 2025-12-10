import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import CertificateGallery from "./pages/Homepage/CertificateGallery";
import SystemManualGallery from "./pages/Homepage/SystemManualGallery";

const App = () => {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeManual, setActiveManual] = useState(null);

  const handleOpenGallery = (galleryPayload) => {
    if (!galleryPayload) return;

    setActiveGallery({
      title: galleryPayload.title || "Certificate Gallery",
      images: galleryPayload.images || [],
      certificateIndex: galleryPayload.certificateIndex,
    });
  };

  const handleOpenManual = (manualPayload) => {
    if (!manualPayload) return;

    setActiveManual({
      title: manualPayload.title || "System Manual",
      helperText: manualPayload.helperText,
      images: manualPayload.images || [],
      projectId: manualPayload.projectId,
    });
  };

  // Ensure we start at the top when entering the gallery view
  useEffect(() => {
    if (activeGallery || activeManual) {
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
  }, [activeGallery, activeManual]);

  const handleBackToHomepage = () => {
    const certificateIndex = activeGallery?.certificateIndex;
    const projectId = activeManual?.projectId;
    setActiveGallery(null);
    setActiveManual(null);

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
        } else if (projectId !== undefined && projectId !== null) {
          // Scroll back to the specific project card
          const targetCard = document.getElementById(projectId);
          if (targetCard) {
            const rect = targetCard.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2;
            // Direct assignment - most instant method
            document.documentElement.scrollTop = targetY;
            document.body.scrollTop = targetY;
          } else {
            // Fallback to Works section if card not found
            const worksSection = document.getElementById("work");
            if (worksSection) {
              const rect = worksSection.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              document.documentElement.scrollTop = rect.top + scrollTop;
              document.body.scrollTop = rect.top + scrollTop;
            }
          }
        } else {
          // Fallback to Works section if no project ID
          const worksSection = document.getElementById("work");
          if (worksSection) {
            const rect = worksSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            document.documentElement.scrollTop = rect.top + scrollTop;
            document.body.scrollTop = rect.top + scrollTop;
          } else {
            const targetSection = document.getElementById("certifications-section");
            if (targetSection) {
              const rect = targetSection.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              document.documentElement.scrollTop = rect.top + scrollTop;
              document.body.scrollTop = rect.top + scrollTop;
            }
          }
        }
        
        // Restore original scroll behavior
        html.style.scrollBehavior = originalHtmlScrollBehavior;
        body.style.scrollBehavior = originalBodyScrollBehavior;
      });
    });
  };

  if (activeManual) {
    return (
      <SystemManualGallery
        title={activeManual.title}
        helperText={activeManual.helperText}
        images={activeManual.images}
        onBack={handleBackToHomepage}
      />
    );
  }

  if (activeGallery) {
    return (
      <CertificateGallery
        title={activeGallery.title}
        images={activeGallery.images}
        onBack={handleBackToHomepage}
      />
    );
  }

  return (
    <Homepage
      onOpenGallery={handleOpenGallery}
      onOpenManual={handleOpenManual}
    />
  );
};

export default App;
