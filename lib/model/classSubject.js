/**
 */
"use strict";

/**
 * Brands
 *
 * @module      :: Model
 * @description :: Represent data model for the Companies
 */

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

let mongoose = require("mongoose");

//========================== Load Internal Modules ==========================

//========================== Load Modules End ==========================

let Schema = mongoose.Schema;

/**
 * classSubjectSchema Schema
 */
let classSubjectSchema = new Schema(
    {
        class: {
            type: String,
        },
        subjects: [{
            subject: String
        }]
    },
    {
        versionKey: false
    }
);

classSubjectSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return obj;
};

classSubjectSchema.pre("save", function (next) {
    this.createdOn = new Date();
    next();
});

module.exports = mongoose.model("classSubject", classSubjectSchema, "classSubject");
