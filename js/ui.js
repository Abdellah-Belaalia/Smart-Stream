export function showCategorie (){
    const categorieBtn = document.getElementById("categorie-btn");
    if(!categorieBtn) return;
    const categorieBar = document.getElementById("categorie-bar");

    categorieBtn.addEventListener("click", ()=> {
        categorieBar.classList.toggle("hidden")
    })
};