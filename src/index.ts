import app from './server'
const port = process.env.PORT || 9000
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
