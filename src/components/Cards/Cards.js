import "./Cards.css"

const Cards = ({ characters = [] }) => {

  return (
    <div className='row'>
      { characters.map((item, i) => (
        <div key={i} className="col">
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card__body">
              <h5 className="card__body-title">{item.name}</h5>
              <hr />
              <p>species: {item.species}</p>
              <p>gender: {item.gender}</p>
              <p>location: {item.location.name}</p>
              <p>number of epizodes: {item.episode.length}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards