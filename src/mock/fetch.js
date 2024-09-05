import fetchMock from 'fetch-mock';

fetchMock.post('https://api.example.com/auth', (url, options) => {
  const { email, password } = JSON.parse(options.body);

  if (email === 'user@mail.ru' && password === '25063518') {
    return {
      status: 200,
      body: JSON.stringify({ auth: true })
    };
  } else {
    return {
      status: 401,
      body: JSON.stringify({ error: 'Invalid credentials' })
    };
  }
});
