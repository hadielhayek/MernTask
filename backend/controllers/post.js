const post = require('../models/post')
class controller {

    getallpost(req, res, next) {
        post.find((err, response) => {

            if (err) return next(err);
            res.status(200).json(response)
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        post.findOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).json(response)
         })
    }

    post(req, res, next) {
        let body = req.body;
        let doc = new post(body);
        doc.save((err, response) => {
            if (err) return next(err);
            res.status(200).json({response,message:"Your Post inserted",success:true});
        })
    }


    async put(req,res,next){
        let {id}=req.params;
        let body=req.body;
    post.updateOne({_id:id}, { $set: body }, (err,response)=>{
        if (err) return next (err);
        res.status(200).json(response)
    })
   }


   delete(req,res,next){
    let {id}=req.params;
    let body=req.body;
    post.findByIdAndDelete({_id:id},(err,response)=>{
        if (err) return next (err);
        res.status(200).json({response,message:"Post Deleted successfly",success:true})
    })
   }


}


const Postcontroller = new controller();
module.exports = Postcontroller;
