import React from 'react';
import { Link } from 'react-router-dom';

const InstituteDashboard = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Link to="/ntseList">Ntse Scholarship List</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/casteList">Caste Scholarship List</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/femaleList">Female Scholarship List</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InstituteDashboard;
