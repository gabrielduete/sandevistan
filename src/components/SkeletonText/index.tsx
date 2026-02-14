import { Skeleton } from '@mui/material'

const SkeletonText = () => {
  const skeletons = [200, 150, 100]

  return (
    <div data-testid='skeleton__loading'>
      {skeletons.map((height, index) => (
        <Skeleton key={index} height={height} animation='wave' />
      ))}
    </div>
  )
}

export default SkeletonText
