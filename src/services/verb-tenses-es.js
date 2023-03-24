/*
  pronouns:
    yo        eu, me
    tú        tu, you         informal / closer / more familiar
    vos       tu, you         informal - but only certain areas use it
    usted     você, you         formal / older people / people you don't know / higher position

    ustedes   vocês, you (pl)   only in Latin America
    vosotros  vocês, you (pl)   only in Spain

    él        ele, he
    ella      ela, she
    ellos     eles, them (m)
    ellas     elas, them (f)

llegar
  colombia - jyegar
  argentina/uruguay - chegar
  peru - yegar
    nosotros
*/

/*
  verb tenses
    simple
      participio
        comido
          I have eaten
          yo he comido
          tu has comido

      gerundio
        comiendo
          I am eating
          yo estoy comiendo
          tu estás comiendo
          

      presente
        como / comes / come
          Yo como
          Tu comes

      imperfecto
        comía / comías / comía
          yo comía
          tu comías

      pretérito (perfecto)
        comí / comiste / comió
          yo comí
          tu comiste
          tu dormiste
          usted comió

      futuro
        comeré / comerás / comerá
          yo comeré
          tu comerás

      condicional
        comería / comerías / comería
          me gustaría 

          yo te gusto   you like me   I am something that you like
          tu me gustas  I like you    you are something that I like
              tu eres algo que me gusta

          te gustaría comer pan?
          you can't just say "te gustaría pan?" it sounds weird
          gustaría needs a verb after
          tiene sentido - 
          tienes razón - 

    composite
      pretérito perfecto
        he comido
          I have eaten - yo he comido
          you have eaten - tu has comido

      pluscuamperfecto
        había comido
          I had eaten - yo había comido
          you had eaten - tu habías comido

      futuro perfecto
        habré comido
          I will have eaten in 2 hours - yo habré comido en dos horas
      condicional perfecto
        habría comido
          I would have eaten  if I had money
          yo habría comido    si yo tuviera dinero
          eu teria comido     se eu tivesse dinheiro

    subjuntivo
      presente
        coma / comas / coma
          I want you to eat
          yo quiero que comas - always sounds like quê
          eu quero que comas

          I hope you are well
          yo espero que estés bien
          eu espero que estejas bem

      imperfecto
        comiera / comieras / comiera - more common
        o
        comiese / comieses / comiese - people use it, but depends on place

        se eu fosse rico   compraria um carro
        si yo fuera rico   compraria un carro

    subjunctive composite
      pretérito perfecto
        haya comido

        I hope you have eaten
        yo espero que hayas comido
        yo espero que usted haya comido

      pluscuamperfecto
        hubiera comido - more common
        o
        hubiese comido

        si yo hubiera sabido antes, yo no habria|hubiera ido

    imperative
      afirmativo
        come / comas / coma

        comete la comida (tu)
        come la comida (tu)
        coma la comida (usted)
        comase la comida (usted)

      negativo
        no comas / no coma

        don't eat that!
        no comas eso! tu
        no come eso! - no puedo decir eso
        no coma eso! usted
*/

  /*
    I don't think it will take much time
    I don't believe it will take much time

    eu não acho que vai levar muito tempo
    yo no creo que vaya a tomar mucho tiempo

    yo voy a trabajar
    yo voy a ir a trabajar
    yo voy al trabajo

    yo necesito desafiarme
    yo quiero desafiarte
    
    yo quiero desafiarlo - him
              desafiarla - her
              desafiarlos - them m or you plural
              desafiarlas - them f
              desafiarnos - us
  */
  /*

    subjuntivo
      imperfecto
        comiera / comieras / comiera - more common
        o
        comiese / comieses / comiese - people use it, but depends on place

        se eu fosse rico   compraria um carro
        si yo fuera rico   compraria un carro
  */

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
