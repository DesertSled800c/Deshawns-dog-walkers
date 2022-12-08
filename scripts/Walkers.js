import { Assignments } from "./Assignments.js"
import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const theWalker = filterWalkerCitiesByWalkers(walker)
                    const cities = assignedCityNames(theWalker)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            /*
                Compare the primary key of each walker to the one
                you have. As soon as you find the right one, display
                the window alert message.
            */
            // for (const walker of walkers) {
            //     for (const walkcity of walkcities) {
            //         for (const city of cities) {
            //             if (parseInt(walkerId) === walkcity.walkerId && walkcity.cityId === city.id) {
            //                 window.alert(`${walker.name} services ${city.name}`)
            //             }
            //         }
            //     }
            // }
        }
    }
)

const walkers = getWalkers()
const walkcities = getWalkerCities()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

const filterWalkerCitiesByWalkers = (walker) => {
    let roamers = []
    for (const roam of walkcities) {
        if (roam.walkerId === walker.id) {
            roamers.push(roam)
        }
    }
    return roamers
}


const assignedCityNames = (theWalkerArr) => {
    let cityNames = ""
    for (const bigCity of theWalkerArr) {
        for (const city of cities) {
            if (city.id === bigCity.cityId) {
                cityNames = `${cityNames} ${city.name}`
            }
        }
    }
    return cityNames
}



