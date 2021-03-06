# FitText.js, a <del>jQuery plugin</del> <ins>Mootools plugin</ins> for inflating web type
FitText makes font-sizes flexible. Use this plugin on your responsive design for ratio-based resizing of your headlines.

## How it works
Here is a simple FitText setup:

```html
<script src="//ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js"></script>
<script src="mootools.fittext.js"></script>
<script>
  document.id('responsive_headline').fitText();
</script>
```

Your text should now fluidly resize, by default: Font-size = 1/10th of the element's width.

## The Compressor
If your text is resizing poorly, you'll want to turn tweak up/down "The Compressor". It works a little like a guitar amp. The default is `1`.

```javascript
document.id('responsive_headline').fitText(1.2); // Turn the compressor up   (resizes more aggressively)
document.id('responsive_headline').fitText(0.8); // Turn the compressor down (resizes less aggressively)
```

This will hopefully give you a level of "control" that might not be pixel perfect, but resizes smoothly & nicely.

## minFontSize & maxFontSize
FitText now allows you to specify two optional pixel values: `minFontSize` and `maxFontSize`. Great for situations when you want to preserve hierarchy.

```javascript
document.id('responsive_headline').fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' })
```

## CSS FAQ

- Make sure your headline has width!
  - Use `display: block;` OR `display: inline-block;`+ a specified width (i.e. `width: 100%`).
- Tweak until you like it.
- Set a No-JS fallback font-size in your CSS.
- Fire

## Don't use Mootools?
That's okay. Check out these handy non-Mootools versions maintained by other people.

- [jQuery FitText](https://github.com/davatron5000/FitText.js) from @davatron5000
- [vanilla JS FitText](https://github.com/adactio/FitText.js) from @adactio

## Changelog
* `v 1.2` - Added `onorientationchange` event
* `v 1.1` - FitText now ignores font-size and has minFontSize & maxFontSize options
* `v 1.0.1` - Fix for broken font-size.
* `v 1.0` - Initial Release

## In Use:
- [Trent Walton](http://trentwalton.com)

If you want more exact fitting text, there are plugins for that! We recommend checking out [BigText](https://github.com/zachleat/BigText) by Zach Leatherman or [SlabText](http://www.frequency-decoder.com/demo/slabText/) by Brian McAllister.

### Download, Fork, Commit.
If you think you can make this better, please Download, Fork, & Commit. We'd love to see your ideas.
