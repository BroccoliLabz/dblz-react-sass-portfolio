import './latest.scss';

function Latest() {
  return (
    <div id='latest' className='latest'>
      <div className='latestvid'>
        <iframe
          src='https://www.youtube.com/embed/pBhTvpWQoSk'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <div className='latestep'>
        <iframe
          title='SoundCloud Player'
          scrolling='no'
          frameborder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1428194131&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true'
        ></iframe>
      </div>
    </div>
  );
}

export default Latest;
