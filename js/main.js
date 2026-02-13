onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const lines = [
      "Luv u most.",
      "Happy V-Day!❤️"
    ];

    const titleElement = document.getElementById('title');
    let lineIndex = 0;
    let charIndex = 0;

    function typeEffect() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          titleElement.innerHTML += lines[lineIndex][charIndex];
          charIndex++;
          setTimeout(typeEffect, 300);
        } else {
          titleElement.innerHTML += "<br>"; // pindah baris
          lineIndex++;
          charIndex = 0;
          setTimeout(typeEffect, 500);
        }
      }
    }

    typeEffect();
    clearTimeout(c);
  }, 1000);
};
