import { TAccount } from "../Account/Account";
import { ICourier } from "../Courier/Courier";
import { IRestaurant } from "../Restaurant/Restaurant";
import { IUser } from "../User/User";

interface IAccountData {
	token: string;
	account?: TAccount;
}

interface IUserAccountData extends IAccountData {
	account: IUser;
}

interface IRestaurantAccountData extends IAccountData {
	account: IRestaurant;
}

interface ICourierAccountData extends IAccountData {
	account: ICourier;
}

export {
	IAccountData,
	IUserAccountData,
	IRestaurantAccountData,
	ICourierAccountData,
};
