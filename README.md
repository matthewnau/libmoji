# Libmoji
This is a tiny library for making fun, and unique [Bitmoji](https://www.bitmoji.com/) avatars! This library utilizes the Bitmoji avatar-building API to render previews of avatars with specified traits. Libmoji provides functions that allow you to build the image URL for an avatar with random or specific characteristics pulled from the Bitmoji [asset database](https://api.bitmoji.com/avatar-builder-v3/assets).

Libmoji makes it easy for you to integrate Bitmoji avatars into your project without the need for having a Bitmoji or Snapchat account. Libmoji works without the use of access tokens, and therefore can only render character previews. Comic strips and stickers require the use of a registered account.

<p align="center">
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&beard=2212&brow=1555&cheek_details=1356&ear=1423&eye=1614&eyelash=-1&eye_details=1352&face_lines=1366&glasses=2465&hair=1723&hat=2495&jaw=1400&mouth=2338&nose=1482&beard_tone=8678208&blush_tone=16754088&brow_tone=6772090&eyeshadow_tone=-1&hair_tone=8637550&hair_treatment_tone=10513945&lipstick_tone=16740668&pupil_tone=5793385&skin_tone=9657655&body=1&face_proportion=13&eye_spacing=0&eye_size=2&outfit=990491"/>
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=2&style=5&rotation=0&brow=1588&cheek_details=-1&ear=1433&eye=1621&eyelash=2281&eye_details=1347&face_lines=1366&glasses=1370&hair=1337&hat=1376&jaw=1422&mouth=2342&nose=1532&blush_tone=16754890&brow_tone=95815&eyeshadow_tone=16749408&hair_tone=15656911&hair_treatment_tone=7903395&lipstick_tone=8716354&pupil_tone=11119494&skin_tone=12159077&body=7&breast=0&face_proportion=4&eye_spacing=2&eye_size=0&outfit=1017984" />
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&beard=2321&brow=1555&cheek_details=1353&ear=1425&eye=1613&eyelash=2279&eye_details=1351&face_lines=-1&glasses=2478&hair=1301&hat=2525&jaw=1397&mouth=2339&nose=1455&beard_tone=2837035&blush_tone=14381385&brow_tone=2837035&eyeshadow_tone=14401699&hair_tone=15896242&hair_treatment_tone=8146223&lipstick_tone=16693913&pupil_tone=8404014&skin_tone=16301209&body=0&face_proportion=16&eye_spacing=1&eye_size=0&outfit=1018212" />
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=2&style=5&rotation=0&brow=1596&cheek_details=1355&ear=1431&eye=1611&eyelash=2281&eye_details=1349&face_lines=1362&glasses=-1&hair=1698&hat=2557&jaw=1406&mouth=2340&nose=1647&blush_tone=11803937&brow_tone=9324909&eyeshadow_tone=12098752&hair_tone=65280&hair_treatment_tone=13735731&lipstick_tone=9849220&pupil_tone=11188685&skin_tone=3776963&body=7&breast=0&face_proportion=4&eye_spacing=2&eye_size=1&outfit=1017916" />
</p>

---

## Integrating Libmoji

Integrating Libmoji into your project is very simple! Simply fork the project from GitHub and make sure your project includes the `assets.json` and `libmoji.js` files. Then import the library into your project file.

```JavaScript
const libmoji = require('./libmoji.js');
/* update the path to wherever you saved Libmoji */
```
You should now have access to all functions and variables from the library. Libmoji does not use too many variables or functions, but it is important to make sure that you do not use any of the same names in your project or it could cause errors.

---

## Understanding Libmoji

In order to build a Bitmoji, it's important to understand what components comprise the URL. For this example, we will examine the URL for the first image above. The following URL is what generated [this](https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&beard=2212&brow=1555&cheek_details=1356&ear=1423&eye=1614&eyelash=-1&eye_details=1352&face_lines=1366&glasses=2465&hair=1723&hat=2495&jaw=1400&mouth=2338&nose=1482&beard_tone=8678208&blush_tone=16754088&brow_tone=6772090&eyeshadow_tone=-1&hair_tone=8637550&hair_treatment_tone=10513945&lipstick_tone=16740668&pupil_tone=5793385&skin_tone=9657655&body=1&face_proportion=13&eye_spacing=0&eye_size=2&outfit=990491) image.

```
https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&beard=2212&brow=1555&cheek_details=1356&ear=1423&eye=1614&eyelash=-1&eye_details=1352&face_lines=1366&glasses=2465&hair=1723&hat=2495&jaw=1400&mouth=2338&nose=1482&beard_tone=8678208&blush_tone=16754088&brow_tone=6772090&eyeshadow_tone=-1&hair_tone=8637550&hair_treatment_tone=10513945&lipstick_tone=16740668&pupil_tone=5793385&skin_tone=9657655&body=1&face_proportion=13&eye_spacing=0&eye_size=2&outfit=990491
```

This URL may look complex at first glance, but all it really does is combine many small pieces of information that describe how the image should look. Let's examine what all goes into the URL by using the following table.

| Component | Description |
| --- | --- |
| `https://preview.bitmoji.com/avatar-builder-v3/preview/` | This is the base URL. All image URLs will begin with this. |
| `head` | This describes what pose the image should use. In the example, the image appears to only show the head. |
| `?scale=` | This describes how large the image should be rendered. Images are rendered as PNGs, and the larger the scale, the higher the resolution of the image. |
| `&gender=` | Describes which gender the avatar should be. This determines what traits to load, and which outfits are available. |
| `&style=` | This property does not appear to change anything, so it is best to leave it as the default of `5`. |
| `&rotation=` | Determines which way the avatar faces. It only works on `body` and `head` poses. |
| `&beard=2212`, `&brow=1555`, ... `&skin_tone=9657655`, `&body=1`, `&face_proportion=13`, `&eye_spacing=0`, `&eye_size=2` | This is where all gender specific traits are injected into the URL. Not all traits are required to render, and every trait has a specific set of values that work with it. For any trait that has `tone` in its name, its value is actually just a color in decimal form. |
| `&outfit=` | This is the outfit that the Bitmoji is wearing. The outfit parameter is not required, and will render in blank white clothes otherwise. |


All of these parameters can be changed to create a Bitmoji of your preference. To find a complete list of all possible traits and values for a specific gender, consult the `assets.json` file, or print a list using the functions provided by Libmoji.

---

## Libmoji Documentation
Here you can find a list of all methods and variables in Libmoji, and what they do. You will also find example code for using these methods.
### genders
#### Description
An array that contains the string and index value associated with each gender.
```JavaScript
const genders = [['male',1],["female",2]];
```
### poses
#### Description
A string array that contains all possible poses that can be passed to the `buildUrl` method.
```JavaScript
const poses = ["fashion","head","body"];
```
### baseURL
#### Description
A string which contains the beginning of every Bitmoji image's URL.
```JavaScript
const baseUrl = "https://preview.bitmoji.com/avatar-builder-v3/preview/";
```
### getTraits()
#### Description
The **`libmoji.getTraits()`** function returns an object with a list of all possible traits for a specific gender.
#### Paramters
Takes a `gender` string as input. Options are `"male"` or `"female"`.
#### Example
```JavaScript
console.log(libmoji.getTraits("male"));
/* returns an array of trait objects */
```

