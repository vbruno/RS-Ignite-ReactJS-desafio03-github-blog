import { ComponentProps } from 'react'

type TextInputProps = ComponentProps<'input'>

export function TextInput(props: TextInputProps) {
  return (
    <input
      className="mt-3 py-3 px-4 textTextM rounded-md w-full bg-base-input border border-base-border placeholder:text-base-label placeholder:font-normal placeholder:text-base outline-none ring-transparent transition duration-200 ease-in-out hover:ring-2 hover:ring-blue focus:ring-2 focus:ring-blue "
      {...props}
    />
  )
}
