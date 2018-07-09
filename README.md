# Libmoji
This is a tiny library for easily using the Bitmoji API to make fun, and unique [Bitmoji](https://www.bitmoji.com/) avatars! This library utilizes Bitmoji's services to create new avatars, and to give existing account holders more image customization. Libmoji provides functions that allow you to build the image URL for an avatar with random or specific characteristics pulled from the Bitmoji [asset database](https://api.bitmoji.com/avatar-builder-v3/assets). It also allows you to render your personal Bitmoji in ways that aren't normally possible! Comics are pulled from the [templates database](https://api.bitmoji.com/content/templates).

Libmoji makes it easy for you to integrate Bitmoji avatars into your project without the need for having a Bitmoji or Snapchat account. Libmoji works without the use of access tokens when generating avatars, and therefore can only render character previews by default. In order to create comic strips, you will need to have a Bitmoji or Snapchat account, and have the [chrome extension](https://chrome.google.com/webstore/detail/bitmoji/bfgdeiadkckfbkeigkoncpdieiiefpig). While making an account is not necessary for all of Libmoji, it is recommended so that you can have fun exploring all possibilities!

Many different types of Bitmoji styles can be created. Libmoji allows you to make `Bitmoji Deluxe`, `Bitmoji Classic`, and `Bitstrips` avatar styles. Each style can be rendered in either gender with tons of different traits and outfits! There are an infinte amount of possibilities! See the article [Bitmoji Styles](https://github.com/matthewnau/libmoji/wiki/Bitmoji-Styles) for examples of what each style looks like.

<p align="center">
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&beard=2212&brow=1555&cheek_details=1356&ear=1423&eye=1614&eyelash=-1&eye_details=1352&face_lines=1366&glasses=2465&hair=1723&hat=2495&jaw=1400&mouth=2338&nose=1482&beard_tone=8678208&blush_tone=16754088&brow_tone=6772090&eyeshadow_tone=-1&hair_tone=8637550&hair_treatment_tone=10513945&lipstick_tone=16740668&pupil_tone=5793385&skin_tone=9657655&body=1&face_proportion=13&eye_spacing=0&eye_size=2&outfit=990491"/>
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=2&style=5&rotation=0&brow=1588&cheek_details=-1&ear=1433&eye=1621&eyelash=2281&eye_details=1347&face_lines=1366&glasses=1370&hair=1337&hat=1376&jaw=1422&mouth=2342&nose=1532&blush_tone=16754890&brow_tone=95815&eyeshadow_tone=16749408&hair_tone=15656911&hair_treatment_tone=7903395&lipstick_tone=8716354&pupil_tone=11119494&skin_tone=12159077&body=7&breast=0&face_proportion=4&eye_spacing=2&eye_size=0&outfit=1017984" />
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&beard=2321&brow=1555&cheek_details=1353&ear=1425&eye=1613&eyelash=2279&eye_details=1351&face_lines=-1&glasses=2478&hair=1301&hat=2525&jaw=1397&mouth=2339&nose=1455&beard_tone=2837035&blush_tone=14381385&brow_tone=2837035&eyeshadow_tone=14401699&hair_tone=15896242&hair_treatment_tone=8146223&lipstick_tone=16693913&pupil_tone=8404014&skin_tone=16301209&body=0&face_proportion=16&eye_spacing=1&eye_size=0&outfit=1018212" />
<img height="250px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=2&style=5&rotation=0&brow=1596&cheek_details=1355&ear=1431&eye=1611&eyelash=2281&eye_details=1349&face_lines=1362&glasses=-1&hair=1698&hat=2557&jaw=1406&mouth=2340&nose=1647&blush_tone=11803937&brow_tone=9324909&eyeshadow_tone=12098752&hair_tone=65280&hair_treatment_tone=13735731&lipstick_tone=9849220&pupil_tone=11188685&skin_tone=3776963&body=7&breast=0&face_proportion=4&eye_spacing=2&eye_size=1&outfit=1017916" />
</p>

---

## Integrating Libmoji

Integrating Libmoji into your project is very simple! You've got two options to choose from. Either fork the project from GitHub, or use npm to install the module.

#### Npm Installation
```Shell
$ npm install libmoji
```
Regardless of your installation choice, you should now have access to all functions and variables from the library. Libmoji does not use too many variables or functions, but it is important to make sure that you do not use any of the same names in your project or it could cause errors. Refer to the [documentation](https://github.com/matthewnau/libmoji/wiki/Libmoji-Docs) for how to use Libmoji.

---

## Additional Information

If you're interested in how a Bitmoji image URL is assembled, or need assistance with using Libmoji please visit the [wiki](https://github.com/matthewnau/libmoji/wiki). It contains all Libmoji related [docs](https://github.com/matthewnau/libmoji/wiki/Libmoji-Docs) and articles which may be of use.

Also, to use the comics portion of Libmoji, you need to first identify your unique avatar ID. This can be done by following the steps in [this](https://github.com/matthewnau/libmoji/wiki/Finding-Your-ID) article. Once you have the ID, you're good to go!

<p align="center">
<img height="400px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender=1&style=5&rotation=7&beard=1630&brow=1541&cheek_details=1354&ear=1425&eye=1622&eyelash=2279&eye_details=-1&face_lines=1366&glasses=2441&hair=1719&hat=2555&jaw=1392&mouth=2337&nose=1460&beard_tone=8935738&blush_tone=16299718&brow_tone=13816322&eyeshadow_tone=14725305&hair_tone=4788241&hair_treatment_tone=666890&lipstick_tone=8929692&pupil_tone=11188685&skin_tone=6240025&body=1&face_proportion=4&eye_spacing=1&eye_size=0&outfit=978521"/>
<img height="400px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/fashion?scale=3&gender=1&style=5&rotation=0&beard=1664&brow=1544&cheek_details=1353&ear=1424&eye=1613&eyelash=-1&eye_details=1352&face_lines=1358&glasses=1370&hair=1326&hat=-1&jaw=1396&mouth=2339&nose=1465&beard_tone=9201721&blush_tone=10713178&brow_tone=9201721&eyeshadow_tone=2698284&hair_tone=15255700&hair_treatment_tone=666890&lipstick_tone=8359613&pupil_tone=7448799&skin_tone=12624259&body=2&face_proportion=16&eye_spacing=0&eye_size=1&outfit=1018081" />
<img height="400px" src="https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender=2&style=5&rotation=1&brow=1577&cheek_details=1357&ear=1433&eye=1612&eyelash=2280&eye_details=1351&face_lines=1363&glasses=-1&hair=1305&hat=2544&jaw=1413&mouth=2341&nose=1490&blush_tone=14381385&brow_tone=860998&eyeshadow_tone=15563944&hair_tone=7103070&hair_treatment_tone=15105803&lipstick_tone=3787661&pupil_tone=3307665&skin_tone=12881912&body=9&breast=3&face_proportion=1&eye_spacing=1&eye_size=0&outfit=1017967" />
</p>

---

## Product disclaimer

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by Bitmoji or any of its affiliates or subsidiaries. This is an independent and unofficial product. Use at your own risk.
