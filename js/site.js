// Mobile menu and video loader
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  document.querySelectorAll(".video").forEach(function (box) {
    var button = box.querySelector(".video__poster");
    if (!button) return;
    button.addEventListener("click", function () {
      box.classList.add("is-loading");
      var frame = document.createElement("iframe");
      frame.src = "https://www.youtube-nocookie.com/embed/" + box.dataset.videoId + "?autoplay=1&rel=0";
      frame.title = box.dataset.title;
      frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      frame.allowFullscreen = true;
      frame.addEventListener("load", function () {
        box.classList.remove("is-loading");
        button.remove();
      });
      box.appendChild(frame);
    });
  });
})();
