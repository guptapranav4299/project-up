const setRecordSchema = new Schema({
    name: String,
    email: String,
    email: String
 });

 const recordModel = mongoose.model('Records', setRecordSchema);

 module.exports=recordModel

 