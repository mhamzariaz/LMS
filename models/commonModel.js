const {models} = require('../models/definitions')
const jwtSecret = require('../config.json')
const jwt = require('jsonwebtoken')

let refreshTokens = []
function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}

module.exports = {

    createtoken : async function(body){

        const refreshToken = body.token
        if (refreshToken == null) return '403'
        if (!refreshTokens.includes(refreshToken)) return '403'
        let accessToken = jwt.verify(refreshToken, jwtSecret.jwt.secret, (err, user) => {
            const accessToken = generateAccessToken({ name: user.name })
            return accessToken
        })
        
        return({accessToken: accessToken});
    },

    login: async function(body){

        let user = await models.user.findOne({
            where:{
                userName: body.userName
            }
        })
        if (!user)
        {
            return "invalid username/password"
        }
        user = user.dataValues;
        const accessToken = generateAccessToken(user)
        const token = jwt.sign(user, jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({ accessToken: accessToken, refreshToken: token })
    },

    logout: async function(body){
        refreshTokens = refreshTokens.filter(token => token !== body.token)
        return({refreshToken: refreshTokens})
    }
}

