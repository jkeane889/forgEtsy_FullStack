import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Reviews from './Reviews.jsx'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    path = "/:productId"
                    render={(routeProps) => {
                        return <Reviews {...routeProps} />
                    }}
                    />            
            </Router>
        )
    }
}

export default App;
