"use strict";

/** routes for jobs */

const express = require("express");
const Job = require("../models/job");
const { ensureAdmin } = require("../middleware/auth");

router.post("/", ensureAdmin, async function (req, res, next) {
  try {
  } catch (err) {
    return next(err);
  }
});

router.get("/", async function (req, res, next) {
  try {
  } catch (err) {
    return next(err);
  }
});

router.patch("/:id", ensureAdmin, async function (req, res, next) {
  try {
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
