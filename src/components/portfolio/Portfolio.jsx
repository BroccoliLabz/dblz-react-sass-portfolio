import { useState } from 'react';
import './portfolio.scss';
import List from './List';
import Items from './Items';
import Typewriter from 'typewriter-effect';

export default function Portfolio({ active }) {
  const [selected, setSelected] = useState(9);
  const art = [
    {
      id: 0,
      title: 'Mars is Home',
      img: 'assets/images/marsishome.png',
      url: 'https://soundcloud.com/therealdblz/sets/mars-is-home',
    },
    {
      id: 1,
      title: 'Lunacy',
      img: 'assets/images/lunacy.png',
      url: 'https://soundcloud.com/therealdblz/sets/lunacy?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 2,
      title: 'PHSYCHOSIS EP',
      img: 'assets/images/Psychosisexplicit.png',
      url: 'https://soundcloud.com/therealdblz/sets/psychosis-ep',
    },
    {
      id: 3,
      title: 'MANIA EP',
      img: 'assets/images/MANIA.jpg',
      url: 'https://li.sten.to/mania-ep',
    },
    {
      id: 4,
      title: 'HYSTERIA EP',
      img: 'assets/images/HYSTERIAEP.png',
      url: 'http://li.sten.to/hysteria-ep',
    },
    {
      id: 5,
      title: 'Garden Patch EP',
      img: 'assets/images/gardenpatchepcover.png',
      url: 'http://gardenpatch.broccolirecords.com',
    },
    {
      id: 6,
      title: 'DEMENTIA EP',
      img: 'assets/images/DEMENTIA.png',
      url: 'https://soundcloud.com/therealdblz/sets/dementia?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 7,
      title: '16 ALMAFRAQ',
      img: 'assets/images/16almafraq.png',
      url: 'https://soundcloud.com/therealdblz/sets/16-almafraq?si=fb146d1ce7ce47b0bfcc041616e04c7e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: 8,
      title: 'AMNESIA',
      img: 'assets/images/amnesia.jpg',
      url: 'https://patreon.com/dblz',
    },
    {
      id: 9,
      title: 'AMNESIA EP',
      img: 'assets/images/amnesiadark.png',
      url: 'https://soundcloud.com/therealdblz/sets/amnesia-release',
    },
  ];
  return (
    <div className='portfolio' id='portfolio'>
      <h1 className={active ? 'fade-in' : 'blocked'}>
        <Typewriter
          options={{
            strings: ['Discography', 'EPs', 'Albums', 'Collections'],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
            pauseFor: 1500,
            delay: 'natural',
          }}
        />
      </h1>
      <ul className={active ? ' list fade-in' : 'blocked list'}>
        {art.map((item) => (
          <List
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className={active ? ' container fade-in' : 'blocked container'}>
        {art.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            src={item.img}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
