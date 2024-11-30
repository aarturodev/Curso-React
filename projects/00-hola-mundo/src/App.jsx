import "./App.css";
import { TwiterFollowCard } from "./TwiterFollowCard";

const users = [
  {
    id: 1,
    username: "aarturodev",
    name: "Anderson Marin",
    isFollowing: true,
  },
  {
    id: 2,
    username: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: false,
  },
  {
    id: 3,
    username: "pheralb",
    name: "Pablo hernandez",
    isFollowing: true,
  },
  {
    id: 4,
    username: "PacoHdez",
    name: "Paco Hdez",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ id, username, name, isFollowing }) => (
        <TwiterFollowCard
          key={id}
          username={username}
          name={name}
          initiallIsFolowing={isFollowing}
        />
      ))}
      
    </section>
  );
}
