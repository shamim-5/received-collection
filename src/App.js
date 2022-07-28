import AddCollection from "./components/AddCollection";
import ShowCollection from "./components/ShowCollection";


function App() {
  return (
    <div className="md:m-16 m-12">
      <h2 className="text-center font-bold text-3xl text-[#20a6d7] pb-6 uppercase">Manage Collection</h2>
      <AddCollection />
    </div>
  );
}

export default App;
