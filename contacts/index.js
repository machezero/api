const express = require('express')
const router = express.Router()
var contactlist = [
    {
        "Id": "0",
        'Name': "Thitaporn gonkong",
        "Email": "friends_forever_23@hotmail.co.th",
        "Phone": "0801043229"
    },

    {
        "Id": "1",
        "Name": "Juthathip Sopithwannakul",
        "Email": "ivieawjoh@gmail.com",
        "Phone": "0909912638"
    },

    {
        "Id": "2",
        "Name": "Piyaphong Paikamnam",
        "Email": "mache6456@gmail.com",
        "Phone": "0825237431"
    },

    {
        "Id": "3",
        "Name": "Piyawat Buadok",
        "Email": "58160575@go.buu.ac.th",
        "Phone": "0854478673"
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
//list all contacts
router.get('/contactlist', function (req, res) {
    res.json(findAll());
})

//search contact by name
router.get('/contactlist/name/:name', function (req, res) {
    var name = req.params.name;
    res.json(findName(name));
})

//get contact information
router.get('/contactlist/id/:id', function (req, res) {
    var id = req.params.id;
    res.json(findId(id));
})

// create new contact
router.post('/contactlist', (req, res) => {
    var addlist = req.body
    addlist.Id = contactlist.length
    contactlist.push(addlist)
    res.status(201).json(addlist)
})

// update contact information
router.put('/contactlist/:id', (req, res) => {
    var edit = req.body
    var id = req.params.id
    contactlist[id] = edit
    res.status(200).json('!!! Update Complete !!!')
})

//remove contact from list
router.delete('/contactlist/:id', (req, res) => {
    var deleteid = req.params.id
    contactlist.splice(deleteid, 1)
    res.status(200).json('!!! Delete Complete !!!')
})

module.exports = router