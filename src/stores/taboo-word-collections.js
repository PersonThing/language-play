import LocalStorageStore from '../stores/local-storage-store'

const defaultWords = {
  en: [
    { word: 'Sun', tabooWords: ['Star', 'Sky', 'Light', 'Warm', 'Solar'] },
    { word: 'Moon', tabooWords: ['Night', 'Sky', 'Lunar', 'Crater', 'Orbit'] },
    { word: 'Baseball', tabooWords: ['Bat', 'Ball', 'Field', 'Batter', 'Pitcher'] },
    { word: 'Basketball', tabooWords: ['Ball', 'Court', 'Basket', 'Dribble', 'Shoot'] },
    { word: 'Football', tabooWords: ['Ball', 'Field', 'Goal', 'Kick', 'Pass'] },
    { word: 'Hockey', tabooWords: ['Stick', 'Puck', 'Goal', 'Net', 'Skate'] },
    { word: 'Soccer', tabooWords: ['Ball', 'Field', 'Goal', 'Kick', 'Pass'] },
    { word: 'Tennis', tabooWords: ['Ball', 'Court', 'Racket', 'Serve', 'Net'] },
    { word: 'Volleyball', tabooWords: ['Ball', 'Court', 'Net', 'Serve', 'Dribble'] },
  ],
  pt: [
    { word: 'Sol', tabooWords: ['Estrela', 'Céu', 'Luz', 'Quente', 'Solar'] },
    { word: 'Lua', tabooWords: ['Noite', 'Céu', 'Lunar', 'Cratera', 'Órbita'] },
    { word: 'Baseball', tabooWords: ['Batedor', 'Bola', 'Campo', 'Batedor', 'Lançador'] },
    { word: 'Basquete', tabooWords: ['Bola', 'Quadra', 'Cesta', 'Drible', 'Arremesso'] },
    { word: 'Futebol americano', tabooWords: ['Bola', 'Campo', 'Gol', 'Chute', 'Passar'] },
    { word: 'Hóquei', tabooWords: ['Bastão', 'Disco', 'Gol', 'Rede', 'Patinar'] },
    { word: 'Futebol', tabooWords: ['Bola', 'Campo', 'Gol', 'Chute', 'Passar'] },
    { word: 'Tênis', tabooWords: ['Bola', 'Quadra', 'Raquete', 'Servir', 'Rede'] },
    { word: 'Vôlei', tabooWords: ['Bola', 'Quadra', 'Rede', 'Servir', 'Drible'] },
  ],
}

const { set, subscribe } = LocalStorageStore('taboo-words', defaultWords)

export default {
  set,
  subscribe,
  reset: () => set(defaultWords)
}
