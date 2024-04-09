import logo from './logo.svg';
import './App.css';
import ViewLoanComponent from './components/viewloan';
import EditProfileComponent from './components/editprofile';

function App() {
  return (
    <div className="App">
        <ViewLoanComponent/>
        <EditProfileComponent/>
    </div>
  );
}

export default App;
