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
            case 'assembly.inflation': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/verdbolga`)
                    .then(response => response.json())
            }
            case 'assembly.parties': {
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
            case 'assembly.committees.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingsetur/nefndir`)
                    .then(response => response.json())
            }
            case 'assembly.government.sessions': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/rikisstjorn`)
                    .then(response => response.json())
            }
            case 'assembly.government.parties': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/stjornarflokkar`)
                    .then(response => response.json());
            }
            case 'assembly.plenary': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingfundir/${params?.plenary}`)
                    .then(response => response.json())
            }
            case 'assembly.speech.aggregation': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/raedutimar?fjoldi=${params?.limit || 10}`)
                    .then(response => response.json())
            }
            case 'assembly.content-categories': {
                const types = ((params?.types as string[]) || []).join(',');
                const query = params?.types
                    ? `?malaflokkur=${types}`
                    : '';
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/efnisflokkar${query}`)
                    .then(response => response.json())
            }
            case 'assembly.issue-statuses': {
                const types = ((params?.types as string[]) || []).join(',');
                const query = params?.types
                    ? `?malaflokkur=${types}`
                    : '';
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/stodur${query}`)
                    .then(response => response.json())
            }
            case 'assembly.plenaries': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingfundir`)
                    .then(response => response.json())
            }
            case 'assembly.plenary-agenda': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingfundir/${params?.plenary}/lidir`)
                    .then(response => response.json())
            }
            case 'assembly.issue': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/${params?.category}/${params?.issue}`)
                    .then(response => response.json());
            }
            case 'assembly.issues': {

                const types = ((params?.types as string[]) || []).join(',');

                const paramsArray = [];
                types.length && paramsArray.push(`malaflokkur=${types}`);
                params?.pointer && paramsArray.push(`bendill=${params?.pointer}`);

                const url = params?.category
                    ? `${storageHost}/loggjafarthing/${params?.assembly}/thingmal/${params?.category}${paramsArray ? `?${paramsArray.join('&')}` : ''}`
                    : `${storageHost}/loggjafarthing/${params?.assembly}/thingmal${paramsArray ? `?${paramsArray.join('&')}` : ''}`
                return fetch(url).then(response => response.json());
            }
            case 'assembly.issue.documents': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/${params?.category}/${params?.issue}/thingskjol`)
                    .then(response => response.json());
            }
            case 'assembly.issue.speeches': {
                if (params?.speech) {
                    return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/${params?.category}/${params?.issue}/readur?bendill=${params?.speech}`)
                        .then(response => response.json());
                } else {
                    return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/${params?.category}/${params?.issue}/readur`)
                        .then(response => response.json());
                }
            }
            case 'assembly.issue.speech.aggregation': {
                return fetch(`${storageHost}/loggjafarthing/${params?.assembly}/thingmal/${params?.category}/${params?.issue}/readur/samantekt`)
                    .then(response => response.json());
            }
            default:
                return Promise.reject();
        }
    }
};
