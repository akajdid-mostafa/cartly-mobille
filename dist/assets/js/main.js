"use strict";
document.addEventListener("DOMContentLoaded", () => {
   // ========== Sale Countdown ==========
   const countdownHours = 8;
   let targetTime = new Date(Date.now() + countdownHours * 60 * 60 * 1000);

   function updateCountdown() {
      const now = new Date();
      let diff = targetTime - now;

      if (diff <= 0) {
         targetTime = new Date(Date.now() + countdownHours * 60 * 60 * 1000);
         diff = targetTime - now;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.querySelectorAll(".cd-hours").forEach((el) => {
         el.textContent = String(hours).padStart(2, "0");
      });
      document.querySelectorAll(".cd-minutes").forEach((el) => {
         el.textContent = String(minutes).padStart(2, "0");
      });
      document.querySelectorAll(".cd-seconds").forEach((el) => {
         el.textContent = String(seconds).padStart(2, "0");
      });
   }

   updateCountdown();
   setInterval(updateCountdown, 1000);

   // ========== Gallery ==========
   const thumbnails = Array.from(document.querySelectorAll(".thumbnail"));
   const mainImage = document.getElementById("current-image");

   function updateImage(button) {
      const newSrc = button.getAttribute("data-full");
      const newAlt = button.getAttribute("data-alt");
      if (mainImage) {
         mainImage.src = newSrc;
         mainImage.alt = newAlt;
      }
      thumbnails.forEach((btn) => btn.setAttribute("aria-current", "false"));
      button.setAttribute("aria-current", "true");
   }

   function showNextImage() {
      const currentIndex = thumbnails.findIndex(
         (btn) => btn.getAttribute("aria-current") === "true"
      );
      const next = thumbnails[(currentIndex + 1) % thumbnails.length];
      updateImage(next);
      next.focus();
   }

   function showPrevImage() {
      const currentIndex = thumbnails.findIndex(
         (btn) => btn.getAttribute("aria-current") === "true"
      );
      const prev =
         thumbnails[(currentIndex - 1 + thumbnails.length) % thumbnails.length];
      updateImage(prev);
      prev.focus();
   }

   thumbnails.forEach((button) => {
      button.addEventListener("click", () => updateImage(button));
      button.addEventListener("keydown", (e) => {
         if (e.key === "ArrowRight") {
            e.preventDefault();
            showNextImage();
         } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            showPrevImage();
         } else if (e.key === "Home") {
            e.preventDefault();
            updateImage(thumbnails[0]);
            thumbnails[0].focus();
         } else if (e.key === "End") {
            e.preventDefault();
            updateImage(thumbnails[thumbnails.length - 1]);
            thumbnails[thumbnails.length - 1].focus();
         } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            updateImage(button);
         }
      });
   });

   if (mainImage) {
      let startX = 0;
      mainImage.addEventListener("touchstart", (e) => {
         startX = e.touches[0].clientX;
      });

      mainImage.addEventListener("touchend", (e) => {
         const endX = e.changedTouches[0].clientX;
         const diff = startX - endX;
         if (Math.abs(diff) > 50) {
            diff > 0 ? showNextImage() : showPrevImage();
         }
      });
   }

   // ========== Filter ==========
   const filterModal = document.getElementById("filterModal");
   const subFilterModal = document.getElementById("subFilterModal");
   const openFilterBtn = document.getElementById("openFilterModal");
   const openSortBtn = document.getElementById("openSortModal");
   const closeBtn = document.getElementById("closeFilterModal");
   const tabBtns = document.querySelectorAll(".tab-btn");
   const tabContents = document.querySelectorAll(".tab-content");
   const closeSubFilterModal = document.getElementById("closeSubFilterModal");

   if (openFilterBtn) {
      openFilterBtn.onclick = () => {
         filterModal?.classList.remove("hidden");
         tabBtns.forEach((b) => b.classList.remove("active"));
         tabContents.forEach((tc) => tc.classList.add("hidden"));
         document.querySelector('[data-tab="filterTab"]')?.classList.add("active");
         document.getElementById("filterTab")?.classList.remove("hidden");
      };
   }

   if (openSortBtn) {
      openSortBtn.onclick = () => {
         filterModal?.classList.remove("hidden");
         tabBtns.forEach((b) => b.classList.remove("active"));
         tabContents.forEach((tc) => tc.classList.add("hidden"));
         document.querySelector('[data-tab="sortTab"]')?.classList.add("active");
         document.getElementById("sortTab")?.classList.remove("hidden");
      };
   }

   if (closeBtn) {
      closeBtn.onclick = () => filterModal?.classList.add("hidden");
   }

   tabBtns.forEach((btn) => {
      btn.onclick = () => {
         tabBtns.forEach((b) => b.classList.remove("active"));
         btn.classList.add("active");
         tabContents.forEach((tc) => tc.classList.add("hidden"));
         document.getElementById(btn.dataset.tab)?.classList.remove("hidden");
      };
   });

   if (closeSubFilterModal) {
      closeSubFilterModal.onclick = () => {
         subFilterModal?.classList.add("hidden");
         filterModal?.classList.remove("hidden");
      };
   }

   window.addEventListener("click", (e) => {
      if (filterModal && e.target === filterModal)
         filterModal.classList.add("hidden");
      if (subFilterModal && e.target === subFilterModal)
         subFilterModal.classList.add("hidden");
   });

   // ========== Mobile Bottom Navigation ==========
   const list = document.querySelectorAll(".list");
   function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
   }
   list.forEach((item) => item.addEventListener("click", activeLink));

   // ========== Progress Bar ==========
   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               const progressBar = entry.target;
               const targetValue = progressBar.getAttribute("data-progress");
               progressBar.style.width = `${targetValue}%`;
               observer.unobserve(progressBar);
            }
         });
      },
      { threshold: 0.3 }
   );

   document.querySelectorAll(".progress-bar").forEach((bar) => {
      observer.observe(bar);
   });

   // ========== Country Search ==========
   const countrySearchInput = document.getElementById("countrySearch");
   if (countrySearchInput) {
      countrySearchInput.addEventListener("input", function () {
         const filter = this.value.toLowerCase();
         document.querySelectorAll("#countryList li").forEach((li) => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(filter) ? "" : "none";
         });
      });
   }
});
