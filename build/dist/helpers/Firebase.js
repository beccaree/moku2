"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = __importDefault(require("firebase"));
var firebaseConfig = {
    apiKey: "AIzaSyB6I2rY4S2xMihfSXuTmahwu6yLZqo1WJE",
    authDomain: "moku-62081.firebaseapp.com",
    databaseURL: "https://moku-62081.firebaseio.com",
    projectId: "moku-62081",
    storageBucket: "moku-62081.appspot.com",
    messagingSenderId: "860249568590"
};
;
firebase_1.default.initializeApp(firebaseConfig);
exports.default = firebase_1.default;
//# sourceMappingURL=Firebase.js.map