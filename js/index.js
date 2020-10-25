(function () {
  const $like = document.querySelector("#like");

  if ($like) {
    $like.addEventListener("click", () => {
      $like.classList.toggle("liked");
    });
  }
})();
