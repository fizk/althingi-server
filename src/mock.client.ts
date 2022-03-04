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
    "forseti alþingis",
    "fjármálaráðherra",
    "dómsmálaráðherra",
    "viðskiptaráðherra",
    "landbúnaðarráðherra",
    "heilbrigðisráðherra",
    "atvinnumálaráðherra",
    "félagsmálaráðherra",
    "forsætisráðherra",
    "iðnaðarráðherra",
    "sjávarútvegsráðherra",
    "menntamálaráðherra",
    "samgönguráðherra",
    "utanríkisráðherra",
    "umhverfisráðherra",
    "ráðherra Hagstofu Íslands",
    "ráðherra norrænna samstarfsmála",
    "félags- og tryggingamálaráðherra",
    "sjávarútvegs- og landbúnaðarráðherra",
    "efnahags- og viðskiptaráðherra",
    "mennta- og menningarmálaráðherra",
    "dómsmála-  og mannréttindaráðherra",
    "samgöngu-  og sveitarstjórnarráðherra",
    "velferðarráðherra",
    "innanríkisráðherra",
    "fjármála- og efnahagsráðherra",
    "umhverfis- og auðlindaráðherra",
    "atvinnuvega- og nýsköpunarráðherra",
    "félags- og húsnæðismálaráðherra",
    "iðnaðar- og viðskiptaráðherra",
    "félags- og jafnréttismálaráðherra",
    "ferðamála-, iðnaðar- og nýsköpunarráðherra",
    "samgöngu- og sveitarstjórnarráðherra",
    "félags- og barnamálaráðherra",
    "utanríkis- og þróunarsamvinnuráðherra",
    "umhverfis-, orku- og loftslagsráðherra",
    "félagsmála- og vinnumarkaðsráðherra",
    "innviðaráðherra",
    "mennta- og barnamálaráðherra",
    "vísinda-, iðnaðar- og nýsköpunarráðherra",
    "ferðamála-, viðskipta- og menningarmálaráðherra",
    "félags- og vinnumarkaðsráðherra",
    "matvælaráðherra",
    "háskóla-, iðnaðar- og nýsköpunarráðherra",
]

const speechType = [
    "ræða",
    "um atkvæðagreiðslu",
    "flutningsræða",
    "um fundarstjórn",
    "útbýting þingskjala",
    "grein fyrir atkvæði",
    "svar",
    "útvarpsræða",
    "prent",
    "jómfrúrræða",
    "andsvar",
    "ber af sér sakir",
    "málsh. um fundarstjórn",
];

