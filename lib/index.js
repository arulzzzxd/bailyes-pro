"use strict";

const chalk = require("chalk");
const gradient = require("gradient-string");
const figlet = require("figlet"); 
const line = gradient(["#7EC9FF", "#D3B7FF"]);
const title = gradient(["#A8C7FF", "#D3B7FF", "#7EC9FF"]);

console.clear();
console.log();


console.log(
    title(
      figlet.textSync("Arulz Baileys", {
        font: "Small Slant",
        horizontalLayout: "default",
      })
    )
  );

  console.log(line("════════════════════════════════════════════════════"));
  console.log(
    chalk.bold.hex("#A8C7FF")("📦 Package:") +
      " " +
      chalk.hex("#FFFFFF")("github:arulzzzxd/Baileys-pro")
  );
  console.log(
    chalk.bold.hex("#D3B7FF")("⚙️ Framework:") +
      " " +
      chalk.hex("#FFFFFF")("Baileys Multi-Device")
  );
  console.log(
    chalk.bold.hex("#7EC9FF")("👑 Owner:") +
      " " +
      chalk.hex("#FFFFFF")("t.me/@arulzzxd")
  );
  console.log(line("════════════════════════════════════════════════════"));
  console.log(title(">  Bot siap digunakan  <"));
  console.log(line("════════════════════════════════════════════════════"));

console.log();

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
            __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", {
    enumerable: true,
    get: function() {
        return WAProto_1.proto;
    }
});

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;