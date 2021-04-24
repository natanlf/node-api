const express = require("express");

const ClientController = require("../controllers/clientes");

const router = express.Router();

router.post("", ClientController.createClient);

module.exports = router;