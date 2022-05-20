import { React } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

import { showToastError, showToastSuccess } from "../Utils/tools";

import { CityLogo } from "../Utils/tools";

const Header = ({ user }) => {
  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        showToastSuccess("Good bye!!!");
      })
      .catch((error) => {
        showToastError(error.message);
      });
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solid #00285e",
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo
              link={true}
              linkTo={"/"}
              width="70px"
              height="70px"
            ></CityLogo>
          </div>
        </div>

        <Link to="/the_team">
          <Button color="inherit">The Team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">The Matches</Button>
        </Link>

        {user ? (
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>

            <Button color="inherit" onClick={logoutHandler}>
              Log Out
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
