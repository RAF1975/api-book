// On importe la libraire fastify
import fastify from 'fastify'
import fastifyMongo from 'fastify-mongodb'


// On créé une application fastify en utilisant
// L'import de notre librairie. On configure
// fastify pour afficher des logs
const app = fastify({ logger: true })

// On connécte la base de données MongoDB
app.register(fastifyMongo, {
  url: 'mongodb+srv://MyTodoApp:MyTodoApp@cluster0.obacx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
})


app . get ( '/' ,  async  ( )  =>  {
    return  {  text : " Génial, c'était facile.l'écriture d'une application complexe nécessite beaucoup plus de code que cet exemple. "  }
  } )

// Cette fonction démarre notre server d'api
const start = async () => {
  console.log('Lancement de notre server ...')

  await app.listen(3000)

  console.log('Le server est lancé, vous pouvez visiter: http://localhost:3000')
}

// Lancement de la fonction de démarage
start()