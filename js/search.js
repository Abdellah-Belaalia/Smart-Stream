export function selectCategory(channels){
    const categoriesSelect = document.getElementById('categorie-bar')

    categoriesSelect.addEventListener('click', (e)=>{
        const selectedCategory = e.target.closest(".categories-item")
        if(!selectedCategory) return;

        const categorieNom = selectedCategory.textContent;

        let channelsFilter;
        if(categorieNom === "TOUTES CATÉGORIES"){
            channelsFilter = channels
        }else{
            channelsFilter = channels.filter(
            channels => channels.category === categorieNom)
        }
         console.log(channelsFilter)
    });
}

export function rechercheChannel(channels){
    const searchBar = document.getElementById("search-bar")
    
    if(!searchBar) return;

    searchBar.addEventListener('input', (e)=>{
        const chercheValure = e.target.value.toLowerCase().trim()

        const channelsFilter = channels.filter(channel =>

            channel.name.toLowerCase().includes(chercheValure) ||
            channel.category.toLowerCase().includes(chercheValure) ||
            channel.country.toLowerCase().includes(chercheValure) ||
            channel.channelNumber.toLowerCase().includes(chercheValure)
        );

        console.log(channelsFilter)
        
    })
}