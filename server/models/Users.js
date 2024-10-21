const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required.'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists.',
        match:[/.+\@.+\..+/, 'Please enter valid email.'],
        required:'Email is required.'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    updated:
    {
        type:Date,
        default:Date.now
    },
    hashed_passwords:
    {
        type:String,
        required:'Password is required.'
    },
    salt:String
});
UsersSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.hashed_passwords = password;
})
.get(function(){
    return this._password;
});
UsersSchema.path('hashed_password').validate(function(v){
    if(this._password && this._password < 8)
    {
        this.invalidate('password','Password length must be at least 8 characters.')
    }
    if(this.isNew && !this._password)
    {
        this.invalidate('password','Password required.');
    }
}, null);
module.exports = mongoose.model('Users',UsersSchema);