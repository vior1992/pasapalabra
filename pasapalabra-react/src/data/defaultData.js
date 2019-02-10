const defaultData = {
    players: [
        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            name: 'Dani_the_Boss',
            correctAnswers: 28,
            wrongAnswers: 0,
            timeUsed: 58
        },

        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            name: 'Armaggedon',
            correctAnswers: 20,
            wrongAnswers: 8,
            timeUsed: 189
        },

        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            name: 'homer',
            correctAnswers: 2,
            wrongAnswers: 26,
            timeUsed: 299
        },
    ],

    questions: [
        { 
            show: false, 
            letter: "a", 
            answer: "apu", 
            status: 0, 
            question: ("CON LA A. Vendedor del badulaque, con octillizos, de origen indio"),
        },
        { 
            show: false, 
            letter: "b",
            answer: "bart", 
            status: 0, 
            question: ("CON LA B. Hijo primogenito de la familia Simpson que siempre se mete en problemas") 
        },
        { 
            show: false, 
            letter: "c",
            answer: "charles", 
            status: 0, 
            question: ("CON LA C. Nombre del dueño de la central nuclear de Springfield") 
        },
        { 
            show: false, 
            letter: "d",
            answer: "doh", 
            status: 0, 
            question: ("CON LA D. Expresion en ingles que utiliza Homer cuando algo no sale bien (sin el apostrofe entre las dos palabras)") 
        },
        { 
            show: false, 
            letter: "e",
            answer: "excluido", 
            status: 0, 
            question: ("CON LA E. Se lo dice Homer a Wendal, Rudy, Steven y mas niños despues de entrenar al equipo de futbol americano") 
        },
        { 
            show: false, 
            letter: "f",
            answer: "fresisuis", 
            status: 0, 
            question: ("CON LA F. Bebida fria y extremadamente dulce con la que Bart y Milhouse pillan una sobredosis de azucar ") 
        },
        { 
            show: false, 
            letter: "g",
            answer: "gato", 
            status: 0, 
            question: ("CON LA G. Que animal es Bola de nieve IV?") 
        },
        { 
            show: false, 
            letter: "h",
            answer: "hugo", 
            status: 0, 
            question: ("CON LA H. Hermano gemelo de Bart que sale en un especial de terror") 
        },
        { 
            show: false, 
            letter: "i",
            answer: "italiano", 
            status: 0, 
            question: ("CON LA I. Idioma que sabe hablar Milhouse por que su abuela se lo hizo aprender a golpes") 
        },
        { 
            show: false, 
            letter: "j",
            answer: "joe", 
            status: 0, 
            question: ("CON LA J. Segundo nombre de Homer") 
        },
        { 
            show: false, 
            letter: "k",
            answer: "krusty", 
            status: 0, 
            question: ("CON LA K. Payaso estrella de television con cierta adiccion al alcohol") 
        },
        { 
            show: false, 
            letter: "l",
            answer: "lisa", 
            status: 0, 
            question: ("CON LA L. **** necesita un aparato, SEGURO DENTAAAAAAL") 
        },
        { 
            show: false, 
            letter: "m",
            answer: "mocasines", 
            status: 0, 
            question: ("CON LA M. Pieza de ropa que quiere hacerse el Sr. Burns con la piel de dos mastines") 
        },
        { 
            show: false, 
            letter: "n",
            answer: "nucelar", 
            status: 0, 
            question: ("CON LA N. Lo dice homer antes de entrar en el submarino; N****** la palabra es N******") 
        },
        { 
            show: false, 
            letter: "ñ",
            answer: "cañonero", 
            status: 0, 
            question: ("CONTIENE LA Ñ. Todoterreno que anuncia Krusy el payaso y que Homer compra en su version femenina por herror") 
        },
        { 
            show: false, 
            letter: "o",
            answer: "otto", 
            status: 0, 
            question: ("CON LA O. Conductor del autobus escolar, le encanta el heavy metal") 
        },
        { 
            show: false, 
            letter: "p",
            answer: "pendiente", 
            status: 0, 
            question: ("CON LA P. Lo utiliza Homer en el submarino para paliar el problema con la fuga de agua") 
        },
        { 
            show: false, 
            letter: "q",
            answer: "quiero", 
            status: 0, 
            question: ("CON LA Q. ****** mi bocadillo, ****** mi bocadillo, ****** mi bocadillo") 
        },
        { 
            show: false, 
            letter: "r",
            answer: "ralph", 
            status: 0, 
            question: ("CON LA R. Un gnomo le dijo que quemara cosas") 
        },
        { 
            show: false, 
            letter: "s",
            answer: "simpson", 
            status: 0, 
            question: ("CON LA S. Apellido de la familia mas conocida de Springfield") 
        },
        { 
            show: false, 
            letter: "t",
            answer: "tele", 
            status: 0, 
            question: ("CON LA T. Sin **** ni cerveza Homer pierde la cabeza") 
        },
        { 
            show: false, 
            letter: "u",
            answer: "uter", 
            status: 0, 
            question: ("CON LA U. Nombre del chico gordito aleman del colegio de Springfield que se apellida Zörker") 
        },
        { 
            show: false, 
            letter: "v",
            answer: "videojuego", 
            status: 0, 
            question: ("CON LA V. Lo roba Bart en un supermercado en navidad") 
        },
        { 
            show: false, 
            letter: "w",
            answer: "wiggum", 
            status: 0, 
            question: ("CON LA W. Apellido del jefe de policia de la ciudad de Springfield") 
        },
        { 
            show: false, 
            letter: "x",
            answer: "expediente x", 
            status: 0, 
            question: ("CONTIENE LA X. Serie a la que hacen un guiño en el episodio del Sr Burns y el supuesto extraterrestre") 
        },
        { 
            show: false, 
            letter: "y",
            answer: "yogulado", 
            status: 0, 
            question: ("CONTIENE LA Y. Se lo vende el dependiente chino de una tienda mistica, esta maldito") 
        },
        { 
            show: false, 
            letter: "z",
            answer: "tanzanian", 
            status: 0, 
            question: ("CONTIENE LA Z. Apellido REAL del Seimour Skiner") 
        }
    ]
}

//For run the app, uncomment this:
export default defaultData

//For run the test, uncomment this:
// module.exports = defaultData