"use client"

import MusicianStyle from '../Musicians.module.css';
import MusicianCard from '../component/musicianCard';
import dataSetMusician from '../data/musicianData';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import MusicianHeader from '../component/musicianHeader';
import Navigation from '@/app/components/HomePage/header';

export default function MusicianPage() {
  const router = useRouter();
  const { name } = useParams();

  const country = dataSetMusician[name]; 

  if (!country) {
    return <div>Musician not found</div>;
  }
  return (
    <div className={MusicianStyle.mainComponent}>
      <Navigation/>
      <MusicianHeader/>
      <h2 className={MusicianStyle.heading}>
          {country.title}
      </h2>
      <h3 className={MusicianStyle.subheading}>
          Explore a curated collection of skilled artists and their instruments. Uncover their unique styles and performances
      </h3>
      <div className={MusicianStyle.cardList}>
      {country.musicianData.map((musician) => (
          <MusicianCard 
            key={musician.id} // Ensure to use a unique key
            imageName={`/images/Instruments/${country.imagesFolderName}/${musician.name.replace(/\s+/g, '')}.jpeg`} 
            title={musician.name} 
            description={musician.musicalGenre} 
            link={`/Musicians/${country.title.toLowerCase().replace(/\s+/g, '_')}`} 
            onClick={() => {
              router.push(`/Musicians/${country.title.toLowerCase().replace(/\s+/g, '_')}/${musician.name.toLowerCase().replace(/\s+/g, '_')}`);
            }}/>
      ))}        
      </div>
    </div>
  );
}
