"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
// view를 어떤 엔진으로 해석할지 설정 한다.
app.set("view engine", "ejs");

app.use("/", home); // use - 미들웨어를 등록해주는 것

module.exports = app;
