const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.port || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || 
    "mongodb+srv://jferre59:J1235813f!@cluster0.vt5as.mongodb.net/" ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_POST ||'27017') + 
    '/Skeleton'
};
module.exports = config;