import Link from 'next/link'
import Image from 'next/image'
import * as style from "../styles/common.module.scss"

const Header = () => {
  return (
     <header className={style.headerWrapper}>
       <div className={style.container}>
          <div className={style.flexContainer}>
            <Link href="/">
            {/* <a> 
                <Image src="/images/logo.png" alt="logo" width={50} height={50} />
              </a> */}
             <h2>ma-bo Blog</h2>
            </Link>
            <ul>
              <li><Link href="/blog"><a>Article</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header