document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline();
    const toggle = document.getElementById('toggle');
    const weapon1 = document.querySelector('.weapon-1');
    const weapon2 = document.querySelector('.weapon-2');
    const btnMain = document.querySelector('.btn-main');
    const joinNow = document.querySelector('.join');
    const arrow = document.querySelector('.arrow');

    toggle.addEventListener('change', function() {
        if (this.checked) {
            tl.to([weapon1, arrow], {opacity: 0, duration: 0.5, ease: "power1.inOut"})
                .to([weapon2, btnMain, joinNow], {opacity: 1, duration: 0.5, ease: "power1.inOut"}, "-=0.5");
        } else {
            tl.to([weapon2, btnMain, joinNow], {opacity: 0, duration: 0.5, ease: "power1.inOut"})
                .to([weapon1, arrow], {opacity: 1, duration: 0.5, ease: "power1.inOut"}, "-=0.5");
        }
    });


});
