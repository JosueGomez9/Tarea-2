

console.log("******COLECCION DE LIBROS*****")
let Libros = [];

class Reg_libros{
    constructor(id, Titulo, Autor, Editorial, Fecha, Isbn, Paginas,Comentarios){
this.id = id
this.Titulo = Titulo
this.Autor= Autor
this.Editorial= Editorial
this.Fecha= Fecha
this.Isbn= Isbn
this.Paginas = Paginas
this.Comentarios= Comentarios

    }
    mostrar (){
        console.log('Libros Registrados' )
}


}

let Reg_libros_1 = new Reg_libros(1, "El corazón de la piedra ", "José María García López", "Nocturna", 2013, "978-84-939750-7-4 ", 560, "Una novela ambientada en la Europa de los siglos XVI y XVII y que tiene a Tomás Luis de Victoria como uno de sus protagonistas. ")
let Reg_libros_2 = new Reg_libros(2, "Salmos de vísperas"," Esteban Hernández Castelló", " Obra social de Caja de Avila",  2003 , "84 932914 8 X ", ": 95 + 40 láminas de fotografías", "El plato fuerte es la reproducción fotográfica a todo color del manuscrito completo, ideal para quien quiera hacer la transcripción por sí mismo")
let Reg_libros_3 = new Reg_libros(3, " La música en las catedrales españolas del Siglo de Oro "," Robert Stevenson ", " Alianza Música", 1993 , "84-206-8562-3", 600 , "Se trata de una actualización de un libro de 1961, ampliado con numerosísimas notas por parte del autor y traducido al español")
let Reg_libros_4= new Reg_libros(4,"Studies in the Music of Tomás Luis de Victoria"," Eugene Casjen Cramer", "Ashgate",2001, " 0 7546 0241 9 ", 320, "Este es un libro bastante técnico que trata diversos aspectos puntuales de la música de Victori")
let Reg_libros_5= new Reg_libros(5,"La polifonía clásica"," Samuel Rubio ", "Biblioteca la ciudad de Dios", 1956, "0 8548 6201 545 6",216,"Un libro muy interesante del Padre Samuel Rubio. Tiene dos partes claramente diferenciadas")





Libros.push(Reg_libros_1)
Libros.push(Reg_libros_2)
Libros.push(Reg_libros_3)
Libros.push(Reg_libros_4)
Libros.push(Reg_libros_5)
Libros[0].mostrar()
console.log(Libros );

//PELICULAS

console.log("******COLECCION DE PELICULAS*****")
let peliculas = [];

class pelicula{
    constructor( id, titulo, estreno, categorria, calificacion, duracion, direccion, guion){
this.id = id
this.titulo= titulo
this.estreno= estreno
this.categorria= categorria
this.calificacion= calificacion
this.duracion = duracion
this.direccion= direccion
this.guion= guion
    }
    reproducir (){
        console.log('Peliculas en lista de reproduccion' )
}


}

let pelicula_1 = new pelicula(1, "Terrifier", 2016, "terror, suspenso", "Unrated", "1h 25min", "Damien Leone", "Damien Leone")
let pelicula_2 = new pelicula(2, "Entergalactic", 2022, "animacion, comedia, musica", 16, "1h 33min", "Fletcher Moules", "kid cudi")
let pelicula_3 = new pelicula(3, "Smile", 2022, "terror", 16, "1h 55min", "Parker Finn", "Parker Finn")
let pelicula_4 = new pelicula(4, "It", 2017, "terro", 16, "2h 15min", "Andy Muschietti", "Chase Palmer")
let pelicula_5 = new pelicula(5, "Terrifier 2", 2022, "terror", 18, "2h 18min", "Damien Leone", "Damien Leone")





peliculas.push(pelicula_1)
peliculas.push(pelicula_2)
peliculas.push(pelicula_3)
peliculas.push(pelicula_4)
peliculas.push(pelicula_5)
peliculas[0].reproducir()
console.log(peliculas );





//MUSICA


console.log("******COLECCION DE MUSICA*****")
let musica = [];

class Musica{
    constructor( id,titulo,Album,Fecha_Incorporacion,Duracion){
this.id = id
this.titulo= titulo
this.Album= Album
this.Fecha_Incorporacion= Fecha_Incorporacion
this.Duracion= Duracion

    }
    reproducir (){
        console.log('Musica en lista de reproduccion' )
}


}

let musica_1 = new Musica(1, "The Hills", "Beauty Behind The Madness", "21 Febrero 2022", 4.02)
let musica_2 = new Musica(2, "Sopa De Caracol", "Lo mejor Banda Blanca", "22 Febrero 2022",4.54)
let musica_3 = new Musica(3, "Whants Next", "Scary Hours 2", "23 Febrero 2022", 2.58)
let musica_4= new Musica(4, "Un millon de primaveras", "Vicente Fernandez para siempre", "23 Febrero 2022", 2.53)
let musica_5= new Musica(5, "Ganstas Paradise","Ganstas Paradise", "5 Marzo 2022", 4.01)





musica.push(musica_1)
musica.push(musica_2)
musica.push(musica_3)
musica.push(musica_4)
musica.push(musica_5)
musica[0].reproducir()
console.log(musica );

