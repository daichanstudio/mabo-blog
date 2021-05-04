import Link from 'next/link'
import * as style from "../styles/common.module.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.insideContainer}>
                {/* <a href="https://www.google.com/"><img src="/images/github.svg" alt="logo"/></a>
                <a href="https://www.google.com/"><img src="/images/linkedin.svg" alt="logo"/></a>
                <a href="https://www.google.com/"><img src="/images/twitter.svg" alt="logo"/></a>
                <a href="https://www.google.com/"><img src="/images/facebook.svg" alt="logo"/></a> */}
                <FacebookIcon style={{ fontSize: 40, color: '#fcfff9'}}/>
                <InstagramIcon style={{ fontSize: 40, color: '#fcfff9'}}/>
                <TwitterIcon style={{ fontSize: 40, color: '#fcfff9'}}/>

                {/* style={{ color: green[500] }}  */}

                <hr/>
                <Link href="/blog"><a>Article</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <p>©{new Date().getFullYear()} ma-bo</p>
            </div>
        </footer>
    )
}

export default Footer
