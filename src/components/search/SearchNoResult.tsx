import React from 'react'
import { Card } from '../ui'

export const SearchNoResult = () => {
  return (
    <Card className="absolute left-1/2 top-[63px] w-[335px] h-[500px] -translate-x-1/2 p-3  lg: w-[577px] lg: h-auto">
        No Result Found, Sorry!
    </Card>
  )
}
