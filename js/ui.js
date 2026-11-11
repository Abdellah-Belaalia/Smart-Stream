import { getChannels } from "./api.js";


export function showCategorie() {
    const categorieBtn = document.getElementById("categorie-btn");
    const background = document.getElementById("background")
    const categorieBar = document.getElementById("categorie-bar");
    const buttonClose = document.getElementById("button-close");
    const hoverZone = document.getElementById("hover-zone")

    if (!categorieBtn || !background || !categorieBar || !buttonClose || !hoverZone) return;



    function openBar() {
        categorieBar.classList.remove("-left-64")
        categorieBar.classList.add("left-0")
        background.classList.remove("hidden")
    }
    function closeBar() {
        categorieBar.classList.add("-left-64")
        categorieBar.classList.remove("left-0")
        background.classList.add("hidden")
    }

    hoverZone.addEventListener('mouseenter', openBar);

    categorieBtn.addEventListener('click', () => {
        if (categorieBar.classList.contains("-left-64")) {
            openBar()
        } else {
            closeBar()
        }
    })

    buttonClose.addEventListener("click", closeBar);
    background.addEventListener("click", closeBar)
}

// export function rendre (){
//     getChannels()
//     .then(data=>{
//         console.log(data)
//     })

// }

export async function rendre(){
    const channelsCard = document.getElementById("channels-card")
    if(!channelsCard) return;
    const data = await getChannels()
    channelsCard.innerHTML = ""
    data.forEach(element => {
        channelsCard.innerHTML += `
        <div
            class="card-channels bg-gray-800 border border-gray-700 p-2 flex items-center rounded-lg my-2 hover:-translate-y-1 transition duration-300 shadow-md"
          >
            <img
              src="${element.logo}"
              alt=""
              class="w-16 h-16w-16 bg-white rounded-lg p-1 object-contain"
            />
            <div class="p-2 min-w-0 flex-1">
              <h1 class="font-bold text-white">${element.name}</h1>
              <h2 class="text-xs text-gray-400 mt-1">${element.category}</h2>
            </div>
          </div>
        `
    });
}

