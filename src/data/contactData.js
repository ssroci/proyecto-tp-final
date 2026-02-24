const contacts = [

{
    id:1,
    name: 'Hermioni',
    ultima_conexión: 'hace 2 horas',
    imagen_perfil: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*obDCz57X7D2Kd1XvcdI0Iw.jpeg',
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
    imagen_perfil: 'https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2020/07/dominic-toretto.jpg',
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


},
{
    id:4,
    name: 'Shakira',
    ultima_conexión: 'hace 1 hora',
    imagen_perfil: 'https://cdn-3.expansion.mx/dims4/default/34975fc/2147483647/strip/true/crop/1200x630+0+0/resize/1200x630!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fda%2F59%2F678467414e2da15b1195d85bbb93%2Fplantilla-nueva-2.jpg',
    mensajes: [
        {
                id:1,
                text: 'Hola Ro! Me pasarías la receta de tus alfajorcitos de maicena? Son muy ricos!! ♥',
                send_by_me:false,
                is_read:false,

        },
        {
              id:2,
                text: 'Hola Shakiiii!! siii,  aguantamente cinco que te mando un audio',
                send_by_me:true,
                is_read:true,

        },
        {
              id:3,
                text: 'dale daleeee, te espero! ',
                send_by_me:false,
                is_read:false,

        }
    ]


}
]

export default contacts