//true : development - false : production
const isDevelopment:boolean = false;

const dopRoutes = () =>
    (isDevelopment) ? 'src/assets' : 'https://cmfg.dev/assets'

export default dopRoutes;