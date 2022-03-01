import type { Context } from './index.d.ts';
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

const congressmanIDs = [
    166,
    862,
    1330,
    412,
    806,
    1442,
    52,
    790,
    900,
    1242,
    887,
    74,
    254,
    524,
    170,
    366,
    359,
    666,
    1035,
    161,
    134,
    200,
    389,
    49,
    968,
    709,
    498,
    857,
    1466,
];

const parties = [
    { color: '00adef', name: 'Sjálfstæðisflokkur' },
    { color: '8ec83e', name: 'Framsóknarflokkur' },
    { color: 'da2128', name: 'Samfylkingin' },
    { color: '488e41', name: 'Vinstrihreyfingin - grænt framboð' },
    { color: '92278f', name: 'Björt framtíð' },
    { color: '522c7f', name: 'Píratar' },
    { color: 'f6a71d', name: 'Viðreisn' },
    { color: '199094', name: 'Miðflokkurinn' },
    { color: 'EE4D9B', name: 'Flokkur fólksins' },
];

const issues = [
    { type: 'l', name: 'Frumvarp til laga', subname: 'lagafrumvarp' },
    { type: 'a', name: 'Tillaga til ingslyktunar', subname: 'ingslyktunartillaga' },
    { type: 'f', name: 'Tillaga til ingslyktunar', subname: 'frestun funda' },
    { type: 's', name: 'Skrsla', subname: 'skrsla' },
    { type: 'b', name: 'Beini um skrslu', subname: 'beini um skrslu' },
    { type: 'm', name: 'Fyrirspurn', subname: 'fyrirspurn' },
    { type: 'q', name: 'Fyrirspurn', subname: 'fyrirspurn til skrifl. svars' },
    { type: 'v', name: 'Tillaga til ingslyktunar', subname: 'vantraust' },
    { type: 'ud', name: 'umrur utan dagskrr', subname: null },
    { type: 'ft', name: 'undirbinn fyrirspurnatmi', subname: null },
    { type: 'ff', name: 'fyrirspurnir til rherra skv. 7. mgr. 49. gr. ingskapa', subname: null },
    { type: 'um', name: 'srstk umra', subname: null },
    { type: 'uu', name: 'umrur utan dagskrr', subname: null },
    { type: 'n', name: 'lit', subname: 'lit nefndar' },
];

const issueStatus = [
    null,
    'Samþykkt sem lög frá Alþingi',
    'Bíður 1. umræðu',
    'Í nefnd eftir 1. umræðu',
    'Samþykkt sem ályktun Alþingis',
    'Fyrirspurninni var svarað munnlega',
    'Fyrirspurninni var svarað skriflega',
    'Vísað til ríkisstjórnar',
    'Fyrirspurnin var felld niður vegna ráðherraskipta',
    'Fyrirspurninni var ekki svarað',
    'Bíður 2. umröðu',
    'Í nefnd eftir 2. umræðu',
    'Ekki samþykkt',
    'Fyrirspurnin var kölluð aftur',
    'Fyrirspurninni hefur ekki verið svarað',
    'Bíður 3. umræðu',
]

