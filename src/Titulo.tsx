function Titulo() {
  //JSX
  const nombre = "chanchito feliz";
  if (nombre) {
    return <h1>{nombre}</h1>;
  }
  return <p>hola mundo</p>;
}
export default Titulo;
