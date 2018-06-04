// holds all possible traits and outfits
const assets = require('./assets.json');

// holds all possible genders and their values
const genders = [['male',1],["female",2]];

// holds all possible avatar poses
const poses = ["fashion","head","body"];

// holds all possible styles and their values
const styles = [["bitstrips",1],['bitmoji',4],["cm",5]];

// holds the part of the bitmoji avatar url that is the same for all combinations
const baseUrl = "https://preview.bitmoji.com/avatar-builder-v3/preview/";

// returns an object with a list of all possible traits for a gender and style
const getTraits = (gender, style) => assets["traits"][gender][style]["categories"];

// returns an object with a list of all possible brands for a gender
const getBrands = (gender) => assets["outfits"][gender]["brands"];

// returns an object with a list of all possible outfits for a brand
const getOutfits = (brand) => brand["outfits"];

// returns an object with a list of all possible values for a trait
const getValues = (trait) => trait["options"];

// returns the name of a trait as a string
const getKey = (trait) => trait["key"];

// returns a random integer between 0 (included) and the max (excluded)
const randInt = (max) => Math.floor(Math.random() * Math.floor(max));

// returns a random brand object which contains outfits
const randBrand = (brands) => brands[randInt(brands.length)];

// returns a random outfit value as a string
const randOutfit = (outfits) => outfits[randInt(outfits.length)]["id"];

// returns a random value for a trait as a string
const randValue = (values) => values[randInt(values.length)]["value"];

// returns an array containing traits with random key value pairs
const randTraits = (traits) => traits.map(trait => [getKey(trait), randValue(getValues(trait))]);

// map a trait object to a list of strings
const mapTraits = (traits) => traits.map(trait => `&${trait[0]}=${trait[1]}`);

// returns the image url of a bitmoji avatar with the specified parameters
function buildUrl (pose, scale, gender, style, rotation, traits, outfit) {

  // use string templating to build the url
  let url = `${baseUrl}${pose}?scale=${scale}&gender=${gender}&style=${style}` 
  url += `&rotation=${rotation}${mapTraits(traits).join("")}&outfit=${outfit}`
  return url;
}

// export all functions to be used
module.exports = {
  genders: genders,
  poses: poses,
  styles: styles,
  getTraits: getTraits,
  getBrands: getBrands,
  getOutfits: getOutfits,
  getValues: getValues,
  getKey: getKey,
  randInt: randInt,
  randBrand: randBrand,
  randOutfit: randOutfit,
  randValue: randValue,
  randTraits: randTraits,
  mapTraits: mapTraits,
  buildUrl: buildUrl
};