const Food = require("../../models/food");
const Category = require("../../models/category");

exports.AddFood = async (restaurantId, data) => {
    const food = await Food.create({
        ...data,
        createdBy: restaurantId
    });

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
