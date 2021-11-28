import { useState } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import {CardsList} from '../components/CardsList/CardsList';

const App = ({robotsList}) => {
    let [searchQuery, setSearchQuery] = useState('');

    let filteredRobotsList = robotsList.filter((robot) => robot.username.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox 
                searchQuery = {searchQuery}
                setSearchQuery = {setSearchQuery}
            />
            <Scroll>
                <ErrorBoundary>
                    <CardsList 
                        robotsList={filteredRobotsList}
                    />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}



export default App;