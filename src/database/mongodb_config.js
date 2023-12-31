

module.exports = class mongodb_config {
    async getConnection() {
        const mongoose = require('mongoose')
        mongoose.set("strictQuery", false)
        
        var uri = "mongodb://127.0.0.1:27017/db_test_mongod"
        try {
            await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }) //use promise syntax
                .then(() => {
                    console.log("Connect DB MongoDB success!")
                })
            // .catch(err=>{
            //     console.log("Connect MongoDB Fail!!!")
            // })
        } catch (err) {
            console.log("Connect MongoDB Fail")
        }
    }
}
