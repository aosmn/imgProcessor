"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
exports.app = (0, express_1.default)();
exports.app.use("/api/images", routes_1.imagesRouter);
exports.app.listen("3000", function () {
    console.log("app running");
});
