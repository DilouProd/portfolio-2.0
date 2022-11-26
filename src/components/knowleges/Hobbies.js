import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Loisirs</h3>
      <ul>
        <li className="hobby">
          <i class="fa-solid fa-dumbbell"></i>
          <span>Musculation</span>
        </li>
        <li className="hobby">
          <i class="fa-solid fa-gamepad"></i>
          <span>Jeux vidéo</span>
        </li>
        <li className="hobby">
          <i class="fa-solid fa-arrow-trend-up"></i>
          <span>Bourse</span>
        </li>
        <li className="hobby">
          <i className="fas fa-music"></i>
          <span>Musique</span>
        </li>
        <li>
          <i className="fas fa-rocket"></i>
          <span>Espace</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
