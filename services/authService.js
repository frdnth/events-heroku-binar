// const authController = require("../controllers/authController")
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../database/config/index');


const authService = {
    findByUsername: async (username) => {
        return await userModel.findOne({where: {username}})
    },

    create: async (userDetails) => {
        try {
            saltRounds = 10;
            salt = await bcrypt.genSaltSync(saltRounds)

            const hashedPassword =  await bcrypt.hashSync(userDetails.password, salt)

            const isUserExist = await userModel.findByUsername(userDetails.username)

            let error = null;
            let result = {}
            // if(isUserExist) {
            //     error = 'user already exist.'
            // }

            if(!isUserExist) {
              result = await userModel.create({
                username: userDetails.username, 
                password: hashedPassword
              })
            } else {
               error= 'user is already exist.'
            }
            

            return {
                data: result,
                error
            };

        } catch (error) {
            console.log(error)
            return error
        }
    },

    login: async (userDetails) => {
        try {
            let error = null;              
            let result = {};

            const isUserExist = await authService.findByUsername(userDetails.username)
            console.log(isUserExist)
            if (!isUserExist) {
                error = 'user is not registered.'
                return {
                  data: {},
                  error
                }
             } else {
                const isSamePassword = await bcrypt.compareSync(userDetails.password, isUserExist.dataValues.password)
                if (!isSamePassword) {
                    error = 'incorrect password'
                    return {
                        data: {},
                        error
                    }
                } else{
                    result = await jwt.sign(isUserExist.dataValues, 'secret_key');
                }

             }

            return {
                data: result,
                error
            };

        } catch (error) {
            console.log(error) 
            return error
        }
    }
}

module.exports = authService;