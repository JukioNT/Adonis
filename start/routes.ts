import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post("/register", "AuthController.register")
Route.post("/login", "AuthController.login")
Route .group(() => {
  Route.put("/user", "UsersContoller.update")
  Route.post("/push", "SendPushesController.send")
}).middleware('auth');
