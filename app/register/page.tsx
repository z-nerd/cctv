"use client"
import { Cctv } from '@/components/cctv'
import styles from './page.module.scss'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import { Diamond } from '@mui/icons-material'
import { usePageHooks } from './hooks'
import Link from 'next/link'
import { DateField, DatePicker } from '@mui/x-date-pickers'


export default function Register() {
  const { handleSubmit, registerError, registerIsFetching } = usePageHooks()

  return (
    <main className={styles['root']}>
      <Cctv />
      <Snackbar
        open={Boolean(registerError)}
        anchorOrigin={{
          horizontal: "center",
          vertical: 'top'
        }}
        autoHideDuration={3000}
      >
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          {"username or password incorrect!"}
        </Alert>
      </Snackbar>
      <Container className={styles['container']} maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: '#0f0', m: 1 }}>
            <Diamond sx={{ fill: '#fff' }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form"
            method='POST'
            onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullname"
              name="fullname"
              label="Fullname"
              variant="standard"
              autoFocus
            />
            <DateField
              margin="normal"
              required
              fullWidth
              id="birthday"
              name="birthday"
              variant="standard"
              label="Birthday"
              format="MM-DD-YYYY"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Username"
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
            />
            <Button
              type="submit"
              disabled={registerIsFetching}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
            <Typography component="p" variant="body2">
              {"Already have an account? "}
              <Link href="/login">
                {"Login"}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  )
}
