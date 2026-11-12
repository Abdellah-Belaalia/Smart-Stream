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
