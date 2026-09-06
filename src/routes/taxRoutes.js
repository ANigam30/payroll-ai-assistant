const express = require("express");

const router = express.Router();

const taxController = require("../controllers/taxController");

router.post("/simulate", taxController.simulateTax);

module.exports = router;