import { participio, strip } from './verb-tenses-utils.js'

const tensesMap = {
  particípio: {
    examples: {
      'The work is done': 'El trabajo está hecho',
    },
    groups: {
      '*': ({ participio }) => participio,
    },
  },

  gerundio: {
    examples: {
      'I am eating': 'Yo estoy comiendo',
      "He's eating": 'Él está comiendo',
    },
    groups: {
      '*': ({ root, a }) => (root + a ? 'ando' : 'iendo'),
    },
  },

  presente: {
    examples: {
      'I eat': 'Yo como',
      'You eat': 'Tu comes',
    },
    groups: {
      yo: ({ root }) => root + 'o',
      tú: ({ root, a }) => root + (a ? 'as' : 'es'),
      'él, ella, usted': ({ root, a }) => root + (a ? 'a' : 'e'),
      nosotros: ({ root, a, e }) => root + (a ? 'amos' : e ? 'emos' : 'imos'),
      'ellos, ellas, ustedes': ({ root, a }) => root + (a ? 'an' : 'en'),
    },
  },

  imperfecto: {
    examples: {
      'I ate a lot when I was little': 'Yo comía mucho cuando era pequeño',
    },
    groups: {
      'yo, él, ella, usted': ({ root, a }) => root + (a ? 'aba' : 'ía'),
      tú: ({ root, a }) => root + (a ? 'abas' : 'ías'),
      nosotros: ({ root, a }) => root + (a ? 'ábamos' : 'íamos'),
      'ellos, ellas, ustedes': ({ root, a }) => root + (a ? 'aban' : 'ían'),
    },
  },

  'pretérito (perfecto)': {
    groups: {
      yo: ({ root, a }) => root + (a ? 'é' : 'í'),
      'él, ella, usted': ({ root, a }) => root + (a ? 'ó' : 'ió'),
      tú: ({ root, a }) => root + (a ? 'aste' : 'iste'),
      nosotros: ({ root, a, e }) => root + (a ? 'amos' : e ? 'imos' : 'imos'),
      'ellos, ellas, ustedes': ({ root, a }) => root + (a ? 'aron' : 'ieron'),
    },
  },

  futuro: {
    groups: {
      yo: ({ inf }) => inf + 'é',
      'él, ella, usted': ({ inf }) => inf + 'á',
      tú: ({ inf }) => inf + 'ás',
      nosotros: ({ inf }) => inf + 'emos',
      'ellos, ellas, ustedes': ({ inf }) => inf + 'án',
    },
  },

  condicional: {
    groups: {
      'yo, él, ella, usted': ({ inf }) => inf + 'ía',
      tú: ({ inf }) => inf + 'ías',
      nosotros: ({ inf }) => inf + 'íamos',
      'ellos, ellas, ustedes': ({ inf }) => inf + 'ían',
    },
  },

  'pretérito perfecto compuesto': {
    groups: {
      yo: ({ participio }) => 'he ' + participio, // hay
      'él, ella, usted': ({ participio }) => 'ha ' + participio,
      tú: ({ participio }) => 'has ' + participio,
      nosotros: ({ participio }) => 'hemos ' + participio,
      'ellos, ellas, ustedes': ({ participio }) => 'han ' + participio,

      // elejalde
      // g -> h sometimes, for example in girasol - sunflower the g makes an h sound
      // hombre hermano hijo
      // ellos se han hablado - they have spoken to each other
    },
  },

  pluscuamperfecto: {
    groups: {
      'yo, él, ella, usted': ({ participio }) => 'había ' + participio,
      tú: ({ participio }) => 'habías ' + participio,
      nosotros: ({ participio }) => 'habíamos ' + participio,
      'ellos, ellas, ustedes': ({ participio }) => 'habían ' + participio,
    },
  },

  'futuro perfecto': {
    groups: {
      yo: ({ participio }) => 'habré ' + participio,
      'él, ella, usted': ({ participio }) => 'habrá ' + participio,
      tú: ({ participio }) => 'habrás ' + participio,
      nosotros: ({ participio }) => 'habremos ' + participio,
      'ellos, ellas, ustedes': ({ participio }) => 'habrán ' + participio,
    },
  },

  'condicional perfecto': {
    groups: {
      'yo, él, ella, usted': ({ participio }) => 'habría ' + participio,
      tú: ({ participio }) => 'habrías ' + participio,
      nosotros: ({ participio }) => 'habríamos ' + participio,
      'ellos, ellas, ustedes': ({ participio }) => 'habrían ' + participio,
    },
  },

  'subjuntivo: presente': {
    groups: {
      'yo, él, ella, usted': ({ root, a }) => root + (a ? 'e' : 'a'),
      tú: ({ root, a }) => root + (a ? 'es' : 'as'),
      nosotros: ({ root, a }) => root + (a ? 'emos' : 'amos'),
      'ellos, ellas, ustedes': ({ root, a }) => root + (a ? 'en' : 'an'),
    },
  },

  'subjuntivo: imperfecto': {
    groups: {
      'yo, él, ella, usted': ({ root, a}) => root + (a ? 'ara' : 'iera'),
      tú: ({ root, a}) => root + (a ? 'aras' : 'ieras'),
      nosotros: ({ root, a}) => root + (a ? 'aramos' : 'ieramos'),
      'ellos, ellas, ustedes': ({ root, a}) => root + (a ? 'aran' : 'ieran'),
    },
  },

  'subjuntivo compuesto: pretérito perfecto': {
    groups: {
      'yo, él, ella, usted': ({ participio }) => 'haya ' + participio,
      tú: ({ participio }) => 'hayas ' + participio,
      nosotros: ({ participio }) => 'hayamos ' + participio,
      'ellos, ellas, ustedes': ({ participio }) => 'hayan ' + participio,
    },
  },

  'subjuntivo compuesto: pluscuamperfecto': {
    groups: {
      'yo, él, ella, usted': ({ participio }) => 'hubiera ' + participio,
      tú: ({ participio }) => 'hubieras ' + participio,
      nosotros: ({ participio }) => 'hubieramos ' + participio,
      'ellos, ellas, ustedes': ({ participio }) => 'hubieran ' + participio,
    },
  },

  'imperativo: afirmativo': {
    groups: {
      'él, ella, usted': ({ root, a }) => root + (a ? 'e' : 'a'),
      tú: ({ root, a }) => root + (a ? 'a' : 'e'),
      nosotros: ({ root, a }) => root + (a ? 'emos' : 'amos'),
      'ellos, ellas, ustedes': ({ root, a }) => root + (a ? 'en' : 'an'),
    },
  },

  'imperativo: negativo': {
    groups: {
      'él, ella, usted': ({ root, a }) => 'no ' + root + (a ? 'e' : 'a'),
      tú: ({ root, a }) => 'no ' + root + (a ? 'es' : 'as'),
      nosotros: ({ root, a }) => 'no ' + root + (a ? 'emos' : 'amos'),
      'ellos, ellas, ustedes': ({ root, a }) => 'no ' + root + (a ? 'en' : 'an'),
    },
  },
}

export const refine = (inf, conjugated) => {
  // if we need to refine the conjugated form to retain intended sounds
  // like in portuguese, do it here
  return conjugated
}

export const getVerbConjugationArgs = inf => {
  return {
    inf,
    root: strip(inf),
    a: inf.endsWith('ar'),
    e: inf.endsWith('er'),
    participio: participio(inf),
  }
}

export const buildTenses = includeCompositeTenses =>
  Object.keys(tensesMap)
    .filter(k => includeCompositeTenses || !k.includes('composto'))
    .map(k => {
      const tense = tensesMap[k]
      return {
        name: k,
        examples: tense.examples
          ? Object.keys(tense.examples).map(k => ({
              left: k,
              right: tense.examples[k],
            }))
          : null,
        groups: Object.keys(tense.groups)
          // .filter(gk => (includeTu || gk != 'tu') && (includeVos || gk != 'vós'))
          .map(gk => ({
            name: gk,
            conjugate: args => {
              return refine(args, tense.groups[gk](args))
            },
          })),
      }
    })
