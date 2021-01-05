import React from "react"
import DrawingPromptGenerator from "./drawingPromptGenerator"

const DrawingPrompt = () => {
  const promptGenerator = new DrawingPromptGenerator()

  return <div>{promptGenerator.prompt()}</div>
}

export default DrawingPrompt
