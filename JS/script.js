function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var tenMinutes = 60 * 10,
    display = document.getElementById('countdown');
startCountdown(tenMinutes, display);

var now = new Date();
var endDate = new Date(now);
endDate.setDate(endDate.getDate() + 12);

var day = endDate.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var month = monthNames[endDate.getMonth()];
var year = endDate.getFullYear();

var displayDate = `${month} ${day}, ${year}`;
document.getElementById('countdown-date').textContent = displayDate;

var currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });
    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};