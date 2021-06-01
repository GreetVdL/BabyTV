# Web project starter kit with Parcel

## How to use this kit

- clone this repo:
  `$ git clone https://github.com/GreetVdL/starter-kit-parcel.git`
- Install parcel locally with the following script:
  `$ npm run parcel`
- Adjust the package.json file (e.g. deployment url )
- Rewrite the readme file
- Check the .gitignore file and make changes if necessary. The 'out' directory can be added there too.
- Examples of HTML include tag usage:
  ` <include src="./header.html"></include>`
  `<include src="./footer.html"></include>`
- Example of image transforming usage:
  ` <picture>`
  ` <source media="(min-width:650px)" srcset="url:./images/tiger.jpg?as=webp&width=800" />`
  `<source media="(min-width:465px)" srcset="url:./images/tiger.jpg?as=webp&width=500" />`
  `<img src="url:./images/tiger.jpg?&width=650" alt="Flowers" style="width: auto" />`
  `</picture>`
- npm libraries can be installed and then imported in the index.js file, e.g.;
  `import randomColor from 'random-color';`
- If needed, everything in the package.json dependencies and devdependencies can be reinstalled with:
  `$ npm install`
