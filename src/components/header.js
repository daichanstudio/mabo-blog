import Link from 'next/link'

import * as style from "../styles/common.module.scss"



const Header = () => {


  return (
     <div className={style.headerWrapper}>
       <div className={style.container}>
          <div className={style.flexContainer}>
            <Link id="back-to-top-anchor" href="/">
             <h2>マボログ</h2>
            </Link>
            <ul>
              <li><Link href="/blog"><a>Article</a></Link></li>
              <li><Link href="/contact"><a>Gallery</a></Link></li>

            </ul>

          </div>


        </div>

    </div>
  )
}

export default Header


