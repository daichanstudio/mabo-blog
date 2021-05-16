
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/index.module.scss"

import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from '../components/tileData';


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
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      fontFamily: "Hannotate SC",
      fontWeight: 'bold'
    },
  }),
);

const TitlebarGridList = () => {
  const classes = useStyles();
  return (

    <Layout>
        <Seo title="Gallery" description="ギャラリーページです" />

        <div className={style.wrapper}>
            <div className={style.container}>
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={5} className={classes.gridList}>
      {/* <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">2018</ListSubheader>
        </GridListTile> */}
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title}   className={classes.img}/>
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>

    </div>
    </div>
    </Layout>
  );
}

export default TitlebarGridList;