const congressmanType = [
    null,
    'forseti alingis',
    'fjrmlarherra',
    'dmsmlarherra',
    'viskiptarherra',
    'landbnaarrherra',
    'heilbrigisrherra',
    'atvinnumlarherra',
    'flagsmlarherra',
    'forstisrherra',
    'inaarrherra',
    'sjvartvegsrherra',
    'menntamlarherra',
    'samgngurherra',
    'utanrkisrherra',
    'umhverfisrherra',
    'rherra Hagstofu slands',
    'rherra norrnna samstarfsmla',
    'flags- og tryggingamlarherra',
    'sjvartvegs- og landbnaarrherra',
    'efnahags- og viskiptarherra',
    'mennta- og menningarmlarherra',
    'dmsmla-  og mannrttindarherra',
    'samgngu-  og sveitarstjrnarrherra',
    'velferarrherra',
    'innanrkisrherra',
    'fjrmla- og efnahagsrherra',
    'umhverfis- og aulindarherra',
    'atvinnuvega- og nskpunarrherra',
    'flags- og hsnismlarherra',
    'inaar- og viskiptarherra',
    'flags- og jafnrttismlarherra',
    'feramla-, inaar- og nskpunarrherra',
    'samgngu- og sveitarstjrnarrherra',
    'flags- og barnamlarherra',
    'utanrkis- og runarsamvinnurherra',
    'umhverfis-, orku- og loftslagsrherra',
    'flagsmla- og vinnumarkasrherra',
    'innviarherra',
    'mennta- og barnamlarherra',
    'vsinda-, inaar- og nskpunarrherra',
    'feramla-, viskipta- og menningarmlarherra',
    'flags- og vinnumarkasrherra',
    'matvlarherra',
    'hskla-, inaar- og nskpunarrherra',
]

const speechType = [
    'ræða',
    'um atkvæðagreiðslu',
    'flutningsræða',
    'um fundarstjórn',
    'ótbýting þingskjala',
    'grein fyrir atkvæði',
    'svar',
    'útvarpsræða',
    'prent',
    'jómfrúrræða',
    'andsvar',
    'ber af sér sakir',
    'málsh. um fundarstjórn',
];

