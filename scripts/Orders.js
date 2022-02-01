import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

// build a order list item, pass order as argument.
const buildOrderListItem = (order) => {

    const styles = getStyles()
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    let totalCost = foundStyle.price

    const metals = getMetals()
    const foundMetal = metals.find(
        (metal) => {
            return (metal.id === order.metalId)
        }
    )

    totalCost += foundMetal.price

    const sizes = getSizes()
    const foundSize = sizes.find(
        (size) => {
            return (size.id === order.sizeId)
        }
    )

    totalCost += foundSize.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(
        (order) => {
            return buildOrderListItem(order)
        })

    html += listItems.join("")
    html += "</ul>"

    return html
}

