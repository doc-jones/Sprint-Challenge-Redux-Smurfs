import React from "react";

function ListSmurfs(props) {
  return (
    <div className="smurfs-card-container">
      {props.smurfs.map(smurf => (
        <div className="smurfs-card" key={smurf.id}>
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
          <p className="images">
            <img
              src="basket.png"
              alt="trash"
              onClick={() => props.deleteSmurfs(smurf.id)}
            />
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListSmurfs;