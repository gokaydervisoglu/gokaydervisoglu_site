// Projects page - no filtering needed for card-based layout

// Certificate Modal Functions
function openCertificateModal() {
  document.getElementById("certificateModal").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeCertificateModal() {
  document.getElementById("certificateModal").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("certificateModal");
  if (event.target == modal) {
    closeCertificateModal();
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCertificateModal();
  }
});
