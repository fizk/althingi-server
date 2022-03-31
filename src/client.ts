import type { Context } from './index.d.ts';

const storageHost = Deno.env.get("STORE_URL");

export const Client: Context = {
    get(arg: string, params?: Record<string, unknown>): Promise<Record<string, unknown> | Array<Record<string, unknown>>> {
        switch (arg) {
            case 'person': {
                return fetch(`${storageHost}/thingmenn/${params?.person}`)
                    .then(response => response.json())
            }
            case 'assembly': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}`)
                    .then(response => response.json())
            }
            case 'assemblies': {
                return fetch(`${storageHost}/loggjafarthing`)
                    .then(response => response.json())
            }
            case 'assembly.congressman': {
                return Promise.reject();
            }
            case 'assembly.inflation':{
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/verdbolga`)
                    .then(response => response.json())
            }
            case 'assembly.parties':{
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingflokkar`)
                    .then(response => response.json())
            }
            case 'assembly.congressmen.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingsetur?tegund=${params?.type === 'PRIMARY' ? 'thingmenn' : 'varamenn'}`)
                    .then(response => response.json())
            }
            case 'assembly.presidents.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingsetur/forsetar`)
                    .then(response => response.json())
            }
            case 'assembly.constituencies.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingsetur/kjordaemi?tegund=${params?.type === 'PRIMARY' ? 'thingmenn' : 'varamenn'}`)
                    .then(response => response.json())
            }
            case 'assembly.parties.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingsetur/flokkar?tegund=${params?.type === 'PRIMARY' ? 'thingmenn' : 'varamenn'}`)
                    .then(response => response.json())
            }
            case 'assembly.government.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/rikisstjorn`)
                    .then(response => response.json())
            }
            case 'assembly.government.parties': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/stjornarflokkar`)
                    .then(response => response.json())
            }
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