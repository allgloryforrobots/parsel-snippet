
VANTA.BIRDS({
    el: "#animated-birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x4e7cb9,
    color1: 0x7e97ed,
    color2: 0x144557
});

VANTA.GLOBE({
    el: "#animated-globe",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0xafc3ff
})


const block_1 = $('.block-1')
const block_2 = $('.block-2')

onmousemove = (e) => {
  const x = innerWidth / 2 - e.x
  const y = innerHeight / 2 - e.y
  block_1.css("transform", `translate(${x / 50}px, 0)`)
  block_2.css("transform", `translate(${-x / 40}px, 0)`)


//   block_1.style.transform = `translate(${x / 50}px, 0)`
//   block_2.style.transform = `translate(${-x / 40}px, 0)`
}