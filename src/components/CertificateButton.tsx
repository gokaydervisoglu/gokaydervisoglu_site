"use client";

import { useState } from "react";
import { Button } from "@once-ui-system/core";
import { CertificateModal } from "./CertificateModal";

interface CertificateButtonProps {
  title: string;
  imageUrl: string;
  verifyUrl: string;
  buttonText?: string;
}

export const CertificateButton: React.FC<CertificateButtonProps> = ({
  title,
  imageUrl,
  verifyUrl,
  buttonText = "View Certificate",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        size="m"
        onClick={() => setIsModalOpen(true)}
        prefixIcon="award"
      >
        {buttonText}
      </Button>
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        imageUrl={imageUrl}
        verifyUrl={verifyUrl}
      />
    </>
  );
};

export default CertificateButton;
