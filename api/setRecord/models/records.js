
// defining the elements of the MongoDB Database
const setRecordSchema = new Schema({
    name: String,
    email: String,
    email: String
 });

//  validating email method
 setRecordSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

 const recordModel = mongoose.model('Records', setRecordSchema);


