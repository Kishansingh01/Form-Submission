

const User = require("../model/user");

module.exports = (app) => {
  app.post("/api/form", async (req, res) => {
    try {
      console.log("BODY:", req.body);
   
     const { name, email, mobile, date } = req.body;

      const user = new User({ name,
                email,
                mobile,
                date});

      console.log("UserName is ::", user.name);
      console.log("UserEmail is ::", user.email);

      await user.save();

      res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
};
