import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { AxiosError } from "axios";
import { Alert } from "@mui/material";
import { Logo } from "../../../components/logo";
import { LoginRequest } from "../models/login.request";
import { URLS } from "../../../helpers/constants";
import { useAuth } from "../components/auth-context";
import { useRouting } from "../../../routing";
import { getDadJoke, JokeModel } from "../components/dad-jokes";

function Copyright(props: any) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://gdscupt.tech/">
        GDSC UPT Developers
      </Link>
      {" "}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export function LoginPage() {
  const [error, setError] = useState<string | undefined>(undefined);
  const { routeTo } = useRouting();
  const auth = useAuth();
  const location = useLocation();
  const [dadJoke, setDadJoke] = useState<JokeModel | undefined>(undefined);

  useEffect(() => {
    getDadJoke().then(res => {
      setDadJoke(res);
    });
  }, []);

  const handleError = (apiError: AxiosError) => {
    if (apiError.response?.status === 401) {
      return setError("Invalid username or password");
    }

    return setError("Something went wrong :(");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    return tryLogin({
      username: data.get("email") as string,
      password: data.get("password") as string,
    });
  };

  const tryLogin = async (loginRequest: LoginRequest) => {
    const from = location.state?.from?.pathname || URLS.dashboard;
    auth.signIn(loginRequest, () => routeTo(from), handleError);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item sm={4} md={7} sx={{}}>
        <Typography align="center" marginTop={20} variant="h3">
          {dadJoke?.setup}
        </Typography>
        <Typography align="center" marginTop={20} variant="h3">
          {dadJoke?.punchline}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {error ? (
              <Alert sx={{ height: "100%" }} className="mb-2" severity="error">
                {error}
              </Alert>
            ) : null}

            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address or Username"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="/register" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="/register" variant="body2">
                  No account? Sign Up
                </Link>
              </Grid>
            </Grid>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
