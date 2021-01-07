import PROMPT_DATA from "./drawingPromptData"

export default class DrawingPromptGenerator {
  constructor() {
    this.placesToLive = PROMPT_DATA.lives
    this.possibleSizes = PROMPT_DATA.size
    this.listOfFoods = PROMPT_DATA.eats
    this.modesOfTransport = PROMPT_DATA.travel
    this.extrasList = PROMPT_DATA.extra
  }

  prompt() {
    return `${this._scale()}, ${this._characteristic()} ${this._movement()}`
  }

  _scale() {
    const home = `lives ${this._randomEntry(this.placesToLive)}`
    const scale = this._randomEntry(this.possibleSizes)

    return `It ${this._randomEntry([home, scale])}`
  }

  _characteristic() {
    const food = `eats ${this._randomEntry(this.listOfFoods)}`
    const other = this._randomEntry(this.extrasList)

    return `${this._randomEntry([food, other])}`
  }

  _movement() {
    const moves = this._randomEntry(this.modesOfTransport)
    const movement = this._randomEntry(["gets around", "travels"])

    return `and ${movement} ${moves}`
  }

  _randomEntry(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
}
