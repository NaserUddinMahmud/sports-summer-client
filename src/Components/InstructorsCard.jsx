

const InstructorsCard = ({item}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={item.photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.email}</p>
    
  </div>
</div>
    );
};

export default InstructorsCard;