const Client = require("../models/clientes");

exports.createClient = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const client = new Client({
        renach: req.body.renach,
        nome: req.body.nome,
        endereco: req.body.endereco,
        pagamentos: req.body.pagamentos
    });
    client.save().then(
        createdClient => {
            res.status(201).json({
                message: "Client added successfully",
                client: {
                    ...createdClient,
                    id: createdClient._id
                }
            });
        }
    ).catch(error => {
        res.status(500).json({
            message: "Creating a client failed!"
        });
    });
}