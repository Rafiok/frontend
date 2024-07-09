
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
        if (load) load.dismiss();
        let idents = await get_obj('ksjfniusfgiunsfjnfsin')
                        
                        idents = JSON.parse(idents);
                        
                        if (idents) {
                            const { username, password } = idents
                            try {
                                const resp = await axios.post('token/', {
                                    username,
                                    password
                                })
                                store_obj('tokens', JSON.stringify(resp.data))
                                return resp.data['access'] as string
                            } catch(e) {
                                console.log(e)
                            }
                        }
        return router.push(`/login`)
    }
    else {
        const json_tok = JSON.parse(token)
        try {
            const resp = await axios({
                url: 'api/ping',
                method: 'HEAD',
                headers: {
                    Authorization: `Bearer ${json_tok.access}`
                },
            })
            return json_tok.access as string
        } catch (err: any) {
            if (err.response.status == 401) {
                const form = new FormData()
                form.append('refresh', json_tok.refresh)
                try {
                    const refresh_res = await axios({
                        url: 'token/refresh/',
                        method: 'POST',
                        data: form
                    })
                    json_tok.access = refresh_res.data['access']
                    store_obj('tokens', JSON.stringify(json_tok))
                    return refresh_res.data['access'] as string
                } catch (err: any) {
                    if (err.response.status == 401) {
                        let idents = await get_obj('ksjfniusfgiunsfjnfsin')
                        
                        idents = JSON.parse(idents);
                        
                        if (idents) {
                            const { username, password } = idents
                            try {
                                const resp = await axios.post('token/', {
                                    username,
                                    password
                                })
                                store_obj('tokens', JSON.stringify(resp.data))
                                return resp.data['access'] as string
                            } catch(e) {
                                console.log(e)
                            }
                        }
                    }
                    return router?.push(`/login`)
                }
            }
        }
    }
}

