import React from 'react'

export const Coment = ({ id, title, text, date, onClick }) => {
    const role = localStorage.getItem('role');
    return (
        <>
            <div className="card" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div>
                                <h6 className="card-title mb-0"><a href="#!">{title}</a></h6>
                                <p className="mb-0 small">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body pb-0">
                    <p>{text}</p>
                </div>
                {role === 'ADMIN' && (
                    <div className="card-footer py-3">
                        <ul className="nav nav-fill nav-stack small">
                            <li className="nav-item">
                                <button onClick={onClick} className="btn btn-danger" href="#!"><i className="bi bi-send-fill pe-1"></i>Eliminar</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
