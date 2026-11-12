import { selectCategory } from "./search.js";
import { getData } from "./storage.js";
import { categoryShower, showCategorie, rendre } from "./ui.js";


const channels = getData("channels")
showCategorie();
// const channels = getData("channels");
// console.log(channels)
categoryShower(channels)
// const categorie = getCategories(channels)
// console.log(categorie)
// getData()
rendre(channels);

selectCategory()