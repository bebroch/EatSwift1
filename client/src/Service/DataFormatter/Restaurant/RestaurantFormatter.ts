import {  IRestaurantFunctions } from "../../../interface/Restaurant/Restaurant";
import DataFormatter from "../../DataFormatter";
import BaseFormatter from "../BaseFormatter";

export const RestaurantFormatter = {
	// TODO Добавить type IRestaurantFunctions | Array<IRestaurantFunctions>
	get(restaurant: IRestaurantFunctions | Array<IRestaurantFunctions>) {
		if (Array.isArray(restaurant)) {
			return restaurant.map(restaurant => {
				return BaseFormatter.getRestaurantFields(restaurant);
			});
		}

		return {
			...BaseFormatter.getRestaurantFields(restaurant),
			addresses: restaurant.addresses,
			menu: DataFormatter.Menu.get(restaurant.menu),
		};
	},
};
