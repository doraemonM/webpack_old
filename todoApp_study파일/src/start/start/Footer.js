import React from 'react';

class Footer extends React.Component {
    render() { 
        return (
            <footer className="footer">
                <span className="todo-count">
                    
                </span>
                <ul className="todo-filters">
                    <li><a>All</a></li>
                    <li><a>Active</a></li>
                    <li><a>Completed</a></li>
                </ul>
                <button className="todo-delete-completed">
                    Clear Completed
                </button>
            </footer>
        );
    }
}

export default Footer;
