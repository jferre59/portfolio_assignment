const Contact = require('../models/Contacts.js');

const create = async(req,res) => {
    const contact = new Contact(req.body)
    try{
        await contact.save()
        return res.status(200).json({
            message:"Contact added Successfully."
        })
    }
    catch(err)
    {
        return res.send(400).json({
            error:"Error. Contact not added."
        })
    }
}
const list = async(req,res)=>{
    try{
        let contacts = await Contact.find().select('firstname lastname email');
        res.json(contacts);
    }
    catch(err){
        return res.send(400).json({
            error:"Error."
        })
    }
}

const contactByID = async(req,res,next,id)=>{
    try{
        let contact = await Contact.findById(id);
        if(!contact)
            return res.status('400').json({
        error:"Contact does not exist."
        })
    req.profile = contact
    next()
    }
    catch(err){
        return res.send(400).json({
            error:"Error."
        })
    }
}

const update = async(req,res) => {
    try{
        let contact = req.profile
        contact = extend(user,req.body)
        contact.updated = Date.now()
        await contact.save()
        res.json(user)
    }
    catch(err)
    {
    return res.send(400).json({
            rror:"Error."
        })   
    }
}
const remove = async(req,res) => {
    try{
        let contact = req.profile
        let deletedContact = await contact.deleteOne()
        res.json(deletedContact)
    }
    catch(err)
    {
    return res.send(400).json({
            rror:"Error."
        })   
    }
}
const removeAll = async(req,res) => {
    try {
        await Contact.deleteMany();
        res.status(200).json({message: "All contacts removed."})
    }
    catch (err) {
        res.status(500).json({message: "Error."})
    }
}
module.exports = {create, contactByID, list, remove, update, removeAll}