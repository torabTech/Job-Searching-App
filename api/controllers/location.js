const mongoose = require('mongoose');

const Job = mongoose.model('Job');


const getOne = function(req,res){
    const jid = req.params.id;  
    const checkID = mongoose.Types.ObjectId.isValid(jid);


    if(!checkID){
        res.status(400).json({message : 'Invalid Job ID'})
    }

    Job.findById(jid).select('location').exec(function(err,result){
        if(err){
            res.status(500).json({message:err});
            return;
        }
        if(!result){
            res.status(404).json({message : 'Job Not Found'});
            return;
        }

        res.status(200).json(result);
    });
}
const addOne = function(req,res){
   
    if(Object.keys(req.body).length == 0){
        res.status(400).json({message : 'Please Enter user details'});
        return;
    }

   // console.log(req.body)

    Job.findById(req.params.id).exec(function(err,result){
        if(err){
            res.status(500).json({message : err});
            return;
        }

        result.location.coordinates=req.body.location.coordinates;
        
        console.log(result)
     

        result.save(function(saveErr,saveResult){
            if (saveErr) {
                res.status(500).json(saveErr.message);
                return;
              }
             // console.log(saveResult)
              res.status(201).json({message: 'location added'});
        });
        
    });
    
}

const deleteOne = function(req,res){
    const checkJID = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!checkJID ) {
    res.status(400).json({ message: "Invalid IDs" });
    return;
  }

  Job.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }
    const getLocation = JSON.stringify(data.location);

    if (getLocation === '{}') {
      res.status(404).json({ message: "Location Not Found!" });
      return;
    }

    data.location.coordinates = [];

    data.save(function (deleteErr) {
      if (deleteErr) {
        res.status(500).json(deleteErr.message);
        return;
      }

      res.status(200).json(data);
    });
  });


}

const updateOne = function(req,res){
    const checkJID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkJID) {
    res.status(400).json({ message: "Invalid IDs" });
    return;
  }
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "body data not found" });
    return;
  }

  Job.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    const location = JSON.stringify(data.location);

    if (location === '{}') {
      res.status(404).json({ message: "Location Not Found" });
      return;
    }
 
    data.location.coordinates  = req.body.location.coordinates
    

    data.save(function (saveErr) {
      if (saveErr) {
        res.status(500).json(err.message);
        return;
      }

      res.status(200).json(data);
    });
  });
    
}

module.exports = {
    getOneLocation : getOne,
    addJobLocation : addOne,
    updateJobLocation : updateOne,
    deleteJobLocation : deleteOne
}