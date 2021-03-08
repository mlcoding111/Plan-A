import React from "react";
import FontAwesome from "react-fontawesome";

export default function Service(props) {
  const { titre, image, size, description } = props;
  return (
    <div className="p-3 mt-3 service-wrap shadow-sm">
      <div className="border-black ">
        <FontAwesome className={image} size={size} />
      </div>
      <h4 className="my-3">{titre}</h4>
      <p>{description}</p>
      <i class="fas fa-user-nurse"></i>
    </div>
  );
}
