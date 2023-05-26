import { useState } from 'react';
import './projects.scss';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects({ active }) {
  const [selected, setSelected] = useState(0);
  const handleSelect = (selected, e) => {
    setSelected(selected);
  };
  const art = [
    {
      id: 1,
      title: 'Broccoli Records',
      img1: 'assets/images/broccolirecordsbg.png',
      img2: 'assets/images/broccoli.png',
      url: 'http://www.broccolirecords.com',
    },
    {
      id: 2,
      title: 'hangout on DISCORD',
      img1: 'assets/images/zeebrozbg.png',
      img2: 'assets/images/discord.png',
      url: 'https://discord.gg/GJWzn4VqXj',
    },
    {
      id: 3,
      title: 'the MIC DROP',
      img1: 'assets/images/micdropbg.png',
      img2: 'assets/images/micdroptext.png',
      url: 'https://micdrop.broccolirecords.com/',
    },
  ];
  return (
    <div className='projects' id='projects'>
      <Carousel
        fade
        className={active ? 'carousel fade-in' : 'blocked'}
        activeIndex={selected}
        onSelect={handleSelect}
      >
        {art.map((i) => (
          <Carousel.Item key={i.id} className='item'>
            <div className='bgContainer'>
              <img className='item-bg' src={i.img1} alt={i.title} />
            </div>
            <div
              className={
                selected
                  ? 'logoContainer slide-in-blurred-left'
                  : 'logoContainer'
              }
            >
              <img
                className={selected ? 'logo slide-in-blurred-left' : 'logo'}
                src={i.img2}
                alt={i.title}
              />
            </div>

            <Carousel.Caption className='caption'>
              <a href={i.url} target={'_blank'} rel='noreferrer'>
                <h3 className={selected ? 'focus-in-contract-bck' : ''}>
                  {i.title}
                </h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
