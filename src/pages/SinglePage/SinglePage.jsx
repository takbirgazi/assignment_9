import { useLoaderData, useParams } from "react-router-dom";


const SinglePage = () => {
    const singlePage = useLoaderData();
    const {id} = useParams();
    const idIn = parseInt(id);
    const data = singlePage.find(info=> info.id === idIn);
    console.log(data);
    return (
        <div className="p-5 border-b">
            <div className="card bg-base-100 flex gap-5 mx-10">
                 <img className="rounded-md" src={data.image} />
                <div>
                    <div>
                        <h2 className="card-title">{data.estate_title}</h2>
                        <p>{data.description}</p>
                        <div className="card-actions">
                            {data.facilities.map((dataIn, ind) => <div key={ind} className="badge badge-outline">{dataIn}</div>)}
                        </div>
                        <p className='font-bold'>Location: <span>{data.location}</span></p>
                        <div className='flex justify-between items-center'>
                            <p>Area: <span>{data.area}</span></p>
                            <p className='px-1 py-1 border rounded-md text-center font-bold uppercase'>{data.status}</p>
                        </div>
                        <p className='text-2xl font-bold'>{data.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;