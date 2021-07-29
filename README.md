<h1 align="center">Challenge App X</h1>
<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/static/v1?label=styled-component&message=Framework&color=DB7093&style=for-the-badge&logo=styled-components)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
</div>


## Install

You need the [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/) to run this project, if ios will need [Cocoapods](https://guides.cocoapods.org/using/getting-started.html), this project was created with `Node.js v14.17.0`, `Yarn v1.22.10` and `Cocoapods v1.10.1`.

### IOS

```bash
yarn install
cd ios
pod install
cd ..
cp .env.template .env
yarn ios
yarn start
```

### Android

```bash
yarn install
yarn android
cp .env.template .env
yarn start
```

## Screenshots

### Home
<div align="center">
  <img src="screenshots/home.png" />
  <img src="screenshots/home-filter.png" />
  <br /> <br />
</div>

### Classification
<div align="center">
   <img src="screenshots/classification.png" />
   <img src="screenshots/classification-filter.png" />
     <br /> <br />
</div>

### Classification Filter
<div align="center">
   <img src="screenshots/team-details.png" />
     <br /> <br />
</div>

## License

The [MIT License]() (MIT)

Copyright© 2021
