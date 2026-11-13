import { getChannels } from "./api.js";
import { selectCategory, rechercheChannel } from "./search.js";
// import { getData } from "./storage.js";
import { categoryShower, showCategorie, rendre, playChannel } from "./ui.js";


const channels = await getChannels()
showCategorie();

categoryShower(channels)
rechercheChannel(channels)
selectCategory(channels)
rendre(channels);
playChannel(channels)

