import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place'
import EuroIcon from '@mui/icons-material/Euro'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LoopIcon from '@mui/icons-material/Loop'
import { CardActionArea, IconButton, Stack } from '@mui/material'
import Link from 'next/link'

import { Room } from '../../types/schemas'
import AddFavBtn from '../Button/AddFavBtn'

type RoomProps = {
  room: Room
}

export default function RoomCard({ room }: RoomProps) {
  return (
    <Card>
      <CardActionArea>
        {room.images && (
          <CardMedia
            component="img"
            height={200}
            src={`http://${room.images[0]}`}
            alt={`Room ${room._id}`}
          ></CardMedia>
        )}
      </CardActionArea>
      <CardContent>
        <Stack gap={2}>
          <Stack
            direction="row"
            alignItems="flex-end"
            gap={2}
            justifyContent="center"
          >
            <Link href="">
              <a>
                <Typography
                  sx={{ cursor: 'pointer' }}
                  variant="h5"
                  fontWeight={700}
                  color="primary"
                >
                  {room.housingType}
                </Typography>
              </a>
            </Link>
            <Stack direction="row">
              <Typography fontSize={19}>{room.surface} m</Typography>
              <sup>2</sup>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="center" gap={2}>
            <Stack direction="row" gap={1}>
              <PlaceIcon color="primary" />
              <Typography>{room.address.municipality}</Typography>
            </Stack>
            <Stack direction="row" gap={0.5} alignItems="center">
              <Typography fontWeight={800} color="secondary">
                {room.rent}
              </Typography>
              <EuroIcon fontSize="small" color="secondary" />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              bgcolor="#e1dfdf"
              borderRadius="5px"
              p="7px"
              width="fit-content"
            >
              <CalendarMonthIcon fontSize="small" />
              <Typography>20 Aug</Typography>
            </Stack>
            <Stack direction="row">
              <IconButton onClick={() => alert('clicked')} color="primary">
                <LoopIcon />
              </IconButton>
              <AddFavBtn roomId={room._id} />
            </Stack>
          </Stack>
          {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
        </Stack>
      </CardContent>
    </Card>
  )
}
