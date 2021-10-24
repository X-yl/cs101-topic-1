var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    let item = document.querySelector("#nav-status-item");
    if (entries[0].isIntersecting === false) {
        item.style.opacity = 1;
    } else {
        item.style.opacity = 0;
    }
}, { threshold: [0] });


window.addEventListener('load', () => {
    observer.observe(document.querySelector("#article"));
    console.log("load");
});
var i = 0;
window.onscroll = () => {
    i += 1;
    if (i % 3 == 0) {
        (() => {
            let coords = document.querySelector("#article-text").getBoundingClientRect();
            let height = coords.height;
            let progressPercentage = 0;

            if (coords.top < 0) {
                const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
                progressPercentage = clamp((Math.abs(coords.top) / height) * 100, 0, 100);
            }

            document.querySelector("#article-progress").value = progressPercentage;
        })();
    }
};