const express = require("express");
const router = express.Router();
router.get('/dashboard',(req,res)=>{
    res.send('Admin Dashboard');
});
router.get('/login',(req,res)=>{
    res.send('Admin Login');
});
module.exports = router;