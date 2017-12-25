module.exports = function(app, db){
     app.post('/players', (req, res) => {
        //  console.log(req.body);
        //  res.send(db);
        const player = {pseudo: req.body.pseudo, name: req.body.name};
        const detail = {pseudo: req.body.pseudo};

        db.collection("player").findOne(detail, (err, items) => {
            if(err){
                console.log('An error occure when try to save player!!');
            }else{
                if(items != null){
                    
                    res.send({error: true, message: 'The player already exists!'});

                }else{

                    db.collection('player').insert(player, (err, result) => {
                        if(err){
                            console.log('An error occure when try to save player!!');
                        }else{
                            res.send(result.ops[0]);
                        }
                    });

                }
            }
        })

        db.collection('player').insert(player, (err, result) => {
            if(err){
                console.log('An error occure when try to save player!!');
            }else{
                res.send(result.ops[0]);
            }
        });

    })
}