const constituencies = [
    { id: 1, name: '-', short: '-', long: null },
    { id: 2, name: 'Austur-H�navatnss�sla', short: 'AH', long: 'A.-H�nv.' },
    { id: 3, name: 'Austurland', short: 'AL', long: 'Austurl.' },
    { id: 4, name: 'Austur-Skaftafellss�sla', short: 'AS', long: 'A.-Skaft.' },
    { id: 5, name: 'Akureyri', short: 'Ak', long: 'Ak.' },
    { id: 6, name: 'Bar�astrandars�sla', short: 'Ba', long: 'Bar�.' },
    { id: 7, name: 'Borgarfjar�ars�sla', short: 'Bo', long: 'Borgf.' },
    { id: 8, name: 'Dalas�sla', short: 'Da', long: 'Dal.' },
    { id: 9, name: 'Eyjafjar�ars�sla', short: 'Ey', long: 'Eyf.' },
    { id: 10, name: 'Gullbringu- og Kj�sars�sla', short: 'GK', long: 'G.-K.' },
    { id: 11, name: 'Hafnarfj�r�ur', short: 'Hf', long: 'Hafnf.' },
    { id: 12, name: 'H�navatnss�sla', short: 'H�', long: 'H�nv.' },
    { id: 13, name: 'Konungkj�rinn', short: 'Kk', long: 'Kgk.' },
    { id: 14, name: 'Landskj�rinn (<110 lt.)', short: 'LA', long: 'Landsk.' },
    { id: 15, name: 'M�ras�sla', short: 'M�', long: 'M�r.' },
    { id: 16, name: 'Nor�urland eystra', short: 'NE', long: 'Nor�url. e.' },
    { id: 17, name: 'Nor�ur-M�las�sla', short: 'NM', long: 'N.-M�l.' },
    { id: 18, name: 'Nor�urland vestra', short: 'NV', long: 'Nor�url. v.' },
    { id: 19, name: 'Nor�ur-�safjar�ars�sla', short: 'N�', long: 'N.-�sf.' },
    { id: 20, name: 'Nor�ur-�ingeyjars�sla', short: 'N�', long: 'N.-�ing.' },
    { id: 21, name: 'Reykjanes', short: 'RN', long: 'Reykn.' },
    { id: 22, name: 'Reykjav�k', short: 'RV', long: 'Reykv.' },
    { id: 23, name: 'Rang�rvallas�sla', short: 'Ra', long: 'Rang.' },
    { id: 24, name: 'Reykjav�k', short: 'Rv', long: 'Reykv.' },
    { id: 25, name: 'Su�urland', short: 'SL', long: 'Su�url.' },
    { id: 26, name: 'Su�ur-M�las�sla', short: 'SM', long: 'S.-M�l.' },
    { id: 27, name: 'Skaftafells�sla', short: 'Sa', long: 'Skaft.' },
    { id: 28, name: 'Sey�isfj�r�ur', short: 'Sf', long: 'Sey�f.' },
    { id: 29, name: 'Siglufj�r�ur', short: 'Si', long: 'Siglf.' },
    { id: 30, name: 'Skagafjar�ars�sla', short: 'Sk', long: 'Skagf.' },
    { id: 31, name: 'Sn�fellsness�sla', short: 'Sn', long: 'Sn�f.' },
    { id: 32, name: 'Strandas�sla', short: 'St', long: 'Strand.' },
    { id: 33, name: 'Su�ur-�ingeyjars�sla', short: 'S�', long: 'S.-�ing.' },
    { id: 34, name: 'Vestfir�ir', short: 'VF', long: 'Vestf.' },
    { id: 35, name: 'Vestur-H�navatnss�sla', short: 'VH', long: 'V.-H�nv.' },
    { id: 36, name: 'Vesturland', short: 'VL', long: 'Vesturl.' },
    { id: 37, name: 'Vestur-Skaftafellss�sla', short: 'VS', long: 'V.-Skaft.' },
    { id: 38, name: 'Vestmannaeyjar', short: 'Vm', long: 'Vestm.' },
    { id: 39, name: 'Vestur-�safjar�ars�sla', short: 'V�', long: 'V.-�sf.' },
    { id: 40, name: '�rness�sla', short: '�r', long: '�rn.' },
    { id: 41, name: '�safjar�ars�sla', short: '�f', long: '�sf.' },
    { id: 42, name: '�safj�r�ur', short: '�s', long: '�saf.' },
    { id: 43, name: '�ingeyjars�sla', short: '�i', long: '�ing.' },
    { id: 44, name: 'Reykjav�kurkj�rd�mi nor�ur', short: 'RN', long: 'Reykv. n.' },
    { id: 45, name: 'Reykjav�kurkj�rd�mi su�ur', short: 'RS', long: 'Reykv. s.' },
    { id: 46, name: 'Su�urkj�rd�mi', short: 'SU', long: 'Su�urk.' },
    { id: 47, name: 'Su�vesturkj�rd�mi', short: 'SV', long: 'Su�vest.' },
    { id: 48, name: 'Nor�vesturkj�rd�mi', short: 'NV', long: 'Nor�vest.' },
    { id: 49, name: 'Nor�austurkj�rd�mi', short: 'NA', long: 'Nor�aust.' },
    { id: 50, name: 'Su�vesturkj�rd�mi', short: 'SV', long: 'Su�vest.' },
    { id: 51, name: 'Nor�vesturkj�rd�mi', short: 'NV', long: 'Nor�vest.' },
    { id: 52, name: 'Su�vesturkj�rd�mi', short: 'SV', long: 'Su�vest.' },
    { id: 53, name: 'Nor�vesturkj�rd�mi', short: 'NV', long: 'Nor�vest.' }
];

export function oneOf<T>(options: Array<T>): T {
    return options.slice().sort(() => 0.5 - Math.random()).pop()!;
}