const constituencies = [
    {
        id: 1,
        name: "-",
        short: "-",
        long: null
    },
    {
        id: 2,
        name: "Austur-Húnavatnssýsla",
        short: "AH",
        long: "A.-Húnv."
    },
    {
        id: 3,
        name: "Austurland",
        short: "AL",
        long: "Austurl."
    },
    {
        id: 4,
        name: "Austur-Skaftafellssýsla",
        short: "AS",
        long: "A.-Skaft."
    },
    {
        id: 5,
        name: "Akureyri",
        short: "Ak",
        long: "Ak."
    },
    {
        id: 6,
        name: "Barðastrandarsýsla",
        short: "Ba",
        long: "Barð."
    },
    {
        id: 7,
        name: "Borgarfjarðarsýsla",
        short: "Bo",
        long: "Borgf."
    },
    {
        id: 8,
        name: "Dalasýsla",
        short: "Da",
        long: "Dal."
    },
    {
        id: 9,
        name: "Eyjafjarðarsýsla",
        short: "Ey",
        long: "Eyf."
    },
    {
        id: 10,
        name: "Gullbringu- og Kjósarsýsla",
        short: "GK",
        long: "G.-K."
    },
    {
        id: 11,
        name: "Hafnarfjörður",
        short: "Hf",
        long: "Hafnf."
    },
    {
        id: 12,
        name: "Húnavatnssýsla",
        short: "Hú",
        long: "Húnv."
    },
    {
        id: 13,
        name: "Konungkjörinn",
        short: "Kk",
        long: "Kgk."
    },
    {
        id: 14,
        name: "Landskjörinn (<110 lt.)",
        short: "LA",
        long: "Landsk."
    },
    {
        id: 15,
        name: "Mýrasýsla",
        short: "Mý",
        long: "Mýr."
    },
    {
        id: 16,
        name: "Norðurland eystra",
        short: "NE",
        long: "Norðurl. e."
    },
    {
        id: 17,
        name: "Norður-Múlasýsla",
        short: "NM",
        long: "N.-Múl."
    },
    {
        id: 18,
        name: "Norðurland vestra",
        short: "NV",
        long: "Norðurl. v."
    },
    {
        id: 19,
        name: "Norður-Ísafjarðarsýsla",
        short: "NÍ",
        long: "N.-Ísf."
    },
    {
        id: 20,
        name: "Norður-Þingeyjarsýsla",
        short: "NÞ",
        long: "N.-Þing."
    },
    {
        id: 21,
        name: "Reykjanes",
        short: "RN",
        long: "Reykn."
    },
    {
        id: 22,
        name: "Reykjavík",
        short: "RV",
        long: "Reykv."
    },
    {
        id: 23,
        name: "Rangárvallasýsla",
        short: "Ra",
        long: "Rang."
    },
    {
        id: 24,
        name: "Reykjavík",
        short: "Rv",
        long: "Reykv."
    },
    {
        id: 25,
        name: "Suðurland",
        short: "SL",
        long: "Suðurl."
    },
    {
        id: 26,
        name: "Suður-Múlasýsla",
        short: "SM",
        long: "S.-Múl."
    },
    {
        id: 27,
        name: "Skaftafellsýsla",
        short: "Sa",
        long: "Skaft."
    },
    {
        id: 28,
        name: "Seyðisfjörður",
        short: "Sf",
        long: "Seyðf."
    },
    {
        id: 29,
        name: "Siglufjörður",
        short: "Si",
        long: "Siglf."
    },
    {
        id: 30,
        name: "Skagafjarðarsýsla",
        short: "Sk",
        long: "Skagf."
    },
    {
        id: 31,
        name: "Snæfellsnessýsla",
        short: "Sn",
        long: "Snæf."
    },
    {
        id: 32,
        name: "Strandasýsla",
        short: "St",
        long: "Strand."
    },
    {
        id: 33,
        name: "Suður-Þingeyjarsýsla",
        short: "SÞ",
        long: "S.-Þing."
    },
    {
        id: 34,
        name: "Vestfirðir",
        short: "VF",
        long: "Vestf."
    },
    {
        id: 35,
        name: "Vestur-Húnavatnssýsla",
        short: "VH",
        long: "V.-Húnv."
    },
    {
        id: 36,
        name: "Vesturland",
        short: "VL",
        long: "Vesturl."
    },
    {
        id: 37,
        name: "Vestur-Skaftafellssýsla",
        short: "VS",
        long: "V.-Skaft."
    },
    {
        id: 38,
        name: "Vestmannaeyjar",
        short: "Vm",
        long: "Vestm."
    },
    {
        id: 39,
        name: "Vestur-Ísafjarðarsýsla",
        short: "VÍ",
        long: "V.-Ísf."
    },
    {
        id: 40,
        name: "Árnessýsla",
        short: "Ár",
        long: "Árn."
    },
    {
        id: 41,
        name: "Ísafjarðarsýsla",
        short: "Íf",
        long: "Ísf."
    },
    {
        id: 42,
        name: "Ísafjörður",
        short: "Ís",
        long: "Ísaf."
    },
    {
        id: 43,
        name: "Þingeyjarsýsla",
        short: "Þi",
        long: "Þing."
    },
    {
        id: 44,
        name: "Reykjavíkurkjördæmi norður",
        short: "RN",
        long: "Reykv. n."
    },
    {
        id: 45,
        name: "Reykjavíkurkjördæmi suður",
        short: "RS",
        long: "Reykv. s."
    },
    {
        id: 46,
        name: "Suðurkjördæmi",
        short: "SU",
        long: "Suðurk."
    },
    {
        id: 47,
        name: "Suðvesturkjördæmi",
        short: "SV",
        long: "Suðvest."
    },
    {
        id: 48,
        name: "Norðvesturkjördæmi",
        short: "NV",
        long: "Norðvest."
    },
    {
        id: 49,
        name: "Norðausturkjördæmi",
        short: "NA",
        long: "Norðaust."
    },
    {
        id: 50,
        name: "Suðvesturkjördæmi",
        short: "SV",
        long: "Suðvest."
    },
    {
        id: 51,
        name: "Norðvesturkjördæmi",
        short: "NV",
        long: "Norðvest."
    },
    {
        id: 52,
        name: "Suðvesturkjördæmi",
        short: "SV",
        long: "Suðvest."
    },
    {
        id: 53,
        name: "Norðvesturkjördæmi",
        short: "NV",
        long: "Norðvest."
    }
];

