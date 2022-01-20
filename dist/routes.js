"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
var express_1 = __importDefault(require("express"));
var processing_1 = require("./utils/processing");
exports.imagesRouter = express_1.default.Router();
exports.imagesRouter.get("/", function (req, res) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    if (filename && width && height) {
        try {
            (0, processing_1.processImage)(filename, parseInt(width, 10), parseInt(height, 10))
                .then(function () {
                res.status(200);
                res.set("Content-Type", "image/jpeg");
                res.sendFile("images/".concat(filename.replace(".jpg", ""), "-").concat(width, "x").concat(height, ".jpg"), { root: __dirname.replace("/dist", "") });
            })
                .catch(function (err) {
                console.error(err.message);
                res.status(404);
                res.send(err.message);
            });
        }
        catch (error) {
            console.error(error);
            res.status(400);
            res.send("An error occurred");
        }
    }
    else {
        res.status(400);
        res.send("Missing parameter");
    }
});
