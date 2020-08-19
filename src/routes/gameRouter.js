const express = require("express");
const gameRouter = express.Router();
const game = require("../model/game");
gameRouter.post('/vote',function (req,res) {
    /*-------------quiz section---------------*/
    console.log('inside game')
    console.log(req.body);
    game
        .find({teamName: req.body.teamName})
        .exec()
        .then((game) => {
            if (game.length >= 1) {
                return res.status(409).json({
                    message: "Passcode already used",
                });
            }
            else {
                game(req.body).save().then(
                    (data) => {
                        return res.status(200).json(
                            {
                                message: "successfully added ",
                                data: data
                            }
                        )
                    }
                ).catch((error) => {
                        return res.status(401).json(
                            {
                                message: error
                            }
                        )
                    }
                );
            }
        })

});
module.exports=gameRouter;
