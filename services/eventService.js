const { eventModel } = require("../database/config");


const eventService = {
    create: async (payload) => {
        try {
            const event = {
                user_id: payload.decodeToken.id,
                name: payload.name,
                description: payload.description

            }

            let error = null;
            let result = await eventModel.create(event)

            return {
                data: result,
                error
            }
        } catch (error) {
            console.log(error)
            return error
        }
    },

    get: async (payload) => {
        try {

        } catch (error) {
            console.log(error)
            return error
        }
    }
    
}


module.exports = eventService;