import {GetStaticProps} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import * as style from "../styles/blog.module.scss"
import { getAllBlogs, blogsPerPage } from "../utils/mdQueries"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



import { format } from 'date-fns'

const Blog = ({ blogs, numberPages }) => {
  return (
      <Layout>
          <Seo title='Article' description="これはブログページです" />
          <div className={style.wrapper}>
            <div className={style.container}>
              {/* <h1>Article</h1> */}
              {blogs.map((blog, index) => {
                  const { title, date, excerpt, image } = blog.frontmatter
                  return(

                  <div key={index} className={style.blogCard}>
                         <div className={style.cardImg}>
                      <Image src={image} alt="card-image" height={300} width={800} quality={90} />
                        </div>

                  <div className={style.textContainer}>
                    <p className={style.title}>{excerpt}</p>
                    <p className={style.date}>{date}</p>
                    <Link href={`/blog/${blog.slug}`}>
                      <a>Read More  <ArrowForwardIosIcon style={{ fontSize: '2rem', paddingLeft: 3} }/></a>
                    </Link>

                  </div>






                </div>
                  )}
              )}
              </div>
              <Pagination numberPages={numberPages} />
          </div>
      </Layout>
  )
}

export default Blog



export async function getStaticProps() {
    const { orderedBlogs, numberPages } = await getAllBlogs()

    const limitedBlogs = orderedBlogs.slice(0, blogsPerPage)

    return {
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages,
        },
    }
}


<div class="grid-content flex-container is-align-items-flex-end">
    <div class="grid-title ">
      <div class="label">
        <p><b>LIFESTYLE</b></p>
      </div>
      <p class="headline"><b>TOWN TALK RADIO Vol.5 by メトロノリ</b></p>
              <div class="sub-headline">
          <div>
            <p><b>BGM配信／テーマ: 丸ノ内線</b></p>
          </div>
        </div>
          </div>
  </div>
