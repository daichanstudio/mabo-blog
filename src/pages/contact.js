
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/index.module.scss"

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

// const Contact = () => {
//     return (
//         <Layout>
//             <Seo title="ギャラリー" description="これはギャラリーページです" />
//             <div className={style.wrapper}>
//                 <div className={style.container}>
//                     <h1>Contact</h1>
//                     <p>お気軽にご連絡ください</p>
//                     <form action="https://formspree.io/f/mffwuiddq" method="POST">
//                         <label htmlFor="name">お名前</label>
//                         <input type="text" name="name" id="name" required/>
//                         <label htmlFor="email">メールアドレス</label>
//                         <input type="email" name="email" id="email" required/>
//                         <label htmlFor="textarea">ご用件</label>
//                         <textarea name="message" rows="10" id="textarea" required></textarea>
//                         <button type="submit">送信</button>
//                     </form>
//                 </div>
//             </div>
//         </Layout>
//     )
// }



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
      <Layout>
    <div className={classes.root}>
      <GridList cellHeight='auto' className={classes.gridList} cols={2}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>

          {/* <ListSubheader component="div">2018</ListSubheader> */}
        </GridListTile>
        <GridListTile key="cat" cols="2">
        <Image src="/images/grid1.jpg" alt="hero" height={580}  width={800} quality={90} />
          {/* <GridListTileBar
            title="Cat"
          /> */}
        </GridListTile>
        <GridListTile key="deer" cols="1">
        <Image src="/images/grid2.jpg" alt="hero" height={410} width={350} quality={90} />
        </GridListTile>
        <GridListTile key="kingfisher" cols="1">
        <Image src="/images/grid3.jpg" alt="hero" height={580}  width={800} quality={90} />
        </GridListTile>
        <GridListTile key="koala" cols="1">
        <Image src="/images/grid4.jpg" alt="hero" height='auto' width={350} quality={90} />
          {/* <GridListTileBar
            title="Koala"
            subtitle="So Cute !"
          /> */}
        </GridListTile>
        <GridListTile key="pelikan" cols="1">
        <Image src="/images/grid5.jpg" alt="hero" height={580}  width={800}quality={90} />
        </GridListTile>
        <GridListTile key="Subheader" cols={3}>
          {/* <ListSubheader component="div">2019</ListSubheader> */}
        </GridListTile>
        <GridListTile key="rabbit" cols="1">
        <Image src="/images/grid9.jpg" alt="hero" height={580}  width={800}quality={90} />
        </GridListTile>
        <GridListTile key="tiger" cols="2">
        <Image src="/images/grid8.jpg" alt="hero" height={580}  width={800}  quality={90} />
          {/* <GridListTileBar
            title="Tiger"
            subtitle="So Cool !"
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          /> */}
        </GridListTile>
      </GridList>
    </div>
    </Layout>
  );
}






export default App








// const Contact = () => {
//     return (
//         <Layout>
//             <Seo title="ギャラリー" description="これはギャラリーページです" />
//             <div className={style.wrapper}>
//                 <div className={style.container}>
//                     <h1>Contact</h1>
//                     <p>お気軽にご連絡ください</p>
//                     <form action="https://formspree.io/f/mffwuiddq" method="POST">
//                         <label htmlFor="name">お名前</label>
//                         <input type="text" name="name" id="name" required/>
//                         <label htmlFor="email">メールアドレス</label>
//                         <input type="email" name="email" id="email" required/>
//                         <label htmlFor="textarea">ご用件</label>
//                         <textarea name="message" rows="10" id="textarea" required></textarea>
//                         <button type="submit">送信</button>
//                     </form>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Contact