export const MockClient: Context = {
    get(arg: string, params?: Record<string, unknown>): Promise<Record<string, unknown> | Array<Record<string, unknown>>> {
        switch (arg) {
            case 'assembly':
                return Promise.resolve(
                    generateAssembly(params?.assembly as number)
                );
            case 'assemblies':
                return Promise.resolve(
                    Array.from({ length: 152 }).map((_, i) => (generateAssembly(i + 1)))
                );
            case 'assembly.congressman':
                return Promise.resolve(
                    generateCongressman(params?.congressman as number)
                );
            case 'assembly.congressmen':
                return Promise.resolve(
                    congressmanIDs.map((i) => generateCongressman(i))
                );
            case 'assembly.issue':
                return Promise.resolve(
                    generateIssue(params?.issue as number, params?.assembly as number, params?.category as string)
                );
            case 'assembly.issues':
                return Promise.resolve(
                    Array.from({ length: Math.random() * 100 }).map((_, i) => generateIssue(
                        i + 1,
                        params?.assembly as number,
                        (Math.random() * 1) ? 'a' : 'b'
                    ))
                );
            case 'assembly.issue.documents':
                return Promise.resolve(
                    Array.from({ length: Math.random() * 100 }).map((_, i) => generateDocument(
                        i + 1,
                        params?.assembly as number,
                        params?.issue as number,
                        params?.category as string,
                    ))
                );
            case 'assembly.issue.speeches':
                return Promise.resolve(
                    Array.from({ length: Math.random() * 100 }).map((_, i) => generateSpeech(
                        i + 1,
                        params?.assembly as number,
                        params?.issue as number,
                        params?.category as string,
                    ))
                );
            default:
                return Promise.reject();
        }
    }
};

function generateAssembly(id: number) {
    return {
        id: id,
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
    }
}

function generateCongressman(id: number) {
    return {
        id: id,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        birth: new Date(faker.date.past()).toISOString(),
        death: null,
        abbreviation: faker.hacker.abbreviation(),
        parties: [generateParty(faker.random.number())],
        constituencies: [generateConstituencies()]
    }
}

function generateIssue(id: number, assembly: number, category: string) {
    const issueType = oneOf<{ type: string, name: string, subname: string | null}>(issues);

    return {
        id: id,
        name: faker.lorem.sentence(),
        category: category,
        assembly: generateAssembly(assembly),
        congressman: generateCongressman(oneOf(congressmanIDs) as number),
        subName: faker.lorem.word(),
        type: issueType.type,
        typeName: issueType.name,
        typeSubName: issueType.subname,
        status: oneOf(issueStatus),
        question: faker.lorem.paragraphs(),
        goal: faker.lorem.paragraphs(),
        major_changes: faker.lorem.paragraphs(),
        changes_in_law: faker.lorem.paragraphs(),
        costs_and_revenues: faker.lorem.paragraphs(),
        deliveries: faker.lorem.paragraphs(),
        additional_information: faker.lorem.paragraphs(),
    }
}

function generateDocument(id: number, assembly: number, issue: number, category: string) {
    return {
        id: id,
        assembly: generateAssembly(assembly),
        issue: generateIssue(issue, assembly, category),
        date: new Date(faker.date.past()).toISOString(),
        url: faker.internet.url(),
        type: faker.lorem.word(),
    }
}

function generateSpeech(id: number, assembly: number, issue: number, category: string) {
    return {
        id: id,
        // plenary,
        assembly: generateAssembly(assembly),
        issue: generateIssue(issue, assembly, category),
        category: faker.lorem.word(),
        congressman: generateCongressman(oneOf(congressmanIDs) as number),
        congressman_type: oneOf(congressmanType),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
        text: faker.lorem.paragraphs(),
        type: oneOf(speechType),
        iteration: '*',
        word_count: faker.random.number(),
        validated: oneOf([true, false]),
    };
}

function generateParty(id: number) {
    const party = oneOf<{color: string, name: string}>(parties);

    return {
        id,
        name: party.name,
        abbrShort: faker.lorem.word(),
        abbrLong: faker.lorem.word(),
        color: party.color,
    }
}

function generateConstituencies() {
    const constituency = oneOf<{ id: number, name: string, short: string, long: string|null }>(constituencies);
    return {
        id : constituency.id,
        name: constituency.name,
        abbr_short: constituency.short,
        abbr_long: constituency.long,
        description: faker.lorem.paragraphs(),
    }
}