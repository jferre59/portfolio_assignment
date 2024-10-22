//Jacob Ferreira - 301452914
//Date: 2024-10-22
//contacts.js modified from code provided in class

const express = require('express')
const contactCntrl = require('../controllers/Contacts.js')
const router = express.Router()
router.route('/api/contacts').post(contactCntrl.create)
router.route('/api/contacts').get(contactCntrl.list)
router.param('userId',contactCntrl.contactByID)
router.route('/api/contacts/:userId').put(contactCntrl.update)
router.route('/api/contacts/:userId').delete(contactCntrl.remove)
//including removeAll function as required by assignment
router.route('/api/contacts/').delete(contactCntrl.removeAll)
module.exports = router;