import React from "react";
import Person from "./person";

const TeamPage = () => {
  return (
    <div>
        <Person 
            // passedUrl={'./eamon.png'},
            names = {"Eamon Bracht"}
            school = {"University of Illinois Urbana-Champaign"}
            rolez = {"CEO"}
        />
        <Person 
            // passedUrl={'./eamon.png'},
            names = {"Emily Tan"}
            school = {"University of Pennsylvania, M&T"}
            rolez = {"CEO"}
        />
    </div>
  );
}

export default TeamPage;