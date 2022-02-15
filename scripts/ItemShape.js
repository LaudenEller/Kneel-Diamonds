import { getShapes, setShape } from "./database.js"

const shapes = getShapes()

document.addEventListener(
    "change",
    (event) => {
            if (event.target.name === "shape") {
                setShape(parseInt(event.target.value))
            }
        }
)

export const Shapes = () => {
    let html = ""

    const listItemShapes = shapes.map(shape => {
        return `<input type="radio" name="shape" value="${shape.id}" /> ${shape.shape}
        `
    })

    html += listItemShapes.join("")

    return html

}