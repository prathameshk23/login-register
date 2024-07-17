import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";

function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className="p-4">
        <UserTable />
      </div>
    </main>
  );
}

export default Home;
