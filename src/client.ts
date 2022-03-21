import type { Context } from './index.d.ts';

const storageHost = Deno.env.get("STORE_URL");

export const Client: Context = {
    get(arg: string, params?: Record<string, unknown>): Promise<Record<string, unknown> | Array<Record<string, unknown>>> {
        switch (arg) {
            case 'person':
                return fetch(`${storageHost}/thingmenn/${params?.person}`)
                    .then(response => response.json())
            case 'assembly':
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}`)
                    .then(response => response.json())
            case 'assemblies':
                return fetch(`${storageHost}/loggjafarthing`)
                    .then(response => response.json())
            case 'assembly.congressman':
                return Promise.reject();
            case 'assembly.congressmen':
                console.log(params?.type)
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingsetur?tegund=${params?.type === 'PRIMARY' ? 'thingmenn' : 'varamenn'}`)
                    .then(response => response.json())
            case 'assembly.constituencies':
                return Promise.reject();
            case 'assembly.parties':
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingflokkar`)
                    .then(response => response.json())
            case 'assembly.parties.sessions':
                return Promise.reject();
            case 'assembly.plenary':
                return Promise.reject();
            case 'assembly.plenaries':
                return Promise.reject();
            case 'assembly.issue':
                return Promise.reject();
            case 'assembly.issues':
                return Promise.reject();
            case 'assembly.issue.documents':
                return Promise.reject();
            case 'assembly.issue.speeches':
                return Promise.reject();
            default:
                return Promise.reject();
        }
    }
};