import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage }
}) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mt-3">
      <div className="card">
        <img src={bizImage} alt={bizName} />
        <div className="card-body">
          <h5 className="card-title">{bizName}</h5>
          <p className="card-text">{bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b> {bizPhone}
            <br />
            <b>Address: </b> {bizAddress}
          </p>
          <div className="d-flex justify-content-evenly">
            <Link
              className=" ms-3 btn btn-danger"
              to={`/my-cards/delete/${_id}`}
            >
              Delete
            </Link>
            <Link
              className=" ms-3 btn btn-primary"
              to={`/my-cards/edit/${_id}`}
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
