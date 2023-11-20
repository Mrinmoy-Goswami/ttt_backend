const router = require("express").Router();
const User = require("../Model/User");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username ,password:req.body.password});
    
    if (!user) {
      res.status(400).json("Wrong Credentials !");
    }
    else{

        res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const formerUser = await User.findOne({ username: req.body.username });
    if (formerUser) {
      res.status(409).json("User already exists");
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        occupation:req.body.occupation,
        site: req.body.site,
        followers: req.body.followers,
        following: req.body.following,
      });
      const user = await User.create(newUser);
      res.status(200).json(user);
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
