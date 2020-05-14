const type = {
  base: 'PublicSans-Regular',
  bold: 'PublicSans-Bold',
  emphasis: 'PublicSans-Italic',
  light: 'PublicSans-Light'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 28,
  h4: 26,
  h5: 20,
  h6: 16,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: { //sectionSubtitle
    fontSize: size.h2, 
    fontFamily: type.bold

  },
  h3: { // bodyTitle
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: { //section title
    fontFamily: type.light,
    fontSize: size.h4,
  },
  h5: { //bodyText
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: { //secondary text format
    fontFamily: type.base,
    fontSize: size.h6,
    fontFamily: type.base
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  listItemText: {
    fontFamily: type.bold,
    fontSize: size.h4
  }
}

export default {
  type,
  size,
  style
}
