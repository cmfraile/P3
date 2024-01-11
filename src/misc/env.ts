//true : development - false : production
const isDevelopment:boolean = true;

const dopRoutes = () =>
    (isDevelopment) ? 'src/assets' : 'https://cmfg.dev/assets'

export default dopRoutes;