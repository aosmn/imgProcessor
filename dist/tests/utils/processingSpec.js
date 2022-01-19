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
Object.defineProperty(exports, "__esModule", { value: true });
var processing_1 = require("../../utils/processing");
var fs_1 = require("fs");
describe("File loader", function () {
    it("should load image file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var testFile, imgFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile("./images/full/fjord.jpg")];
                case 1:
                    testFile = _a.sent();
                    return [4 /*yield*/, (0, processing_1.loadImage)("fjord.jpg")];
                case 2:
                    imgFile = _a.sent();
                    expect(testFile.equals(imgFile)).toEqual(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return an error text if file doesn't exist", function () { return __awaiter(void 0, void 0, void 0, function () {
        var error, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, processing_1.loadImage)("ford")];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    error = err_1;
                    return [3 /*break*/, 3];
                case 3:
                    expect(error).toEqual(new Error("File not found"));
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("File exists", function () {
    it("Should return true if file exists", function () { return __awaiter(void 0, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, processing_1.fileExists)("./images/full/fjord.jpg")];
                case 1:
                    exists = _a.sent();
                    expect(exists).toEqual(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should return false if file doesn't exists", function () { return __awaiter(void 0, void 0, void 0, function () {
        var exists;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, processing_1.fileExists)("./images/full/ford.jpg")];
                case 1:
                    exists = _a.sent();
                    expect(exists).toEqual(false);
                    return [2 /*return*/];
            }
        });
    }); });
});
// describe("File save", () => {
//   it("should create a new file", async () => {
//     const file = await saveFile("hello file", "./images/a.txt");
//     const exists = await fileExists("./images/a.txt");
//     expect(exists).toEqual(true);
//   });
// });
describe("Processor", function () {
    it("should process image file", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, processing_1.processImage)("fjord.jpg", 200, 200)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
