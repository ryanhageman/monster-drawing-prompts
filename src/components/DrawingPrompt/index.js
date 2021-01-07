import React, { useState } from "react"
import DrawingPromptGenerator from "./drawingPromptGenerator"

const DrawingPrompt = () => {
  const promptGenerator = new DrawingPromptGenerator()

  const [prompt, setPrompt] = useState(promptGenerator.prompt())

  return (
    <div>
      <div>{prompt}</div>

      <button
        onClick={() => {
          setPrompt(promptGenerator.prompt())
        }}
      >
        New Prompt
      </button>
    </div>
  )
}

export default DrawingPrompt
