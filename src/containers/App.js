import './App.css';
import { SearchForm, PackagesList, DebugMode } from '../components'
/**
* Main Component
*/
function App() {
  return (
    <div className="App">
      <DebugMode />
      <SearchForm />
      <PackagesList />
    </div>
  );
}

export default App;
