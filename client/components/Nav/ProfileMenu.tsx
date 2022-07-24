import { useState } from 'react'
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'
import { useRouter } from 'next/router'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import LockIcon from '@mui/icons-material/Lock'

import { User } from '../../types/schemas'
import { useAppDispatch } from '../../hooks/hooks'
import { logout } from '../../redux/features/authSlice'
import SnackBarError from '../SnackBar/SnackBarError'
import { setSnackBarError } from '../../redux/features/popUpSlice'

type MenuProps = {
  user: User
}

export default function ProfileMenu({ user }: MenuProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  function handleLogout() {
    dispatch(logout())
    localStorage.clear()
    router.push('/')
  }

  function handleAdminClick() {
    if (user.role === 'USER') {
      dispatch(setSnackBarError(true))
    } else router.push('/dashboard/admin')
    handleClose()
  }

  return (
    <>
      <Button onClick={handleClick}>
        {user?.firstName + ' ' + user?.lastName}
        <ArrowDropDownIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleAdminClick}>Admin</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <LockIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={handleLogout}>Log out</ListItemText>
        </MenuItem>
      </Menu>
      <SnackBarError text="Unauthorized! (Only ADMIN/MODERATOR)" />
    </>
  )
}
