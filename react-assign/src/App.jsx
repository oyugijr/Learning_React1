import React from "react";
import ProfileCard from "./components/profile-card.jsx";
import "./App.css";

const profiles = [
  {
    name: "Monkey.D.Luffy",
    age: 23,
    profilePicture: "./public/images/luffy.jpg",
    bio: "Software engineer with a passion for open-source projects.",
  },
  {
    name: "Gojo Satorou",
    age: 25,
    profilePicture: "https://th.bing.com/th/id/OIP.s4bR4wDnX-cxYjc3EmLbLQHaNL?w=633&h=1126&rs=1&pid=ImgDetMain",
    bio: "Digital artist and illustrator. Loves painting and graphic design.",
  },
  {
    name: "Trafalgar.D.Law",
    age: 28,
    profilePicture: "./public/images/law.jpg",
    bio: "Content creator and social media influencer.",
  },
  {
    name: "Kakashi Hatake",
    age: 28,
    profilePicture: "https://th.bing.com/th/id/R.4a69d0ae8ccf560d567454e19e78ea87?rik=MyfkVNN6em9LMA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36300000%2fKakashi-image-kakashi-36320413-1848-2560.jpg&ehk=W%2bcdvh9lsYQfJof%2f6Z3SUu8oM9WyrCWc4QL6d2Ubqkg%3d&risl=&pid=ImgRaw&r=0",
    bio: "Actor and cosplay Artist.",
  },
];

const App = () => {
  return (
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <ProfileCard
          name={profile.name}
          age={profile.age}
          profilePicture={profile.profilePicture}
          bio={profile.bio}
          key={index}
        />
      ))}
    </div>
  );
};
// import React from 'react';
// import Login from './Login';

// function Appl() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }

// export default Appl;

export default App;
