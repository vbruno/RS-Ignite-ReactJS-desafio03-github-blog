import { PostInfo } from '@/components/PostInfo'

export default function page({ params }: { params: { number: string } }) {
  return (
    <div className="w-[864px] -mt-20">
      <PostInfo numberPost={+params.number} />
    </div>
  )
}
