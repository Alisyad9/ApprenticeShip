const getRandomHue = randomRange(0, 360); /// true

// if (randomRange) {
//   const getRandomHue = randomRange(0, 360);
// }
let mousedown = false; //true

document.addEventListener("mousedown", (event) => {
  // let x = event.clientX; // Get the horizontal coordinate
  // let y = event.clientY;

  const { clientX, clientY } = event; //true
  mousedown = true; ///true

  function createBurst(x, y) {
    const el = document.createElement("div");
    el.classList.add("burst");

    const hue = getRandomHue();
    el.style.setProperty("--hue", hue);

    const top = x - 4;
    const left = y - 4;
    el.style.setProperty("top", top + "px");
    el.style.setProperty("left", left + "px");

    let size = 1;

    function grow() {
      size += 1;
      el.style.setProperty("transform", `scale(${size})`);
      if (mousedown) {
        requestAnimationFrame(grow);
      }
    }

    requestAnimationFrame(grow);
    return el;
  }

  const burst = createBurst(clientX, clientY);
  document.body.appendChild(burst);
});

document.addEventListener("mouseup", (event) => {
  mousedown = false;
});

//////////////solution

// const getRandomHue = randomRange(0, 360);
// let mousedown = false;

// document.addEventListener("mousedown", (event) => {
//   const { clientX, clientY } = event;
//   mousedown = true;

//   function createBurst(x, y) {
//     const el = document.createElement("div");
//     el.classList.add("burst");

//     const hue = getRandomHue();
//     el.style.setProperty("--hue", hue);

//     const top = y - 4;
//     const left = x - 4;
//     el.style.setProperty("top", top + "px");
//     el.style.setProperty("left", left + "px");

//     let size = 1;

//     function grow() {
//       size += 1;
//       el.style.setProperty("transform", `scale(${size})`);
//       if (mousedown) {
//         requestAnimationFrame(grow);
//       }
//     }

//     requestAnimationFrame(grow);
//     return el;
//   }

//   const burst = createBurst(clientX, clientY);
//   document.body.appendChild(burst);
// });

// document.addEventListener("mouseup", (event) => {
//   mousedown = false;
// });
