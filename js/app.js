import { selectCategory, rechercheChannel } from "./search.js";
import { getData } from "./storage.js";
import { categoryShower, showCategorie, rendre } from "./ui.js";


const channels = getData("channels")
showCategorie();

categoryShower(channels)
selectCategory(channels)
rendre(channels);

