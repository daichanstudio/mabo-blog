import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/index.module.scss"



const Index = () => {
  return (
      <Layout>
          <Seo title="Watanabe Masamitsu" description="Watanabe Masamitsuのポートフォリオサイトです" />
          <div className={style.hero}>
              <Image src="/images/index-hero.jpg" alt="hero" layout="fill" objectFit="cover" quality={90} />
              {/* <div className={style.textContainer}>
                 <h1>ma-bo blog</h1>
                  <h3>これはデモだよ！</h3>
         </div> */}
          </div>
          <div className={style.container}>
              <div className={style.profile}>
                  <div>
                      <h2>マボログとは</h2>
                      <p>旅やファッションを中心としたライフスタイルを面白おかしく伝える雑記帳</p>
                  </div>
              </div>





          <div className={style.title}>
      <div className={style.label}>
        <p><b>LIFESTYLE</b></p>
      </div>
      <Image src="/images/pic4.jpg" alt="hero" height={350} width={380} quality={90} />
      <p className={style.headline}><b>My hometown is Tokyo</b></p>
              <div className={style.subHeadline}>
          <div>
            <p><b>シティーボーイの日常</b></p>
          </div>
        </div>
          </div>

<br/>

<div className={style.title}>
      <div className={style.label}>
        <p><b>TRIP</b></p>
      </div>
      <Image src="/images/grid8.jpg" alt="hero" height={350} width={380} quality={90} />
      <p className={style.headline}><b>My hobby is travelling</b></p>
              <div className={style.subHeadline}>
          <div>
            <p><b>会いたくてたまらないから、旅に出た！</b></p>
          </div>
        </div>
          </div>
          <br/>
          <div className={style.title}>
      <div className={style.label}>
        <p><b>FASSION</b></p>
      </div>
      <Image src="/images/pic14.jpg" alt="hero" height={350} width={380} quality={90} />
      <p className={style.headline}><b>My Favorite Things</b></p>
              <div className={style.subHeadline}>
          <div>
            <p><b>欲しいものが、いっぱいだ！</b></p>
          </div>
        </div>
          </div>
          <br/>





          </div>





      </Layout>



  )





}

export default Index
