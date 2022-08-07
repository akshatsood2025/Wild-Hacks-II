const Animal = require('../models/animal.model');

exports.updateAnimalLocation = async function (req, res) {
    try
    {
        let animalFound = await Animal.findOne({_id:req.body._id});
        if(animalFound){
            animalFound.latitude=req.body.latitude;
            animalFound.longitude=req.body.longitude;
            animalFound.save();
            res.send('Found the animal in database and updated its location');
        }
        else{
            let animal = new Animal(
                {
                    name: req.body.name,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    _id: req.body._id
                }
            );
            animal.save();
            res.send('Added animal to the database and updated its location');
        }
    }
    catch(e){
        console.log(e);
    }
}

exports.getAnimalLocation = async function (req, res) {
    try{
        let locations = await Animal.find({name: req.params.name});
        res.send(locations);
    }
    catch(e){
        console.log(e);
    }
}
