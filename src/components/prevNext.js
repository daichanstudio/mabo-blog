import Link from 'next/link'
import * as style from "../styles/singleBlog.module.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const PrevNext =(props) => {
    return (
        <div className={style.pnWrapper}>
            {0 < props.prev.length && 
                <Link href={`/blog/${props.prev[0].slug}`}>
                    <a className={style.linkCard}>
                        {/* <img src="/images/arrow-left.svg" alt="arrow-left"/> */}
                        <ArrowBackIosIcon  style={{ fontSize: 30 }} />
                        <h3> {props.prev[0].frontmatter.title}</h3>
                    </a>
                </Link>
            }
            {0 < props.next.length && 
                <Link href={`/blog/${props.next[0].slug}`}>
                    <a className={style.linkCard}>
                        <h3>{props.next[0].frontmatter.title}</h3>
                        {/* <img src="/images/arrow-right.svg" alt="arrow-right" className="arrow-right"/> */}
                        <ArrowForwardIosIcon  style={{ fontSize: 30 }} />
                    </a>
                </Link>
            }
        </div>
    )
}

export default PrevNext 