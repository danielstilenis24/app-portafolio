import "./certificados.scss";

export default function Certificados() {
  return (
    <div className='certificados' id='certificados'>
      <h1 className="h1 text-center">CERTIFICADOS</h1>
      <h3 className="h1 text-center">PLATZI</h3>
      <div className='container'>
        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          <div class='col'>
            <div class='card text-center'>
              <img src='assets/diploma1.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <a
                  href='assets/diploma1.pdf'
                  class='btn btn-primary my-2 '
                  target='_blank'>
                  VER
                </a>
              </div>
            </div>
          </div>

          <div class='col'>
            <div class='card text-center'>
              <img src='assets/diploma2.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <a
                  href='assets/diploma2.pdf'
                  class='btn btn-primary my-2 '
                  target='_blank'>
                  VER
                </a>
              </div>
            </div>
          </div>

          <div class='col'>
            <div class='card text-center'>
              <img src='assets/diploma3.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <a
                  href='assets/diploma3.pdf'
                  class='btn btn-primary my-2 '
                  target='_blank'>
                  VER
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
