import { strip, stripR, ifA, ifE, ifI, ifEI, participio } from './verb-tenses-utils.js'

const placeholder = '?'

const tensesMap = {
  particípio: {
    examples: {
      'The work is done': 'O trabalho é feito',
    },
    '*': participio,
  },
  gerundio: {
    examples: {
      'I am eating': 'Eu estou comiendo',
      "He's eating": 'Ele está comiendo',
    },
    '*': inf => strip(inf) + ifA(inf, 'ando') + ifEI(inf, 'iendo'),
  },
  'presente': {
    examples: {
      'I eat': 'Yo como',
      'You eat': 'Tu comes',
    },
    yo: inf => strip(inf) + 'o',
    tú: inf => strip(inf) + ifA(inf, 'as') + ifEI(inf, 'es'),
    'él, Ud.': inf => strip(inf) + ifA(inf, 'a') + ifEI(inf, 'e'),
    nosotros: inf => strip(inf) + ifA(inf, 'amos') + ifE(inf, 'emos') + ifI(inf, 'imos'),
    vosotros: inf => strip(inf) + ifA(inf, 'áis') + ifE(inf, 'éis') + ifI(inf, 'ís'),
    'ellos, Uds.': inf => strip(inf) + ifA(inf, 'an') + ifEI(inf, 'en'),
  },
  'imperfecto': {
    examples: {
      'I ate a lot when I was little': 'Yo comía mucho cuando era pequeño',
    },
    'yo, él, Ud.': inf => strip(inf) + ifA(inf, 'aba') + ifEI(inf, 'ía'),
    tú: inf => strip(inf) + ifA(inf, 'abas') + ifEI(inf, 'ías'),
    nosotros: inf => strip(inf) + ifA(inf, 'ábamos') + ifEI(inf, 'íamos'),
    vosotros: inf => strip(inf) + ifA(inf, 'abais') + ifEI(inf, 'íais'),
    'ellos, Uds.': inf => strip(inf) + ifA(inf, 'aban') + ifEI(inf, 'ían'),
  },
  'pretérito perfecto simple': {
    examples: {
      'I already ate that': 'Me comi eso'
    },
    yo: inf => strip(inf) + ifA(inf, 'é') + ifEI(inf, 'í'),
    tú: inf => strip(inf) + ifA(inf, 'aste') + ifEI(inf, 'iste'),
    'él, Ud.': inf => strip(inf) + ifA(inf, 'ó') + ifEI(inf, 'ió'),
    nosotros: inf => strip(inf) + ifA(inf, 'amos') + ifE(inf, 'imos'),
    vosotros: inf => strip(inf) + ifA(inf, 'asteis') + ifE(inf, 'isteis'),
    'ellos, Uds.': inf => strip(inf) + ifA(inf, 'aron') + ifEI(inf, 'ieron'),
  },
  futuro: {
    examples: {
      'I will eat that': 'Yo comeré eso',
    },
    yo: inf => inf + 'é',
    tú: inf => inf + 'ás',
    'él, Ud.': inf => inf + 'á',
    nosotros: inf => inf + 'emos',
    vosotros: inf => inf + 'éis',
    'ellos, Uds.': inf => inf + 'án',
  },
  'condicional': {
    examples: {
      'I would eat that': 'Me comería eso',
    },
    'yo, él, Ud.': inf => inf + 'ía',
    tú: inf => inf + 'ías',
    nosotros: inf => inf + 'íamos',
    vosotros: inf => inf + 'íais',
    'ellos, Uds.': inf => inf + 'ían',
  },
  'imperativo afirmativo': {
    examples: {
      'Eat it': '?????',
    },
    tú: inf => strip(inf) + ifA(inf, 'a') + ifEI(inf, 'e'),
    'Ud.': inf => strip(inf) + ifA(inf, 'e') + ifEI(inf, 'a'),
    nosotros: inf => strip(inf) + ifA(inf, 'emos') + ifEI(inf, 'amos'),
    // vosotros: inf => strip(inf) + ifA(inf, 'a') + ifE(inf, 'e') + ifI(inf, 'e'),
    'Uds.': inf => strip(inf) + ifA(inf, 'en') + ifEI(inf, 'an'),
  },
  'imperativo negativo': {
    examples: {
      "Don't eat it": 'No te lo comas',
    },
    tú: inf => 'no ' + strip(inf) + ifA(inf, 'es') + ifEI(inf, 'as'),
    'Ud.': inf => 'no ' + strip(inf) + ifA(inf, 'e') + ifEI(inf, 'a'),
    nosotros: inf => 'no ' + strip(inf) + ifA(inf, 'emos') + ifEI(inf, 'amos'),
    // vosotros: inf => 'no ' + strip(inf) + ifA(inf, 'a') + ifE(inf, 'e') + ifI(inf, 'e'),
    'Uds.': inf => 'no ' + strip(inf) + ifA(inf, 'en') + ifEI(inf, 'an'),
  },
  'presente de subjuntivo': {
    examples: {
      'I want you to eat that': 'Quiero que comas eso',
    },
    'yo, él, Ud.': inf => strip(inf) + ifA(inf, 'e') + ifEI(inf, 'a'),
    tú: inf => strip(inf) + ifA(inf, 'es') + ifEI(inf, 'as'),
    nosotros: inf => strip(inf) + ifA(inf, 'emos') + ifEI(inf, 'amos'),
    vosotros: inf => strip(inf) + ifA(inf, 'éis') + ifEI(inf, 'áis'),
    'Uds.': inf => strip(inf) + ifA(inf, 'en') + ifEI(inf, 'an'),
  },
  'imperfecto de subjuntivo (option 1)': {
    examples: {
      'If you had read the book, you would understand': 'Si hubieras leído el libro, lo entenderías',
      'If I had money, I would buy a car': 'Si tuviera dinero, compraría un auto',
    },
    'yo, él, Ud.': inf => strip(inf) + ifA(inf, 'ara') + ifEI(inf, 'iera'),
    tú: inf => strip(inf) + ifA(inf, 'aras') + ifEI(inf, 'ieras'),
    nosotros: inf => strip(inf) + ifA(inf, 'áramos') + ifEI(inf, 'iéramos'),
    vosotros: inf => strip(inf) + ifA(inf, 'arais') + ifEI(inf, 'ieráis'),
    'Uds.': inf => strip(inf) + ifA(inf, 'aran') + ifEI(inf, 'ieran'),
  },
  'imperfecto de subjuntivo (option 2)': {
    examples: {
      'If you had read the book, you would understand': 'Si hubieses leído el libro, lo entenderías',
      'If I had money, I would buy a car': 'Si tuviese dinero, compraría un auto',
    },
    'yo, él, Ud.': inf => strip(inf) + ifA(inf, 'ase') + ifEI(inf, 'iese'),
    tú: inf => strip(inf) + ifA(inf, 'ases') + ifEI(inf, 'ieses'),
    nosotros: inf => strip(inf) + ifA(inf, 'ásemos') + ifEI(inf, 'iésemos'),
    vosotros: inf => strip(inf) + ifA(inf, 'aséis') + ifEI(inf, 'ieséis'),
    'Uds.': inf => strip(inf) + ifA(inf, 'asen') + ifEI(inf, 'iesen'),
  },
  // 'futuro de subjuntivo': {
  //   examples: {
  //     'If you had read the book, you would understand': '?????',
  //     'If I had money, I would buy a car': '?????',
  //   },
  //   'yo, él, Ud.': inf => placeholder, //inf,
  //   tú: inf => placeholder, //inf + 'es',
  //   nosotros: inf => placeholder, //inf + 'mos',
  //   vosotros: inf => placeholder, //inf + 'des',
  //   'Uds.': inf => placeholder, //inf + 'em',
  // },
  // 'pretérito perfeito composto do indicativo': {
  //   examples: {
  //     'I have been reading a lot lately': '?????',
  //   },
  //   yo: inf => placeholder, //'tenho ' + participio(inf),
  //   tú: inf => placeholder, //'tens ' + participio(inf),
  //   'él, Ud.': inf => placeholder, //'tem ' + participio(inf),
  //   nosotros: inf => placeholder, //'temos ' + participio(inf),
  //   vosotros: inf => placeholder, //'tendes ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'têm ' + participio(inf),
  // },
  // 'pretérito mais-que-perfeito composto do indicativo': {
  //   examples: {
  //     'I had been reading a lot, but I stopped': '?????',
  //   },
  //   'yo, él, Ud.': inf => placeholder, //'tinha ' + participio(inf),
  //   tú: inf => placeholder, //'tinhas ' + participio(inf),
  //   nosotros: inf => placeholder, //'tínhamos ' + participio(inf),
  //   vosotros: inf => placeholder, //'tínheis ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'tinham ' + participio(inf),
  // },
  // 'futuro do presente composto do indicativo': {
  //   examples: {
  //     'Tomorrow, I will have read three more books': '?????',
  //   },
  //   yo: inf => placeholder, //'terei ' + participio(inf),
  //   tú: inf => placeholder, //'terás ' + participio(inf),
  //   'él, Ud.': inf => placeholder, //'terá ' + participio(inf),
  //   nosotros: inf => placeholder, //'teremos ' + participio(inf),
  //   vosotros: inf => placeholder, //'tereis ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'terão ' + participio(inf),
  // },
  // 'futuro do pretérito composto do indicativo': {
  //   examples: {
  //     'I would have read the book': '?????',
  //   },
  //   'yo, él, Ud.': inf => placeholder, //'teria ' + participio(inf),
  //   tú: inf => placeholder, //'terias ' + participio(inf),
  //   nosotros: inf => placeholder, //'teríamos ' + participio(inf),
  //   vosotros: inf => placeholder, //'teríeis ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'teriam ' + participio(inf),
  // },
  // 'pretérito perfeito composto do subjuntivo': {
  //   examples: {
  //     'I hope you had already called the hospital': '?????',
  //   },
  //   'yo, él, Ud.': inf => placeholder, //'tenha ' + participio(inf),
  //   tú: inf => placeholder, //'tenhas ' + participio(inf),
  //   nosotros: inf => placeholder, //'tenhamos ' + participio(inf),
  //   vosotros: inf => placeholder, //'tenhais ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'tenham ' + participio(inf),
  // },
  // 'pretérito mais-que-perfeito composto do subjuntivo': {
  //   examples: {
  //     "If you had looked at the map, we wouldn't be in this mess": '?????',
  //   },
  //   'yo, él, Ud.': inf => placeholder, //'tivesse ' + participio(inf),
  //   tú: inf => placeholder, //'tivesses ' + participio(inf),
  //   nosotros: inf => placeholder, //'tivéssemos ' + participio(inf),
  //   vosotros: inf => placeholder, //'tivestes ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'tivessem ' + participio(inf),
  // },
  // 'futuro composto do subjuntivo': {
  //   examples: {
  //     "I'll tell you when I've finished the work": '?????',
  //   },
  //   'yo, él, Ud.': inf => placeholder, //'tiver ' + participio(inf),
  //   tú: inf => placeholder, //'tiveres ' + participio(inf),
  //   nosotros: inf => placeholder, //'tivermos ' + participio(inf),
  //   vosotros: inf => placeholder, //'tiverdes ' + participio(inf),
  //   'ellos, Uds.': inf => placeholder, //'tiverem ' + participio(inf),
  // },
}

export const refine = (inf, conjugated) => {
  // if we need to refine the conjugated form to retain intended sounds
  // like in portuguese, do it here
  return conjugated
}

const buildTenses = (includeCompositeTenses, includeTu, includeVos) =>
  Object.keys(tensesMap)
    .filter(k => includeCompositeTenses || !k.includes('composto'))
    .map(k => {
      const tense = tensesMap[k]
      return {
        name: k,
        examples: tense.examples
          ? Object.keys(tense.examples).map(k => ({
              english: k,
              portuguese: tense.examples[k],
            }))
          : null,
        groups: Object.keys(tense)
          .filter(gk => gk != 'examples' && (includeTu || gk != 'tu') && (includeVos || gk != 'vós'))
          .map(gk => ({
            name: gk,
            func: w => refine(w, tense[gk](w)),
          })),
      }
    })

export default buildTenses
