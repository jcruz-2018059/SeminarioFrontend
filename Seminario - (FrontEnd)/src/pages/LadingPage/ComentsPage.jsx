import React from 'react'
import Footer from '../../components/Footer'
import { Coment } from '../../components/Coment'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export const ComentsPage = () => {
    const token = localStorage.getItem('token');
    const [comment, setComment] = useState([{}])
    const config = {
        headers: {
            Authorization: `${token}`
        }
    }

    const getComents = async () => {
        try {
            const { data } = await axios('https://seminario-backend.vercel.app/comment/getAll', config);
            if (data)
                setComment(data.comments);
            console.log(data);
        } catch (err) {
            console.log(err);
            throw new Error('Error getting events');
        }
    }

    const addComment = async () => {
        try {
            let comment = {
                title: document.getElementById('title').value,
                text: document.getElementById('text').value,
            }
            const { data } = await axios.post('https://seminario-backend.vercel.app/comment/add', comment);
            Swal.fire({
                title: data.message || 'Comentario Agregado',
                icon: 'success',
                timer: 4000
            })
            getComents()
        } catch (err) {
            console.log(err)
            Swal.fire({
                title: err.response.data.message || `Error añadiendo comentario :(`,
                icon: 'error',
                timer: 4000
            })
        }
    }

    const search = async () => {
        try {
            let name = document.getElementById('name').value;
            const { data } = await axios.get('https://seminario-backend.vercel.app/comment/search', { params: { name } });
            if (data) {
                setComment(data.comments);
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteComment = async (id) => {
        try {
          Swal.fire({
            title: '¿Estás seguro de eliminar este comentario?',
            icon: 'warning',
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Sí, eliminar`,
          }).then(async (result) => {
            if (result.isDenied) {
              const { data } = await axios.delete(`https://seminario-backend.vercel.app/comment/delete/${id}` ,config);
              console.log(data);
              Swal.fire({
                title: data.message || 'Comentario eliminado.',
                icon: 'info',
                timer: 4000
              })
              getComents()
            }
          })
        } catch (err) {
          console.error(err);
          Swal.fire({
            title: err.response.data.message || `Error eliminando comentario :(`,
            icon: 'error',
            timer: 4000
          })
        }
      }

    useEffect(() => getComents, []);
    return (
        <>
            <div className='container' style={{ paddingTop: '9.5rem' }}>
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }}>
                    <div className="row">
                        <div className="text-center text-white">

                            <h1 className=" hero-text fw-bold" style={{ fontSize: '35px' }}>Compartamos Ideas</h1>
                            <p className=''>Comentanos tu experiencia en la página y que harías para resolver la violencia</p>

                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">

                                <div className="row">
                                    <div className="col">
                                        <input type='text' className="form-control form-control-lg" id="name" placeholder="Buscar Comentario" />
                                    </div>
                                    <div className="col-auto">
                                        <button onClick={(e) => { search(), e.preventDefault() }} className="btn btn-primary btn-lg ">Búscar</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div className='m-3 mt-4'>
                    <h3 className="pb-4 mb-4  border-bottom">
                        Caja de comentarios
                    </h3>
                </div>

                <div style={{ maxHeight: '500px', overflowY: 'scroll', marginBottom:'2rem'}}>
                    {
                    comment.length === 0 ? (
                        <>
                        <div className='container justify-content-center align-items-center' style={{borderColor: 'red', height: 300, display: 'flex'}}>
                          <p className='fw-bold'  style={{color: '#a6a6a6'}} >Aún no hay comentarios.</p>
                        </div>
                        </>
                      ) : 
                    comment.map(({ _id, title, text, date }, i) => {
                        return (
                            <Coment
                                key={i}
                                id={_id}
                                title={title}
                                text={text}
                                date={date}
                                onClick={() => deleteComment(_id)}
                            >
                            </Coment>
                        );
                    })}
                </div>

                <div className="card card-body" style={{ backgroundColor: '#F8F8F8', marginBottom: '6rem' }}>
                    <div className="d-flex mb-3">
                        <form className="w-100">
                            <input id="title" className="form-control border-0" type="text" placeholder="Título" />
                        </form>
                    </div>
                    <div className="d-flex mb-3">
                        <form className="w-100">
                            <textarea id='text' className="form-control pe-4 border-0" rows="2" data-autoresize="" placeholder="Comentario"></textarea>
                        </form>
                    </div>
                    <ul className="nav nav-pills nav-stack small fw-normal">
                        <button onClick={(e) => { addComment(), e.preventDefault() }} className="btn btn-primary rounded-pill px-3" type="button">Enviar</button>
                    </ul>
                </div>
            </div>

            
            <Footer></Footer>
        </>
    )
}
