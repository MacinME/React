import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const getHero = getHeroesByName( q );

  const {searchHero, onInputChange, onResetForm} = useForm({
    searchHero: q
  });

  const showSearch = (q.length <= 0);
  const showError  = (q.length > 0) && (getHero.length === 0);

  const onSubmit = (event) => {
    event.preventDefault();
    // if( searchHero.trim().length <= 1) return;
    navigate(`?q=${ searchHero }`);
  }

  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Search Hero</h4>
            <hr />
            <form onSubmit={ onSubmit }>
              <input 
                type="text" 
                name="searchHero" 
                className="form-control" 
                placeholder="Search a hero"
                autoComplete="off"
                value={ searchHero }
                onChange={ onInputChange }
              />

              <button
                className="btn btn-outline-primary mt-1"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />
            <div 
              className="alert alert-primary"
              style={{ display: `${ showSearch ? '' : 'none' }` }}
            >
              search a hero
            </div>
            <div 
              className="alert alert-danger"
              style={{ display: `${ showError ? '' : 'none' }` }}
            >
              There's not hero <b>{ q }</b>
            </div>
            {
              getHero.map(hero => (
                <HeroCard key={ hero.id } {...hero} />
              ))
            }
          </div>
        </div>
    </>
  )
}
