import React from "react";

const AboutScreen = () => (
  <div>
    <br />
    <section className="page-section">
      <div className="container">
        <div className="row">
          <h1 className="section-heading text-uppercase text-center">
            SOBRE NOSOTROS
          </h1>
          <div className="col-md-12">
            <br />
            <h5 className="section-subheading ">
              Somos un grupo formado por especialistas en la industria de los
              videojuegos y servicios, cuya misión es poder transmitir esta
              pasión dando los mejores precios del mercado. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit.
              <br />
              <br />
              <br />
              Empezamos esta travesía en el año 2016, logrando en el año 2020 un
              importante reconocimiento en los premios ECOM. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Odio consectetur nesciunt
              sint similique ea iusto.
              <br />
              <br />
              <br />
              Otorgamos soporte 24/7. Cualquier duda o comentario que posea, por
              favor no dude en comunicarnoslo a{" "}
              <a href="">atencionalcliente@tryhard.com</a>
            </h5>{" "}
            <br />
            <br />
          </div>
        </div>
        <br />
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-star fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Rating</h4>
            <p className="text-muted">
              Permitimos a nuestros usuarios dejar opiniones para fomentar la
              comunidad Tryhard, dando voz a nuestros clientes.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-truck fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Envíos en 24hs</h4>
            <p className="text-muted">
              Ofrecemos envíos en el día en todo CABA. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Iusto, architecto.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-trophy fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Premios</h4>
            <p className="text-muted">
              Obtuvimos el premio a la empresa de venta de videojuegos
              revelación del año 2020. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutScreen;
