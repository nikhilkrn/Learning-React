import FoodItem from "./FoodItem";
import "../style/Menu.css";

function Menu() {
  let foodMenu = [
    {
      name: "Coffee",
      imageURL:
        "https://imgs.search.brave.com/E8tjCs9isx9iXgTvt8AGhZn-bCciADCFKVmPw-Egx5I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTYxMjk1MS9waG90/by9ob3ctdG8tbWFr/ZS1jb2ZmZWUtbGF0/dGUtYXJ0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1lV3lT/QTA2NnpEREtlQzNX/TjlXR2VrQnNna1Bn/OXRsVnF1VnRzd2xp/WF9jPQ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione, quod maiores ipsa a neque, inventore consequatur mollitia, molestias alias perspiciatis doloremque dolor consequuntur ipsum?",
      price: "200",
    },
    {
      name: "Biryani",
      imageURL:
        "https://imgs.search.brave.com/jz7PYuQk0DF8_04l-5MPAd9L2_Vc3SeASNzg6a8Vatk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc5/MDg1NDk0L3Bob3Rv/L2luZGlhbi1iaXJ5/YW5pLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1WSkFVZml1/YXZGWUI3UFh3aXN2/VWhMcVdGSjIwLTlt/MDg3LWN6VUpwOUZz/PQ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione, quod maiores ipsa a neque, inventore consequatur mollitia, molestias alias perspiciatis doloremque dolor consequuntur ipsum?",
      price: "400",
    },
    {
      name: "Shahi Paneer",
      imageURL:
        "https://imgs.search.brave.com/YvunkBR9pem1djk6pRoJmC18Y9L9RJsbPixbc1qtQ8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/Njc5MzkxOC9waG90/by9wYW5lZXItZG8t/cHlhemEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVA5MS1n/TElRaFVaYlltWlhI/bE1IbkRfeUI2NmNp/dDJMcmZLM2c5TzBw/blE9",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione, quod maiores ipsa a neque, inventore consequatur mollitia, molestias alias perspiciatis doloremque dolor consequuntur ipsum?",
      price: "300",
    },
    {
      name: "Dosa",
      imageURL:
        "https://imgs.search.brave.com/t0lJ0CvXfEat7LqTGkCJhup3nD4i3co5nOjxCw1GnuA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NTQ1MjM5MS9waG90/by9kb3NhLWRpc2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS13bWh6U2hlangy/aEp2NlNUR3FKS1FD/ZDNpeFR2LVdKS0Zh/X09wLUVVY3M9",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ratione, quod maiores ipsa a neque, inventore consequatur mollitia, molestias alias perspiciatis doloremque dolor consequuntur ipsum?",
      price: "100",
    },
  ];
  return (
    <div className="Foodcontainer">
      {foodMenu.map((ele) => {
        return <FoodItem item={ele}/>;
      })}
    </div>
  );
}

export default Menu;
