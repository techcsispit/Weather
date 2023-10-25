import morning from "./images/morning.jpg";
import afternoon from "./images/afternoon2.jpg";
import evening from "./images/evening.gif";
import night from "./images/night.jpg";

let hours = new Date().getHours();
setTimeout(() => { Bgchange(hours); }, 10);

function Bgchange(hours) {
    setTimeout(() => {
        const bgimage = document.getElementById("main-container");

        if (hours >= 5 && hours < 10)
            bgimage.style.backgroundImage = `url(${morning})`;
        else if (hours >= 10 && hours < 16)
            bgimage.style.backgroundImage = `url(${afternoon})`;
        else if (hours >= 16 && hours < 20)
            bgimage.style.backgroundImage = `url(${evening})`;
        else
            bgimage.style.backgroundImage = `url(${night})`;

        bgimage.style.transition = "background-image 1s ease-in-out";
    }, 2);
}

export default Bgchange;