import { rendre } from "./ui.js";

let categorieNom = "TOUTES CATÉGORIES"
let chercheValure = ""

export function selectCategory(channels){
    const categoriesSelect = document.getElementById('categorie-bar')

    categoriesSelect.addEventListener('click', (e)=>{
        const selectedCategory = e.target.closest(".categories-item")
        if(!selectedCategory) return;

        categorieNom = selectedCategory.textContent;

        displayChanges(channels);

        // let channelsFilter;
        // if(categorieNom === "TOUTES CATÉGORIES"){
        //     channelsFilter = channels
        // }else{
        //     channelsFilter = channels.filter(
        //     channels => channels.category === categorieNom)
        // }
        //  console.log(channelsFilter)
    });
}

export function rechercheChannel(channels){
    const searchBar = document.getElementById("search-bar")
    
    if(!searchBar) return;

    searchBar.addEventListener('input', (e)=>{
        chercheValure = e.target.value.toLowerCase().trim()

        displayChanges(channels)

        // const channelsFilter = channels.filter(channel =>

        //     channel.name.toLowerCase().includes(chercheValure) ||
        //     channel.category.toLowerCase().includes(chercheValure) ||
        //     channel.country.toLowerCase().includes(chercheValure) ||
        //     channel.channelNumber.toLowerCase().includes(chercheValure)
        // );

        // console.log(channelsFilter)
        
    })
}

function displayChanges(channels){
    let channelsFilter = channels;

    if (categorieNom !== "TOUTES CATÉGORIES"){
        channelsFilter = channelsFilter.filter(
            channel => channel.category === categorieNom
        );
    }

    channelsFilter = channelsFilter.filter(channel =>

            channel.name.toLowerCase().includes(chercheValure) ||
            channel.category.toLowerCase().includes(chercheValure) ||
            channel.country.toLowerCase().includes(chercheValure) ||
            String(channel.channelNumber).toLocaleLowerCase().includes(chercheValure)
    );

    rendre(channelsFilter)
}