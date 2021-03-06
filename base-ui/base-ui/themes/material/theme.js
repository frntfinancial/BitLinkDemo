export const THEMES = {
  Light: {
    primary: '#2b2e34',
    secondary: '#78909c',
    background: '#fff',
    surface: '#fff',
    error: '#e53935',
    // Additional variables.
    colorLine: 'rgba(0,0,0,.42)',
    colorBorder: 'rgba(0,0,0,.12)',
    colorDisabled: 'rgba(0,0,0,.38)',
    colorLabel: 'rgba(0,0,0,.6)',
    colorGreen: '#43a047',
    colorRed: '#e53935',
    colorGoogle: '#dd4b39',
    colorSlack: '#fff'
  },
  Dark: {
    primary: '#2b2e34',
    secondary: '#78909c',
    background: '#121212', // https://material.io/design/color/dark-theme.html#properties
    surface: '#121212',
    error: '#e53935',
    textPrimaryOnBackground: 'rgba(255, 255, 255, 0.87)', // https://material.io/design/color/dark-theme.html#ui-application
    // Additional variables.
    colorLine: 'rgba(255,255,255,.42)',
    colorBorder: 'rgba(255,255,255,.12)',
    colorDisabled: 'rgba(255, 255, 255, 0.38)', // https://material.io/design/color/dark-theme.html#ui-application
    colorLabel: 'rgba(255, 255, 255, 0.6)', // https://material.io/design/color/dark-theme.html#ui-application
    colorGreen: '#43a047',
    colorRed: '#e53935',
    colorGoogle: '#dd4b39',
    colorSlack: '#fff'
  }
}

const TEXT_DEFAULTS = {
  onPrimary: '#fff',
  onSecondary: '#fff',
  // 'onSurface': '#000',
  onSurface: 'pink',
  textPrimaryOnBackground: 'rgba(0, 0, 0, 0.87)',
  textSecondaryOnBackground: 'rgba(0, 0, 0, 0.54)',
  textHintOnBackground: 'rgba(0, 0, 0, 0.38)',
  textDisabledOnBackground: 'rgba(0, 0, 0, 0.38)',
  textIconOnBackground: 'rgba(0, 0, 0, 0.38)',
  textPrimaryOnLight: 'rgba(0, 0, 0, 0.87)',
  textSecondaryOnLight: 'rgba(0, 0, 0, 0.54)',
  textHintOnLight: 'rgba(0, 0, 0, 0.38)',
  textDisabledOnLight: 'rgba(0, 0, 0, 0.38)',
  textIconOnLight: 'rgba(0, 0, 0, 0.38)',
  textPrimaryOnDark: 'white',
  textSecondaryOnDark: 'rgba(255, 255, 255, 0.7)',
  textHintOnDark: 'rgba(255, 255, 255, 0.5)',
  textDisabledOnDark: 'rgba(255, 255, 255, 0.5)',
  textIconOnDark: 'rgba(255, 255, 255, 0.5)'
}

const colorMap = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  'indianred ': '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370d8',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#d87093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  transparent: '#ffffff',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
}

const nameToHex = (name) => colorMap[name] || name

const hexToRgb = (hex) => {
  if (hex.length === 4) {
    hex = hex + hex.slice(1)
  }
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    : {
      r: 0,
      g: 0,
      b: 0
    }
}

const luminance = (r, g, b) => {
  var a = [r, g, b].map(function (v) {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

const contrast = (rgb1, rgb2) => {
  return (
    (luminance(rgb1[0], rgb1[1], rgb1[2]) + 0.05) / (luminance(rgb2[0], rgb2[1], rgb2[2]) + 0.05)
  )
}

export const getRgb = (color) => {
  color = nameToHex(color)
  return hexToRgb(color)
}

export const isDark = (color) => {
  const {r, g, b} = getRgb(color)
  const ratio = contrast([255, 255, 255], [r, g, b])
  return ratio > 3 ? false : true
}

const paletteMap = {
  primary: [['onPrimary', 0]],
  surface: [['onSurface', 0]],
  secondary: [['onSecondary', 0]],
  background: [
    ['textPrimaryOnBackground', 0],
    ['textSecondaryOnBackground', 1],
    ['textHintOnBackground', 2],
    ['textDisabledOnBackground', 2],
    ['textIconOnBackground', 2]
  ]
}

const lightTextPalette = ['rgba(0, 0, 0, 0.87)', 'rgba(0, 0, 0, 0.54)', 'rgba(0, 0, 0, 0.38)']

const darkTextPalette = [
  'rgba(255, 255, 255, 1)',
  'rgba(255, 255, 255, 0.7)',
  'rgba(255, 255, 255, 0.5)'
]

const getAutoColorsForTheme = (colors) => {
  const autoColors = Object.keys(paletteMap).reduce((acc, key) => {
    if (colors[key]) {
      const palette = isDark(colors[key]) ? lightTextPalette : darkTextPalette

      paletteMap[key].forEach((k) => {
        acc[k[0]] = palette[k[1]]
      })
    }
    return acc
  }, {})

  return {
    ...autoColors,
    ...colors
  }
}

// const toCamel = str =>
//   str.replace(/(-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));

export const getTheme = (themeName) => {
  // const theme = {
  //   ...DEFAULT_THEME,
  //   ...(THEMES[themeName] || {})
  // };
  const theme = THEMES[themeName] || {}

  const colors = getAutoColorsForTheme(theme)
  const merged = {
    ...TEXT_DEFAULTS,
    ...colors
  }

  const order = [
    'primary',
    'secondary',
    'background',
    'surface',
    'error',
    'onPrimary',
    'onSecondary',
    'onSurface',
    'textPrimaryOnBackground',
    'textSecondaryOnBackground',
    'textHintOnBackground',
    'textDisabledOnBackground',
    'textIconOnBackground',
    'textPrimaryOnLight',
    'textSecondaryOnLight',
    'textHintOnLight',
    'textDisabledOnLight',
    'textIconOnLight',
    'textPrimaryOnDark',
    'textSecondaryOnDark',
    'textHintOnDark',
    'textDisabledOnDark',
    'textIconOnDark',
    // Additional variables.
    'colorLine',
    'colorBorder',
    'colorDisabled',
    'colorLabel',
    'colorGreen',
    'colorRed',
    'colorGoogle',
    'colorSlack'
  ]

  return order.reduce((acc, key) => {
    key = `${key}`
    acc[key] = merged[key]
    return acc
  }, {})
}
