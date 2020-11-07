const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Fir = require('../models/fir')
router.post('/firs',async(req,res)=>{
    try{
        const fir = await new Fir(req.body)
        await fir.save()
        res.status(201).send(fir)
    }
    catch(error){res.status(400).send(error)
    console.log(error)}
})
router.get('/firs',auth,async(req,res)=>{
    const district=req.user.district
    try{
       const fir = await Fir.find({district})
       res.send(fir)
    }
    catch(error){res.status(500).send(error)}
})
router.delete('/firs/:id',auth,async(req,res)=>{
    const _id=req.params.id
    try{
       const fir = await Fir.findById(_id)
       await fir.remove()
       res.send(fir)
    }
    catch(error){res.status(500).send(error)}
})
module.exports = router