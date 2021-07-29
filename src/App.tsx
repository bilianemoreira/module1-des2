import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';
import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenre={selectedGenre} setSelectedGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId} />
      <Content setSelectedGenre={setSelectedGenre} selectedGenreId={selectedGenreId} />
    </div>
  )
}
