import { IconButton, Tooltip } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addFav, removeFav } from '../../redux/features/authSlice'

type Props = {
  roomId: string
}

export default function AddFavBtn({ roomId }: Props) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { user } = useAppSelector((state) => state.auth)

  const added = user?.favLists.some((elem) => elem._id === roomId)

  function handleOnClick(roomId: string) {
    if (user) {
      if (added) dispatch(removeFav(roomId))
      else dispatch(addFav(roomId))
    } else router.push('/login')
  }

  return (
    <Tooltip title="Add" arrow>
      <IconButton onClick={() => handleOnClick(roomId)} color="primary">
        {added ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  )
}
