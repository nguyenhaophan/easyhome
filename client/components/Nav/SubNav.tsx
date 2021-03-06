import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/system'
import { Button, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InventoryIcon from '@mui/icons-material/Inventory'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import Link from 'next/link'

import { useAppSelector } from '../../hooks/hooks'

export default function SubNav() {
  const router = useRouter()
  const { user } = useAppSelector((state) => state.auth)
  const [path, setPath] = useState<string>('')

  const CustomizedButton = styled(Button)(`
    border: 1px solid;
    padding: 5px 12px;
  `)

  useEffect(() => {
    const path = router.pathname.substring(1)
    setPath(path)
  }, [router])

  return (
    <Stack direction="row" gap={3}>
      <Link href="/account">
        <a>
          <CustomizedButton
            startIcon={<PersonIcon />}
            onClick={() => {
              setPath('account')
            }}
            sx={{ color: path === 'account' ? 'primary' : '#888' }}
          >
            Account
          </CustomizedButton>
        </a>
      </Link>
      <Link href="/favorites">
        <a>
          <CustomizedButton
            startIcon={<FavoriteIcon />}
            onClick={() => {
              setPath('favorites')
            }}
            sx={{ color: path === 'favorites' ? 'primary' : '#888' }}
          >
            Favorites
          </CustomizedButton>
        </a>
      </Link>
      <Link href="/listings">
        <a>
          <CustomizedButton
            startIcon={<InventoryIcon />}
            onClick={() => {
              setPath('listings')
            }}
            sx={{ color: path === 'listings' ? 'primary' : '#888' }}
          >
            My adverts
          </CustomizedButton>
        </a>
      </Link>
      {user?.role !== 'USER' && (
        <Link href="/admin">
          <a>
            <CustomizedButton
              startIcon={<AdminPanelSettingsIcon />}
              onClick={() => {
                setPath('admin')
              }}
              sx={{ color: path === 'admin' ? 'primary' : '#888' }}
            >
              Admin
            </CustomizedButton>
          </a>
        </Link>
      )}
    </Stack>
  )
}
