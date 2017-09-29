"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load company dao
const adminDao = require("../dao/adminDao");
const _ = require("lodash");
const emailConfig = require("../email/emailHandler"),
    shortid = require('shortid');

//========================== Load Modules End ==============================================

function addAdmin(adminDetail) {
    return adminDao.addAdmin(adminDetail);
}
function adminLogin(loginDetail) {
    return adminDao.adminLogin(loginDetail);
}
function validateAdmin(adminDetail) {
    return adminDao.adminLogin(adminDetail);
}
function addTeacher(teacherDetail) {
    return adminDao.addTeacher(teacherDetail);
}
function getTeachers() {
    return adminDao.getTeachers();
}
function getClassesSubjects() {
    return adminDao.getClassesSubjects();
}
function addClassSubject(detail) {
    return adminDao.addClassSubject(detail);
}
function deleteclassesSubjects(details) {
    return adminDao.deleteclassesSubjects(details);
}
function updateClassSubject(details) {
    return adminDao.updateClassSubject(details);
}
//========================== Export Module Start ==============================

module.exports = {
    addAdmin,
    adminLogin,
    validateAdmin,
    addTeacher,
    getTeachers,
    getClassesSubjects,
    addClassSubject,
    getAdminList : adminDao.getAdminList,
    deleteclassesSubjects,
    updateClassSubject
};

//========================== Export Module End ===============================
