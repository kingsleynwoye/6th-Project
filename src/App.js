import UserFinder from "./components/UserFinder";
import UsersContext from "./Store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
  { id: "u4", name: "Brad" },
  { id: "u5", name: "Andrei" },
  { id: "u6", name: "MaxMillian" },
  { id: "u7", name: "Kingsley" },
  { id: "u8", name: "Joseph" },
  { id: "u9", name: "Cally" },
  { id: "u10", name: "Juliet" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
