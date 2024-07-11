import { ReactElement } from 'react'

export interface DialogHookedProps {
  trigger: ReactElement
  title: string
  content: ReactElement
  actions?: ReactElement
}