export function oneOf<T>(options: Array<T>): T {
    return options.slice().sort(() => 0.5 - Math.random()).pop()!;
}

export const MockClient: Context = {
    get(arg: string, params?: Record<string, unknown>): Promise<Record<string, unknown> | Array<Record<string, unknown>>> {
        switch (arg) {
            case 'person':
                return Promise.resolve(
                    generateCongressman(params?.person as number)
                );
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
            case 'assembly.plenary':
                return Promise.resolve(
                    generatePlenary(params?.plenary as number | null, params?.assembly as number)
                );
            case 'assembly.plenaries':
                return Promise.resolve(
                    Array.from({ length: Math.random() * 20 })
                        .map((_, i) => generatePlenary(i, params?.assembly as number))
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
                    Array.from({ length: Math.random() * 5 }).map((_, i) => generateSpeech(
                        i + Number(params?.pointer),
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
        id: `${faker.random.uuid()}${id}`,
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
    const constituency = oneOf<{ id: number, name: string, short: string, long: string | null }>(constituencies);
    return {
        id : constituency.id,
        name: constituency.name,
        abbr_short: constituency.short,
        abbr_long: constituency.long,
        description: faker.lorem.paragraphs(),
    }
}

function generatePlenary(id: number | null, assembly: number) {

    // If ID is null, then we want to return the latest PLenary

    const identifier: number = id === null ? faker.random.number() : id ;
    return {
        id: identifier,
        name: id !== null ? oneOf([
            null,
            'þingsetningarfundur',
            'framhald þingsetningarfundar',
            '2. fundur',
            '4. fundur',
        ]) : 'Latest',
        assembly: generateAssembly(assembly),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
        agenda: Array.from({ length: Math.random() * 20 }).map((_, i) => generatePlenaryItem(i, assembly, identifier))
    }
}

function generatePlenaryItem(id: number, assembly: number , _plenary: number) {
    return {
        id,
        assembly: generateAssembly(assembly),
        issue: generateIssue(1, assembly, 'A'),
        // plenary: '',
        iteration_type: oneOf([
            '1',
            'F',
            null,
            '*',
            '2',
            'E',
            '3',
            'S',
        ]),
        iteration_continue: oneOf([
            null,
            '1',
            '5',
            '6',
            '7',
            '8',
            '9',
            '2',
            '3',
            '4',

        ]),
        iteration_comment: oneOf([
            '1. umræða',
            'fyrri umræða',
            'hvort leyfð skuli',
            null,
            '2. umræða',
            'framhald 1. umræðu',
            'ein umræða',
            'framhald fyrri umræðu',
            '3. umræða',
            'framhald 2. umræðu',
            'síðari umræða',
            'framhald 3. umræðu',
            'framhald síðari umræðu',
            'framhald',
            'framhald ein umræðu',

        ]),
        comment: oneOf([
            null,
            'Ef leyft verður  afbr. fyrir frumskjali.',
            'atkvæðagreiðsla  (Atkvæðagreiðsla).',
            'Ef leyft verður  afbr. (of skammt liðið frá síðustu umræðu).',
            'Ef leyft verður  afbr. fyrir nál.',
            'Ef leyft verður  afbr. (of seint fram komið)',
        ]),
        comment_type: oneOf([
            null,
            'F',
            'A',
            'U',
            'N',
            '6',
        ]),
        posed: null,
        answerer: null,
        counter_answerer: null,
        instigator: null,
    }

}