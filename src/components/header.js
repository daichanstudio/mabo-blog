import Link from 'next/link'

import * as style from "../styles/common.module.scss"
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles} from '@material-ui/styles';
// import Dropdown from './dropdown'
import Ham from './hambuger';









import { withTheme } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    fontSize: '40px'
  }
});

const Header = () => {

  const classes = useStyles();
  return (
     <div className={style.headerWrapper}>
       <div className={style.container}>
          <div className={style.flexContainer}>
            <Link id="back-to-top-anchor" href="/">
             <h2>ma-bo Blog</h2>
            </Link>
            <ul>
              <li><Link href="/blog"><a>Article</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>

            </ul>

            {/* <MenuIcon className={classes.button}/> */}
{/* <Dropdown/> */}
           <Ham/>
          </div>


        </div>

    </div>
  )
}

export default Header
