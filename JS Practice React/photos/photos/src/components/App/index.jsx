import { photos } from '../../constants/photos';

const App = () => {
  const listOfPhotos = photos;

  return (
    <section>
      {listOfPhotos.map((photo) => (
        <article key = {photo.id}>
        <h1>{photo.title}</h1>
        <img src={photo.url} alt={photo.title} width="200" height="200"/>
        </article>
      ))}
    </section>
  )
}

export default App;
