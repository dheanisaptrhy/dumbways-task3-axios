const { book, user } = require('../../models')

//add book
exports.addBook = async (req, res) => {
    try {
        const { ...data } = req.body
        const image = req.files
        console.log(image.length);
        let images = []
        for (let i = 0; i < image.length; i++) {
            let file = image[i].filename
            console.log(file);
            images.push(file)
            console.log(images);
        }
        images.join(',')
        let imageString = images.toString()
        console.log(images);
        const createBook = await book.create({
            ...data,
            bookFile: imageString,
            idUser: req.user.id
        })
        
        res.status(201).send({
            status: 'success',
            data: {
                createBook
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: 'failed',
            message: 'Server error'
        })
    }
}

//edit book
exports.editBook = async (req, res) => {
    try {
        const { id } = req.params

        const newBook = req.body
        await book.update(newBook, {
            where: {
                id
            }
        })

        const updated = await book.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['idUser', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                updated
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

//delete book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        await book.destroy({
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
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

//get semua buku
exports.getBook = async (req, res) => {
    try {
        let data = await book.findAll({
            attributes: {
                exclude: ['idUser', 'createdAt', 'updatedAt']
            }
        })

        data = JSON.parse(JSON.stringify(data))
        console.log(data);

        data = data.map((item) => {
            item.bookFile = item.bookFile.split(',')
            return {
                ...item,
                bookFile: process.env.PATH_FILE + item.bookFile[0]
            }
        })
        res.send({
            status: 'Success',
            data
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: 'failed',
            message: 'Server error'
        })
    }
}

//get detail book
exports.getDetailBook = async (req, res) => {
    try {
        const { id } = req.params
        let detail = await book.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['idUser', 'createdAt', 'updatedAt']
            }
        })
        detail = JSON.parse(JSON.stringify(detail));
        detail.bookFile = detail.bookFile.split(',')

        detail = {
            ...detail,
            bookFile: process.env.PATH_FILE + detail.bookFile[0]
        }

        res.send({
            status: 'Success',
            data: {
                detail
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: 'failed',
            message: 'Server error'
        })
    }
}

//baca epub
exports.readBook = async (req, res) => {
    try {
        const { id } = req.params
        let detail = await book.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['idUser', 'createdAt', 'updatedAt']
            }
        })
        detail = JSON.parse(JSON.stringify(detail));
        detail.bookFile = detail.bookFile.split(',')

        detail = {
            ...detail,
            bookFile: process.env.PATH_FILE + detail.bookFile[1]
        }

        res.send({
            status: 'Success',
            data: {
                detail
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: 'failed',
            message: 'Server error'
        })
    }
}