"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// holds all possible traits and outfits
var assets = require("./json/assets.json");

// holds all possible comic templates
var templates = require("./json/templates.json")['imoji'];

// holds all possible genders and their values
var genders = [["male", 1], ["female", 2]];

// holds all possible avatar poses
var poses = ["fashion", "head", "body"];

// holds all possible styles and their values
var styles = [["bitstrips", 1], ["bitmoji", 4], ["cm", 5]];

// holds the part of the preview avatar url that is the same for all combinations
var basePreviewUrl = "https://preview.bitmoji.com/avatar-builder-v3/preview/";

// holds the part of the cpanel avatar url that is the same for all comics
var baseCpanelUrl = "https://render.bitstrips.com/v2/cpanel/";

// holds the part of the render avatar url that is the same for all comics
var baseRenderUrl = "https://render.bitstrips.com/render/";

// returns an object with a list of all possible traits for a gender and style
var getTraits = function getTraits(gender, style) {
  return assets["traits"][gender][style]["categories"];
};

// returns an object with a list of all possible brands for a gender
var getBrands = function getBrands(gender) {
  return assets["outfits"][gender]["brands"];
};

// returns an object with a list of all possible outfits for a brand
var getOutfits = function getOutfits(brand) {
  return brand["outfits"];
};

// returns an object with a list of all possible values for a trait
var getValues = function getValues(trait) {
  return trait["options"];
};

// returns the name of a trait as a string
var getKey = function getKey(trait) {
  return trait["key"];
};

//return the avatar uuid from a comic url as a string
var getAvatarUuid = function getAvatarUuid(url) {
  return url.split('-').slice(5, 10).join('-');
};

// returns the avatar id from a comic url as a string
var getAvatarId = function getAvatarId(url) {
  return url.split('-').slice(1, 3).join('-');
};

// returns the comic id as a string
var getComicId = function getComicId(template) {
  return template["comic_id"];
};

// returns a random integer between 0 (included) and the max (excluded)
var randInt = function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// returns a random brand object which contains outfits
var randBrand = function randBrand(brands) {
  return brands[randInt(brands.length)];
};

// returns a random outfit value as a string
var randOutfit = function randOutfit(outfits) {
  return outfits[randInt(outfits.length)]["id"];
};

// returns a random value for a trait as a string
var randValue = function randValue(values) {
  return values[randInt(values.length)]["value"];
};

// returns an array containing traits with random key value pairs
var randTraits = function randTraits(traits) {
  return traits.map(function (trait) {
    return [getKey(trait), randValue(getValues(trait))];
  });
};

// map a trait object to a list of strings
var mapTraits = function mapTraits(traits) {
  return traits.map(function (trait) {
    return "&" + trait[0] + "=" + trait[1];
  });
};

// return a random comic object
var randTemplate = function randTemplate(templates) {
  return templates[randInt(templates.length)];
};

// returns the image url of a bitmoji avatar with the specified parameters
function buildPreviewUrl(pose, scale, gender, style, rotation, traits, outfit) {

  // use string templating to build the url
  var url = "" + basePreviewUrl + pose + "?scale=" + scale + "&gender=" + gender + "&style=" + style;
  url += "&rotation=" + rotation + mapTraits(traits).join("") + "&outfit=" + outfit;
  return url;
}

// returns the image url of a bitmoji comic with the specified paramters
function buildCpanelUrl(comicId, avatarId, transparent, scale) {
  return "" + baseCpanelUrl + comicId + "-" + avatarId + "-v3.png?transparent=" + transparent + "&scale=" + scale;
}

// returns the image url of a bitmoji comic with the specified paramters
function buildRenderUrl(comicId, avatarId, transparent, scale, outfit) {
  return "" + baseRenderUrl + comicId + "/" + avatarId + "-v3.png?transparent=" + transparent + "&scale=" + scale + (outfit ? "&outfit=" + outfit : '');
}

// export all functions to be used
module.exports = _defineProperty({
  templates: templates,
  genders: genders,
  poses: poses,
  styles: styles,
  basePreviewUrl: basePreviewUrl,
  baseCpanelUrl: baseCpanelUrl,
  baseRenderUrl: baseRenderUrl,
  getTraits: getTraits,
  getBrands: getBrands,
  getOutfits: getOutfits,
  getValues: getValues,
  getKey: getKey,
  getAvatarUuid: getAvatarUuid,
  getAvatarId: getAvatarId,
  getComicId: getComicId,
  randInt: randInt,
  randBrand: randBrand,
  randOutfit: randOutfit,
  randValue: randValue,
  randTraits: randTraits,
  mapTraits: mapTraits,
  randTemplate: randTemplate,
  buildPreviewUrl: buildPreviewUrl,
  buildCpanelUrl: buildCpanelUrl,
  buildRenderUrl: buildRenderUrl }, "buildRenderUrl", buildRenderUrl);