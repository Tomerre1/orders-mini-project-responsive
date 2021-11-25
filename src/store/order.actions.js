import { orderService } from '../services/order.service'

const addOrderAction = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}

const setOrdersAction = (orders) => {
    return {
        type: 'SET_ORDERS',
        payload: orders
    }
}

const removeOrderAction = (orderId) => {
    return {
        type: 'REMOVE_ORDER',
        payload: orderId
    }
}

const updateOrderAction = (order) => {
    return {
        type: 'UPDATE_ORDER',
        payload: order
    }
}

export function loadOrders() {
    return async (dipatch) => {
        try {
            console.log('loadOrders')
            const orders = await orderService.query()
            dipatch(setOrdersAction(orders))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function addOrder(order) {
    return async (dipatch) => {
        try {
            console.log('addOrder')
            const newOrder = await orderService.save(order)
            dipatch(addOrderAction(newOrder))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function removeOrder(orderId) {
    return async (dipatch) => {
        try {
            console.log('removeOrder')
            await orderService.remove(orderId)
            dipatch(removeOrderAction(orderId))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function updateOrder(order) {
    return async (dipatch) => {
        try {
            console.log('updateOrder')
            await orderService.save(order)
            dipatch(updateOrderAction(order))
        }
        catch (error) {
            console.log(error)
        }
    }
}