/* =========================================================
   ROSEBANK TECH SUPPORT — script.js
   Part 3: Gallery Lightbox, Enquiry Form Validation, Service Search
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  // ----- Gallery Lightbox -----
  const galleryImages = document.querySelectorAll(".gallery-container img");
  if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
      <span class="lightbox-close" aria-label="Close">&times;</span>
      <img class="lightbox-image" src="" alt="">
      <p class="lightbox-caption"></p>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    galleryImages.forEach(function (img) {
      img.style.cursor = "pointer";
      img.addEventListener("click", function () {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.add("active");
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

});


document.addEventListener("DOMContentLoaded", function () {

  // ----- Enquiry Form Validation -----
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  const nameInput = document.getElementById("enquiryName");
  const emailInput = document.getElementById("enquiryEmail");
  const serviceSelect = document.getElementById("enquiryService");
  const messageInput = document.getElementById("enquiryMessage");

  const confirmationPanel = document.getElementById("enquiryConfirmation");
  const confirmationText = document.getElementById("confirmationText");
  const enquiryAnotherBtn = document.getElementById("enquiryAnother");

  const serviceResponses = {
    computer: "Your computer support request has been received. A technician typically responds within 1 business day to help troubleshoot your device.",
    network: "Your network support request has been received. Our team usually resolves connectivity issues within a few hours during support hours.",
    account: "Your account and password request has been received. For security reasons, account-related requests are usually actioned within 1 business day.",
    email: "Your email support request has been received. A technician will typically respond within 1 business day to help resolve your email issue.",
    student: "Your student support request has been received. Our team usually assists with portal and learning platform issues within 1 business day.",
    software: "Your software support request has been received. Software installation and configuration requests are typically handled within 1–2 business days."
  };

  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(function (el) {
      el.textContent = "";
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError("enquiryNameError", "Please enter your full name.");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      showError("enquiryEmailError", "Please enter your email address.");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError("enquiryEmailError", "Please enter a valid email address.");
      isValid = false;
    }

    if (serviceSelect.value === "") {
      showError("enquiryServiceError", "Please select a service.");
      isValid = false;
    }

    if (messageInput.value.trim().length < 10) {
      showError("enquiryMessageError", "Please describe your problem in at least 10 characters.");
      isValid = false;
    }

    if (!isValid) return;

    const chosenService = serviceSelect.value;
    confirmationText.textContent = serviceResponses[chosenService];

    form.hidden = true;
    confirmationPanel.hidden = false;
  });

  enquiryAnotherBtn.addEventListener("click", function () {
    form.reset();
    clearErrors();
    form.hidden = false;
    confirmationPanel.hidden = true;
  });

});


document.addEventListener("DOMContentLoaded", function () {

  // ----- Services Search/Filter -----
  const searchInput = document.getElementById("serviceSearch");
  const serviceCards = document.querySelectorAll(".service-card");
  const noResultsMessage = document.getElementById("noResultsMessage");

  if (!searchInput || serviceCards.length === 0) return;

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    serviceCards.forEach(function (card) {
      const cardText = card.textContent.toLowerCase();
      const matches = cardText.includes(query);

      card.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    if (noResultsMessage) {
      noResultsMessage.hidden = visibleCount > 0;
    }
  });

});