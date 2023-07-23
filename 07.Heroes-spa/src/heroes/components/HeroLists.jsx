import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';

export const HeroLists = ({ publisher }) => {

    const getHeroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

  return (

    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            getHeroes.map(hero => ( 
                <HeroCard  
                    key={ hero.id }
                    {...hero}
                />    
            ))
        }
    </div>

  )
}
