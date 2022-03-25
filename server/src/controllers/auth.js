const { user } = require('../../models')

//import package joi
const Joi = require('joi')
// import package bcrypt
const bcrypt = require('bcrypt')
// import jwt
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const data = req.body

    // blueprint pengecekan ketentuan
    const schema = Joi.object({
        fullname: Joi.string().min(5).required(),
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(5).required()
    })
    // cek data dengan ketentuan
    const { error } = schema.validate(data)
    if (error) {
        return res.status(400).send({
            status: 'Error',
            message: error.details[0].message
        })
    }

    //cek misal emailnya sudah digunakan
    const userExist = await user.findOne({
        where: {
            email: data.email
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    if (userExist) {
        return res.status(400).send({
            status: 'failed',
            message: 'Email has already taken'
        })
    }

    //try-catch
    try {
        //bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)
        //masukkan ke database
        const newUser = await user.create({
            fullname: data.fullname,
            email: data.email,
            password: hashedPassword,
            role: 'user'
        })

        //generate token
        const dataToken = {
            id: user.id
        }
        const SECRET_KEY = process.env.TOKEN_KEY
        const token = jwt.sign(dataToken, SECRET_KEY)

        res.status(201).send({
            status: 'success',
            data: {
                email: newUser.email,
                token
            }
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.login = async (req, res) => {
    const data = req.body
    const schema = Joi.object({
        email: Joi.string().email().min(5).required(),
        password: Joi.string().min(5).required()
    })

    const { error } = schema.validate(data)
    if (error) {
        return res.status(200).send({
            error: {
                message: error.details[0].message
            }
        })
    }
    try {
        const userExist = await user.findOne({
            where: {
                email: data.email
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        const passValid = await bcrypt.compare(data.password, userExist.password)
        if (!passValid) {
            return res.status(400).send({
                status: 'failed',
                message: 'Email or Password doesn\'t match'
            })
        }

        const token = jwt.sign({id:userExist.id},process.env.TOKEN_KEY)

        //status pengiriman
        res.status(200).send({
            status: 'success',
            data: {
                id:userExist.id,
                fullname: userExist.fullname,
                email: userExist.email,
                role: userExist.role,
                token
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.checkUser = async (req,res)=>{
    try {
        const id = req.user.id

        const dataUser = await user.findOne({
            where:{
                id
            },
            attributes:{
                exclude:["createdAt","updatedAt","password"]
            }
        })

        if(!dataUser){
            return res.status(404).send({
                status:'failed'
            })
        }

        res.send({
            status:"success",
            data:{
                user:{
                    id:dataUser.id,
                    fullname:dataUser.fullname,
                    email:dataUser.email,
                    role:dataUser.role,
                }
            }
        })
    } catch (error) {
        console.log(error);
        res.status({
            status:'failed',
            message:'server error'
        })
    }
}