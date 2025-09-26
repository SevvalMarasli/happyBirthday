document.addEventListener("DOMContentLoaded", () => {
  // Mum yanma animasyonu bitince
  setTimeout(() => {
    launchConfetti(); // 🎊 önce konfeti patla
    setTimeout(() => {
      showBirthdayText("İYİ Kİ DOĞDUN ❤️🎉", () => {
        showMessagesSequentially();
      });
    }, 500); // 0.5sn sonra yazı çıksın
  }, 7000);

  function launchConfetti() {
    // 2 saniye boyunca konfeti yağdır
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  function showBirthdayText(text, callback) {
    const h1 = document.getElementById("birthday-text");
    h1.textContent = text;
    h1.classList.add("show");

    setTimeout(() => {
      if (callback) callback();
    }, 1500);
  }

  function typeWriter(element, text, speed, callback) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        if (callback) callback();
      }
    }
    typing();
  }

  function showMessagesSequentially() {
    const messages = [
      "Doğum günün kutlu olsun 🥳🥰 ",
      "İyi ki varsın, iyi ki hayatımdasın ✨",
      "Nice mutlu, huzurlu ve güzel yaşlara 😘",
      "❤️❤️❤️",
    ];

    const container = document.getElementById("messages");
    container.innerHTML = "";

    let index = 0;

    function showNextMessage() {
      if (index < messages.length) {
        const div = document.createElement("div");
        div.className = "message";
        container.appendChild(div);

        typeWriter(div, messages[index], 80, () => {
          index++;
          setTimeout(showNextMessage, 1000);
        });
      }
    }

    showNextMessage();
  }
});
