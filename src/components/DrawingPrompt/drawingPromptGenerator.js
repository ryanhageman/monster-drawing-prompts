import PROMPT_DATA from "./drawingPromptData"

export default class DrawingPromptGenerator {
  prompt() {
    const { travel } = PROMPT_DATA
    // const food = this._randomEntry(eats)
    const moves = this._randomEntry(travel)
    const movement = this._randomEntry(['gets around', 'travels'])

    return `${this._first_part()}, ${this._second_part()} and ${movement} ${moves}`
  }

  _first_part() {
    const { lives, size } = PROMPT_DATA
    const home = `lives ${this._randomEntry(lives)}`
    const scale = this._randomEntry(size)

    return `It ${this._randomEntry([home, scale])}`
  }

  _second_part() {
    const { eats, extra } = PROMPT_DATA
    const food = `eats ${this._randomEntry(eats)}`
    const other = this._randomEntry(extra)

    return `${this._randomEntry([food, other])}`
  }

  _randomEntry(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
}