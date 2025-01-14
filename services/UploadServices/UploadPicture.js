const cloudinary = require("cloudinary").v2;

cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
});

const Restaurant = require("../../models/restaurant");
const Food = require("../../models/food");
const User = require("../../models/user");

exports.UploadRestaurantPictures = async (id, pictures) => {
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
        throw new Error("Restaurant not found");
    }

    const uploadedMedia = [];

    for (const file of pictures) {
        try {
            const response = await cloudinary.uploader.upload(file, {
                folder: `Restaurant/${restaurant.name}`,
                crop: "fill",
                resource_type: "auto"
            });


            const result = {
                url: response.secure_url,
                type: response?.resource_type
            }

            uploadedMedia.push(result);
        } catch (error) {
            console.error("Error uploading media:", error);
            throw new Error("Failed to upload media");
        }
    }

    return uploadedMedia;
};

exports.UploadFoodPictures = async (id, pictures) => {
    const food = await Food.findById(id);

    if (!food) {
        throw new Error("Food not found!");
    }

    const uploadedMedia = [];

    for (const file of pictures) {
        try {
            const response = await cloudinary.uploader.upload(file, {
                folder: `Food/${food._id}`,
                crop: "fill",
                resource_type: "auto"
            });


            const result = response.secure_url;

            uploadedMedia.push(result);
        } catch (error) {
            console.error("Error uploading media:", error);
            throw new Error("Failed to upload media");
        }
    }

    return uploadedMedia;
};

exports.UploadUserAvatar = async (id, picture) => {
    const user = await User.findById(id);

    if (!user) {
        throw new Error("User not found!");
    }

    try {
        const response = await cloudinary.uploader.upload(picture, {
            folder: `User/${user._id}`,
            crop: "fill",
            resource_type: "auto",
            overwrite: true,
        });

        return response.secure_url;
    } catch (error) {
        console.error("Error uploading media:", error);
        throw new Error("Failed to upload media");
    }
};