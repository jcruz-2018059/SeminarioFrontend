import React from 'react'
import Footer from '../../components/Footer'

export const HomePage = () => {
  return (
    <>
      <header className="masthead" style={{ paddingTop: '9.5rem', paddingBottom: '5rem' }}>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <p className="fw-bold hero-text">Violencia Cibernética</p>
                <h1 className="hero-title mb-3">Conciencia Digital</h1>
                <p className="lead fw-normal text-muted mb-5 normal-text">Tu voz tiene poder para detener la violencia" o Juntos
                  podemos crear un entorno escolar seguro y libre de violencia.</p>
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <button className="btn btn-primary btn-lg px-5 py-2 me-sm-3 fs-6 rounded-0">Conocer</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="masthead-device-mockup">
                <img className="img-fluid" src="src\assets\ImageHero.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-primary-to-secondary text-white" style={{ backgroundColor: '#1D39E8', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container px-5 my-5">
          <div className="text-center">
            <h4 className="normal-text">
              <strong>Es hora de detener la violencia cibernética</strong>
              <br className="d-sm-none d-lg-block" /> y motivar a los jóvenes a encontrar su pasión. ¡Se parte del cambio!
            </h4>
          </div>
        </div>
      </section>

      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h4 style={{ fontSize: '20px' }}>¿Qué es?</h4>
            <h1 className="normal-title">Violencia</h1>
            <h1 className="normal-title color-text pb-5">Cibernética</h1>
            <p className="lead hero-text">La violencia cibernética es el uso de la tecnología y las plataformas en línea para acosar, intimidar, difamar o causar daño a otras personas. Se manifiesta a través de amenazas, difusión de contenido ofensivo, acoso en redes sociales, ciberbullying, suplantación de identidad y otras formas de comportamiento agresivo en línea.</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="src\assets\Imagen2.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 d-none d-lg-block">
            <img src="src\assets\Imagen1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6 text-end">
            <h4 style={{ fontSize: '20px' }}>¿Cómo?</h4>
            <h1 className="normal-title">Podemos</h1>
            <h1 className="normal-title color-text pb-5">Combatirla</h1>
            <p className="lead hero-text">Para evitar la violencia cibernética, es fundamental fomentar la educación y la concienciación sobre el tema. Debemos promover un uso responsable y ético de la tecnología, respetando la privacidad y la dignidad de los demás. Alentemos el pensamiento crítico y la verificación de información antes de compartirla. Además, es importante denunciar cualquier forma de violencia cibernética y brindar apoyo a las víctimas.</p>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="container text-center">
          <h1 className="fw-bold normal-text m-5" style={{ fontSize: '2rem' }}>Tipos de Violencia</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center" style={{ backgroundColor: '#001179' }}>
                <div className="title text-white">
                  <h4>Ciberacoso</h4>
                </div>
                <div className="text text-white">
                  <span>El ciberacoso es una forma de violencia en línea en la que una persona utiliza medios digitales, como las redes sociales, mensajes de texto o correos electrónicos, para acosar, intimidar o causar daño a otra persona. </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center" style={{ backgroundColor: '#F37587' }}>
                <div className="title text-white">
                  <h4>Sexting no consensuado</h4>
                </div>
                <div className="text text-white">
                  <span>El sexting no consensuado se refiere a la difusión o compartición de imágenes o contenido explícito sin el consentimiento de la persona. Esta práctica viola la privacidad y puede tener consecuencias para las víctimas.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center" style={{ backgroundColor: '#601FD9' }}>
                <div className="title text-white">
                  <h4>Grooming en línea</h4>
                </div>
                <div className="text text-white">
                  <span>El grooming en línea es una forma de manipulación y abuso en la cual un adulto se acerca a un menor de edad a través de internet con el objetivo de establecer una relación de confianza y control. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}
