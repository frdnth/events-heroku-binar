const joi = require('joi')


const authMiddleware = {
    authValidation: (req, res, next) => {
        const schema = joi.object({
            username: joi.string().min(5).max(20).required(),
            password: joi.string().required()
        })
        .options({abortEarly: false})
        
        const validate = schema.validate(req.body)
        // console.log(validate)

        if(validate.error) {
          res.send({
            status: 500,
            message: 'data is not complete',
            data: validate.error.details
          })
        }
        
        next()
    }
}


module.exports = authMiddleware;