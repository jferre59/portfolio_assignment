//Jacob Ferreira - 301452914
//Date: 2024-10-22
//contacts.js modified from code provided in class

const mongoose = require('mongoose');
const ContactsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:'First naame is required.'
    },
    lastname:{
        type:String,
        trim:true,
        required:'Last name is required.'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists.',
        match:[/.+\@.+\..+/, 'Please enter valid email.'],
        required:'Email is required.'
    },
});
module.exports = mongoose.model('Contacts',ContactsSchema);