const express = require('express');
const router = express.Router();

const controller = require('../controllers/job');
const locationCtrl = require('../controllers/location');

router.route('/')
    .get(controller.getAllJobs)
    .post(controller.addJob);

router.route('/:id')
    .get(controller.getOneJob)
    .put(controller.updateJob)
    .delete(controller.deleteJob);

    //location
router.route('/:id/location')
    .get(locationCtrl.getOneLocation)
    .post(locationCtrl.addJobLocation)
    .put(locationCtrl.updateJobLocation)
    .delete(locationCtrl.deleteJobLocation);

module.exports = router;