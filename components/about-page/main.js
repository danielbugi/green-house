import classes from './main.module.css';
import YouTube from 'react-youtube';

const Main = () => {
  const opts = {
    height: '100%',
    width: '100%',

    playerVars: {
      // 'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      autoplay: 0,
      playlist: null,
      start: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <h1>About</h1>

        <div className={classes.content}>
          <h4>We provide fresh and healthy plants for your space</h4>
          <p>
            Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit
            mauris semper platea urna, sapien fermentum venenatis etiam enim
            ullamcorper phasellus tortor justo sapien faucibus in adipiscing
            risus adipiscing bibendum nec eget tincidunt sed.
          </p>
        </div>

        <YouTube
          videoId="Jh5oX0VRnzk"
          opts={opts}
          onReady={onReady}
          iframeClassName={classes.iframe}
        />
      </div>
    </section>
  );
};
export default Main;
