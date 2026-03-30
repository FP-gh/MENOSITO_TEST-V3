const track = document.getElementById("track");
    const slides = document.querySelectorAll(".slide");
    const viewport = document.querySelector(".viewport");

    let index = 0;

    function updatePosition() {
        let offset = 0;

        // somma larghezze precedenti
        for (let i = 0; i < index; i++) {
            offset += slides[i].offsetWidth;
        }

        const currentSlideWidth = slides[index].offsetWidth;
        const viewportWidth = viewport.clientWidth;
        const trackWidth = track.scrollWidth;

        // se la slide corrente è più stretta del viewport
        if (currentSlideWidth < viewportWidth) {
            const maxOffset = trackWidth - viewportWidth;
            offset = Math.min(offset, maxOffset);
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