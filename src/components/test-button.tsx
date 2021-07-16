import React from "react"

export function MyButton({ text }: { text: string }) {
  return (
    <div>
      <div style={{ backgroundColor: "red", height: "200px" }}>
        This is red!
      </div>
      <div>{text}</div>
    </div>
  )
}
