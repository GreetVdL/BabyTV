# Web project starter kit with Parcel :rocket:

--) [Parcel website](https://parceljs.org/)

## How to use this kit

- clone this repo:<br />
  `$ git clone https://github.com/GreetVdL/starter-kit-parcel.git`
- Install parcel locally with the following script:<br />
  `$ npm run parcel`
- Adjust the package.json file (e.g. deployment url )
- Rewrite the readme file
- Check the .gitignore file and make changes if necessary. The 'out' directory can be added there too.
- Examples of HTML include tag usage:<br />
  ` <include src="./header.html"></include>`<br />
  `<include src="./footer.html"></include>`
- Example of image transforming usage:<br />
  ` <picture>`<br />
  ` <source media="(min-width:650px)" srcset="url:./images/tiger.jpg?as=webp&width=800" />`<br />
  `<source media="(min-width:465px)" srcset="url:./images/tiger.jpg?as=webp&width=500" />`<br />
  `<img src="url:./images/tiger.jpg?&width=650" alt="Flowers" style="width: auto" />`<br />
  `</picture>`
- npm libraries can be installed and then imported in the index.js file, e.g.;<br />
  `import randomColor from 'random-color';`
- If needed, everything in the package.json dependencies and devdependencies can be reinstalled with:<br />
  `$ npm install`
