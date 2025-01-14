const Food = require("../../models/food");
const Category = require("../../models/category");
const { UploadFoodPictures } = require("../UploadServices/UploadPicture");

exports.AddFood = async (restaurantId, data) => {
    const food = await Food.create({
        ...data,
        pictures: [],
        createdBy: restaurantId
    });

    let pictures = [];
    pictures = await UploadFoodPictures(food._id, data.pictures);

    food.pictures = pictures;
    await food.save();


    for (let i = 0; i < data.category.length; i++) {
        const categoryExist = await Category.exists({ title: data.category[i].toLowerCase()});
        if(!categoryExist){
            await Category.create({
                title: data.category[i].toLowerCase()
            })
        }
    }

    return food;
}
