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
 * Company Schema
 */
let teacherSchema = new Schema(
    {
        teacherID: {
            type: String,
        },
        teacherName: {
            type: String
        },
        contactNumber:{
            type: String
        },
        gender:{
            type: String
        },
        emailID: {
            type: String
        },
        qualifications : {
            type: String
        },
        address: {
            type : String
        },
        teachingArea : {
            type: String
        },
        teachingExperience: {
            type: String
        },
        classesSubject: [
            {
                class : String,
                subjects: [{subject: String}]
            }
        ]
    },
    {
        versionKey: false
    }
);

teacherSchema.methods.toJSON = function () {
    var obj = this.toObject();
    return obj;
};

teacherSchema.pre("save", function (next) {
    this.createdOn = new Date();
    next();
});

module.exports = mongoose.model("teacher", teacherSchema, "teacher");
