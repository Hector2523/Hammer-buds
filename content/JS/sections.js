const sections = ['home', 'water', 'sound', 'noise', 'battery'];
const homeBtn = document.getElementById('homeMenu');
const waterBtn = document.getElementById('waterMenu');
const noiseBtn = document.getElementById('noiseMenu');
const batteryBtn = document.getElementById('batteryMenu');
const logoBtn = document.getElementById('logo');
const soundBtn = document.getElementById('soundMenu');
const counter = document.getElementById('cinematic');
const earphonesElem = document.getElementById('earbudsNumber');
const caseElem = document.getElementById('caseNumber');
var run = true;
var earphones = true;
var caseCounter = true
var count;
let observer;

function initializeObserver(...v) {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let section = entry.target.id;

            if (section === sections[0] && entry.intersectionRatio > 0.5) {
                waterBtn.classList.remove('marked');
                soundBtn.classList.remove('marked');
                noiseBtn.classList.remove('marked');
                batteryBtn.classList.remove('marked');
                homeBtn.classList.add('marked');
                return;
            }

            if (section === sections[1] && entry.intersectionRatio > 0.5) {
                homeBtn.classList.remove('marked');
                soundBtn.classList.remove('marked');
                noiseBtn.classList.remove('marked');
                batteryBtn.classList.remove('marked');
                waterBtn.classList.add('marked');
                return;
            }

            if (section === sections[2] && entry.intersectionRatio > 0.5) {
                homeBtn.classList.remove('marked');
                waterBtn.classList.remove('marked');
                noiseBtn.classList.remove('marked');
                batteryBtn.classList.remove('marked');
                soundBtn.classList.add('marked');
                cinematic()
                return;
            }

            if (section === sections[3] && entry.intersectionRatio > 0.5) {
                homeBtn.classList.remove('marked');
                waterBtn.classList.remove('marked');
                soundBtn.classList.remove('marked');
                batteryBtn.classList.remove('marked');
                noiseBtn.classList.add('marked');
                return;
            }

            if (section === sections[4] && entry.intersectionRatio > 0.5) {
                homeBtn.classList.remove('marked');
                waterBtn.classList.remove('marked');
                soundBtn.classList.remove('marked');
                noiseBtn.classList.remove('marked');
                batteryBtn.classList.add('marked');
                earPhones()
                return;
            }

        });
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });

    sections.forEach(sectionId => {
        const sectionElement = document.querySelector(`section#${sectionId}`);
        if (sectionElement) {
            observer.observe(sectionElement);
        }
    });
}

window.addEventListener('DOMContentLoaded', initializeObserver(homeBtn, waterBtn, soundBtn, noiseBtn, batteryBtn));
document.addEventListener("scroll", initializeObserver(homeBtn, waterBtn, soundBtn, noiseBtn, batteryBtn));
window.addEventListener("resize", initializeObserver(homeBtn, waterBtn, soundBtn, noiseBtn, batteryBtn));

logoBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById(sections[0]).scrollIntoView()
})

homeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById(sections[0]).scrollIntoView()
})

waterBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById(sections[1]).scrollIntoView()
})

soundBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById(sections[2]).scrollIntoView()
})

noiseBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById(sections[3]).scrollIntoView()
})

batteryBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.getElementById(sections[4]).scrollIntoView()
})

// cinematic counter

async function cinematic() {
    await setTimeout(() => {
        if (run) {
            run = false;
           
            for (let n = 0; n <= 360; n++) {
    
                setTimeout(() => {
                    update(n);
                }, 3 * n);
            }
    
            function update(n) {
                counter.innerHTML = `${n}`;
            }
    
        }
    }, 300)

    observer.disconnect();
}

// battery earphones counter

function earPhones() {
    Case()
    setTimeout(() => {
        if (earphones) {
            earphones = false;
           
            for (let n = 0; n <= 11; n++) {
    
                setTimeout(() => {
                    update(n);
                }, 20 * n);
            }
    
            function update(n) {
                earphonesElem.innerHTML = `${n}`;
            }
    
        }
    }, 300)
}

// battery case counter

async function Case() {
    await setTimeout(() => {
        if (caseCounter) {
            caseCounter = false;
           
            for (let n = 0; n <= 43; n++) {
    
                setTimeout(() => {
                    update(n);
                }, 20 * n);
            }
    
            function update(n) {
                caseElem.innerHTML = `${n}`;
            }
    
        }
    }, 300)

    observer.disconnect();
}