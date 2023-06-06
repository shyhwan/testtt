"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["ysh", "rrs", "roof"],
  pw: ["123", "1234", "12345"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      } else {
        return res.json({
          success: false,
        });
      }
    }
  },
};

module.exports = {
  output,
  process,
};
