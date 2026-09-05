const express = require("express");

const router = express.Router();

const payrollController = require("../controllers/payrollController");

router.get("/me", payrollController.getPayroll);

module.exports = router;