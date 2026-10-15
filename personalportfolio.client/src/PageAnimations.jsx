export function GreetingScreen() {

}

export function TypeWriter(element, text, speed = 75, delay = 0) {
    if (!(element instanceof HTMLElement)) {
        console.error("TypeWriter: Expected a DOM element.");
        return;
    }

    if (element._typeWriterTimer) {
        clearInterval(element._typeWriterTimer);
        clearTimeout(element._typeWriterDelay);
    }

    element.textContent = "";

    element._typeWriterDelay = setTimeout(() => {
        let i = 0;

        element._typeWriterTimer = setInterval(() => {
            if (i >= text.length) {
                clearInterval(element._typeWriterTimer);
                element._typeWriterTimer = null;
                return;
            }

            element.textContent += text.charAt(i);
            i++;
        }, speed);
    }, delay);
}

export function PlaceObject(element) {

}