import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import FileInput from "./FileInput"

describe("FileInput", () => {
  it("renders", () => {
    render(<FileInput />)

    screen.debug()

    // check if App components renders headline
  })
})
