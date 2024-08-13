"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { findAll } = require("./company");

class Job {
  static async create(data) {}

  static async findAll({ minSalary, hasEquity, title } = {}) {}

  static async get(id) {}

  static async update(id) {}

  static async remove(id) {}
}

module.exports = Job;
