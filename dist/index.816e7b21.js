let anim = VANTA.WAVES({
    el: "#animated-wave",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x2a4089
});
// в vanta.waves.mod.min.js анимация остановлена на 1м кадре
// const canvas = anim.renderer.domElement;
const canvas = document.querySelector(".vanta-canvas");
setTimeout(()=>{
    const fullQuality = canvas.toDataURL();
    console.log("fullQuality2", fullQuality);
}, 1000);

//# sourceMappingURL=index.816e7b21.js.map
