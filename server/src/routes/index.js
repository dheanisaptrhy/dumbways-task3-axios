const express = require('express')
const router = express.Router()
//import middleware
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

// import controller
const { getUsers, deleteUser, getUserProf} = require('../controllers/user')
const { register, login, checkUser } = require('../controllers/auth')
const { getBook, getDetailBook, addBook, editBook, deleteBook } = require('../controllers/book')
const { addTransaction, editTransaction, getTransaction, getAllTransaction, editTransCancelled } = require('../controllers/transaction')

//Router User
router.get('/users', getUsers)
router.get('/user/:id', getUserProf)
router.delete('/user/:id', deleteUser)

//router authentication
router.post('/register', register)
router.post('/login', login)
router.get('/check-user', auth, checkUser)

//router book
router.get('/books', getBook)
router.get('/book/:id', getDetailBook)
router.post('/book', auth, uploadFile('bookFile'), addBook)
router.patch('/book/:id', auth, editBook)
router.delete('/book/:id', auth, deleteBook)

//router transaction
router.post('/transaction',auth, uploadFile('transferProof'),addTransaction)
router.patch('/transaction/:id',auth, editTransaction)
router.patch('/transactioncancel/:id',auth, editTransCancelled)
router.get('/transaction/:id',getTransaction)
router.get('/transactions',getAllTransaction)

// export router
module.exports = router