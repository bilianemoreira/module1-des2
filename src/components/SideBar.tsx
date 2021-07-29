import React from "react";
import { useState, useEffect } from "react";
import { Button } from './Button';
import { api } from '../services/api';

import '../styles//sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  selectedGenre: GenreResponseProps
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
  selectedGenreId: number;

}

export function SideBar({ selectedGenre, setSelectedGenreId, selectedGenreId }: SidebarProps) {
  // Complete aqui



  const [genres, setGenres] = useState<GenreResponseProps[]>([]);


  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => setSelectedGenreId(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </div>
  )
}
