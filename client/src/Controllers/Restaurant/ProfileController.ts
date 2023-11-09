import { Request, Response } from "express";
import Status from "../../ServiceNew/Status";
import DataFormatterRestaurant from "../../Services/DatabaseServices/Data/Formatter/Restaurant/DataFormatterRestaurant";
import { IRestaurantFunctions } from "../../interface/Restaurant/Restaurant";
import GetData from "../../ServiceNew/GetData";

class ProfileController {
	async getProfile(req: Request, res: Response) {
		const restaurant = GetData.Restaurant.getPrivate(
			req
		) as IRestaurantFunctions;
		const restaurantData = await restaurant.getRestaurantData();
		const restaurantFormattedData =
			DataFormatterRestaurant.getRestaurantData(restaurantData);
		return Status.success(res, { account: restaurantFormattedData });
	}

	// TODO: Сделать обновление профиля
	async updateProfile(req: Request, res: Response) {}

	// TODO: Сделать удаление профиля
	async deleteProfile(req: Request, res: Response) {}
}

export default new ProfileController();
