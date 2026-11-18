import { useEffect } from "react";
import { Box } from "@mui/material";
// import { X } from "lucide-react";
import "./sideModal.scss";

function SideModal({
  open,
  setOpen,
  eyebrow = "DETAILS",
  heading,
  descriptionText,
  status,
  sections = [],
  children,
  closeLabel = "Close details",
}) {
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  if (!open) return null;

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="side-modal-backdrop"
        aria-label="Close details"
        onClick={close}
      />
      <Box
        component="aside"
        className="side-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={heading || eyebrow}
      >
        <Box className="side-modal-heading">
          <span>{eyebrow}</span>
          <button
            type="button"
            className="side-modal-icon-close"
            aria-label="Close"
            onClick={close}
          >
            {/* <X size={17} /> */}
            X
          </button>
        </Box>

        {heading && <h2>{heading}</h2>}
        {descriptionText && (
          <p className="side-modal-description">{descriptionText}</p>
        )}
        {status && <Box className="side-modal-status">{status}</Box>}

        {sections.map((section, sectionIndex) => (
          <section
            className="side-modal-section"
            key={`${section.title || "section"}-${sectionIndex}`}
          >
            {section.title && <h3>{section.title}</h3>}
            <Box component="dl" className="side-modal-fields">
              {section.fields?.map((field, fieldIndex) => (
                <Box key={`${field.label}-${fieldIndex}`}>
                  <dt>{field.label}</dt>
                  <dd>{field.value ?? "—"}</dd>
                </Box>
              ))}
            </Box>
          </section>
        ))}

        {children}
        <button
          type="button"
          className="side-modal-close-button"
          onClick={close}
        >
          {closeLabel}
        </button>
      </Box>
    </>
  );
}

export default SideModal;
