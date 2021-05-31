const jwt = require('jsonwebtoken')
const joi = require('joi')

const tokenMiddleware = {
    verifyToken: async (req, res, next) => {
        const token = req.headers.authorization
         const schema = joi.object({
            authorization: joi.string().required()
        })
        .options({abortEarly: false})

        const validate = await schema.validate({authorization: token})
        // console.log(validate)

        if(validate.error) {
          res.send({
            status: 500,
            message: 'missing token.',
            data: validate.error.details
          })
        }

        const decodeToken = await jwt.verify(token, 'secret_key')
        console.log(decodeToken)
        req.body.decodeToken = decodeToken;
        
        next()
    }

}

module.exports = tokenMiddleware;