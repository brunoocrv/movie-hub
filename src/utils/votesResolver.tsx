import { Annoyed, ThumbsDown, ThumbsUp } from 'lucide-react'

export function votesResolver(vote: number) {
  if (vote > 7) {
    return (
      <span className="flex gap-2 items-center text-green-500">
        <ThumbsUp size={16} /> {vote.toFixed(2)}
      </span>
    )
  }

  if (vote > 4) {
    return (
      <span className="flex gap-2 items-center text-yellow-500">
        <Annoyed size={16} /> {vote.toFixed(2)}
      </span>
    )
  }

  return (
    <span className="flex gap-2 items-center text-red-500">
      <ThumbsDown size={16} /> {vote.toFixed(2)}
    </span>
  )
}
