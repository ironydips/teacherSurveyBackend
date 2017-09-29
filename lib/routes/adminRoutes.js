"use strict";

//========================== Load Modules Start =======================
const adminRouter = require("express").Router(),
    _ = require('lodash'),
    Promise = require('bluebird');

//========================== Load internal modules ====================

// Load admin facade
const adminFacade = require('../facade/adminFacade'),
    resHndlr = require('../resHandler'),
    middleware = require("../middleware"),
    validators = require("../middleware/validators"),
    constants = require('../constants');

//========================== Load Modules End ==============================================

//========================== Define Routes Start ==============================================
adminRouter.route("/addAdmin")
    .post([],
            function (req, res) {
                let loginDetail = _.pick(req.query, ["emailAddress"]);
                adminFacade.addAdmin(loginDetail)
                    .then(function (result) {
                        resHndlr.sendSuccessWithMsg(res, result);
                    })
                    .catch(function (err) {
                        resHndlr.sendError(res, err);
                    });
            });
adminRouter.route("/getAdminList")
    .get([],
        function (req, res) {
            adminFacade.getAdminList()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/validateAdmin")
    .get([],
        function (req, res) {
            let loginDetail = _.pick(req.query, ["emailAddress"]);
            adminFacade.validateAdmin(loginDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/addTeacher")
    .post([],
        function (req, res) {
            let teacherDetail = _.pick(req.body, ["teacherName","contactNumber","gender","emailID","qualifications","address","teachingArea","teachingExperience","classesSubject"]);
            adminFacade.addTeacher(teacherDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/getTeachers")
    .get([],
        function (req, res) {
            adminFacade.getTeachers()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/getclassesSubjects")
    .get([],
        function (req, res) {
            adminFacade.getClassesSubjects()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/addClassSubject")
    .post([],
        function (req, res) {
            let detail = req.body;
            adminFacade.addClassSubject(detail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/deleteclassesSubjects")
    .get([],
        function (req, res) {
        let details = _.pick(req.query, ["class"]);
            adminFacade.deleteclassesSubjects(details)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
adminRouter.route("/updateClassSubject")
    .post([],
        function (req, res) {
            let details = _.pick(req.query, ["class"]);
            details.subjects = req.body;
            adminFacade.updateClassSubject(details)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });
//========================= Define Routes End ==============================================

//===========================Private Methods Start===========================================

//===========================Private Methods End==============================================


//========================== Export Module Start ==============================

module.exports = adminRouter;

//========================== Export Module End ===============================
