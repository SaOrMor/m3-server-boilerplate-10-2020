const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// cloudinary
const uploader = require("./../config/cloudinary-setup");


const User = require("../models/user.model");
const Campaign = require("../models/campaign.model");

// cloudinary route

router.post("/upload", uploader.single("image"), (req, res, next) => {
    console.log("file is: ", req.file);
  
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
  });

// creating a post post/api/campaign

router.post('/campaign', (req, res, next) => {
const { firstname, lastname, campaignname, companyname, startingdate, endingdate, budget, image, age, gender, country, interests, operatingsystem, education, jobfunction} = req.body;

Campaign.create({ firstname, lastname, campaignname, companyname, startingdate, endingdate, budget, image, age, gender, country, interests, operatingsystem, education, jobfunction })
.then((createdCampaign) => {
    res
    .status(201)
    .json(createdCampaign);
})
.catch((err)=> {
    res
    .status(500) //internal server error
    .json(err)
})
})

// get/api/campaign non so se serve

router.get('/campaign/advertiser', (req, res, next) => {

    Campaign
    .find()
    .then( (allTheCampaigns ) => {
    res.status(200).json(allTheCampaigns);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// get/api/campaign/:id specific non so se serve, ho in basso quella per le statistcs

router.get('/:id', (req,res) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res
        .status(400) // bad request 
        .json({ message: 'Specified id is not valid'})
        return;
    }

    Campaign
    .findById( id )
    .then( (foundCampaign) => {
        res.status(200).json(foundCampaign);
    })
    .catch((err) => {
    res.status(500).json(err);
})
});

// put route to update the campaign

router.put('/:id', (req,res,next) => {
    const { id } = req.params;
    const {campaignname, endingdate, budget, image, age, gender, country, interests, operatingsystem, education, jobfunction } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({message: 'Specified id is not valid'});
        return;
    }
    Campaign
    .findByIdAndUpdate(id, {campaignname, endingdate, budget, image, age, gender, country, interests, operatingsystem, education, jobfunction}, {new: true})
    .then((updatedCampaign) => {
        res.status(200).json(updatedCampaign);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// delete campaign

router.delete('/:id', (req, res, next) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Specified id is not valid '});
        return;
    }

    Campaign.findByIdAndRemove(id)
    .then(() => {
        res
        .status(202)
        .send(` Campaign ${id} was removed successufully.`);
    })
    .catch( err => {
        res.status(500).json(err);
    })
});

// campaign Statistics gettind the Statistics of the campaign

router.get('/statistics/:id', (req, res, next) => {
    const {id} = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res
        .status(400) //bad request
        .json({ message: 'specified id is not valid'})
        return;
    }

    Campaign
    .findById( id)
    .then( (campaign) => {
        res.status(200).json(campaign)
    })
    .catch((err) => {
        res.status(500).json(err);
    })
})


module.exports = router;

