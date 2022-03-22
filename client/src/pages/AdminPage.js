import React, { useRef, useState } from 'react'
import { Overlay, Popover, Table } from 'react-bootstrap'
import adminTableCss from '../components/AdminTable.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Transaction from '../data/Transaction'

import adminPageCss from '../styles/AdminPage.module.css'
import AdminNavbar from '../components/AdminNavbar'
function AdminPage() {
    const { divH2, container } = adminPageCss

    const { th,
        btnImage,
        btnPop,
        btnAcc,
        btnCanc,
        actionClass,
        icon } = adminTableCss

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

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
                    {Transaction.map((data, index) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.buktiTF}</td>
                            <td>{data.remaining} / hari</td>
                            <td>{data.statusUser}</td>
                            <td>{data.statusPayment} </td>
                            <td className={actionClass}>
                                <div ref={ref}>
                                    <button onClick={handleClick} className={btnImage}>
                                        <FontAwesomeIcon icon={faCaretDown} className={icon} />
                                    </button>

                                    <Overlay
                                        show={show}
                                        target={target}
                                        placement="bottom"
                                        container={ref.current}
                                        containerPadding={30}
                                    >
                                        <Popover id="popover-contained" >
                                            <Popover.Content>
                                                <button className={`${btnPop} ${btnAcc}`}>
                                                    Approved
                                                </button>
                                            </Popover.Content>
                                            <Popover.Content>
                                                <button className={`${btnPop} ${btnCanc}`}>
                                                    Cancel
                                                </button>
                                            </Popover.Content>
                                        </Popover>
                                    </Overlay>
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