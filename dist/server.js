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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
//PORT
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//routes
app.get("/", (req, res) => {
    res.status(200).json("Hello World");
});
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, cross_fetch_1.default)(req.body.url)
        .then((response) => response.json())
        .then((resJosn) => {
        console.log(resJosn);
        res.status(200).send(resJosn);
    });
    // try {
    //   const res = await fetch(req.body.url);
    //   if (res.status >= 400) {
    //     throw new Error("Bad response from server");
    //   }
    //   const user = await res.json();
    //   console.log(user);
    // } catch (err) {
    //   console.error(err);
    // }
}));
app.listen(PORT, () => {
    console.log("server is starting on port", PORT);
});
//# sourceMappingURL=server.js.map