import authRoute from './authentication/authRoute/authRoute.js'


export default (router) => {
  router.use("/users",authRoute);
   
  return router;
};