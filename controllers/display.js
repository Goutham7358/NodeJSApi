
const Data = require("../model/Data");

exports.getDisplay = async (req,res,next) => {
        let emptyMsg = 'No Data is Present'

        try {
            const dataList = await  Data.find();

            if(dataList.length!=0){
                return  res.status(200).json({
                    message: "GET request Sucessful",
                    data: dataList
                })
            }

            return  res.status(200).json({
                message: "GET request Sucessful",
                data: emptyMsg
            })

        } catch (error) {
            return res.status(200).json({
                message: "error occured!!"
            })
        }
}

exports.postDisplay = async (req,res,next) => {
    console.log(req.body.data, "is here!!");
    const dataId = req.body.dataId;
    const data = req.body.data;

    try {

        await  Data.create({dataId: dataId, data: data});

        return  res.status(201).json({
            message: "created Sucessfully!!"
        })
        
    } catch (error) {
        return res.status(200).json({
            message: "error occured!!"
        })
    }
   
}

exports.deleteDisplay = async (req,res,next)=>{
    console.log(req.body.data,"is to be deleted!");
    const dataId = req.body.dataId;

    try {
        const dataObject = await  Data.findOne({dataId:dataId});

        if(dataObject==null){
            return res.status(200).json({
                message: "delete unsucessful such a data doesnt exist!!"
            }) 
        }

        await  Data.deleteOne({dataId:dataId});

        return  res.status(200).json({
            message: "deleted Sucessfully!!"
        })

    } catch (error) {
        return res.status(200).json({
                 message: "error occured!!"
             })
    }
}

exports.patchDisplay = async (req,res,next)=>{
    console.log(req.body.data,"updating");
    const dataId = req.body.dataId;
    const data = req.body.data;

    try {
        const dataObject = await  Data.findOne({dataId:dataId});

        if(dataObject==null){
            return res.status(200).json({
                message: "update unsucessful such a data doesnt exist!!"
            }) 
        }

        await  Data.updateOne({dataId:dataId},{data:data });

        return  res.status(200).json({
            message: "updated Sucessfully!!"
        })

    } catch (error) {
        return res.status(200).json({
                 message: "error occured!!"
             })
    }

}