//Jacob Ferreira - 301452914
//Date: 2024-10-22
//users.js modified from code provided in class

const express = require('express')
const userCntrl = require('../controllers/Users.js')
const router = express.Router()
router.route('/api/users').post(userCntrl.create)
router.route('/api/users').get(userCntrl.list)
router.param('userId',userCntrl.userByID)
router.route('/api/users/:userId').get(userCntrl.read)
router.route('/api/users/:userId').put(userCntrl.update)
router.route('/api/users/:userId').delete(userCntrl.remove)
//including removeAll function as requested in assignment
router.route('/api/users/').delete(userCntrl.removeAll)
module.exports = router;