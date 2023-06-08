


const Card = ({item}) => {
    
  return (
    <>
     
     <div className="card w-80 h-96 bg-base-100 shadow-xl image-full mx-auto">
  <figure><img className="" src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="btn btn-sm bg-slate-600 text-white rounded-2xl">Enroll Now</button>
    </div>
  </div>
</div>
     
    </>
  );
};

export default Card;
