const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

const bodyParser = require('body-parser')

const CarneAsadaModel = require("./models/CarneAsada");
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.use('/read', CarneAsadaModel)

mongoose.connect("mongodb+srv://coder:coder246@crud.uywi9.mongodb.net/<Food>?retryWrites=true&w=majority",


 { useNewUrlParser: true , useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("Mongodb connected!")
})
// app.get("/", async (req,res) => {
//    res.body.CarneAsadaSchema
//  })

app.post("/insert", async (req, res) => {
    const foodName = req.body.foodName 
    const Orders = Orders.body.Orders
    const CarneAsada = new CarneAsadaModel ({foodName: foodName, Orders: Orders});
try {
        await CarneAsada.save();
        res.send("inserted data");
      } catch (err) {
          console.log (err); 
    }
});
app.get("/read", async (req, res) => {
    CarneAsadaModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    });
});
    app.put("/update", async (req, res) => {
        const newFoodName = req.body.newFoodName;
        const id = req.body.id;
        
            
            try {
               await CarneAsadaModel.findById(id, (err, updatedFood) => {
                    updatedFood.foodName = newFoodName;
                    updatedFood.save();
                    res.send("update");
                });
                
              } catch (err) {
                  console.log (err); 
              }
        });

    app.delete("/delete/:id", async (req, res) => {
        const id = req.params.id;
    await foodModel.findByIdAndRemove(id).exec();
    res.send("deleted");


    })
    
app.listen(8001, () => {
    console.log("Server running on port 8001..");
});