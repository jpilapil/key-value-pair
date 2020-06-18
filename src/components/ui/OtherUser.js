import React from "react";
import { Link } from "react-router-dom";

export default function OtherUser(props) {
  return (
    <div className="  col-10 offset-1  col-xl-6 offset-xl-0 col-lg-8 offset-lg-2  my-4">
      <div className="card card-body">
        <h4 className="text-primary">{props.handle}</h4>
        {/* <p className="text-light">About:</p>
        <p className="text-lightest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
          amet elementum turpis. Duis eu quam magna. Praesent facilisis eleifend
          orci, in commodo sem blandit bibendum. In eu feugiat nisl, non
          dignissim neque. Nullam scelerisque congue placerat. Pellentesque sit
          amet efficitur eros. Pellentesque odio lectus, eleifend nec sem ut,
          tincidunt.
        </p> */}
        <p className="text-light mt-3">
          Technologies {props.handle} is interested in:
        </p>
        <p className="text-lightest"> - {props.techInterestedIn}</p>
        <p className="text-light mt-3">Member since:</p>
        <p className="text-lightest">{props.createdAt}</p>

        <Link to="#" className="btn btn-tertiary ml-auto">
          Contact
        </Link>
      </div>
    </div>
  );
}
