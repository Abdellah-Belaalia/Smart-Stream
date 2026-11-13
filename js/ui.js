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

function getCategories(channels) {
    const categories = channels.map(channel => channel.category)
    const uniqueCategorie = categories.filter((category, index) => {
        return categories.indexOf(category) === index
    });
    return ["TOUTES CATÉGORIES", ...uniqueCategorie]
}

export function categoryShower(channels) {
    const categoriesList = document.getElementById('categories-list')
    if (!categoriesList) return;
    categoriesList.innerHTML = "";

    const categorie = getCategories(channels)

    categorie.forEach(category => {
        const eachCategory = document.createElement("div")
        eachCategory.textContent = category;
        eachCategory.classList.add(
            "categories-item",
            "p-2",
            "rounded-lg",
            "hover:bg-gray-200"
        );

        categoriesList.appendChild(eachCategory)
    });
}


export function rendre(data) {
    const channelsCard = document.getElementById("channels-card")
    if (!channelsCard) return;
    channelsCard.innerHTML = ""

    if (data.length === 0) {
        channelsCard.textContent = "No channels found";
        return
    }

    data.forEach(element => {
        const card = document.createElement('div')

        card.dataset.channelId = element.id;

        card.classList.add(
            "card-channels",
            "bg-gray-800",
            "border",
            "p-2",
            "flex",
            "items-center",
            "rounded-lg",
            "my-2",
            "hover:-translate-y-1",
            "transition",
            "duration-300",
            "shadow-md"
        )

        const img = document.createElement("img")

        img.scr = element.logo;
        img.alt = element.name;

        img.classList.add(
            "w-16",
            "h-16",
            "bg-white",
            "rounded-lg",
            "p-1",
            "object-contain"
        )

        const content = document.createElement('div')

        content.classList.add(
            "p-2",
            "min-w-0",
            "flex-1"
        )

        const title = document.createElement('h1')

        title.textContent = element.name
        title.classList.add(
            "font-bold",
            "text-white"
        )

        const categorie = document.createElement('p')

        categorie.textContent = element.category
        categorie.classList.add(
            "text-xs",
            "text-gray-400",
            "mt-1"
        )
        const country = document.createElement('p')

        country.textContent = element.country
        country.classList.add(
            "text-xs",
            "text-gray-400",
            "mt-1"
        )

        const number = document.createElement('p')

        number.textContent = element.channelNumber
        number.classList.add(
            "text-xs",
            "text-gray-400",
            "mt-1"
        )

        content.append(title, categorie, country, number);
        card.append(img, content);
        channelsCard.append(card)
    });
}

// data.forEach(element => {
//     channelsCard.innerHTML += `
//     <div
//         class="card-channels bg-gray-800 border border-gray-700 p-2 flex items-center rounded-lg my-2 hover:-translate-y-1 transition duration-300 shadow-md"
//       >
//         <img
//           src="${element.logo}"
//           alt=""
//           class="w-16 h-16 bg-white rounded-lg p-1 object-contain"
//         />
//         <div class="p-2 min-w-0 flex-1">
//           <h1 class="font-bold text-white">${element.name}</h1>
//           <h2 class="text-xs text-gray-400 mt-1">${element.category}</h2>
//         </div>
//       </div>
//     `
// });

export function playChannel(channels) {
    const channelsCard = document.getElementById("channels-card")
    if(!channelsCard) return
    channelsCard.addEventListener("click", (e)=>{
        const selectedCard = e.target.closest(".card-channels")
        if(!selectedCard) return;
        const channelId = selectedCard.dataset.channelId;

        const selectedChannel = channels.find(
            channel => channel.id === channelId
        );
        console.log(selectedChannel)
    })
}
