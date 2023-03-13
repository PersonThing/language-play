const strip = inf => inf.substring(0, inf.length - 2)
const stripR = inf => inf.substring(0, inf.length - 1)
const ifA = (inf, text) => (/ar$/.test(inf) ? text : '')
const ifE = (inf, text) => (/er$/.test(inf) ? text : '')
const ifI = (inf, text) => (/ir$/.test(inf) ? text : '')
const ifIorE = (inf, text) => (/(i|e)r$/.test(inf) ? text : '')
const participio = inf => strip(inf) + ifA(inf, 'ado') + ifIorE(inf, 'ido')

export const refine = (inf, conjugated) => {
  // *igir -> ijo, ija, ijam, ijamos
  // eg: corrigir
  if (/igir$/.test(inf)) return conjugated.replace(/iga(s|m|mos)?$/, 'ija$1').replace(/igo(m|mos)?$/, 'ijo$1')

  // *gar -> gue, guei
  // eg: pagar
  if (/gar$/.test(inf)) return conjugated.replace(/ge(s|i|m|mos)?$/, 'gue$1')

  // *car -> que, quei
  // eg: checar
  if (/car$/.test(inf)) return conjugated.replace(/ce(s|i|m|mos)?$/, 'que$1')

  // *erir -> iro, ira, iram, iramos
  // eg: prefirir
  if (/erir$/.test(inf)) return conjugated.replace(/er(o|a)(s|m|mos)?$/, 'ir$1$2')

  return conjugated
}

