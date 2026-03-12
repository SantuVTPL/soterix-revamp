import { CircularProgress } from '@mui/joy'

function MFALoading() {
  return (
    <div className='flex justify-center'>
        <CircularProgress size='md' variant='plain' />
    </div>
  )
}

export default MFALoading