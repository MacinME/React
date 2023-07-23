import { HeroLists } from '../components';

export const MarvelPage = () => {

  return (
    <>
      <h1>Marvel Page</h1>

      {
        <HeroLists publisher="Marvel Comics" />
      }
    </>
  )
}
