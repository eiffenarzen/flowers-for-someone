const title = document.querySelector('.title')
const texts = [
  "Will You Be My",
  "Valentine?"
];

// layout
title.style.display = 'flex'
title.style.flexDirection = 'column'
title.style.alignItems = 'center'
title.style.gap = '0.5rem'

// fungsi untuk buat 1 baris
function createLine(lineText) {
  const lineDiv = document.createElement('div')
  lineDiv.style.display = 'flex'
  lineDiv.style.gap = '0.5rem'
  lineDiv.style.flexWrap = 'wrap'
  lineDiv.style.justifyContent = 'center'

  lineText.split('').forEach(char => {
    const span = document.createElement('span')
    if (char === ' ') {
      span.style.width = '1rem'
    } else {
      span.innerText = char
    }
    lineDiv.appendChild(span)
  })

  title.appendChild(lineDiv)
}

// buat 2 baris
texts.forEach(line => createLine(line))

// animasi random delay
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
