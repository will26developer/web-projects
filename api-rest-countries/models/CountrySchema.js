const { Schema, model } = require("mongoose");

const CountrySchema = new Schema(
  {
    name: {
      common: { type: String, required: true },
      official: { type: String },
      nativeName: { type: Schema.Types.Mixed }, // objeto dinámico
    },

    flags: {
      png: String,
      svg: String,
      alt: String,
    },

    tld: [String],

    currencies: {
      type: Schema.Types.Mixed, // { NZD: { name, symbol } }
    },

    capital: [String],

    region: String,
    subregion: String,

    languages: {
      type: Schema.Types.Mixed, // { eng: 'English', ... }
    },

    population: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = model("Country", CountrySchema);
