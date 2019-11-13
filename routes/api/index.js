var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var headlineRoutes = require("./article");
var clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/article", headlineRoutes);
router.use("/clear", clearRoutes);
​
module.exports = router;