import { participio, strip } from './verb-tenses-utils.js'

const tensesMap = {
  particípio: {
    examples: {
      'The work is done': 'O trabalho está feito',
    },
    groups: {
      '*': ({ participio }) => participio,
    },
  },
  gerundio: {
    examples: {
      'I am eating': 'Eu estou comendo',
      "He's thinking": 'Ele está pensando',
    },
    groups: {
      '*': ({ root, a, e }) => root + (a ? 'ando' : e ? 'endo' : 'indo'),
    },
  },
  presente: {
    examples: {
      'I eat': 'Eu como',
      'You eat': 'Você come',
    },
    groups: {
      eu: ({ root }) => root + 'o',
      tu: ({ root, a }) => root + (a ? 'as' : 'es'),
      vós: ({ root, a, e }) => root + (a ? 'ais' : e ? 'eis' : 'is'),
      'você, ele, ela': ({ root, a }) => root + (a ? 'a' : 'e'),
      'vocês, eles, elas': ({ root, a }) => root + (a ? 'am' : 'em'),
      nós: ({ root, a, e }) => root + (a ? 'amos' : e ? 'emos' : 'imos'),
    },
  },
  'pretérito imperfeito': {
    examples: {
      'I ate a lot when I was little': 'Eu comia muito quando era criança',
    },
    groups: {
      'eu, você, ele, ela': ({ root, a }) => root + (a ? 'ava' : 'ia'),
      tu: ({ root, a }) => root + (a ? 'ava' : 'ias'),
      vós: ({ root, a }) => root + (a ? 'áveis' : 'íeis'),
      'vocês, eles, elas': ({ root, a }) => root + (a ? 'ava' : 'ia'),
      nós: ({ root, a }) => root + (a ? 'ávamos' : 'íamos'),
    },
  },
  'pretérito perfeito': {
    examples: {
      'I already ate that': 'Eu já comi isso',
    },
    groups: {
      eu: ({ root, a }) => root + (a ? 'ei' : 'i'),
      tu: ({ root, a, e }) => root + (a ? 'aste' : e ? 'este' : 'iste'),
      vós: ({ root, a, e }) => root + (a ? 'astes' : e ? 'estes' : 'istes'),
      'você, ele, ela': ({ root, a, e }) => root + (a ? 'ou' : e ? 'eu' : 'iu'),
      'vocês, eles, elas': ({ root, a, e }) => root + (a ? 'aram' : e ? 'eram' : 'iram'),
      nós: ({ root, a, e }) => root + (a ? 'amos' : e ? 'emos' : 'imos'),
    },
  },
  'pretérito mais-que-perfeito': {
    examples: {
      'When I noticed, the water had already overflowed from the bathtub': 'Quando notei, a água já transbordara da banheira',
    },
    groups: {
      'eu, você, ele, ela': ({ inf }) => inf + 'a',
      tu: ({ inf }) => inf + 'as',
      vós: ({ inf }) => inf + 'ais',
      'vocês, eles, elas': ({ inf }) => inf + 'am',
      nós: ({ inf }) => inf + 'amos',
    },
  },
  'futuro do pretérito': {
    examples: {
      'I would eat that': 'Eu comeria isso',
    },
    groups: {
      'eu, você, ele, ela': ({ inf, a, e }) => inf + (a ? 'ia' : e ? 'ia' : 'ia'),
      tu: ({ inf, a, e }) => inf + (a ? 'ias' : e ? 'ias' : 'ias'),
      vós: ({ inf, a, e }) => inf + (a ? 'íeis' : e ? 'íeis' : 'íeis'),
      'vocês, eles, elas': ({ inf, a, e }) => inf + (a ? 'iam' : e ? 'iam' : 'iam'),
      nós: ({ inf, a, e }) => inf + (a ? 'íamos' : e ? 'íamos' : 'íamos'),
    },
  },
  'futuro do presente': {
    examples: {
      'I will eat that': 'Eu comerei isso',
    },
    groups: {
      eu: ({ inf }) => inf + 'ei',
      tu: ({ inf }) => inf + 'ás',
      vós: ({ inf }) => inf + 'eis',
      'você, ele, ela': ({ inf }) => inf + 'á',
      'vocês, eles, elas': ({ inf }) => inf + 'ão',
      nós: ({ inf }) => inf + 'emos',
    },
  },
  imperativo: {
    examples: {
      'Eat it': 'Coma isso',
    },
    groups: {
      você: ({ root, a }) => root + (a ? 'e' : 'a'),
      tu: ({ root, a }) => root + (a ? 'a' : 'e'),
      vós: ({ root, a, e }) => root + (a ? 'ai' : e ? 'ei' : 'i'),
      vocês: ({ root, a }) => root + (a ? 'em' : 'am'),
      nós: ({ root, a }) => root + (a ? 'emos' : 'amos'),
    },
  },
  'subjuntivo presente': {
    examples: {
      'I want you to eat that': 'Eu quero que você coma isso',
      "Even though I like it, I can't eat it": 'Mesmo que eu goste dele, não posso comê-lo',
    },
    groups: {
      'eu, você, ele, ela': ({ root, a }) => root + (a ? 'e' : 'a'),
      tu: ({ root, a }) => root + (a ? 'es' : 'as'),
      vós: ({ root, a }) => root + (a ? 'eis' : 'ais'),
      vocês: ({ root, a }) => root + (a ? 'em' : 'am'),
      nós: ({ root, a }) => root + (a ? 'emos' : 'amos'),
    },
  },
  'subjuntivo pretérito imperfeito': {
    examples: {
      'If you ate it, you would understand': 'Se você o comesse, entenderia',
      'If I had money, I would buy a car': 'Se eu tivesse dinheiro, eu compraria um carro',
    },
    groups: {
      'eu, você, ele, ela': ({ root, a, e }) => root + (a ? 'asse' : e ? 'esse' : 'isse'),
      tu: ({ root, a, e }) => root + (a ? 'asses' : e ? 'esses' : 'isses'),
      vós: ({ root, a, e }) => root + (a ? 'ásseis' : e ? 'êsseis' : 'ísseis'),
      vocês: ({ root, a, e }) => root + (a ? 'assem' : e ? 'essem' : 'issem'),
      nós: ({ root, a, e }) => root + (a ? 'ássemos' : e ? 'êssemos' : 'íssemos'),
    },
  },
  'subjuntivo futuro': {
    examples: {
      'Tell me when you get there': 'Me conta quando você chegar',
    },
    groups: {
      'eu, você, ele, ela': ({ inf }) => inf,
      tu: ({ inf }) => inf + 'es',
      vós: ({ inf }) => inf + 'des',
      vocês: ({ inf }) => inf + 'em',
      nós: ({ inf }) => inf + 'mos',
    },
  },
  'pretérito perfeito composto do indicativo': {
    examples: {
      'I have been eating a lot lately': 'Eu tenho comido muito ultimamente',
    },
    groups: {
      eu: ({ participio }) => 'tenho ' + participio,
      tu: ({ participio }) => 'tens ' + participio,
      vós: ({ participio }) => 'tendes ' + participio,
      'você, ele, ela': ({ participio }) => 'tem ' + participio,
      'vocês, eles, elas': ({ participio }) => 'têm ' + participio,
      nós: ({ participio }) => 'temos ' + participio,
    },
  },
  'pretérito mais-que-perfeito composto do indicativo': {
    examples: {
      'I had been eating a lot, but I stopped': 'Eu tinha comido muito, mas parei',
    },
    groups: {
      'eu, você, ele, ela': ({ participio }) => 'tinha ' + participio,
      tu: ({ participio }) => 'tinhas ' + participio,
      vós: ({ participio }) => 'tínheis ' + participio,
      'vocês, eles, elas': ({ participio }) => 'tinham ' + participio,
      nós: ({ participio }) => 'tínhamos ' + participio,
    },
  },
  'futuro do presente composto do indicativo': {
    examples: {
      'Tomorrow, I will have eaten three more sandwiches': 'Amanhã, eu terei comido mais três sanduíches',
    },
    groups: {
      eu: ({ participio }) => 'terei ' + participio,
      tu: ({ participio }) => 'terás ' + participio,
      vós: ({ participio }) => 'tereis ' + participio,
      'você, ele, ela': ({ participio }) => 'terá ' + participio,
      'vocês, eles, elas': ({ participio }) => 'terão ' + participio,
      nós: ({ participio }) => 'teremos ' + participio,
    },
  },
  'futuro do pretérito composto do indicativo': {
    examples: {
      'I would have eaten the pizza': 'Eu teria comido a pizza',
    },
    groups: {
      'eu, você, ele, ela': ({ participio }) => 'teria ' + participio,
      tu: ({ participio }) => 'terias ' + participio,
      vós: ({ participio }) => 'teríeis ' + participio,
      'vocês, eles, elas': ({ participio }) => 'teriam ' + participio,
      nós: ({ participio }) => 'teríamos ' + participio,
    },
  },
  'pretérito perfeito composto do subjuntivo': {
    examples: {
      'I hope you had already called the hospital': 'Eu espero que você já tenha ligado para o hospital',
    },
    groups: {
      'eu, você, ele, ela': ({ participio }) => 'tenha ' + participio,
      tu: ({ participio }) => 'tenhas ' + participio,
      vós: ({ participio }) => 'tenhais ' + participio,
      'vocês, eles, elas': ({ participio }) => 'tenham ' + participio,
      nós: ({ participio }) => 'tenhamos ' + participio,
    },
  },
  'pretérito mais-que-perfeito composto do subjuntivo': {
    examples: {
      "If you had looked at the map, we wouldn't be in this mess": 'Se você tivesse olhado o mapa, não estaríamos nessa confusão',
    },
    groups: {
      'eu, você, ele, ela': ({ participio }) => 'tivesse ' + participio,
      tu: ({ participio }) => 'tivesses ' + participio,
      vós: ({ participio }) => 'tivestes ' + participio,
      'vocês, eles, elas': ({ participio }) => 'tivessem ' + participio,
      nós: ({ participio }) => 'tivéssemos ' + participio,
    },
  },
  'futuro composto do subjuntivo': {
    examples: {
      "I'll tell you when I've finished the work": 'Eu te aviso quando tiver terminado o trabalho',
    },
    groups: {
      'eu, você, ele, ela': ({ participio }) => 'tiver ' + participio,
      tu: ({ participio }) => 'tiveres ' + participio,
      vós: ({ participio }) => 'tiverdes ' + participio,
      'vocês, eles, elas': ({ participio }) => 'tiverem ' + participio,
      nós: ({ participio }) => 'tivermos ' + participio,
    },
  },
}

export const refine = ({ inf, root, a, e, participio }, conjugated) => {
  // *igir -> ijo, ija, ijam, ijamos
  // eg: corrigir
  if (/igir$/.test(inf)) return conjugated.replace(/iga(s|is|m|mos)?$/, 'ija$1').replace(/igo(m|mos)?$/, 'ijo$1')

  // *gar -> gue, guei
  // eg: pagar
  if (/gar$/.test(inf)) return conjugated.replace(/ge(s|is|i|m|mos)?$/, 'gue$1')

  // *car -> que, quei
  // eg: checar
  if (/car$/.test(inf)) return conjugated.replace(/ce(s|is|i|m|mos)?$/, 'que$1')

  // *erir -> iro, ira, iram, iramos
  // eg: preferir
  if (/erir$/.test(inf)) return conjugated.replace(/er(o|a)(s|is|m|mos)?$/, 'ir$1$2')

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

export const buildTenses = (includeCompositeTenses, includeTu, includeVos) =>
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
          .filter(gk => (includeTu || gk != 'tu') && (includeVos || gk != 'vós'))
          .map(gk => ({
            name: gk,
            conjugate: args => {
              return refine(args, tense.groups[gk](args))
            },
          })),
      }
    })
