import { ComponentProps } from 'react'

type TextInputProps = ComponentProps<'input'>

export function TextInput(props: TextInputProps) {
  return (
    <input
      className="mt-3 py-3 px-4 textTextM rounded-md w-full bg-base-input border border-base-border placeholder:text-base-label placeholder:font-normal placeholder:text-base outline-none ring-transparent transition duration-200 ease-in-out active:border-blue active:border-2 hover:border-blue hover:border-2 focus:border-blue focus:border-2"
      {...props}
    />
  )
}
