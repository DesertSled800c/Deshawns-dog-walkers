import { Walkers } from "./Walkers.js"
import { CityList } from "./CityList.js"
import { Assignments } from "./Assignments.js"
import { RegisteredPets } from "./RegisteredPets.js"


const applicationHTML = `
<h1>DeShawn's Dog Walking</h1>
<article class="details">
<section class="detail--column list details__cities">
<h2>Cities with Service</h2>
${CityList()}
</section>
<section class="detail--column list details__cities">
<h2>Walkers</h2>
${Walkers()}
</section>
<section class="detail--column list details__cities">
<h2>Pets</h2>
${RegisteredPets()}
</section>
</article>

<article class="assignments">
<h2>Current Assignments</h2>
${Assignments()}
</article>
`
const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = applicationHTML

