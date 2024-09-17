import './Card.css'

function Card({title, cover }) {
    return (
        <div className='card'/*style={{ display: 'flex', flexDirection: 'row', padding: 15 }}*/>
            <img src={cover}  height={80} width={80} />
            <span className='imgTitle'>{title}</span>
        </div>
    )
}
 
export default Card