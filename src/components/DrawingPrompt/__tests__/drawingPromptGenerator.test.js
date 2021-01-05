import DrawingPrompt from '..'
import DrawingPromptGenerator from '../drawingPromptGenerator'

test('creates a new DrawingPromptGenerator', () => {
  let result = new DrawingPromptGenerator

  expect(result).toBeInstanceOf(DrawingPromptGenerator)
})

test('#prompt returns a string', () => {
  let generator = new DrawingPromptGenerator
  let result = generator.prompt()

  expect(result).toMatch(/./)
})