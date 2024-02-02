import { Button, ButtonGroup } from 'flowbite-react'
import React from 'react'
// Note, although this is a client side component
// the use client directive is not necessary since the parent already has it

type Props = {
    pageSize: number
    setPageSize: (size: number) => void
}

const pageSizeButtons = [4,8,12]

function Filters({pageSize, setPageSize} : Props ) {
  return (
    <div className="flex justify-between items-center mb-4">
        <div>
            <span className='uppercase text-sm text-gray-500 mr-2'>Page size</span>
            <ButtonGroup>
                {pageSizeButtons.map((value, idx) => {
                    return (
                        <Button key={idx} 
                            onClick={() => setPageSize(value)}
                            color={`${pageSize === value ? 'red' : 'gray'}`}
                            className='focus:ring-0'
                        >
                            {value}
                        </Button>
                    )
                })}
            </ButtonGroup>
        </div>

    </div>
  )
}

export default Filters