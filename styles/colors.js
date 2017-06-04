import color from 'css-color-function'

export default {
	a: `#ff725c`,
	aMuted: color.convert('color(#ff725c lightness(+ 15%))'),
	b: `#4169E1`,
	bMuted: color.convert('color(#4169E1 lightness(+ 15%))'),
	c: `#19a974`,
	cMuted: `#9eebcf`,
	d: `#1abc9c`,
	dMuted: `#9DE2D5`,
	gray: `#566573`,
	grayMuted: `#D5D8DC`,
	lightGray: color.convert('color(#FFFFFF shade(8%))'),
	white: `#FEFEFE`,
	black: `#0f0f0f`,
}
