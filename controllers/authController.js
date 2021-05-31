const authService = require('../services/authService')


const authController = {
    create: async (req,res) => {
        try{
            let status = 200;
            let message = 'OK';
            let data = {};

            const {data: userCreated, error } = await authService.create(req.body)

            if (error!==null) {
                status= 500,
                massage= 'username already registered.'
            }

            res.send({
                status, 
                message,
                data: userCreated || data
            })

        } catch (error) {
            res.send({
                status: 500,
                message: 'Failed.',
                error
            })
        }
    },

    login: async (req,res) => {
        try {
            let status= 200;
            let message= 'OK';
            let data = {};

            const {data: token, error} = await authService.login(req.body)
            if (error !== null) {
                status = 500, 
                message = error
            }

            res.send({
                status,
                message,
                data: {
                    token
                }
            })

        } catch (error) {
            res.send({
                status: 500,
                message: 'failed.',
                data: error
            })
        }
    }
}

module.exports = authController;