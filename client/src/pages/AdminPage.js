import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, DropdownButton, Table } from 'react-bootstrap'
import adminTableCss from '../components/AdminTable.module.css'

import adminPageCss from '../styles/AdminPage.module.css'
import AdminNavbar from '../components/AdminNavbar'
import { API } from '../config/api'
function AdminPage() {
    const { divH2, container } = adminPageCss
    const {
        actionClass } = adminTableCss

    // use state buat nampilin popup
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };


    //get all transactions
    const [trans, setTransaction] = useState([])

    const getAllTransaction = async () => {
        try {
            const response = await API.get('/transactions')
            setTransaction(response.data.data.transactions)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllTransaction()
    }, [])


    // //update admin approve
    // const [approve, setApprove]=useState({

    // })
    const updateApprove = async (id) => {
        try {
            await API.patch(`/transaction/${id}`)
            getAllTransaction()
            console.log(id)
        } catch (error) {
            console.log();
        }
    }
    const updateCancel = async (id) => {
        try {
            await API.patch(`/transactioncancel/${id}`)
            getAllTransaction()
            console.log(id)

        } catch (error) {
            console.log();
        }
    }

    return (
        <div>
            <AdminNavbar />
            <div className={container}>
                <h2 className={divH2}>
                    Incoming Transaction
                </h2>
                <Table>
                    <tr>
                        <th>No</th>
                        <th>Users</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status User</th>
                        <th>Status Payment</th>
                        <th className={actionClass}>Action</th>
                    </tr>
                    {trans?.map((data, index) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.user.fullname}</td>
                            <td onClick={() => window.open(`http://localhost:3500/uploads/${data.transferProof}`, '_blank')}>
                                {data.transferProof}
                            </td>
                            <td>{data.remainingActive} / hari</td>
                            <td>{data.userStatus}
                            </td>
                            <td>{data.paymentStatus} </td>
                            <td className={actionClass}>
                                {/* <div ref={ref}> */}
                                <div>
                                    <DropdownButton title="" 
                                                    style={{background:"transparent", color:"black"}}>
                                        <Dropdown.Item onClick={() => updateApprove(data.id)}
                                                        style={{color:"#0acf83", fontWeight: "600"}}>Approved</Dropdown.Item>
                                        <Dropdown.Item onClick={() => updateCancel(data.id)}
                                                        style={{color: "#D60000", fontWeight: "600"}}>Cancel</Dropdown.Item>
                                    </DropdownButton>   
                                </div>
                            </td>
                        </tr>
                    ))}
                </Table>
            </div>
        </div>
    )
}
export default AdminPage