const studentService = require('../../services/studentServices');
const joi = require('joi')

const { StatusCodes } = require('http-status-codes');

const schema = joi.object().keys({
    firstName: joi.string(),
    lastName: joi.string(),
    phoneNumber: joi.string(),
    email: joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: joi.string().required(),
    rollNumber: joi.string().required(),
    deptName: joi.string(),
    semester: joi.number(),
    typeOfUser: joi.number(),
    userID: joi.number()

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
        const data = await studentService.createStudent(req.body)
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