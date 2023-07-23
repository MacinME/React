import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroByID } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  
  const getHero = useMemo( () => getHeroByID( id ), [id]);
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  }

  if(!getHero){
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img 
            src={`/assets/heroes/${ id }.jpg`} 
            alt={ getHero.superhero }
            className="img-thumbnail"  
          />
        </div>

        <div className='col-8'>
          <h3>{ getHero.superhero }</h3>
          <ul className='list-group -listgroup-flush'>
            <li className='list-group-item'><b>Alter Ego: </b> { getHero.alter_ego } </li>
            <li className='list-group-item'><b>Publisher: </b> { getHero.publisher } </li>
            <li className='list-group-item'><b>First Appearance: </b> { getHero.first_appearance } </li>
          </ul>

          <h5 className='mt-3'>Characters</h5>
          <p>
            { getHero.characters }
          </p>

          <button
            onClick={ onBack }
            className='btn btn-outline-primary'
          >
            Back
          </button>
        </div>
    </div>
  )
}
