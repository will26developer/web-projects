const CountrySchema = require("../models/CountrySchema.js");

const getAllCountries = async (req, res) => {
  try {
    const {name,region} = req.query;
    const query = {};
  
    if (name) {
      query["name.common"] = {
        $regex: name.trim(),
        $options: "i"
      }
    }

    if (region) {
      query.region = {
        $regex: `^${region}$`,
        $options: "i"
      }
    }


    const data = await CountrySchema.find(query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving countries",
      error: error.message,
     });
  }
};



module.exports = {
  getAllCountries,
};
