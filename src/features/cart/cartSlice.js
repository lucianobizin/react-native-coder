import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

// actions.payload => agrega lo que le pase
// Por librería Immer (incluida en redux => 
// state.value = actions.payload === es lo mismo que === state.items = [...state.items, actions.payload]

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, actions) => {
            // state.items.push(actions.payload)

            const index = state.items.findIndex((item) => item.id === actions.payload.id)
            if (index === -1) {
                state.items = [...state.items, { ...actions.payload, quantity: 1 }]

                // Generalmente map es para agregar
            } else {
                state.items = state.items.map((item) => {
                    if (item.id === actions.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }

                    return item
                })
            }


            state.total = state.items.reduce((acc, item) => acc = acc + (item.price * item.quantity), 0)
            console.log(state)


        },
        deleteCartItem: (state, actions) => {
            // Generalmente filter es para eliminar
            state.items = state.items.filter((item) => item.id !== actions.payload)
            state.total = state.items.reduce((acc, item) => acc = acc + item.price , 0)
            console.log(state)
        }
    }
})

export const { addCartItem, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer 