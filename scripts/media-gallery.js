(function () {
  const gallerySelector = "[data-media-gallery]";
  const thumbSelector = ".gallery-thumb";
  let viewer;
  let mediaContainer;
  let activeItems = [];
  let currentIndex = 0;

  function createViewer() {
    const element = document.createElement("div");
    element.className = "full-image-viewer hidden";
    element.innerHTML = [
      '<button class="close-button" type="button" aria-label="Close media">&times;</button>',
      '<button class="nav-button prev-button" type="button" aria-label="Previous media">&lsaquo;</button>',
      '<button class="nav-button next-button" type="button" aria-label="Next media">&rsaquo;</button>',
      '<div class="image-container"></div>'
    ].join("");

    document.body.appendChild(element);
    viewer = element;
    mediaContainer = element.querySelector(".image-container");

    element.querySelector(".close-button").addEventListener("click", closeViewer);
    element.querySelector(".prev-button").addEventListener("click", function () {
      showRelativeMedia(-1);
    });
    element.querySelector(".next-button").addEventListener("click", function () {
      showRelativeMedia(1);
    });
    element.addEventListener("click", function (event) {
      if (event.target === element) {
        closeViewer();
      }
    });
  }

  function galleryItemFromThumb(thumb) {
    const type = thumb.dataset.galleryType || (thumb.tagName.toLowerCase() === "video" ? "video" : "image");
    const source = thumb.dataset.gallerySrc || thumb.getAttribute("src");
    const label = thumb.getAttribute("alt") || thumb.getAttribute("aria-label") || "Full size media";

    if (!source) {
      return null;
    }

    return {
      label: label,
      poster: thumb.dataset.galleryPoster || "",
      source: source,
      thumb: thumb,
      type: type
    };
  }

  function clearMedia() {
    mediaContainer.querySelectorAll("video").forEach(function (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
    mediaContainer.replaceChildren();
  }

  function updateViewerMedia() {
    const item = activeItems[currentIndex];
    clearMedia();

    if (item.type === "video") {
      const video = document.createElement("video");
      video.className = "full-media full-media-video";
      video.src = item.source;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      if (item.poster) {
        video.poster = item.poster;
      }
      video.setAttribute("aria-label", item.label);
      mediaContainer.appendChild(video);
      return;
    }

    const image = document.createElement("img");
    image.id = "fullImage";
    image.className = "full-media";
    image.src = item.source;
    image.alt = item.label;
    mediaContainer.appendChild(image);
  }

  function openViewer(items, index) {
    activeItems = items;
    currentIndex = index;

    if (!viewer) {
      createViewer();
    }

    updateViewerMedia();
    viewer.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeViewer() {
    if (!viewer) {
      return;
    }

    viewer.classList.add("hidden");
    clearMedia();
    document.body.style.overflow = "";
  }

  function showRelativeMedia(offset) {
    if (!activeItems.length) {
      return;
    }

    currentIndex = (currentIndex + offset + activeItems.length) % activeItems.length;
    updateViewerMedia();
  }

  function bindGallery(gallery) {
    const items = Array.from(gallery.querySelectorAll(thumbSelector))
      .map(galleryItemFromThumb)
      .filter(Boolean);

    items.forEach(function (item, index) {
      item.thumb.setAttribute("role", "button");
      item.thumb.tabIndex = 0;
      item.thumb.addEventListener("click", function () {
        openViewer(items, index);
      });
      item.thumb.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openViewer(items, index);
        }
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!viewer || viewer.classList.contains("hidden")) {
      return;
    }

    if (event.key === "Escape") {
      closeViewer();
    } else if (event.key === "ArrowLeft") {
      showRelativeMedia(-1);
    } else if (event.key === "ArrowRight") {
      showRelativeMedia(1);
    }
  });

  document.querySelectorAll(gallerySelector).forEach(bindGallery);
}());
