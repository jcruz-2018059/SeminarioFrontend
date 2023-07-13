import React from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export const CasePage = () => {
    return (
        <> 
            <div className='container' style={{ paddingTop: '9.5rem' }}>
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }}>
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>
                                <h1 className="hero-text text-white" style={{ fontSize: '30px' }}>Casos de Violencia</h1>
                                <p className="hero-text my-3 text-white">Explora nuestros artículos, consejos prácticos y testimonios para comprender mejor la violencia digital y encontrar recursos que te ayuden a enfrentarla. Juntos, podemos trabajar para construir un entorno digital seguro y respetuoso para todos.</p>
                                <p className="lead mb-0"><a href="#" className="btn btn-primary fw-bold text-white">Conoce más</a></p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                            <img className='img-fluid' src="/src/assets/Casos.png" alt="" width='400px' />
                        </div>
                    </div>
                </div>
      

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">Caso</strong>
                            <h3 className="mb-0">Caso de violencia</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to='caseOne' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">Caso</strong>
                            <h3 className="mb-0">Caso de violencia</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to='caseTwo' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2 pb-5">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">Caso</strong>
                            <h3 className="mb-0">Caso de violencia</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to='caseThree' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">Caso</strong>
                            <h3 className="mb-0">Caso de violencia</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to='caseFour' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer></Footer>

        </>
    )
}
