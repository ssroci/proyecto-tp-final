const contacts = [

{
    id:1,
    name: 'Hermioni',
    ultima_conexión: 'hace 2 horas',
    imagen_perfil: 'https://static.wikia.nocookie.net/warnerbros/images/3/3e/Hermione.jpg/revision/latest?cb=20120729103114&path-prefix=es',
    mensajes: [
        {
                id:1,
                text: 'Hola Hermioni! como estas? ',
                send_by_me:true,
                is_read:true,

        },
        {
              id:2,
                text: 'Roooo! tanto tiempo! Bien y vos? Cuando nos venis a visitar por Hogwarts? Te estamos esperando!! ',
                send_by_me:false,
                is_read:false,



        }
    ]


},
{
    id:2,
    name: 'Harry Potter',
    ultima_conexión: 'hace 3 horas',
    imagen_perfil: 'https://cdn.shopify.com/s/files/1/1943/7257/files/Harry-Potter_large_0dad831f-4b4a-4db5-b0eb-f96e70436102_large.jpg?v=1514443105',
    mensajes: [
        {
                id:1,
                text: 'Hola Ro! ¿Cuando venis?, con los chicos te estamos esperando',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: ' Mañana salgo para allá, debemos practicar el expecto Patronum',
                send_by_me:true,
                is_read:true,

        }
    ]


},
{
    id:3,
    name: 'Toretto',
    ultima_conexión: 'hace 3 horas',
    imagen_perfil: 'https://static.wikia.nocookie.net/ficcion-sin-limites/images/6/67/Vin-diesel.jpg/revision/latest?cb=20210706212518&path-prefix=es',
    mensajes: [
        {
                id:1,
                text: 'Hola Ro! En cinco minutos te paso a buscar',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: 'Dommm, dale ¿En que venis?',
                send_by_me:true,
                is_read:true,

        },
        {
              id:3,
                text: 'Tengo el Dogde! ',
                send_by_me:false,
                is_read:false,

        }
    ]


}
]

export default contacts