import LinkedInIcon from "../assets/svgs/linkedin.svg";
import GitHubIcon from "../assets/svgs/githubIcon.svg";
import DeployIcon from "../assets/svgs/deploy.svg";
import InstagramIcon from "../assets/svgs/instagram.svg";

export interface linkProps {color:string,stylestring:string,onClickCallback:() => void}

type svg = 'github'|'deploy'|'instagram'|'linkedIn'
const LinkIcon = ({svgCase,url}:{svgCase:svg,url:string}) => {

    const onClick = () => window.open(url,'_blank');
    const mainColor:string = '#2C3E50'

    const Render = () => {
        switch(svgCase){
            case 'github'   : return <GitHubIcon color={mainColor} stylestring='linkIcon' onClickCallback={onClick}/> ;
            case 'deploy'   : return <DeployIcon color={mainColor} stylestring='linkIcon' onClickCallback={onClick}/> ;
            case 'linkedIn' : return <LinkedInIcon mainColor={mainColor} stylestring="linkIcon" onClickCallback={onClick} /> ;
            case 'instagram': return <InstagramIcon mainColor={mainColor} stylestring="linkIcon" onClickCallback={onClick} /> ;
            default : throw new Error(`${svgCase} aun sin implantar`) ;
        }
    }

    return Render()

}

export default LinkIcon