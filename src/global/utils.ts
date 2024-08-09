
import { Storage, Drivers } from "@ionic/storage";
import { alertController, loadingController } from "@ionic/vue";
import axios from "axios";
import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Router } from "vue-router";

export function isValidEmailOrPhone(input: string): boolean {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for validating phone number with country code
    const phoneRegex = /^\+\d{1,3}\d{4,14}$/;

    // Check if the input matches either the email or phone regex
    return emailRegex.test(input) || phoneRegex.test(input);
}


export const get_obj = async (key: string) => {
    const storage = new Storage({
        name: 'user_store',
        driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });

    await storage.defineDriver(CordovaSQLiteDriver);
    await storage.create()
    return await storage.get(key)
}

export const store_obj = async (key: string, obj: any) => {
    const storage = new Storage({
        name: 'user_store',
        driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });
    await storage.defineDriver(CordovaSQLiteDriver);
    await storage.create()
    await storage.set(key, obj)
}

export const remove_obj = async (key: string) => {
    const storage = new Storage({
        name: 'user_store',
        driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });

    await storage.defineDriver(CordovaSQLiteDriver);
    await storage.create()

    await storage.remove(key)
}

export const format_all = async () => {
    const storage = new Storage({
        name: 'user_store',
        driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });

    await storage.defineDriver(CordovaSQLiteDriver);
    await storage.create()
    await storage.clear()
}

export const showLoading = async (mess: string) => {
    const loading = await loadingController.create({
        message: mess,
        mode: 'ios'
    });
    loading.present();
    return loading
};

export const show_alert = async (title: string, mess: string) => {
    const alert = await alertController.create({
        header: title,
        message: mess,
        buttons: ["OK"],
        mode: 'ios'
    });
    await alert.present();
};

export const show_warn = async (title: string, mess: string, oktext: string, handle: (param: any, oth : any) => any, param: any, notext = "Cancel", is_group = false) => {
    const alert = await alertController.create({
        header: title,
        message: mess,
        buttons: [
            {
                text: notext,
                role: 'cancel',
            },
            {
                text: oktext,
                role: 'confirm',
                handler: () => {
                    handle(param, is_group)
                },
            },
        ],
        mode: 'ios',
    });

    await alert.present();
};

export const access_tok = async (router: Router, load: HTMLIonLoadingElement | undefined) => {
    const token: string | undefined = await get_obj('tokens')
    if (!token) {
        load?.dismiss()
        return router.push('/login')
    }
    else {
        const json_tok = JSON.parse(token)
        return json_tok.access;
        
    }
}

export const dayOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

export const toVoyTime = (time : string) => {
    const date = new Date(time)
    
    return `${dayOfWeek[date.getDay()]} ${(date.getDate() < 10 ? '0' : '') + date.getDate()}/${date.getFullYear()} à ${( date.getHours() < 10 ? '0' : '') + date.getHours()}:${( date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`
}

export const get_details = async (key : string) => {
    const load = await showLoading('Patientez...')
    const resp = await axios.post('api/get_details/', {
        key
    })
    
    load.dismiss()
    return resp.data['result']
}

export function scroll_bot(id: string) {
    const elt = document.getElementById(id)

    if (elt) {
        elt.scrollTop = elt.scrollHeight - elt.clientHeight
    }
}

export function isScrolled(id: string) {
    const elt = document.getElementById(id)

    if (elt) {
        return elt.scrollHeight - elt.scrollTop <= elt.clientHeight + 75
    }
    return false
}