import { getDetailedViewData } from '@/app/actions/auctionActions'
import Heading from '@/app/components/Heading'
import React from 'react'
import CountdownTimer from '../../CountdownTimer'

const Details = async ({ params }: { params: { id: string } }) => {
  const data = await getDetailedViewData(params.id)

  return (
    <div className='flex justify-between'>
      <Heading title={`${data.make} ${data.model}`} />
      <div className='flex gap-3'>
        <h3 className='text-2xl font-semibold'>Time Remaining:</h3>
        <CountdownTimer auctionEnd={data.auctionEnd} />
      </div>
    </div>
  )
}

export default Details