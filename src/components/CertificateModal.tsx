"use client";

import { useEffect, useCallback } from "react";
import styles from "./CertificateModal.module.scss";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
  verifyUrl: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  title,
  imageUrl,
  verifyUrl,
}) => {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleEscKey]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className={styles.certificateContainer}>
          <a href={verifyUrl} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={title} className={styles.certificateImage} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
