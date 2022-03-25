const { user, profile, transaction } = require('../../models')

exports.getUsers = async (req, res) => {
    try {
        const users = await user.findAll({
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt', 'role']
            }
        })
        res.send({
            status: 'success',
            data: {
                users
            }
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })

    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        await user.destroy({
            where: {
                id
            }
        })

        res.status(200).send({
            status: 'success',
            data: {
                id
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.getUserProf = async (req, res) => {
    try {
        const { id } = req.params
        const data = await user.findOne({
            where: {
                id
            },
            include: [
                {
                    model: profile,
                    as: "profile",
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                },
                {
                    model: transaction,
                    as: "transaction",
                    attributes: {
                        exclude: ['transferProof', 'accountNumber', 'createdAt', 'updatedAt']
                    }
                }
            ],
            attributes:{
                exclude:['password', 'role', 'createdAt', 'updatedAt']
            }
        })
        res.send({
            status: 'success',
            data: {
                data
            }
        })

    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'server error'
        })

    }
}
