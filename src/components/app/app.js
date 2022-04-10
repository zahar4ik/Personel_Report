import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {

    const data = [
        {name: "Alex T.", salary: 2100, increase: false},
        {name: "Bob C.", salary: 4000, increase: false},
        {name: "John R.", salary: 900, increase: true},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm/>
        </div>
    );
}

export default App