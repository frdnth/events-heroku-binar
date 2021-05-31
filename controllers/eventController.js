const eventService = require('../services/eventService')

const eventController = {
     create: async (req,res) => {
        try{
            let status = 200;
            let message = 'OK';
            let data = {};

            const {data: eventCreated, error } = await eventService.create(req.body)

            // if (error!==null) {
            //     status= 500,
            //     massage= 'username already registered.'
            // }

            res.send({
                status, 
                message,
                data: eventCreated || data
            })

        } catch (error) {
            console.log(error)
            res.send({
                status: 500,
                message: 'Failed.',
                error
            })
        }
    },

    get: async (req, res) => {
        try {

        } catch (error) {
            res.send({
                status: 500,
                message: 'failed.',
                error
            })
        }
    }

}


module.exports = eventController;