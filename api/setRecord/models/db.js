// connecting to mongodb

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://su-ipec:1234567890@cluster0.wvgwh.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
