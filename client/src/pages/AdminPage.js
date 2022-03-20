import React from 'react'
import { Container } from 'react-bootstrap'
import AdminNavbar from '../components/AdminNavbar'
import AdminTable from '../components/AdminTable'
import adminPageCss from '../styles/AdminPage.module.css'

function AdminPage() {
    const { divH2, container } = adminPageCss
    return (
        <div>
            <AdminNavbar />
            <div className={container}>
                <h2 className={divH2}>
                    Incoming Transaction
                </h2>
            <AdminTable/>
            </div>
        </div>
    )
}
export default AdminPage