import { LabelInfoProps } from '@/__types__/components/label-info'

export function LabelInfo({ label, content }: LabelInfoProps) {
  return (
    <div className="flex flex-col w-full space-y-2">
      <span className="text-sm text-gray-500">{label}</span>
      {content}
    </div>
  )
}
