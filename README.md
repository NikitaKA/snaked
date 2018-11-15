# Verstalator
It's a simple, but at the same time convenient and modern tools for site layout. Here are combined **Webpack**, **Babel**, **Pug**, **SCSS**, **SVG sprites** and some tasty things like **Prettier**, **PostCSS**, **Github Webhooks** (and more other interesting things in the future) which can be easily and simply configured.

## Configuration
`/config/index.js`

## Build
```
$ npm run build
```

## Development
```
$ npm run dev
```
> Dev-server is on `localhost:18801` by default.  

## Pug
Pug-templates which you want to turn into standalone html-files should be in `/src/` directory.

## Javascript
All javascript should be in `/src/js` directory. Files matching `*.part.js` are not bundled as entries (it's a feature), but you still able to import.
### Configuring bundles for templates

Bundles configuration is located in `/config/index.js`

```javascript
{
  bundles: {
    basket: ['controllers-catalog-basket']
  },
  ...
}
```
*Keys* are filenames of templates without extension. *Values* are arrays of bundles. Where these bundles comes from? Bundle names are taken from path of every `.js` file in `/src/js` directory.
 
> **Example:**  
> `/src/js/index.js` turns into `index`   
> `/src/js/controllers/catalog/basket.js` turns into `controllers-catalog-basket`.
  
> Let's say you have `contacts.pug` template in your `/src/` directory and you want to add `/src/js/misc/feedback.js` to it. Your configuration will be something like that:
> ```javascript
>  {
>    bundles: {
>      contacts: ['misc-feedback']
>    },
>    ...
>  }
> ``` 

## SVG sprites
`svg-sprite-loader` used for creating SVG sprites. All future sprites should be inside `/src/sprites` directory. Sprites generated into `/src/assets/images/sprite.svg` file.

To use sprites you need to include them into your template:
```jade
div(style='display: none')
  include assets/images/sprite.svg
```

If you don't need sprites just delete that directory (and remove `webpackSpritesConfig` from `production` configuration plus `npm run sprites` from `npm run dev` script, but default configuration may work without this modifications).

Dont forget to update sprites pack after you modified it by running `$ npm run sprites`
