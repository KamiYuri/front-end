import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
const useStore = defineStore('main', {
    state: () => {
        return {
            user: {
                data: {
    
                },
                token: '123'
            }
        }
    },
    getters: {},
    actions: {}
})

export default useStore