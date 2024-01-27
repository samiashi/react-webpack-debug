# react-webpack-debug

Repo to debug different behaviours between Webpack 4 &amp; Webpack 5

Using the same react component we get different experiences when building with Webpack 4 & Webpack 5 on iOS

## Steps to reproduce

1. Install the desired Webpack version using the commands below
2. Run `npm run start`
3. Using Xcode Simulator open an iPhone (I've been testing with iPhone 15 running iOS 17.0) or open on real iPhone device or using Safari on Desktop
4. Navigate to <http://localhost:8080>
5. Click on the button

### To test with Webpack 4

```bash
cat webpack4-package.json > package.json && npm install
```

### To test with Webpack 5

```bash
cat webpack5-package.json > package.json && npm install
```

## Expectation

Clicking the button would open a new tab when building with Webpack 4 & Webpack 5 on iOS.

## Reality

Clicking the button would open a new tab when building with Webpack 4 only.
When building with Webpack 5 the new tab does not open when you click the button. The popup gets blocked.

Note: The issue only occurs on Safari. Running the same code on Chrome/Firefox works as expected on both Webpack 4 & Webpack 5.
