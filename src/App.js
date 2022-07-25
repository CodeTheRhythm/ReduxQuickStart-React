import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
