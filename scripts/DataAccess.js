//The purpose of this module is to 
    //save temporary state and update permanent state in the database.js module

    import { database } from "./Database.js"

    export const getMetals = () => {
        return database.metals.map(metal => ({...metal}))
    }
    
    export const getSizes = () => {
        return database.sizes.map(size => ({...size}))
    }
    
    export const getStyles = () => {
        return database.styles.map(style => ({...style}))
    }
    
    export const getOrders = () => {
        return database.customOrders.map(order => ({...order}))
    }
    
    export const getShapes = () => {
        return database.shapes.map(shape => ({...shape}))
    }
    
    // export functions that set state
    export const setMetal = (id) => {
        database.orderBuilder.metalId = id
    }
    
    export const setSize = (id) => {
        database.orderBuilder.sizeId = id
    }
    
    export const setStyle = (id) => {
        database.orderBuilder.styleId = id
    }
    
    export const setShape = (id) => {
        database.orderBuilder.shapeId = id
    }
    
    export const addCustomOrder = () => {
        // Copy the current state of user choices
        const newOrder = {...database.orderBuilder}
    
        // Add a new primary key to the object
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
    
        // Add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        // Add the new order object to custom orders state
        database.customOrders.push(newOrder)
    
        // Reset the temporary state for user choices
        database.orderBuilder = {}
    
        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }