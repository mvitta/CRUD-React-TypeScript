import ContentLoader from 'react-content-loader'

const LoadingUsers = () => (
  <div>
    <ContentLoader viewBox='0 0 1360 400'>
      <rect x='20' y='20' rx='8' ry='8' width='420' height='200' />
      <rect x='20' y='250' rx='0' ry='0' width='420' height='18' />
      <rect x='20' y='275' rx='0' ry='0' width='240' height='20' />

      <rect x='460' y='20' rx='8' ry='8' width='420' height='200' />
      <rect x='460' y='250' rx='0' ry='0' width='420' height='18' />
      <rect x='460' y='275' rx='0' ry='0' width='240' height='20' />

      <rect x='900' y='20' rx='8' ry='8' width='420' height='200' />
      <rect x='900' y='250' rx='0' ry='0' width='420' height='18' />
      <rect x='900' y='275' rx='0' ry='0' width='240' height='20' />
    </ContentLoader>
  </div>
)

LoadingUsers.metadata = {
  name: 'Afrizal Fikri',
  github: 'mvitta1',
  description: 'Loading users',
  filename: 'LoadingUsers',
}

export default LoadingUsers
