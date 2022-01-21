const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/models");


const app = express();
app.use(express.json());
const dburl = "mongodb+srv://website:website@pepple.leaak.mongodb.net/website?retryWrites=true&w=majority"

mongoose.connect(dburl)

    .then(() => {
        app.listen(5000, () => {
            console.log("our server started at port 5000")
        })
    })
    .catch((error) => {
        console.log(error)
    })


    //api

    app.get('/', (req, res) => {

        Student.find()

        .then(result => {
          res.send(result);
        })

        .catch(err => {
          console.log(err);
        });
    })




    app.post('/about', (req, res) => {
        
        const students = new Student(req.body);

        students.save()

        .then(result => {
        res.send("details saved successfully");
        })

        .catch(err => {
        console.log(err);
        });

       
    })


    app.delete('/', (req, res) => {


        const id = req.id;


        // Student.findOneAndDelete(email)
        Student.findByIdAndDelete(id)


          .then(result => {
            res.send(" this file has been deleted successfully")
          })

          .catch(err => {
            console.log(err);
          });

           
    })


    // app.put("/profile", (req, res) => {
    //     res.send("your profile has been saved")
    // })



