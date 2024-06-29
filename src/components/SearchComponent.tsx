'use client'

import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { TextInput } from './TextInput'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchComponent() {
  const [inputValue, setInputValue] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState('')

  const searchParams = useSearchParams()
  const router = useRouter()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue)
    }, 500)

    return () => clearTimeout(delayInputTimeoutId)
  }, [inputValue])

  useEffect(() => {
    if (debouncedInputValue) {
      router.push(`?${createQueryString('q', debouncedInputValue)}`)
    } else {
      router.push('/')
    }
  }, [debouncedInputValue, createQueryString, searchParams, router])

  return (
    <div>
      <TextInput
        placeholder="Buscar conteúdo..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}
