import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

import google from '../../public/google.svg'
import { useAppDispatch } from '../../hooks/hooks'
import { getProfile, loginSuccess } from '../../redux/features/authSlice'

export default function GoogleLogin() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  function googleLogin() {
    const url = process.env.NEXT_PUBLIC_BACKEND
    const newWindow = window.open(
      url + '/login/google',
      '_blank',
      'width=400, height=500',
    )

    if (newWindow) {
      // setInterval for every 0.5s until newWindow is closed
      let timer: NodeJS.Timer = setInterval(() => {
        if (newWindow.closed && localStorage.getItem('accessToken')) {
          dispatch(loginSuccess())
          dispatch(getProfile())
          router.push('/account')
          if (timer) clearInterval(timer)
        }
      }, 500)
    }
  }

  return (
    <Button variant="outlined" onClick={googleLogin}>
      <Stack direction="row" gap={2}>
        <Image src={google} alt="Google Button" />
        Continue with Google
      </Stack>
    </Button>
  )
}
