
module.exports = meters
exports.footinch = footinch

function meters (str) {
  if ('number' == typeof str) return str
  str = str
    .replace(/[,\s]/g, '')
    .toLowerCase()

  str = footinch(str)

  var unit = str.replace(/[0-9\.]+/,'')
  var m = parseFloat(str)

  switch (unit) {
  case 'mi':
  case 'mile':
  case 'miles':
    return m * 1609.34
  case 'nm':
  case 'nmi':
    return m * 1852
  case '\'':
  case 'ft':
  case 'foot':
  case 'feet':
    return m * 0.3048
  case '"':
  case 'in':
  case 'inch':
  case 'inches':
    return m * 0.0254
  case 'yd':
  case 'yds':
  case 'yard':
  case 'yards':
    return m * 0.9144
  case 'k':
  case 'km':
    return m * 1000
  case 'cm':
    return m / 100
  case 'mm':
    return m / 1000
  case 'm':
  case '':
    return m
  default:
    return null
  }
}

function footinch (str) {
  var arr = str.match(/^([0-9]+)['′][-–]?([0-9]+)["″]?$/)
  if (arr && arr.length)
    return +arr[1]+arr[2]/12+'ft'
  else
    return str
}
