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


export default function Login() {
  const { handleSubmit, loginError, loginIsLoading, loginIsFetching } = usePageHooks()

  return (
    <main className={styles['root']}>
      <Cctv />
      <Snackbar
        open={Boolean(loginError)}
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
          }}
        >
          <Avatar sx={{ bgcolor: '#0f0', m: 1 }}>
            <Diamond sx={{ fill: '#fff' }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form"
            method='POST'
            onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Username"
              autoComplete="username"
              variant="standard"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              name="remember"
              label="Remember me"
            />
            <Button
              type="submit"
              disabled={loginIsFetching}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {"Don't have an account? "}
                <Link href="/register">
                  {"Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </main>
  )
}
