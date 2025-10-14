import './Card.css';

export default function Card({poke}) {
    return(
        <>
            <div className="card">
                <div className='background-blue'>
                    <div className="top">
                        <div className='name'>
                            <h1>{poke.name}</h1>
                        </div>
                        <div className='stats'>
                            <h4 id="atk">ATK:{poke.attack}</h4>
                            <h4 id="def">DEF:{poke.defense}</h4>
                        </div>
                        <div className='hp'>
                            <h2>HP:{poke.hp}</h2>
                        </div>
                    </div>
                    <img src={poke.image} width={400} height={400}></img>
                    <div className="abilities">
                        {poke.abilities.map((ability, index) => (
                            <h3 key={index}>{ability.name}: {ability.description}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}