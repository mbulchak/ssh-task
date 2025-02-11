document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Is the penis 8 inches or more in length?",
    "Have you exppirienced erectile problems or \ndecrease in libido?",
    "Are you currently taking any medications or supplements that might affect your sexual health?",
    "Do you have any underlying health conditions, such as diabetes or hypertension?",
    "Have you ever undergone any previous treatments or surgeries for sexual enhancement or related issues?",
    "How important is it for you to have access to safe and effective medication for enhancing your sexual health?",
    "Do you think your wife is satisfied with the size of your penis?",
  ];

  let paginationNumber = document.getElementsByClassName("pagin__button");
  let quizeButton = document.getElementsByClassName("quize__button");
  let showModal = document.getElementsByClassName("quize__modal");
  let closeModalByButton = document.getElementsByClassName("modal__button");
  let timer = document.getElementById("timer");

  if (paginationNumber.length > 0) {
    paginationNumber[0].classList.add("active");
  }

  for (let i = 0; i < paginationNumber.length; i++) {
    paginationNumber[i].addEventListener("click", function () {
      for (let k = 0; k < paginationNumber.length; k++) {
        paginationNumber[k].classList.remove("active");
      }

      this.classList.add("active");

      document.getElementById("quize__question").textContent = messages[i];
      document.getElementById("quize__image").src = `../images/quizz/${i+1}.png`;
      document.getElementById("quize__phone__image").src = `../images/quizz/${i+1}.png`;
    });
  }

  closeModalByButton[0].addEventListener("click", () => {
    showModal[0].style.display = "none";
  });

  for (let i = 0; i < quizeButton.length; i++) {
    quizeButton[i].addEventListener("click", () => {
      showModal[0].style.display = "flex";
    });
  }

  // timer

  let setTimer = 600;

  window.setInterval(function () {
    if (setTimer > 0) setTimer--;
    timer.innerHTML = "0" + setTimer;
    if (setTimer <= 0) setTimer = 600;
  }, 1000);
});
