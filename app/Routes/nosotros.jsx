import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Ut tincidunt enim ac leo porttitor condimentum. Nulla porta mi nibh,
            a dapibus velit aliquet eget. Duis at orci felis. Ut a odio lorem.
            Sed sit amet justo tortor. Vestibulum sit amet quam nunc. Aliquam
            erat volutpat. Aliquam vitae ante sit amet odio condimentum mollis.
          </p>

          <p>
            Ut tincidunt enim ac leo porttitor condimentum. Nulla porta mi nibh,
            a dapibus velit aliquet eget. Duis at orci felis. Ut a odio lorem.
            Sed sit amet justo tortor. Vestibulum sit amet quam nunc. Aliquam
            erat volutpat. Aliquam vitae ante sit amet odio condimentum mollis.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
