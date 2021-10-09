const mongoose = require('mongoose');

const Job = mongoose.model('Job');

const getAll = function(req,res){

    Job.find().exec(function(err,result){
        if(err){
            res.status(400).json({message : err});
            return;
        }
 
        if(result.length==0){
            res.status(404).json({message : 'No Job available...'});
            return;
        }

        res.status(200).json(result);
    })
}

const getOne = function(req,res){
    const uid = req.params.id;  
    const checkID = mongoose.Types.ObjectId.isValid(uid);

    if(!checkID){
        res.status(400).json({message : 'Invalid JobID'})
    }

    Job.findById(uid).exec(function(err,result){
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
        res.status(400).json({message : 'Please Enter Job details'});
        return;
    }

    const data = {
        title : req.body.title,
        salary : parseFloat(req.body.salary),
        expreience: req.body.expreience,
        description: req.body.description,
        skills : req.body.skills ,
        postDate: req.body.postDate

    }
    console.log(req.body)

    Job.create(data,function(err){
        if(err){
            res.status(500).json({message : err});
            return;
        }
        res.status(201).json({message : 'document has been created'});
    });
}

const deleteOne = function(req,res){
    const id = req.params.id;
    const checkID = mongoose.Types.ObjectId.isValid(id);

    if(!checkID){
        res.status(400).json({message : 'Invalid ID...'});
        return;
    }

    Job.findByIdAndDelete(id).exec(function(err,result){
        if(err){
            res.status(500).json({message : err});
            return;
        }

        if(!result){
            res.status(404).json({message : 'Job not found...'});
            return;
        }
        res.status(200).json({message : 'Job has been deleted'});
    });

}

const updateOne = function(req,res){
    
    const id = req.params.id;
    const checkID = mongoose.Types.ObjectId.isValid(id);

    if(!checkID){
        res.status(400).json({message : 'Invalid ID...'});
        return;
    }

    if(Object.keys(req.body).length ==0){
        res.status(400).json({message : 'Body data not found...'});
        return;
    }

    Job.findByIdAndUpdate(req.params.id,{
        $set: {
            title : req.body.title,
            salary : parseFloat(req.body.salary),
            expreience: req.body.expreience,
            description: req.body.description,
            skills : req.body.skills ,
            postDate: req.body.postDate
        }
    }).exec(function(err,result){
        if(err){
            res.status(500).json({message : err});
            return;
        }

        if(!result){
            res.status(404).json({message : 'Job not found...'});
            return;
        }
        res.status(200).json({message : 'Job has been updated'});
    });
    
}

module.exports = {
    getAllJobs: getAll,
    getOneJob : getOne,
    addJob : addOne,
    updateJob : updateOne,
    deleteJob : deleteOne
}