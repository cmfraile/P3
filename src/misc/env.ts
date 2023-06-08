const dopcase:'development'|'production' = 'development';

const dopRoutes = () =>
    (dopcase == 'development')
    ? 'src/assets'
    : 'https://cmfg.dev/'

export default dopRoutes;