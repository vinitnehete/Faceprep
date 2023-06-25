import { useState } from "react";
import { useEffect } from "react";
import ContactCard from "./ContactCard";
import "./Users.css";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Users = ({ onLogout }) => {
  const [user, SetUser] = useState([]);
  const [page, SetPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const res = async () => {
    const response = await fetch(
      `https://randomuser.me/api/?results=10&/page=${page}`
    );
    const result = await response.json();
    console.log(result.results);
    SetUser((prev) => [...prev, ...result.results]);

    SetPage((prev) => prev + 1);
    setIsLoading(false);
  };

  const loadMore = async () => {
    setIsLoading(true);
    setTimeout(() => {
      res();
    }, 1000);
  };

  useEffect(() => {
    loadMore();
  }, [page]);

  const handleLogout = () => {
    navigate("/");
    onLogout();
  };

  const handlScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scollTop >=
      document.documentElement.scrollHeight
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    res();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);

  return (
    <div>
      <div className="first">
        <h1 className="contact">Contact List</h1>
        <Button className="logout" onClick={handleLogout}>
          LogOut
        </Button>
      </div>

      <Grid className="mainbox" container spacing={4}>
        {user.map((item) => (
          <Grid item xs={6} md={3} key={item.id.value}>
            <ContactCard
              name={
                item.name.title + " " + item.name.first + " " + item.name.last
              }
              image={item.picture.large}
            />
          </Grid>
        ))}
      </Grid>

      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Users;
