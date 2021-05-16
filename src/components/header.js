import Link from 'next/link'

import * as style from "../styles/common.module.scss"



const Header = () => {


  return (
     <div className={style.headerWrapper}>
       <div className={style.container}>
          <div className={style.flexContainer}>
            <Link href="/">
             <h2 className={style.title}>マボログ</h2>
            </Link>
            <ul>
              <li><Link href="/blog"><a>Article</a></Link></li>
              <li><Link href="/gallery"><a>Gallery</a></Link></li>

            </ul>

          </div>


        </div>

    </div>
  )
}

export default Header


