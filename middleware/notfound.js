const notFound = (req,res)=>res.status(404).send('Route not found on the server')

module.exports = notFound