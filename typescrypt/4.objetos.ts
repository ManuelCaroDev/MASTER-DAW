//objeto tipado
const teclado: {marca: string, precio: number, disponibilidad: boolean} = {
    marca: "Bmw m4",
    precio: 55000,
    disponibilidad: true,
};

//interfaces
interface Alumno {
    nombre: string;
    edad?: number;
    matricula: boolean;
    ciudad: string;
  }
  
  const pepe: Alumno = {
    nombre: "Pepe",
    matricula: true,
    ciudad: "Segovia",
  };

interface Articulo {
    nombre: string,
    precio: number,
    disponibilidad: boolean,
    foto: string,
    descripcion: string,
    marca: string,
}

const articulos: Articulo[] = [
    {
        nombre: "ordenador",
        precio: 33333,
        disponibilidad: true,
        foto: "hola",
        descripcion: "top",
        marca: "MSI",
    },
    {
        nombre: "coche",
        precio: 99333,
        disponibilidad: true,
        foto: "http://foto.jpg",
        descripcion: "m4",
        marca: "bmw",
    }
];