/**
 * این کامپوننت در اصل تست یک هوک
 * useState
 * میباشد اما بوسیله یک لایبرری
 * که باید طبق قوانین آن انجام شود
 */
import { useState, useCallback } from 'react'

export default function useUser() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((x) => x + 1), [])
  return { count, increment }
}