
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
            return errorResponse(res, 403, "Permission denied!");
        }

        const response = await GetMyProfile(_id);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
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
        } = req.body;

        if(!await UserExist({ _id })) {
            return errorResponse(res, 403, "Permission denied!");
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
        update.address = address;

        const response = await UpdateUser(_id, update);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.uploadProfilePicture = async (req, res) => {
    try {
        const { _id } = req.user;
        if(!await UserExist({ _id })) {
            return errorResponse(res, 403, "Permission denied!");
        }

        const { picture } = req.body;
        const avatar = await UploadUserAvatar(_id, picture);
        
        const response = await UpdateUser(_id, { picture: avatar });
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}

exports.deleteMyAccount = async (req, res) => {
    try {
        const { _id } = req.user;

        if(!await UserExist({ _id })) {
            return errorResponse(res, 403, "Permission denied!");
        }

        const response = await DeleteAccount(_id);
        successResponse(res, 200, response);
    } catch (error) {
        return errorResponse(res, 500, "Something failed");
    }
}
