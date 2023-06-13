module.exports ={
    mutipleMongooseToObject: function (mongooses){
        return mongooses.map(mongoose=> mongoose.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    },
    tong (a, b){
        sum= a+b
        return sum 
    }
}