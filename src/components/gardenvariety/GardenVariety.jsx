import './gardenvariety.scss';

export default function GardenVariety({ active }) {
  return (
    <div className='gardenvariety' id='gardenvariety'>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.eso-database.com/en/character/broccoli-man/30110145/'
      >
        <img
          alt=''
          src='https://signatur.eso-database.com/30110145/signatur.jpg'
        />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.eso-database.com/en/character/efflore/30032914/'
      >
        <img
          alt=''
          src='https://signatur.eso-database.com/30032914/signatur.jpg'
        />
      </a>
      <a
        target='_blank'
        href='https://www.eso-database.com/en/character/mashpi/30426094/'
      >
        <img
          alt=''
          src='https://signatur.eso-database.com/30426094/signatur.jpg'
        />
      </a>
      <img className='esopng' src='assets/images/eso.png' alt='ESO' />
    </div>
  );
}
