"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImage = exports.saveFile = exports.fileExists = exports.loadFilePath = exports.loadImage = void 0;
var fs_1 = require("fs");
var fs_2 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var loadImage = function (fileName) {
    var exists = (0, exports.fileExists)("./images/full/".concat(fileName));
    if (exists) {
        try {
            var imgFile = fs_2.default.readFileSync("./images/full/".concat(fileName));
            return imgFile;
        }
        catch (err) {
            throw new Error("File Error");
        }
    }
    else {
        throw new Error("File not found");
    }
};
exports.loadImage = loadImage;
var loadFilePath = function (filePath) {
    var exists = (0, exports.fileExists)(filePath);
    if (exists) {
        try {
            var imgFile = fs_2.default.readFileSync(filePath);
            return imgFile;
        }
        catch (err) {
            throw new Error("File Error");
        }
    }
    else {
        throw new Error("File not found");
    }
};
exports.loadFilePath = loadFilePath;
var fileExists = function (filePath) {
    try {
        var fileExists_1 = fs_2.default.existsSync(filePath);
        if (fileExists_1)
            return true;
        return false;
    }
    catch (err) {
        throw new Error("File Error");
    }
};
exports.fileExists = fileExists;
var saveFile = function (content, filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var myFile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.writeFile(filePath, content)];
            case 1:
                myFile = _a.sent();
                return [2 /*return*/, myFile];
        }
    });
}); };
exports.saveFile = saveFile;
var processImage = function (fileName, width, height) { return __awaiter(void 0, void 0, void 0, function () {
    var originalFilePath, newFilePath, resizedPhotoBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                originalFilePath = "./images/full/".concat(fileName);
                newFilePath = "./images/".concat(fileName.replace(".jpg", ""), "-").concat(width, "x").concat(height, ".jpg");
                if (!!(0, exports.fileExists)(newFilePath)) return [3 /*break*/, 4];
                if (!(0, exports.fileExists)(originalFilePath)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, sharp_1.default)(originalFilePath)
                        .resize(width, height)
                        .jpeg()
                        .toBuffer()];
            case 1:
                resizedPhotoBuffer = _a.sent();
                return [4 /*yield*/, (0, exports.saveFile)(resizedPhotoBuffer, newFilePath)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3: throw new Error("File not found");
            case 4: return [2 /*return*/, (0, exports.loadFilePath)(newFilePath)];
        }
    });
}); };
exports.processImage = processImage;
