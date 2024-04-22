import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';

const LoginForm = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', height: '400px', width: '80%' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <Link href="#" style={{ display: 'block', textAlign: 'left', marginBottom: '10px' }}>Esqueci minha senha</Link>
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default LoginForm;
