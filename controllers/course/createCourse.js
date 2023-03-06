const courseService = require('../../services/courseService');
const joi = require('joi')

const { StatusCodes } = require('http-status-codes');

const schema = joi.object().keys({
    title: joi.string().required(),
    courseCode: joi.string().required(),
    creditHours: joi.number().required(),
    lab: joi.bool().required()
    
});

module.exports = async function(req, res){
    try {
        const validate = await schema.validateAsync(req.body, {
            abortEarly: false,
        });
        if (validate.error) {
            res.status(StatusCodes.BAD_REQUEST).send({
                data: {},
                message: err.message,
                error: err.stack,
            });
        }
        const data = await courseService.createCourse(req.body)
         res.status(StatusCodes.OK)
            .send({ message: 'Successfull Login', data, error: {} });

    }catch(err){

        res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
            data: {},
            message: err.message,
            error: err.stack,
        }); 
    }
};