const tensesMap = {
  particípio: {
    examples: {
      'The work is done': 'O trabalho é feito',
    },
    '*': participio,
  },
  gerundio: {
    examples: {
      'I am reading': 'Eu estou lendo',
      "He's thinking": 'Ele está pensando',
    },
    '*': inf => stripR(inf) + 'ndo',
  },
  presente: {
    examples: {
      'I read': 'Eu leio',
      'You eat': 'Você come',
    },
    eu: inf => strip(inf) + 'o',
    tu: inf => strip(inf) + ifA(inf, 'as') + ifIorE(inf, 'es'),
    vós: inf => strip(inf) + ifA(inf, 'ais') + ifI(inf, 'is') + ifE(inf, 'eis'),
    'você, ele, ela': inf => strip(inf) + ifA(inf, 'a') + ifIorE(inf, 'e'),
    'vocês, eles, elas': inf => strip(inf) + ifA(inf, 'am') + ifIorE(inf, 'em'),
    nós: inf => strip(inf) + ifA(inf, 'amos') + ifE(inf, 'emos') + ifI(inf, 'imos'),
  },
  'pretérito imperfeito': {
    examples: {
      'I read a lot when I was little': 'Eu lia muito quando era criança',
    },
    'eu, você, ele, ela': inf => strip(inf) + ifA(inf, 'ava') + ifIorE(inf, 'ia'),
    tu: inf => strip(inf) + ifA(inf, 'ava') + ifIorE(inf, 'ias'),
    'vocês, eles, elas': inf => strip(inf) + ifA(inf, 'ava') + ifIorE(inf, 'ia'),
    nós: inf => strip(inf) + ifA(inf, 'ávamos') + ifIorE(inf, 'íamos'),
  },
  'pretérito perfeito': {
    examples: {
      'I already read that': 'Eu já li isso',
    },
    eu: inf => strip(inf) + ifA(inf, 'ei') + ifIorE(inf, 'i'),
    tu: inf => strip(inf) + ifA(inf, 'aste') + ifE(inf, 'este') + ifI(inf, 'iste'),
    'você, ele, ela': inf => strip(inf) + ifA(inf, 'ou') + ifE(inf, 'eu') + ifI(inf, 'iu'),
    'vocês, eles, elas': inf => strip(inf) + ifA(inf, 'aram') + ifE(inf, 'eram') + ifI(inf, 'iram'),
    nós: inf => strip(inf) + ifA(inf, 'amos') + ifE(inf, 'emos') + ifI(inf, 'imos'),
  },
  'futuro do pretérito': {
    examples: {
      'I would read that': 'Eu leria isso',
    },
    'eu, você, ele, ela': inf => strip(inf) + ifA(inf, 'aria') + ifE(inf, 'eria') + ifI(inf, 'iria'),
    tu: inf => strip(inf) + ifA(inf, 'arias') + ifE(inf, 'erias') + ifI(inf, 'irias'),
    'vocês, eles, elas': inf => strip(inf) + ifA(inf, 'ariam') + ifE(inf, 'eriam') + ifI(inf, 'iriam'),
    nós: inf => strip(inf) + ifA(inf, 'aríamos') + ifE(inf, 'eríamos') + ifI(inf, 'iríamos'),
  },
  'futuro do presente': {
    examples: {
      'I will read that': 'Eu lerei isso',
    },
    eu: inf => inf + 'ei',
    tu: inf => inf + 'ás',
    'você, ele, ela': inf => inf + 'á',
    'vocês, eles, elas': inf => inf + 'ão',
    nós: inf => inf + 'emos',
  },
  imperativo: {
    examples: {
      'Read it': 'Leia isso',
    },
    você: inf => strip(inf) + ifA(inf, 'e') + ifIorE(inf, 'a'),
    tu: inf => strip(inf) + ifA(inf, 'a') + ifIorE(inf, 'e'),
    vocês: inf => strip(inf) + ifA(inf, 'em') + ifIorE(inf, 'am'),
    nós: inf => strip(inf) + ifA(inf, 'emos') + ifIorE(inf, 'amos'),
  },
  'subjuntivo presente': {
    examples: {
      'I want you to read that': 'Eu quero que você leia isso',
      "Even though I like it, I can't eat it": 'Mesmo que eu goste dele, não posso comê-lo',
    },
    'eu, você, ele, ela': inf => strip(inf) + ifA(inf, 'e') + ifIorE(inf, 'a'),
    tu: inf => strip(inf) + ifA(inf, 'es') + ifIorE(inf, 'as'),
    vocês: inf => strip(inf) + ifA(inf, 'em') + ifIorE(inf, 'am'),
    nós: inf => strip(inf) + ifA(inf, 'emos') + ifIorE(inf, 'amos'),
  },
  'subjuntivo pretérito imperfeito': {
    examples: {
      'If you had read the book, you would understand': 'Se você lesse o livro, entenderia',
      'If I had money, I would buy a car': 'Se eu tivesse dinheiro, eu compraria um carro',
    },
    'eu, você, ele, ela': inf => stripR(inf) + 'sse',
    tu: inf => stripR(inf) + 'sses',
    vocês: inf => stripR(inf) + 'ssem',
    nós: inf => strip(inf) + ifA(inf, 'ássemos') + ifE(inf, 'êssemos') + ifI(inf, 'íssemos'),
  },
  'subjuntivo futuro': {
    examples: {
      'If you had read the book, you would understand': 'Se você lesse o livro, entenderia',
      'If I had money, I would buy a car': 'Se eu tivesse dinheiro, eu compraria um carro',
    },
    'eu, você, ele, ela': inf => inf,
    tu: inf => inf + 'es',
    vocês: inf => inf + 'em',
    nós: inf => inf + 'mos',
  },
  'pretérito perfeito composto do indicativo': {
    examples: {
      'I have been reading a lot lately': 'Eu tenho lido muito ultimamente',
    },
    eu: inf => 'tenho ' + participio(inf),
    tu: inf => 'tens ' + participio(inf),
    'você, ele, ela': inf => 'tem ' + participio(inf),
    'vocês, eles, elas': inf => 'têm ' + participio(inf),
    nós: inf => 'temos ' + participio(inf),
  },
  'pretérito mais-que-perfeito composto do indicativo': {
    examples: {
      'I had been reading a lot, but I stopped': 'Eu tinha lido muito, mas parei',
    },
    'eu, você, ele, ela': inf => 'tinha ' + participio(inf),
    tu: inf => 'tinhas ' + participio(inf),
    'vocês, eles, elas': inf => 'tinham ' + participio(inf),
    nós: inf => 'tínhamos ' + participio(inf),
  },
  'futuro do presente composto do indicativo': {
    examples: {
      'Tomorrow, I will have read three more books': 'Amanhã, eu terei lido mais três livros',
    },
    eu: inf => 'terei ' + participio(inf),
    tu: inf => 'terás ' + participio(inf),
    'você, ele, ela': inf => 'terá ' + participio(inf),
    'vocês, eles, elas': inf => 'terão ' + participio(inf),
    nós: inf => 'teremos ' + participio(inf),
  },
  'futuro do pretérito composto do indicativo': {
    examples: {
      'I would have read the book': 'Eu teria lido o livro',
    },
    'eu, você, ele, ela': inf => 'teria ' + participio(inf),
    tu: inf => 'terias ' + participio(inf),
    'vocês, eles, elas': inf => 'teriam ' + participio(inf),
    nós: inf => 'teríamos ' + participio(inf),
  },
  'pretérito perfeito composto do subjuntivo': {
    examples: {
      'I hope you had already called the hospital': 'Eu espero que você já tenha ligado para o hospital',
    },
    'eu, você, ele, ela': inf => 'tenha ' + participio(inf),
    tu: inf => 'tenhas ' + participio(inf),
    'vocês, eles, elas': inf => 'tenham ' + participio(inf),
    nós: inf => 'tenhamos ' + participio(inf),
  },
  'pretérito mais-que-perfeito composto do subjuntivo': {
    examples: {
      "If you had looked at the map, we wouldn't be in this mess": 'Se você tivesse olhado o mapa, não estaríamos nessa confusão',
    },
    'eu, você, ele, ela': inf => 'tivesse ' + participio(inf),
    tu: inf => 'tivesses ' + participio(inf),
    'vocês, eles, elas': inf => 'tivessem ' + participio(inf),
    nós: inf => 'tivéssemos ' + participio(inf),
  },
  'futuro composto do subjuntivo': {
    examples: {
      "I'll tell you when I've finished the work": 'Eu te aviso quando tiver terminado o trabalho',
    },
    'eu, você, ele, ela': inf => 'tiver ' + participio(inf),
    tu: inf => 'tiveres ' + participio(inf),
    'vocês, eles, elas': inf => 'tiverem ' + participio(inf),
    nós: inf => 'tivermos ' + participio(inf),
  },
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
