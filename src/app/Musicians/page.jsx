'use client'

import MusicianStyle from './Musicians.module.css';
import Navigation from '../components/HomePage/header';
import MusicianCard from './component/musicianCard';
import MusicianHeader from './component/musicianHeader';
import { useRouter } from 'next/navigation';

export default function Musicians() {
  const router = useRouter();
  return (
    <div className={MusicianStyle.mainComponent}>
      <Navigation/>
      <MusicianHeader/>
      <h2 className={MusicianStyle.heading}>
          Discover Talented Musicians
      </h2>
      <h3 className={MusicianStyle.subheading}>
          Explore a curated collection of skilled artists and their details. Uncover their unique styles and performances
      </h3>
      <div className={MusicianStyle.cardList}>
        <MusicianCard imageName={'/images/Instruments/united_states.jpeg'} title={'UNITED STATES'} description={'This is the description'} link={`/Musicians/united_states`} onClick={() => {
              router.push(`/Musicians/united_states`);
            }}/>
        <MusicianCard imageName={'/images/Instruments/united_kindom.jpeg'} title={'UNITED KINGDOM'} description={'This is the description'} link={`/Musicians/united_kingdom`} onClick={() => {
              router.push(`/Musicians/united_kingdom`);
            }}/>
        <MusicianCard imageName={'/images/Instruments/india.jpg'} title={'INDIA'} description={'This is the description'} link={`/Musicians/india`} onClick={() => {
              router.push(`/Musicians/india`);
            }}/>
        <MusicianCard imageName={'/images/Instruments/latin_america.jpg'} title={'LATIN AMERICA'} description={'This is the description'} link={`/Musicians/latin_america`} onClick={() => {
              router.push(`/Musicians/latin_america`);
            }}/>
        <MusicianCard imageName={'/images/Instruments/africa.jpg'} title={'AFRICA'} description={'This is the description'} link={`/Musicians/africa`} onClick={() => {
              router.push(`/Musicians/africa`);
            }}/>
      </div>
    </div>
  )
}
