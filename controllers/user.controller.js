
const { UploadUserAvatar } = require("../services/UploadServices/UploadPicture");
const {
    UserExist,
    UpdateUser,
    GetMyProfile,
    DeleteAccount,
} = require("../services/UserServices");
const { errorResponse, successResponse } = require("../utils/responseHandler");

exports.getMyProfile = async (req, res) => {
    try {
        const { _id } = req.user;

        if(!await UserExist({ _id })) {
            errorResponse(res, 403, "Permission denied!");
        }

        const response = await GetMyProfile(_id);
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { _id } = req.user;

        const {
            name,
            phone,
            about,
            state,
            street,
            city,
            zipcode,
            longitude,
            latitude,
            picture,
        } = req.body;

        if(!await UserExist({ _id })) {
            errorResponse(res, 403, "Permission denied!");
        }

        const update = {};
        const address = {};

        if(name) update.name = name;
        if(phone) update.phone = phone;
        if(about) update.about = about;

        if(state) address.state = state;
        if(street) address.street = street;
        if(city) address.city = city;
        if(zipcode) address.zipcode = zipcode;
        if(longitude) address.longitude = longitude;
        if(latitude) address.latitude = latitude;
        update.address = address;

        const user = await GetMyProfile(_id);
        let avatar;
        if(picture !== user.picture) {
            avatar = await UploadUserAvatar(_id, picture);
        }

        if(picture) update.picture = avatar ? avatar : picture;

        const response = await UpdateUser(_id, update);
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
    }
}

exports.deleteMyAccount = async (req, res) => {
    try {
        const { _id } = req.user;

        if(!await UserExist({ _id })) {
            errorResponse(res, 403, "Permission denied!");
        }

        const response = await DeleteAccount(_id);
        successResponse(res, 200, response);
    } catch (error) {
        errorResponse(res, 500, "Something failed");
    }
}