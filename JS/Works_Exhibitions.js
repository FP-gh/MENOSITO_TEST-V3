    const track = document.getElementById("track");
    const slides = document.querySelectorAll(".slide");
    const viewport = document.querySelector(".viewport");

    let index = 0;

    function updatePosition() {
        let offset = 0;

        if (index === slides.length - 1) {
        // Ultima immagine: allinea il bordo destro
        offset = track.scrollWidth - viewport.clientWidth;
        } else {
        // Tutte le altre
        for (let i = 0; i < index; i++) {
            offset += slides[i].offsetWidth;
        }
        }

        track.style.transform = `translateX(-${offset}px)`;
    }

    function next() {
        index++;
        if (index >= slides.length) {
        index = 0;
        }
        updatePosition();
    }

    function prev() {
        index--;
        if (index < 0) {
        index = slides.length - 1;
        }
        updatePosition();
    }