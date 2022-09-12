import { encrypt } from '../utils/bcryptUtils'
import CryptrUtils from '../utils/cryptrUtils';
import { wifisCreator } from "../types/wifis";
import WifisRepository from "../repositories/wifisRepository";

const wifis = new WifisRepository();
const cryptrUtils = new CryptrUtils()

export default class WifisServices {
    async create(wifi: wifisCreator) {

        wifi.password = cryptrUtils.encrypt(wifi.password)

        await wifis.registerWifi(wifi)
    }

    async getAll(userId: number) {
        let wifisFromUser = await wifis.getAll(userId)

        if (wifisFromUser.length > 0) {
            wifisFromUser = wifisFromUser.map((wifi) => {
                wifi.password = cryptrUtils.decrypt(wifi.password)
                return wifi
            })

        }

        return wifisFromUser
    }


    async getById(wifiId: number, userId: number) {

        const wifi = await wifis.findById(wifiId)
        if (!wifi) throw { status: 404, message: "wifi not found" }
        if (wifi.userId !== userId) throw { status: 401, message: "Unauthorized" }

        wifi.password = cryptrUtils.decrypt(wifi.password)

        return wifi
    }

    async delete(userId: number, wifiId: number) {

        const wifi = await wifis.findById(wifiId)
        if (!wifi) throw { status: 404, message: "wifi not found" }
        if (wifi.userId !== userId) throw { status: 401, message: "Unauthorized" }
        await wifis.deleteWifi(wifiId)
    }
}