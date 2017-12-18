const express = require('express')
const router = express.Router()
var contactlist = [
    {
        "Id": "0",
        'Name': "Ned Stark",
        "Email": "ned@winterfell.com",
        "Phone": "123-456-7890"
    },

    {
        "Id": "1",
        "Name": "Theon Greyjoy",
        "Email": "tgreyjoy@winterfell.com",
        "Phone": "123-456-7890"
    },

    {
        "Id": "2",
        "Name": "Samwell Tarly",
        "Email": "starly@castleblack.com",
        "Phone": "123-456-7890"
    },

    {
        "Id": "3",
        "Name": "Jon Snow",
        "Email": "jsnow@castleblack.com",
        "Phone": "123-456-7890"
    },
];

findAll = function () {
    return contactlist;
};
findName = function (name) {
    for (var i = 0; i < contactlist.length; i++) {
        if (contactlist[i].Name == name) return contactlist[i];
    }
};

findId = function (id) {
    for (var i = 0; i < contactlist.length; i++) {
        if (contactlist[i].Id == id) return contactlist[i];
    }
};