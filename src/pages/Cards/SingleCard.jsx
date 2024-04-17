import PropTypes from 'prop-types'; 

const SingleCard = ({cardInfo}) => {
    const {estate_title, image, facilities, description, location, area,status, price} = cardInfo;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        {facilities.map((data, ind) => <div key={ind} className="badge badge-outline">{data}</div>)}
                    </div>
                    <p className='font-bold'>Location: <span>{location}</span></p>
                    <div className='flex justify-between items-center'>
                        <p>Area: <span>{area}</span></p>
                        <p className='px-1 py-1 border rounded-md text-center font-bold uppercase'>{status}</p>
                    </div>
                    <p className='text-2xl font-bold'>{price}</p>
                    <button className='border rounded-md px-2 py-2 font-bold bg-blue-500 text-white'>View Property</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;

SingleCard.propTypes = {
    cardInfo: PropTypes.object,
}