/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Translated to Mootools by Tobias Bleckert <http://tobiasbleckert.se>
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( global ) {

	Element.implement('fitText', function ( kompressor, options ) {
	
		var compressor = kompressor || 1,
				settings   = Object.merge({
					'minFontSize' : Number.NEGATIVE_INFINITY,
					'maxFontSize' : Number.POSITIVE_INFINITY
				}, options), self = this, resizer;
				
		resizer = function () {
			self.setStyle('font-size', Math.max(Math.min(self.getWidth() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
		};
		
		resizer();
		
		window.addEvents({'resize': resizer}, {'orientationchange': resizer});
	
		return this;
		
	});

})( window );
