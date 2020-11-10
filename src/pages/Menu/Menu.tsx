import React from "react";
import { useStyles } from "./MenuStyles";
import { NavLink } from "react-router-dom";
import item1 from "../../assets/menuIcons/item1.png";
import item2 from "../../assets/menuIcons/item2.svg";
import item3 from "../../assets/menuIcons/item3.jpg";
import item4 from "../../assets/menuIcons/item4.png";
import item5 from "../../assets/menuIcons/item5.svg";
import profileImg from "../../assets/menuIcons/ProfilePic.png";
import arrowBack from "../../assets/menuIcons/arrowBack.svg";

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <NavLink to="/">
          <img src={arrowBack} alt="arrow back" />
        </NavLink>

        <div className={classes.user}>
          <span>Асель Гапарова</span>
          <img src={profileImg} alt="user icon" />
        </div>
      </div>
      <div className={classes.container}>
        <NavLink to="/sfd" className={classes.menuItem}>
          <img src={item1} />
          <span>Мои вещи</span>
        </NavLink>

        <NavLink to="/sfd" className={classes.menuItem}>
          <img src={item2} />
          <span>Потеряшки</span>
        </NavLink>

        <NavLink to="/sfd" className={classes.menuItem}>
          <img src={item3} />
          <span>Cоздать объявление</span>
        </NavLink>

        <NavLink to="/sfd" className={classes.menuItem}>
          <img src={item4} />
          <span>QR метки </span>
        </NavLink>

        <NavLink to="/sfd" className={classes.menuItem}>
          <img src={item5} />
          <span>Уведомления</span>
        </NavLink>
      </div>
    </>
  );
};

export { Menu };
