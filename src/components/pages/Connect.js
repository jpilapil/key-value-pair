import React from "react";
import AppTemplate from "../ui/AppTemplate";
import OtherUser from "../ui/OtherUser";
import users from "../../mock-data/users";
import { Link } from "react-router-dom";

export default function Connect() {
  return (
    <AppTemplate>
      <div>
        <div className=" mt-8">
          <h2 className="text-secondary text-center mb-8">
            Connect with other users
          </h2>
          <div className="row">{/* search bar goes here */}</div>
          <div className="row">
            {users.map((user) => {
              return (
                <OtherUser
                  handle={user.handle}
                  techInterestedIn={user.techInterestedIn}
                  createdAt={user.createdAt}
                  key={user.id}
                />
              );
            })}
          </div>
          <div className="row justify-content-center">
            <Link className="btn bt-lg text-tertiary">Show more</Link>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
