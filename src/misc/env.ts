//true : development - false : production
const isProduction:boolean = false;

const dopRoutes = () =>
    (isProduction) ? 'src/assets' : 'https://cmfg.dev/'

export default dopRoutes;