document.addEventListener("DOMContentLoaded", () => {
  let quizebutton1 = document.querySelector(".pagin__button--1");
  let quizebutton2 = document.querySelector(".pagin__button--2");
  let quizebutton3 = document.querySelector(".pagin__button--3");
  let quizebutton4 = document.querySelector(".pagin__button--4");
  let quizebutton5 = document.querySelector(".pagin__button--5");
  let quizebutton6 = document.querySelector(".pagin__button--6");
  let quizebutton7 = document.querySelector(".pagin__button--7");

  let paginationNumber = document.getElementsByClassName("pagin__button");
  let quizeButton = document.getElementsByClassName("quize__button");
  // console.log('quizeButton', quizeButton);

  // let quizeQuestion = document.querySelector(".quize__question");

  quizebutton1.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "Is the penis 8 inches or more in length?";

    document.getElementById("quize__image").src = "../images/quizz/1.png";
  });

  quizebutton2.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "Have you exppirienced erectile problems or \ndecrease in libido?";

    document.getElementById("quize__image").src = "../images/quizz/2.png";
  });

  quizebutton3.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "Are you currently taking any medications or supplements that might affect your sexual health?";

    document.getElementById("quize__image").src = "../images/quizz/3.png";
  });

  quizebutton4.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "Do you have any underlying health conditions, such as diabetes or hypertension?";

    document.getElementById("quize__image").src = "../images/quizz/4.png";
  });

  quizebutton5.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "Have you ever undergone any previous treatments or surgeries for sexual enhancement or related issues?";

    document.getElementById("quize__image").src = "../images/quizz/5.png";
  });

  quizebutton6.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "How important is it for you to have access to safe and effective medication for enhancing your sexual health?";

    document.getElementById("quize__image").src = "../images/quizz/6.png";
  });

  quizebutton7.addEventListener("click", () => {
    document.getElementById("quize__question").textContent =
      "Do you think your wife is satisfied with the size of your penis?";

    document.getElementById("quize__image").src = "../images/quizz/7.png";
  });

  let activePagination;

  if (paginationNumber.length > 0) {
    paginationNumber[0].classList.add('active');
  }

  for (let i = 0; i < paginationNumber.length; i++) {
    paginationNumber[i].addEventListener("click", function() {

      for (let k = 0; k < paginationNumber.length; k++) {
        paginationNumber[k].classList.remove('active');
      }

      activePagination = this.classList.add('active');

      this.classList.add('active');
    });
  }

  function changewhileclickingButtons () {
    for (let i = 0; i< quizeButton.length; i++) {
      paginationNumber[i].addEventListener("click", () => {
        
      })
    }
  }

  changewhileclickingButtons();
});
