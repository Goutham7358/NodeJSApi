let data = ["Just Checking"]

exports.getDisplay = (req,res,next) => {
    res.status(200).json({
        data: "Coming from nodejs Valar Morgulis"
    })
}

exports.postDisplay = (req,res,next) => {
    console.log(req.body.data, "is here!!");
    data.push(req.body.data);
    console.log(data,"is the data that is here")
    res.status(201).json({
        message: "created Sucessfully!!"
    })
}