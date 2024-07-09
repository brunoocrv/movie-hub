import { ReactElement } from 'react'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface DialogHookedProps {
  trigger: ReactElement
  title: string
  content: ReactElement
  actions?: ReactElement
}

export function HookedDialog({
  trigger,
  title,
  content,
  actions,
}: DialogHookedProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {content}
        {actions && <DialogFooter>{actions}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
