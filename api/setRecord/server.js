const express=require('express')
const app=express()
const { Mongoose } = require('mongoose') 
const records = mongoose.model('Records');

// @GET 
app.get("/setRecord/name/email",(req,res)=>{
    res.render("setRecord/name/email", {
        viewTitle: "Insert name, email"
    });

});

// @POST- 
app.post('/setRecord/name/email', (req, res) => {
        insertRecord(req, res);
});

// insert name and email to DB
insertRecord=((req,res)=>{
    var records=new records()
    records.name=req.params.name
    records.email=req.params.email
    records.save((err, doc) => {
        if (!err)
            res.send(employee._id);
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("setRecord/name/email", {
                    viewTitle: "Insert name,email",
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
})})

const PORT= 5000

app.listen(PORT)



