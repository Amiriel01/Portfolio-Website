import { body, validationResult } from 'express-validator';
import asyncHandler from "express-async-handler";
import he from 'he';
import Message from '../models/messageModel.js'

//GET a list of all messages sent
export function message_list() {
    return asyncHandler(async (req, res, next) => {
        const messageList = await Message.find().exec();
        console.log(messageList);
        res.json(messageList);
    });
};

//GET a single message
export function message_details() {
    return asyncHandler(async (req, res, next) => {
        const messageDetails = await Message.findById(req.params.id).exec();
        console.log(messageDetails);
        res.json(messageDetails);
    });
};

//POST a message
export function message_create() {
    return [
        //validate and sanitize fields
        body("name", "Name cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 25 })
            .escape(),
        body("phone")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 15 })
            .escape(),
        body("email")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("message")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("my_notes")
            .trim()
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //create user object with escaped and trimmed info
            const message = new Message({
                name: he.decode(req.body.name),
                phone: req.body.phone,
                email: req.body.email,
                message: he.decode(req.body.message),
                my_notes: req.body.my_notes,
            });

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array();
                console.log(errors);
                res.json(errors);
            } else {
                //form data is valid, save the staff member
                console.log(message);
                res.json(await message.save());
            };
        })
    ];
};

//PUT message details
export function message_edit() {
    return [
        //validate and sanitize fields
        body("name", "Name cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 25 })
            .escape(),
        body("phone")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 15 })
            .escape(),
        body("email")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("message")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("my_notes")
            .trim()
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array()
                console.log(errors)
                res.json(errors)
            } else {
                //find the staff member and update
                const messageUpdate = await Message.findByIdAndUpdate(req.params.id, {
                    name: he.decode(req.body.name),
                    phone: req.body.phone,
                    email: req.body.email,
                    message: he.decode(req.body.message),
                    my_notes: req.body.my_notes,
                    completed: req.body.completed,
                }, { new: true }).exec()
                //save profile update
                console.log(messageUpdate)
                res.json(messageUpdate)
            };
        })
    ];
};

//DELETE message
export function message_delete() {
    return asyncHandler(async (req, res, next) => {
        const messageDelete = await Message.findByIdAndDelete(req.params.id).exec();
        console.log("message deleted");
        res.status(200).json(await Message.find().exec());
    })
};