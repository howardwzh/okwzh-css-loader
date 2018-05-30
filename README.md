## okwzh-css-loader

- change px to rem

### step 1

`npm i okwzh-css-loader --save-dev`

### step 2

In webpack.config.js

```js
...
module: {
  rules: [{
    test: /\.css$/,
    include: path.resolve(__dirname, 'src'),
      use: extractCSS.extract({
      use: [{
        loader: 'css-loader',
      },
      {
        loader: 'okwzh-css-loader',
        options: {
          pxtorem: { rootValue: 50 }
        }
      }]
    })
  }
  ...
  ]
}
...
```

### step 3

set options like this:

```js
{
  loader: 'okwzh-css-loader',
  options: {
    pxtorem: { rootValue: 50 } // base font-size is 50px
  }
}
```