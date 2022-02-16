import { getMetals, setMetal } from "./DataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"
    // Remember that the function you pass to find() must return true/false
    
    
    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
        <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }
    
    
    html += "</ul>"
    return html
}