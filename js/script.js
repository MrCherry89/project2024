$(document).ready(function () {
  $(".select-wrap select").select2({
    minimumResultsForSearch: -1,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".lang button").on("click", function () {
    $(".lang button").removeClass("active");
    $(this).addClass("active");
  });

  $(".continue-form").validate({
    errorPlacement: function (error, element) {},
    submitHandler: function (form) {
      window.location.href = "select-service.html";
    },
  });

  $(".rate-form").validate({
    errorPlacement: function (error, element) {},
    submitHandler: function (form) {
      window.location.href = "end.html";
    },
  });

  const stars = document.querySelectorAll(".star-rating .star");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      stars.forEach((s) => s.classList.remove("selected"));
      this.classList.add("selected");
      let rating = this.getAttribute("data-value");
      console.log(`You rated this ${rating} stars.`);
    });

    star.addEventListener("mouseover", function () {
      stars.forEach((s) => s.classList.remove("hover"));
      this.classList.add("hover");
      let prev = this.previousElementSibling;
      while (prev) {
        prev.classList.add("hover");
        prev = prev.previousElementSibling;
      }
    });

    star.addEventListener("mouseout", function () {
      stars.forEach((s) => s.classList.remove("hover"));
    });
  });
});
