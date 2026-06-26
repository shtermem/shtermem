"use client"

import { createSystem, defaultConfig, ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        // 見出し用フォント
        heading: { value: "'Zen Maru Gothic', system-ui, sans-serif" },
        // 本文用フォント（見出しと同じでもOK）
        body: { value: "'Zen Maru Gothic', system-ui, sans-serif" },
        // コード用（必要に応じて変更）
        mono: { value: "'JetBrains Mono', 'Fira Code', monospace" },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}