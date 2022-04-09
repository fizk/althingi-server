import type { Context } from './index.d.ts';
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

const __dirname = new URL('.', import.meta.url).pathname;

console.log(__dirname);

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
        constituency_id: 1,
        name: "-",
        short: "-",
        long: null
    },
    {
        constituency_id: 2,
        name: "Austur-Húnavatnssýsla",
        short: "AH",
        long: "A.-Húnv."
    },
    {
        constituency_id: 3,
        name: "Austurland",
        short: "AL",
        long: "Austurl."
    },
    {
        constituency_id: 4,
        name: "Austur-Skaftafellssýsla",
        short: "AS",
        long: "A.-Skaft."
    },
    {
        constituency_id: 5,
        name: "Akureyri",
        short: "Ak",
        long: "Ak."
    },
    {
        constituency_id: 6,
        name: "Barðastrandarsýsla",
        short: "Ba",
        long: "Barð."
    },
    {
        constituency_id: 7,
        name: "Borgarfjarðarsýsla",
        short: "Bo",
        long: "Borgf."
    },
    {
        constituency_id: 8,
        name: "Dalasýsla",
        short: "Da",
        long: "Dal."
    },
    {
        constituency_id: 9,
        name: "Eyjafjarðarsýsla",
        short: "Ey",
        long: "Eyf."
    },
    {
        constituency_id: 10,
        name: "Gullbringu- og Kjósarsýsla",
        short: "GK",
        long: "G.-K."
    },
    {
        constituency_id: 11,
        name: "Hafnarfjörður",
        short: "Hf",
        long: "Hafnf."
    },
    {
        constituency_id: 12,
        name: "Húnavatnssýsla",
        short: "Hú",
        long: "Húnv."
    },
    {
        constituency_id: 13,
        name: "Konungkjörinn",
        short: "Kk",
        long: "Kgk."
    },
    {
        constituency_id: 14,
        name: "Landskjörinn (<110 lt.)",
        short: "LA",
        long: "Landsk."
    },
    {
        constituency_id: 15,
        name: "Mýrasýsla",
        short: "Mý",
        long: "Mýr."
    },
    {
        constituency_id: 16,
        name: "Norðurland eystra",
        short: "NE",
        long: "Norðurl. e."
    },
    {
        constituency_id: 17,
        name: "Norður-Múlasýsla",
        short: "NM",
        long: "N.-Múl."
    },
    {
        constituency_id: 18,
        name: "Norðurland vestra",
        short: "NV",
        long: "Norðurl. v."
    },
    {
        constituency_id: 19,
        name: "Norður-Ísafjarðarsýsla",
        short: "NÍ",
        long: "N.-Ísf."
    },
    {
        constituency_id: 20,
        name: "Norður-Þingeyjarsýsla",
        short: "NÞ",
        long: "N.-Þing."
    },
    {
        constituency_id: 21,
        name: "Reykjanes",
        short: "RN",
        long: "Reykn."
    },
    {
        constituency_id: 22,
        name: "Reykjavík",
        short: "RV",
        long: "Reykv."
    },
    {
        constituency_id: 23,
        name: "Rangárvallasýsla",
        short: "Ra",
        long: "Rang."
    },
    {
        constituency_id: 24,
        name: "Reykjavík",
        short: "Rv",
        long: "Reykv."
    },
    {
        constituency_id: 25,
        name: "Suðurland",
        short: "SL",
        long: "Suðurl."
    },
    {
        constituency_id: 26,
        name: "Suður-Múlasýsla",
        short: "SM",
        long: "S.-Múl."
    },
    {
        constituency_id: 27,
        name: "Skaftafellsýsla",
        short: "Sa",
        long: "Skaft."
    },
    {
        constituency_id: 28,
        name: "Seyðisfjörður",
        short: "Sf",
        long: "Seyðf."
    },
    {
        constituency_id: 29,
        name: "Siglufjörður",
        short: "Si",
        long: "Siglf."
    },
    {
        constituency_id: 30,
        name: "Skagafjarðarsýsla",
        short: "Sk",
        long: "Skagf."
    },
    {
        constituency_id: 31,
        name: "Snæfellsnessýsla",
        short: "Sn",
        long: "Snæf."
    },
    {
        constituency_id: 32,
        name: "Strandasýsla",
        short: "St",
        long: "Strand."
    },
    {
        constituency_id: 33,
        name: "Suður-Þingeyjarsýsla",
        short: "SÞ",
        long: "S.-Þing."
    },
    {
        constituency_id: 34,
        name: "Vestfirðir",
        short: "VF",
        long: "Vestf."
    },
    {
        constituency_id: 35,
        name: "Vestur-Húnavatnssýsla",
        short: "VH",
        long: "V.-Húnv."
    },
    {
        constituency_id: 36,
        name: "Vesturland",
        short: "VL",
        long: "Vesturl."
    },
    {
        constituency_id: 37,
        name: "Vestur-Skaftafellssýsla",
        short: "VS",
        long: "V.-Skaft."
    },
    {
        constituency_id: 38,
        name: "Vestmannaeyjar",
        short: "Vm",
        long: "Vestm."
    },
    {
        constituency_id: 39,
        name: "Vestur-Ísafjarðarsýsla",
        short: "VÍ",
        long: "V.-Ísf."
    },
    {
        constituency_id: 40,
        name: "Árnessýsla",
        short: "Ár",
        long: "Árn."
    },
    {
        constituency_id: 41,
        name: "Ísafjarðarsýsla",
        short: "Íf",
        long: "Ísf."
    },
    {
        constituency_id: 42,
        name: "Ísafjörður",
        short: "Ís",
        long: "Ísaf."
    },
    {
        constituency_id: 43,
        name: "Þingeyjarsýsla",
        short: "Þi",
        long: "Þing."
    },
    {
        constituency_id: 44,
        name: "Reykjavíkurkjördæmi norður",
        short: "RN",
        long: "Reykv. n."
    },
    {
        constituency_id: 45,
        name: "Reykjavíkurkjördæmi suður",
        short: "RS",
        long: "Reykv. s."
    },
    {
        constituency_id: 46,
        name: "Suðurkjördæmi",
        short: "SU",
        long: "Suðurk."
    },
    {
        constituency_id: 47,
        name: "Suðvesturkjördæmi",
        short: "SV",
        long: "Suðvest."
    },
    {
        constituency_id: 48,
        name: "Norðvesturkjördæmi",
        short: "NV",
        long: "Norðvest."
    },
    {
        constituency_id: 49,
        name: "Norðausturkjördæmi",
        short: "NA",
        long: "Norðaust."
    },
    {
        constituency_id: 50,
        name: "Suðvesturkjördæmi",
        short: "SV",
        long: "Suðvest."
    },
    {
        constituency_id: 51,
        name: "Norðvesturkjördæmi",
        short: "NV",
        long: "Norðvest."
    },
    {
        constituency_id: 52,
        name: "Suðvesturkjördæmi",
        short: "SV",
        long: "Suðvest."
    },
    {
        constituency_id: 53,
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
            case 'assembly.congressmen.sessions': {
                return Deno.readTextFile('/app/src/data/thingsetur.json').then(data => JSON.parse(data));
            }
            case 'assembly.government.parties': {
                return Deno.readTextFile('/app/src/data/stjornarflokkar.json').then(data => JSON.parse(data));
            }
            case 'assembly.constituencies.sessions': {
                return Deno.readTextFile('/app/src/data/kjordaemi.json').then(data => JSON.parse(data));
            }
            case 'assembly.presidents.sessions': {
                return Deno.readTextFile('/app/src/data/forsetar.json').then(data => JSON.parse(data));
            }
            case 'assembly.committees.sessions': {
                return Deno.readTextFile('/app/src/data/nefndir.json').then(data => JSON.parse(data));
            }
            case 'assembly.parties': {
                return Promise.resolve(assemblyParties);
            }
            case 'assembly.inflation': {
                return Deno.readTextFile('/app/src/data/verdbolga.json').then(data => JSON.parse(data));
            }
            case 'assembly.parties.sessions': {
                return Deno.readTextFile('/app/src/data/flokkar.json').then(data => JSON.parse(data));
            }
            case 'assembly.government.sessions': {
                return Deno.readTextFile('/app/src/data/rikisstjorn.json').then(data => JSON.parse(data));
            }
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

// ------------------------------


const congressmenSessions = [
    {
        _id: 675,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "AtlG",
            birth: "1947-08-12T00:00:00.000Z",
            congressman_id: 675,
            death: null,
            name: "Atli Gíslason"
        },
        sessions: [
            {
                _id: 217690,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 217690,
                to: "2011-10-24T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 217691,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2011-10-24T00:00:00.000Z",
                session_id: 217691,
                to: "2011-11-14T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 217692,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2011-11-14T00:00:00.000Z",
                session_id: 217692,
                to: "2012-02-06T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 217693,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2012-02-06T00:00:00.000Z",
                session_id: 217693,
                to: "2012-02-20T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 217694,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2012-02-20T00:00:00.000Z",
                session_id: 217694,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 650,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1968-06-12T00:00:00.000Z",
            congressman_id: 650,
            death: null,
            name: "Birgir Ármannsson"
        },
        sessions: [
            {
                _id: 215082,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1968-06-12T00:00:00.000Z",
                    congressman_id: 650,
                    death: null,
                    name: "Birgir Ármannsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 215082,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 728,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BirgJ",
            birth: "1967-04-17T00:00:00.000Z",
            congressman_id: 728,
            death: null,
            name: "Birgitta Jónsdóttir"
        },
        sessions: [
            {
                _id: 237933,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 237933,
                to: "2012-03-28T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 237934,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 237934,
                to: "2012-03-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 237935,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-31T00:00:00.000Z",
                session_id: 237935,
                to: "2012-06-11T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 237936,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-06-11T00:00:00.000Z",
                session_id: 237936,
                to: "2012-06-20T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 237937,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-06-20T00:00:00.000Z",
                session_id: 237937,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 651,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BJJ",
            birth: "1979-07-24T00:00:00.000Z",
            congressman_id: 651,
            death: null,
            name: "Birkir Jón Jónsson"
        },
        sessions: [
            {
                _id: 215124,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BJJ",
                    birth: "1979-07-24T00:00:00.000Z",
                    congressman_id: 651,
                    death: null,
                    name: "Birkir Jón Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 215124,
                to: "2012-04-16T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 215125,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BJJ",
                    birth: "1979-07-24T00:00:00.000Z",
                    congressman_id: 651,
                    death: null,
                    name: "Birkir Jón Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-04-16T00:00:00.000Z",
                session_id: 215125,
                to: "2012-05-07T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 215126,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BJJ",
                    birth: "1979-07-24T00:00:00.000Z",
                    congressman_id: 651,
                    death: null,
                    name: "Birkir Jón Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-05-07T00:00:00.000Z",
                session_id: 215126,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 652,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1970-01-26T00:00:00.000Z",
            congressman_id: 652,
            death: null,
            name: "Bjarni Benediktsson"
        },
        sessions: [
            {
                _id: 215145,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1970-01-26T00:00:00.000Z",
                    congressman_id: 652,
                    death: null,
                    name: "Bjarni Benediktsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 215145,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 653,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BjörgvS",
            birth: "1970-10-30T00:00:00.000Z",
            congressman_id: 653,
            death: null,
            name: "Björgvin G. Sigurðsson"
        },
        sessions: [
            {
                _id: 203791,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BjörgvS",
                    birth: "1970-10-30T00:00:00.000Z",
                    congressman_id: 653,
                    death: null,
                    name: "Björgvin G. Sigurðsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 203791,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 737,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BVG",
            birth: "1959-09-20T00:00:00.000Z",
            congressman_id: 737,
            death: null,
            name: "Björn Valur Gíslason"
        },
        sessions: [
            {
                _id: 169730,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BVG",
                    birth: "1959-09-20T00:00:00.000Z",
                    congressman_id: 737,
                    death: null,
                    name: "Björn Valur Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 169730,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 124,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1955-12-02T01:00:00.000Z",
            congressman_id: 124,
            death: null,
            name: "Einar K. Guðfinnsson"
        },
        sessions: [
            {
                _id: 138922,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-12-02T01:00:00.000Z",
                    congressman_id: 124,
                    death: null,
                    name: "Einar K. Guðfinnsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 138922,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 703,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "EyH",
            birth: "1972-12-12T00:00:00.000Z",
            congressman_id: 703,
            death: null,
            name: "Eygló Harðardóttir"
        },
        sessions: [
            {
                _id: 224162,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EyH",
                    birth: "1972-12-12T00:00:00.000Z",
                    congressman_id: 703,
                    death: null,
                    name: "Eygló Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 224162,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 722,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "GBS",
            birth: "1968-06-09T00:00:00.000Z",
            congressman_id: 722,
            death: null,
            name: "Gunnar Bragi Sveinsson"
        },
        sessions: [
            {
                _id: 238329,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238329,
                to: "2011-10-17T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 238330,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 238330,
                to: "2011-10-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 238331,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-31T00:00:00.000Z",
                session_id: 238331,
                to: "2012-04-23T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 238332,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-04-23T00:00:00.000Z",
                session_id: 238332,
                to: "2012-05-07T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 238333,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-05-07T00:00:00.000Z",
                session_id: 238333,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 683,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "GuðbH",
            birth: "1950-06-03T00:00:00.000Z",
            congressman_id: 683,
            death: null,
            name: "Guðbjartur Hannesson"
        },
        sessions: [
            {
                _id: 229918,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GuðbH",
                    birth: "1950-06-03T00:00:00.000Z",
                    congressman_id: 683,
                    death: null,
                    name: "Guðbjartur Hannesson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 229918,
                to: "2012-01-10T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 229919,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GuðbH",
                    birth: "1950-06-03T00:00:00.000Z",
                    congressman_id: 683,
                    death: null,
                    name: "Guðbjartur Hannesson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-10T00:00:00.000Z",
                session_id: 229919,
                to: "2012-01-16T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 229920,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GuðbH",
                    birth: "1950-06-03T00:00:00.000Z",
                    congressman_id: 683,
                    death: null,
                    name: "Guðbjartur Hannesson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-16T00:00:00.000Z",
                session_id: 229920,
                to: "2012-01-30T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 229921,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GuðbH",
                    birth: "1950-06-03T00:00:00.000Z",
                    congressman_id: 683,
                    death: null,
                    name: "Guðbjartur Hannesson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-30T00:00:00.000Z",
                session_id: 229921,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 727,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "GLG",
            birth: "1972-01-10T00:00:00.000Z",
            congressman_id: 727,
            death: null,
            name: "Guðfríður Lilja Grétarsdóttir"
        },
        sessions: [
            {
                _id: 229954,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 229954,
                to: "2011-10-17T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 229955,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 229955,
                to: "2011-10-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 229956,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-31T00:00:00.000Z",
                session_id: 229956,
                to: "2012-06-06T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 229957,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-06T00:00:00.000Z",
                session_id: 229957,
                to: "2012-06-20T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 229958,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-20T00:00:00.000Z",
                session_id: 229958,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 656,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1967-12-19T01:00:00.000Z",
            congressman_id: 656,
            death: null,
            name: "Guðlaugur Þór Þórðarson"
        },
        sessions: [
            {
                _id: 192752,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-12-19T01:00:00.000Z",
                    congressman_id: 656,
                    death: null,
                    name: "Guðlaugur Þór Þórðarson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 192752,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 704,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "GStein",
            birth: "1972-10-28T00:00:00.000Z",
            congressman_id: 704,
            death: null,
            name: "Guðmundur Steingrímsson"
        },
        sessions: [
            {
                _id: 232856,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GStein",
                    birth: "1972-10-28T00:00:00.000Z",
                    congressman_id: 704,
                    death: null,
                    name: "Guðmundur Steingrímsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 232856,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 658,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "HHj",
            birth: "1967-06-09T00:00:00.000Z",
            congressman_id: 658,
            death: null,
            name: "Helgi Hjörvar"
        },
        sessions: [
            {
                _id: 215873,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HHj",
                    birth: "1967-06-09T00:00:00.000Z",
                    congressman_id: 658,
                    death: null,
                    name: "Helgi Hjörvar"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 215873,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 686,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "HöskÞ",
            birth: "1973-05-08T00:00:00.000Z",
            congressman_id: 686,
            death: null,
            name: "Höskuldur Þórhallsson"
        },
        sessions: [
            {
                _id: 230140,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HöskÞ",
                    birth: "1973-05-08T00:00:00.000Z",
                    congressman_id: 686,
                    death: null,
                    name: "Höskuldur Þórhallsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230140,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 687,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1967-08-26T00:00:00.000Z",
            congressman_id: 687,
            death: null,
            name: "Illugi Gunnarsson"
        },
        sessions: [
            {
                _id: 230162,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-08-26T00:00:00.000Z",
                    congressman_id: 687,
                    death: null,
                    name: "Illugi Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230162,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 287,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1942-10-04T00:00:00.000Z",
            congressman_id: 287,
            death: null,
            name: "Jóhanna Sigurðardóttir"
        },
        sessions: [
            {
                _id: 134613,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1942-10-04T00:00:00.000Z",
                    congressman_id: 287,
                    death: null,
                    name: "Jóhanna Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 134613,
                to: "2012-05-19T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 134614,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1942-10-04T00:00:00.000Z",
                    congressman_id: 287,
                    death: null,
                    name: "Jóhanna Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-05-19T00:00:00.000Z",
                session_id: 134614,
                to: "2012-06-02T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 134615,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1942-10-04T00:00:00.000Z",
                    congressman_id: 287,
                    death: null,
                    name: "Jóhanna Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-06-02T00:00:00.000Z",
                session_id: 134615,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 371,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "JBjarn",
            birth: "1943-12-26T01:00:00.000Z",
            congressman_id: 371,
            death: null,
            name: "Jón Bjarnason"
        },
        sessions: [
            {
                _id: 201926,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JBjarn",
                    birth: "1943-12-26T01:00:00.000Z",
                    congressman_id: 371,
                    death: null,
                    name: "Jón Bjarnason"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 201926,
                to: "2011-12-31T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 201927,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JBjarn",
                    birth: "1943-12-26T01:00:00.000Z",
                    congressman_id: 371,
                    death: null,
                    name: "Jón Bjarnason"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-12-31T00:00:00.000Z",
                session_id: 201927,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 688,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1956-09-21T00:00:00.000Z",
            congressman_id: 688,
            death: null,
            name: "Jón Gunnarsson"
        },
        sessions: [
            {
                _id: 230301,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1956-09-21T00:00:00.000Z",
                    congressman_id: 688,
                    death: null,
                    name: "Jón Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230301,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 724,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "JRG",
            birth: "1958-07-06T00:00:00.000Z",
            congressman_id: 724,
            death: null,
            name: "Jónína Rós Guðmundsdóttir"
        },
        sessions: [
            {
                _id: 238582,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JRG",
                    birth: "1958-07-06T00:00:00.000Z",
                    congressman_id: 724,
                    death: null,
                    name: "Jónína Rós Guðmundsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238582,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 690,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1976-02-01T00:00:00.000Z",
            congressman_id: 690,
            death: null,
            name: "Katrín Jakobsdóttir"
        },
        sessions: [
            {
                _id: 230364,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1976-02-01T00:00:00.000Z",
                    congressman_id: 690,
                    death: null,
                    name: "Katrín Jakobsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230364,
                to: "2011-10-01T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 230365,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1976-02-01T00:00:00.000Z",
                    congressman_id: 690,
                    death: null,
                    name: "Katrín Jakobsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230365,
                to: "2011-10-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 230366,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1976-02-01T00:00:00.000Z",
                    congressman_id: 690,
                    death: null,
                    name: "Katrín Jakobsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-31T00:00:00.000Z",
                session_id: 230366,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 660,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "KaJúl",
            birth: "1974-11-23T00:00:00.000Z",
            congressman_id: 660,
            death: null,
            name: "Katrín Júlíusdóttir"
        },
        sessions: [
            {
                _id: 216134,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "KaJúl",
                    birth: "1974-11-23T00:00:00.000Z",
                    congressman_id: 660,
                    death: null,
                    name: "Katrín Júlíusdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 216134,
                to: "2012-01-10T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 216135,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "KaJúl",
                    birth: "1974-11-23T00:00:00.000Z",
                    congressman_id: 660,
                    death: null,
                    name: "Katrín Júlíusdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-10T00:00:00.000Z",
                session_id: 216135,
                to: "2012-01-20T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 216136,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "KaJúl",
                    birth: "1974-11-23T00:00:00.000Z",
                    congressman_id: 660,
                    death: null,
                    name: "Katrín Júlíusdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-20T00:00:00.000Z",
                session_id: 216136,
                to: "2012-08-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 216137,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "KaJúl",
                    birth: "1974-11-23T00:00:00.000Z",
                    congressman_id: 660,
                    death: null,
                    name: "Katrín Júlíusdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-09-01T00:00:00.000Z",
                session_id: 216137,
                to: "2012-09-10T00:00:00.000Z",
                type: "með varamann"
            }
        ]
    },
    {
        _id: 396,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1953-06-26T00:00:00.000Z",
            congressman_id: 396,
            death: null,
            name: "Kristján L. Möller"
        },
        sessions: [
            {
                _id: 202095,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1953-06-26T00:00:00.000Z",
                    congressman_id: 396,
                    death: null,
                    name: "Kristján L. Möller"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 202095,
                to: "2011-10-17T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 202096,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1953-06-26T00:00:00.000Z",
                    congressman_id: 396,
                    death: null,
                    name: "Kristján L. Möller"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 202096,
                to: "2011-10-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 202097,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1953-06-26T00:00:00.000Z",
                    congressman_id: 396,
                    death: null,
                    name: "Kristján L. Möller"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-31T00:00:00.000Z",
                session_id: 202097,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 691,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1957-07-15T00:00:00.000Z",
            congressman_id: 691,
            death: null,
            name: "Kristján Þór Júlíusson"
        },
        sessions: [
            {
                _id: 230517,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-07-15T00:00:00.000Z",
                    congressman_id: 691,
                    death: null,
                    name: "Kristján Þór Júlíusson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230517,
                to: "2011-10-17T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 230518,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-07-15T00:00:00.000Z",
                    congressman_id: 691,
                    death: null,
                    name: "Kristján Þór Júlíusson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 230518,
                to: "2011-10-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 230519,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-07-15T00:00:00.000Z",
                    congressman_id: 691,
                    death: null,
                    name: "Kristján Þór Júlíusson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-31T00:00:00.000Z",
                session_id: 230519,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 711,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "LMós",
            birth: "1961-11-11T01:00:00.000Z",
            congressman_id: 711,
            death: null,
            name: "Lilja Mósesdóttir"
        },
        sessions: [
            {
                _id: 238771,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LMós",
                    birth: "1961-11-11T01:00:00.000Z",
                    congressman_id: 711,
                    death: null,
                    name: "Lilja Mósesdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238771,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 714,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "LRM",
            birth: "1957-06-24T00:00:00.000Z",
            congressman_id: 714,
            death: null,
            name: "Lilja Rafney Magnúsdóttir"
        },
        sessions: [
            {
                _id: 179451,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 179451,
                to: "2012-03-27T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 179452,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-27T00:00:00.000Z",
                session_id: 179452,
                to: "2012-03-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 179453,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-31T00:00:00.000Z",
                session_id: 179453,
                to: "2012-06-13T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 179454,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-13T00:00:00.000Z",
                session_id: 179454,
                to: "2012-06-20T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 179455,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-20T00:00:00.000Z",
                session_id: 179455,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 1130,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "LGeir",
            birth: "1959-04-21T00:00:00.000Z",
            congressman_id: 1130,
            death: null,
            name: "Lúðvík Geirsson"
        },
        sessions: [
            {
                _id: 243958,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LGeir",
                    birth: "1959-04-21T00:00:00.000Z",
                    congressman_id: 1130,
                    death: null,
                    name: "Lúðvík Geirsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 243958,
                to: "2011-11-03T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 243959,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LGeir",
                    birth: "1959-04-21T00:00:00.000Z",
                    congressman_id: 1130,
                    death: null,
                    name: "Lúðvík Geirsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-11-03T00:00:00.000Z",
                session_id: 243959,
                to: "2011-12-02T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 243960,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LGeir",
                    birth: "1959-04-21T00:00:00.000Z",
                    congressman_id: 1130,
                    death: null,
                    name: "Lúðvík Geirsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-12-02T00:00:00.000Z",
                session_id: 243960,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 725,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "MSch",
            birth: "1972-04-23T00:00:00.000Z",
            congressman_id: 725,
            death: null,
            name: "Magnús Orri Schram"
        },
        sessions: [
            {
                _id: 238779,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MSch",
                    birth: "1972-04-23T00:00:00.000Z",
                    congressman_id: 725,
                    death: null,
                    name: "Magnús Orri Schram"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238779,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 723,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "MT",
            birth: "1972-05-20T00:00:00.000Z",
            congressman_id: 723,
            death: null,
            name: "Margrét Tryggvadóttir"
        },
        sessions: [
            {
                _id: 238785,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MT",
                    birth: "1972-05-20T00:00:00.000Z",
                    congressman_id: 723,
                    death: null,
                    name: "Margrét Tryggvadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238785,
                to: "2012-03-28T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 238786,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MT",
                    birth: "1972-05-20T00:00:00.000Z",
                    congressman_id: 723,
                    death: null,
                    name: "Margrét Tryggvadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 238786,
                to: "2012-03-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 238787,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MT",
                    birth: "1972-05-20T00:00:00.000Z",
                    congressman_id: 723,
                    death: null,
                    name: "Margrét Tryggvadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-31T00:00:00.000Z",
                session_id: 238787,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 662,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "MÁ",
            birth: "1953-10-30T01:00:00.000Z",
            congressman_id: 662,
            death: null,
            name: "Mörður Árnason"
        },
        sessions: [
            {
                _id: 190785,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MÁ",
                    birth: "1953-10-30T01:00:00.000Z",
                    congressman_id: 662,
                    death: null,
                    name: "Mörður Árnason"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 190785,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 719,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1957-04-09T00:00:00.000Z",
            congressman_id: 719,
            death: null,
            name: "Oddný G. Harðardóttir"
        },
        sessions: [
            {
                _id: 238801,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-04-09T00:00:00.000Z",
                    congressman_id: 719,
                    death: null,
                    name: "Oddný G. Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238801,
                to: "2011-12-31T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 238802,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-04-09T00:00:00.000Z",
                    congressman_id: 719,
                    death: null,
                    name: "Oddný G. Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-12-31T00:00:00.000Z",
                session_id: 238802,
                to: "2012-01-10T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 238803,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-04-09T00:00:00.000Z",
                    congressman_id: 719,
                    death: null,
                    name: "Oddný G. Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-10T00:00:00.000Z",
                session_id: 238803,
                to: "2012-09-01T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 238805,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-04-09T00:00:00.000Z",
                    congressman_id: 719,
                    death: null,
                    name: "Oddný G. Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-09-01T00:00:00.000Z",
                session_id: 238805,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 477,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "PHB",
            birth: "1944-06-24T00:00:00.000Z",
            congressman_id: 477,
            death: null,
            name: "Pétur H. Blöndal"
        },
        sessions: [
            {
                _id: 188217,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "PHB",
                    birth: "1944-06-24T00:00:00.000Z",
                    congressman_id: 477,
                    death: null,
                    name: "Pétur H. Blöndal"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 188217,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 693,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1967-09-30T00:00:00.000Z",
            congressman_id: 693,
            death: null,
            name: "Ragnheiður E. Árnadóttir"
        },
        sessions: [
            {
                _id: 230685,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-09-30T00:00:00.000Z",
                    congressman_id: 693,
                    death: null,
                    name: "Ragnheiður E. Árnadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230685,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 694,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "RR",
            birth: "1949-06-23T00:00:00.000Z",
            congressman_id: 694,
            death: null,
            name: "Ragnheiður Ríkharðsdóttir"
        },
        sessions: [
            {
                _id: 230706,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "RR",
                    birth: "1949-06-23T00:00:00.000Z",
                    congressman_id: 694,
                    death: null,
                    name: "Ragnheiður Ríkharðsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 230706,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 708,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1971-05-31T00:00:00.000Z",
            congressman_id: 708,
            death: null,
            name: "Róbert Marshall"
        },
        sessions: [
            {
                _id: 233567,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1971-05-31T00:00:00.000Z",
                    congressman_id: 708,
                    death: null,
                    name: "Róbert Marshall"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 233567,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 729,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "SDG",
            birth: "1975-03-12T00:00:00.000Z",
            congressman_id: 729,
            death: null,
            name: "Sigmundur Davíð Gunnlaugsson"
        },
        sessions: [
            {
                _id: 238982,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SDG",
                    birth: "1975-03-12T00:00:00.000Z",
                    congressman_id: 729,
                    death: null,
                    name: "Sigmundur Davíð Gunnlaugsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 238982,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 717,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "SER",
            birth: "1961-03-06T01:00:00.000Z",
            congressman_id: 717,
            death: null,
            name: "Sigmundur Ernir Rúnarsson"
        },
        sessions: [
            {
                _id: 239031,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SER",
                    birth: "1961-03-06T01:00:00.000Z",
                    congressman_id: 717,
                    death: null,
                    name: "Sigmundur Ernir Rúnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239031,
                to: "2011-12-14T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 239032,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SER",
                    birth: "1961-03-06T01:00:00.000Z",
                    congressman_id: 717,
                    death: null,
                    name: "Sigmundur Ernir Rúnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-12-14T00:00:00.000Z",
                session_id: 239032,
                to: "2011-12-18T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 239033,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SER",
                    birth: "1961-03-06T01:00:00.000Z",
                    congressman_id: 717,
                    death: null,
                    name: "Sigmundur Ernir Rúnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-12-18T00:00:00.000Z",
                session_id: 239033,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 712,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "SII",
            birth: "1968-05-29T00:00:00.000Z",
            congressman_id: 712,
            death: null,
            name: "Sigríður Ingibjörg Ingadóttir"
        },
        sessions: [
            {
                _id: 239040,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SII",
                    birth: "1968-05-29T00:00:00.000Z",
                    congressman_id: 712,
                    death: null,
                    name: "Sigríður Ingibjörg Ingadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239040,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 726,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1962-04-20T00:00:00.000Z",
            congressman_id: 726,
            death: null,
            name: "Sigurður Ingi Jóhannsson"
        },
        sessions: [
            {
                _id: 239055,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1962-04-20T00:00:00.000Z",
                    congressman_id: 726,
                    death: null,
                    name: "Sigurður Ingi Jóhannsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239055,
                to: "2011-10-11T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 239056,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1962-04-20T00:00:00.000Z",
                    congressman_id: 726,
                    death: null,
                    name: "Sigurður Ingi Jóhannsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-11T00:00:00.000Z",
                session_id: 239056,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 530,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "SF",
            birth: "1962-08-10T00:00:00.000Z",
            congressman_id: 530,
            death: null,
            name: "Siv Friðleifsdóttir"
        },
        sessions: [
            {
                _id: 188452,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SF",
                    birth: "1962-08-10T00:00:00.000Z",
                    congressman_id: 530,
                    death: null,
                    name: "Siv Friðleifsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 188452,
                to: "2011-10-11T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 188453,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SF",
                    birth: "1962-08-10T00:00:00.000Z",
                    congressman_id: 530,
                    death: null,
                    name: "Siv Friðleifsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-11T00:00:00.000Z",
                session_id: 188453,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 720,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "SkH",
            birth: "1965-04-15T00:00:00.000Z",
            congressman_id: 720,
            death: null,
            name: "Skúli Helgason"
        },
        sessions: [
            {
                _id: 239138,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SkH",
                    birth: "1965-04-15T00:00:00.000Z",
                    congressman_id: 720,
                    death: null,
                    name: "Skúli Helgason"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239138,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 557,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1955-08-04T00:00:00.000Z",
            congressman_id: 557,
            death: null,
            name: "Steingrímur J. Sigfússon"
        },
        sessions: [
            {
                _id: 151839,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-08-04T00:00:00.000Z",
                    congressman_id: 557,
                    death: null,
                    name: "Steingrímur J. Sigfússon"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 151839,
                to: "2011-12-31T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 151840,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-08-04T00:00:00.000Z",
                    congressman_id: 557,
                    death: null,
                    name: "Steingrímur J. Sigfússon"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-12-31T00:00:00.000Z",
                session_id: 151840,
                to: "2012-08-31T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 151841,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-08-04T00:00:00.000Z",
                    congressman_id: 557,
                    death: null,
                    name: "Steingrímur J. Sigfússon"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-09-01T00:00:00.000Z",
                session_id: 151841,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 730,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: null,
            birth: "1964-08-24T00:00:00.000Z",
            congressman_id: 730,
            death: null,
            name: "Svandís Svavarsdóttir"
        },
        sessions: [
            {
                _id: 239246,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1964-08-24T00:00:00.000Z",
                    congressman_id: 730,
                    death: null,
                    name: "Svandís Svavarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239246,
                to: "2012-01-10T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 239247,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1964-08-24T00:00:00.000Z",
                    congressman_id: 730,
                    death: null,
                    name: "Svandís Svavarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-01-10T00:00:00.000Z",
                session_id: 239247,
                to: "2012-03-27T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 239248,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1964-08-24T00:00:00.000Z",
                    congressman_id: 730,
                    death: null,
                    name: "Svandís Svavarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-27T00:00:00.000Z",
                session_id: 239248,
                to: "2012-03-29T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 239249,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1964-08-24T00:00:00.000Z",
                    congressman_id: 730,
                    death: null,
                    name: "Svandís Svavarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-31T00:00:00.000Z",
                session_id: 239249,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 710,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "TÞH",
            birth: "1963-01-17T01:00:00.000Z",
            congressman_id: 710,
            death: null,
            name: "Tryggvi Þór Herbertsson"
        },
        sessions: [
            {
                _id: 239274,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "TÞH",
                    birth: "1963-01-17T01:00:00.000Z",
                    congressman_id: 710,
                    death: null,
                    name: "Tryggvi Þór Herbertsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239274,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 721,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "UBK",
            birth: "1974-04-06T00:00:00.000Z",
            congressman_id: 721,
            death: null,
            name: "Unnur Brá Konráðsdóttir"
        },
        sessions: [
            {
                _id: 239284,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "UBK",
                    birth: "1974-04-06T00:00:00.000Z",
                    congressman_id: 721,
                    death: null,
                    name: "Unnur Brá Konráðsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 239284,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 705,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "VBj",
            birth: "1950-01-13T01:00:00.000Z",
            congressman_id: 705,
            death: null,
            name: "Valgerður Bjarnadóttir"
        },
        sessions: [
            {
                _id: 233853,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VBj",
                    birth: "1950-01-13T01:00:00.000Z",
                    congressman_id: 705,
                    death: null,
                    name: "Valgerður Bjarnadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 233853,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 706,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "VigH",
            birth: "1965-03-20T01:00:00.000Z",
            congressman_id: 706,
            death: null,
            name: "Vigdís Hauksdóttir"
        },
        sessions: [
            {
                _id: 194462,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VigH",
                    birth: "1965-03-20T01:00:00.000Z",
                    congressman_id: 706,
                    death: null,
                    name: "Vigdís Hauksdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 194462,
                to: "2012-06-12T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 194463,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VigH",
                    birth: "1965-03-20T01:00:00.000Z",
                    congressman_id: 706,
                    death: null,
                    name: "Vigdís Hauksdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-06-12T00:00:00.000Z",
                session_id: 194463,
                to: "2012-06-20T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 194464,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VigH",
                    birth: "1965-03-20T01:00:00.000Z",
                    congressman_id: 706,
                    death: null,
                    name: "Vigdís Hauksdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-06-20T00:00:00.000Z",
                session_id: 194464,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 676,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ÁI",
            birth: "1951-05-01T00:00:00.000Z",
            congressman_id: 676,
            death: null,
            name: "Álfheiður Ingadóttir"
        },
        sessions: [
            {
                _id: 161202,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁI",
                    birth: "1951-05-01T00:00:00.000Z",
                    congressman_id: 676,
                    death: null,
                    name: "Álfheiður Ingadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 161202,
                to: "2012-02-03T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 161203,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁI",
                    birth: "1951-05-01T00:00:00.000Z",
                    congressman_id: 676,
                    death: null,
                    name: "Álfheiður Ingadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-02-03T00:00:00.000Z",
                session_id: 161203,
                to: "2012-02-22T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 161204,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁI",
                    birth: "1951-05-01T00:00:00.000Z",
                    congressman_id: 676,
                    death: null,
                    name: "Álfheiður Ingadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-02-22T00:00:00.000Z",
                session_id: 161204,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    },
    {
        _id: 38,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ÁJ",
            birth: "1944-03-01T01:00:00.000Z",
            congressman_id: 38,
            death: null,
            name: "Árni Johnsen"
        },
        sessions: [
            {
                _id: 149753,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁJ",
                    birth: "1944-03-01T01:00:00.000Z",
                    congressman_id: 38,
                    death: null,
                    name: "Árni Johnsen"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 149753,
                to: "2012-09-10T00:00:00.000Z",
                type: "þingmaður"
            }
        ]
    }
];

const substituteSessions = [
    {
        _id: 1138,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "AT",
            birth: "1960-01-07T01:00:00.000Z",
            congressman_id: 1138,
            death: null,
            name: "Amal Tamimi"
        },
        sessions: [
            {
                _id: 245313,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AT",
                    birth: "1960-01-07T01:00:00.000Z",
                    congressman_id: 1138,
                    death: null,
                    name: "Amal Tamimi"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-11-03T00:00:00.000Z",
                session_id: 245313,
                to: "2011-12-02T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1141,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "AM",
            birth: "1964-04-15T00:00:00.000Z",
            congressman_id: 1141,
            death: null,
            name: "Ari Matthíasson"
        },
        sessions: [
            {
                _id: 245315,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AM",
                    birth: "1964-04-15T00:00:00.000Z",
                    congressman_id: 1141,
                    death: null,
                    name: "Ari Matthíasson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-27T00:00:00.000Z",
                session_id: 245315,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1004,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ArnaJ",
            birth: "1976-05-30T00:00:00.000Z",
            congressman_id: 1004,
            death: null,
            name: "Arna Lára Jónsdóttir"
        },
        sessions: [
            {
                _id: 240152,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArnaJ",
                    birth: "1976-05-30T00:00:00.000Z",
                    congressman_id: 1004,
                    death: null,
                    name: "Arna Lára Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-16T00:00:00.000Z",
                session_id: 240152,
                to: "2012-01-30T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 2,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ArnbS",
            birth: "1956-02-18T01:00:00.000Z",
            congressman_id: 2,
            death: null,
            name: "Arnbjörg Sveinsdóttir"
        },
        sessions: [
            {
                _id: 186709,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArnbS",
                    birth: "1956-02-18T01:00:00.000Z",
                    congressman_id: 2,
                    death: null,
                    name: "Arnbjörg Sveinsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 186709,
                to: "2011-10-31T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1007,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ArndS",
            birth: "1978-06-06T00:00:00.000Z",
            congressman_id: 1007,
            death: null,
            name: "Arndís Soffía Sigurðardóttir"
        },
        sessions: [
            {
                _id: 237639,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArndS",
                    birth: "1978-06-06T00:00:00.000Z",
                    congressman_id: 1007,
                    death: null,
                    name: "Arndís Soffía Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-24T00:00:00.000Z",
                session_id: 237639,
                to: "2011-11-14T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 237640,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArndS",
                    birth: "1978-06-06T00:00:00.000Z",
                    congressman_id: 1007,
                    death: null,
                    name: "Arndís Soffía Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-02-06T00:00:00.000Z",
                session_id: 237640,
                to: "2012-02-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1000,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ALE",
            birth: "1979-08-23T00:00:00.000Z",
            congressman_id: 1000,
            death: null,
            name: "Auður Lilja Erlingsdóttir"
        },
        sessions: [
            {
                _id: 229272,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ALE",
                    birth: "1979-08-23T00:00:00.000Z",
                    congressman_id: 1000,
                    death: null,
                    name: "Auður Lilja Erlingsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-01-23T00:00:00.000Z",
                session_id: 229272,
                to: "2012-02-13T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 229273,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ALE",
                    birth: "1979-08-23T00:00:00.000Z",
                    congressman_id: 1000,
                    death: null,
                    name: "Auður Lilja Erlingsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-14T00:00:00.000Z",
                session_id: 229273,
                to: "2012-06-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1136,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BaldÞ",
            birth: "1968-01-25T01:00:00.000Z",
            congressman_id: 1136,
            death: null,
            name: "Baldur Þórhallsson"
        },
        sessions: [
            {
                _id: 242995,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldÞ",
                    birth: "1968-01-25T01:00:00.000Z",
                    congressman_id: 1136,
                    death: null,
                    name: "Baldur Þórhallsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-05-19T00:00:00.000Z",
                session_id: 242995,
                to: "2012-06-02T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1126,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BaldJ",
            birth: "1970-12-09T00:00:00.000Z",
            congressman_id: 1126,
            death: null,
            name: "Baldvin Jónsson"
        },
        sessions: [
            {
                _id: 242997,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldJ",
                    birth: "1970-12-09T00:00:00.000Z",
                    congressman_id: 1126,
                    death: null,
                    name: "Baldvin Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 242997,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 242998,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldJ",
                    birth: "1970-12-09T00:00:00.000Z",
                    congressman_id: 1126,
                    death: null,
                    name: "Baldvin Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-06-11T00:00:00.000Z",
                session_id: 242998,
                to: "2012-06-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1012,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "BjG",
            birth: "1965-02-27T01:00:00.000Z",
            congressman_id: 1012,
            death: null,
            name: "Bjarkey Olsen Gunnarsdóttir"
        },
        sessions: [
            {
                _id: 220893,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BjG",
                    birth: "1965-02-27T01:00:00.000Z",
                    congressman_id: 1012,
                    death: null,
                    name: "Bjarkey Olsen Gunnarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 220893,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1010,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "DSt",
            birth: "1973-10-14T00:00:00.000Z",
            congressman_id: 1010,
            death: null,
            name: "Davíð Stefánsson"
        },
        sessions: [
            {
                _id: 240589,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "DSt",
                    birth: "1973-10-14T00:00:00.000Z",
                    congressman_id: 1010,
                    death: null,
                    name: "Davíð Stefánsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 240589,
                to: "2011-10-31T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 240590,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "DSt",
                    birth: "1973-10-14T00:00:00.000Z",
                    congressman_id: 1010,
                    death: null,
                    name: "Davíð Stefánsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-02-03T00:00:00.000Z",
                session_id: 240590,
                to: "2012-02-22T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1149,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "EIS",
            birth: "1966-10-26T01:00:00.000Z",
            congressman_id: 1149,
            death: null,
            name: "Eyrún Ingibjörg Sigþórsdóttir"
        },
        sessions: [
            {
                _id: 240693,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EIS",
                    birth: "1966-10-26T01:00:00.000Z",
                    congressman_id: 1149,
                    death: null,
                    name: "Eyrún Ingibjörg Sigþórsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2011-10-31T00:00:00.000Z",
                session_id: 240693,
                to: "2011-11-14T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 240694,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EIS",
                    birth: "1966-10-26T01:00:00.000Z",
                    congressman_id: 1149,
                    death: null,
                    name: "Eyrún Ingibjörg Sigþórsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                from: "2012-06-11T00:00:00.000Z",
                session_id: 240694,
                to: "2012-06-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1151,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "GHV",
            birth: "1973-02-23T00:00:00.000Z",
            congressman_id: 1151,
            death: null,
            name: "Guðrún H. Valdimarsdóttir"
        },
        sessions: [
            {
                _id: 246055,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GHV",
                    birth: "1973-02-23T00:00:00.000Z",
                    congressman_id: 1151,
                    death: null,
                    name: "Guðrún H. Valdimarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-06-12T00:00:00.000Z",
                session_id: 246055,
                to: "2012-06-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1127,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "HLÞ",
            birth: "1981-06-25T00:00:00.000Z",
            congressman_id: 1127,
            death: null,
            name: "Halldóra Lóa Þorvaldsdóttir"
        },
        sessions: [
            {
                _id: 243516,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HLÞ",
                    birth: "1981-06-25T00:00:00.000Z",
                    congressman_id: 1127,
                    death: null,
                    name: "Halldóra Lóa Þorvaldsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-13T00:00:00.000Z",
                session_id: 243516,
                to: "2012-06-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1027,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "HuldA",
            birth: "1968-02-07T01:00:00.000Z",
            congressman_id: 1027,
            death: null,
            name: "Huld Aðalbjarnardóttir"
        },
        sessions: [
            {
                _id: 232945,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HuldA",
                    birth: "1968-02-07T01:00:00.000Z",
                    congressman_id: 1027,
                    death: null,
                    name: "Huld Aðalbjarnardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-04-16T00:00:00.000Z",
                session_id: 232945,
                to: "2012-05-07T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1143,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "JKA",
            birth: "1962-01-30T01:00:00.000Z",
            congressman_id: 1143,
            death: null,
            name: "Jón Kr. Arnarson"
        },
        sessions: [
            {
                _id: 246243,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JKA",
                    birth: "1962-01-30T01:00:00.000Z",
                    congressman_id: 1143,
                    death: null,
                    name: "Jón Kr. Arnarson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 246243,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1128,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "LE",
            birth: "1964-08-21T00:00:00.000Z",
            congressman_id: 1128,
            death: null,
            name: "Logi Einarsson"
        },
        sessions: [
            {
                _id: 243939,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LE",
                    birth: "1964-08-21T00:00:00.000Z",
                    congressman_id: 1128,
                    death: null,
                    name: "Logi Einarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 243939,
                to: "2011-10-31T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 243940,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LE",
                    birth: "1964-08-21T00:00:00.000Z",
                    congressman_id: 1128,
                    death: null,
                    name: "Logi Einarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2011-12-14T00:00:00.000Z",
                session_id: 243940,
                to: "2011-12-18T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1140,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "MN",
            birth: "1956-09-30T00:00:00.000Z",
            congressman_id: 1140,
            death: null,
            name: "Magnús M. Norðdahl"
        },
        sessions: [
            {
                _id: 246534,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MN",
                    birth: "1956-09-30T00:00:00.000Z",
                    congressman_id: 1140,
                    death: null,
                    name: "Magnús M. Norðdahl"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                from: "2012-01-20T00:00:00.000Z",
                session_id: 246534,
                to: "2012-09-10T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1006,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "SSS",
            birth: "1974-04-05T00:00:00.000Z",
            congressman_id: 1006,
            death: null,
            name: "Sigurgeir Sindri Sigurgeirsson"
        },
        sessions: [
            {
                _id: 241675,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SSS",
                    birth: "1974-04-05T00:00:00.000Z",
                    congressman_id: 1006,
                    death: null,
                    name: "Sigurgeir Sindri Sigurgeirsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 241675,
                to: "2011-10-31T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 241676,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SSS",
                    birth: "1974-04-05T00:00:00.000Z",
                    congressman_id: 1006,
                    death: null,
                    name: "Sigurgeir Sindri Sigurgeirsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                from: "2012-04-23T00:00:00.000Z",
                session_id: 241676,
                to: "2012-05-07T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1142,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "TM",
            birth: "1983-03-11T00:00:00.000Z",
            congressman_id: 1142,
            death: null,
            name: "Telma Magnúsdóttir"
        },
        sessions: [
            {
                _id: 247071,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "TM",
                    birth: "1983-03-11T00:00:00.000Z",
                    congressman_id: 1142,
                    death: null,
                    name: "Telma Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-27T00:00:00.000Z",
                session_id: 247071,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1013,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "VSk",
            birth: "1956-05-08T00:00:00.000Z",
            congressman_id: 1013,
            death: null,
            name: "Valgeir Skagfjörð"
        },
        sessions: [
            {
                _id: 239308,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VSk",
                    birth: "1956-05-08T00:00:00.000Z",
                    congressman_id: 1013,
                    death: null,
                    name: "Valgeir Skagfjörð"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                from: "2012-03-27T00:00:00.000Z",
                session_id: 239308,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    },
    {
        _id: 1001,
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressman: {
            abbreviation: "ÓGunn",
            birth: "1963-07-17T00:00:00.000Z",
            congressman_id: 1001,
            death: null,
            name: "Ólafur Þór Gunnarsson"
        },
        sessions: [
            {
                _id: 241377,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-17T00:00:00.000Z",
                session_id: 241377,
                to: "2011-10-31T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 241378,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-11-17T00:00:00.000Z",
                session_id: 241378,
                to: "2011-11-30T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 241379,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-27T00:00:00.000Z",
                session_id: 241379,
                to: "2012-03-28T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 241380,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 241380,
                to: "2012-03-31T00:00:00.000Z",
                type: "varamaður"
            },
            {
                _id: 241381,
                abbr: null,
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-06-06T00:00:00.000Z",
                session_id: 241381,
                to: "2012-06-20T00:00:00.000Z",
                type: "varamaður"
            }
        ]
    }
];

const assemblyParties = [
    {
        abbr_long: "Sjálfstfl.",
        abbr_short: "S",
        color: null,
        name: "Sjálfstæðisflokkur",
        party_id: 35
    },
    {
        abbr_long: "Hreyf.",
        abbr_short: "Hr",
        color: null,
        name: "Hreyfingin",
        party_id: 42
    },
    {
        abbr_long: "Framsfl.",
        abbr_short: "F",
        color: null,
        name: "Framsóknarflokkur",
        party_id: 2
    },
    {
        abbr_long: "Vinstri-gr.",
        abbr_short: "Vg",
        color: null,
        name: "Vinstrihreyfingin - grænt framboð",
        party_id: 23
    },
    {
        abbr_long: "Samf.",
        abbr_short: "Sf",
        color: null,
        name: "Samfylkingin",
        party_id: 38
    },
    {
        abbr_long: "Utan þfl.",
        abbr_short: "U",
        color: null,
        name: "utan þingflokka",
        party_id: 17
    }
];

const constituencySessions = [
    {
        _id: 49,
        abbr_long: "Norðaust.",
        abbr_short: "NA",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressmen: [
            {
                _id: {
                    congressman: 724,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JRG",
                    birth: "1958-07-06T00:00:00.000Z",
                    congressman_id: 724,
                    death: null,
                    name: "Jónína Rós Guðmundsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 238582,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 396,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1953-06-26T00:00:00.000Z",
                    congressman_id: 396,
                    death: null,
                    name: "Kristján L. Möller"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 202095,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 202096,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 202097,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1128,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LE",
                    birth: "1964-08-21T00:00:00.000Z",
                    congressman_id: 1128,
                    death: null,
                    name: "Logi Einarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 243939,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 243940,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-14T00:00:00.000Z",
                        to: "2011-12-18T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 686,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HöskÞ",
                    birth: "1973-05-08T00:00:00.000Z",
                    congressman_id: 686,
                    death: null,
                    name: "Höskuldur Þórhallsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 230140,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1012,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BjG",
                    birth: "1965-02-27T01:00:00.000Z",
                    congressman_id: 1012,
                    death: null,
                    name: "Bjarkey Olsen Gunnarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 220893,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 557,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-08-04T00:00:00.000Z",
                    congressman_id: 557,
                    death: null,
                    name: "Steingrímur J. Sigfússon"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 151839,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 151840,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-08-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 151841,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 710,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "TÞH",
                    birth: "1963-01-17T01:00:00.000Z",
                    congressman_id: 710,
                    death: null,
                    name: "Tryggvi Þór Herbertsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 239274,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 634,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1948-01-08T01:00:00.000Z",
                    congressman_id: 634,
                    death: null,
                    name: "Þuríður Backman"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 177490,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 177491,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 177492,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 2,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArnbS",
                    birth: "1956-02-18T01:00:00.000Z",
                    congressman_id: 2,
                    death: null,
                    name: "Arnbjörg Sveinsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 186709,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 691,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-07-15T00:00:00.000Z",
                    congressman_id: 691,
                    death: null,
                    name: "Kristján Þór Júlíusson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 230517,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 230518,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 230519,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 737,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BVG",
                    birth: "1959-09-20T00:00:00.000Z",
                    congressman_id: 737,
                    death: null,
                    name: "Björn Valur Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 169730,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 651,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BJJ",
                    birth: "1979-07-24T00:00:00.000Z",
                    congressman_id: 651,
                    death: null,
                    name: "Birkir Jón Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 215124,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-04-16T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 215125,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-16T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 215126,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-05-07T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 717,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SER",
                    birth: "1961-03-06T01:00:00.000Z",
                    congressman_id: 717,
                    death: null,
                    name: "Sigmundur Ernir Rúnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 239031,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-14T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239032,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-14T00:00:00.000Z",
                        to: "2011-12-18T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 239033,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-18T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1027,
                    constituency: 49
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HuldA",
                    birth: "1968-02-07T01:00:00.000Z",
                    congressman_id: 1027,
                    death: null,
                    name: "Huld Aðalbjarnardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðaust.",
                    abbr_short: "NA",
                    constituency_id: 49,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðausturkjördæmi"
                },
                sessions: [
                    {
                        _id: 232945,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-16T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            }
        ],
        constituency_id: 49,
        description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
        name: "Norðausturkjördæmi"
    },
    {
        _id: 51,
        abbr_long: "Norðvest.",
        abbr_short: "NV",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressmen: [
            {
                _id: {
                    congressman: 718,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁsbÓ",
                    birth: "1962-11-16T01:00:00.000Z",
                    congressman_id: 718,
                    death: null,
                    name: "Ásbjörn Óttarsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 237806,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237807,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237808,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-11-14T00:00:00.000Z",
                        to: "2012-06-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237809,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237810,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 371,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JBjarn",
                    birth: "1943-12-26T01:00:00.000Z",
                    congressman_id: 371,
                    death: null,
                    name: "Jón Bjarnason"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 201926,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 201927,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 715,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓÞ",
                    birth: "1958-09-08T00:00:00.000Z",
                    congressman_id: 715,
                    death: null,
                    name: "Ólína Kjerúlf Þorvarðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 238844,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1149,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EIS",
                    birth: "1966-10-26T01:00:00.000Z",
                    congressman_id: 1149,
                    death: null,
                    name: "Eyrún Ingibjörg Sigþórsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 240693,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 240694,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 683,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GuðbH",
                    birth: "1950-06-03T00:00:00.000Z",
                    congressman_id: 683,
                    death: null,
                    name: "Guðbjartur Hannesson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 229918,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229919,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-01-16T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229920,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-16T00:00:00.000Z",
                        to: "2012-01-30T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229921,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-30T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 124,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-12-02T01:00:00.000Z",
                    congressman_id: 124,
                    death: null,
                    name: "Einar K. Guðfinnsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 138922,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1006,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SSS",
                    birth: "1974-04-05T00:00:00.000Z",
                    congressman_id: 1006,
                    death: null,
                    name: "Sigurgeir Sindri Sigurgeirsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 241675,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241676,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-23T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 707,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1982-10-29T00:00:00.000Z",
                    congressman_id: 707,
                    death: null,
                    name: "Ásmundur Einar Daðason"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 237821,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 722,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 238329,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238330,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 238331,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-04-23T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238332,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-23T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 238333,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-05-07T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 704,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GStein",
                    birth: "1972-10-28T00:00:00.000Z",
                    congressman_id: 704,
                    death: null,
                    name: "Guðmundur Steingrímsson"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 232856,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 714,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 179451,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 179452,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 179453,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-06-13T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 179454,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-13T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 179455,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1142,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "TM",
                    birth: "1983-03-11T00:00:00.000Z",
                    congressman_id: 1142,
                    death: null,
                    name: "Telma Magnúsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 247071,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1004,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArnaJ",
                    birth: "1976-05-30T00:00:00.000Z",
                    congressman_id: 1004,
                    death: null,
                    name: "Arna Lára Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 240152,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-16T00:00:00.000Z",
                        to: "2012-01-30T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1127,
                    constituency: 51
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HLÞ",
                    birth: "1981-06-25T00:00:00.000Z",
                    congressman_id: 1127,
                    death: null,
                    name: "Halldóra Lóa Þorvaldsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Norðvest.",
                    abbr_short: "NV",
                    constituency_id: 51,
                    description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                    name: "Norðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 243516,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-13T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            }
        ],
        constituency_id: 51,
        description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
        name: "Norðvesturkjördæmi"
    },
    {
        _id: 44,
        abbr_long: "Reykv. n.",
        abbr_short: "RN",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressmen: [
            {
                _id: {
                    congressman: 705,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VBj",
                    birth: "1950-01-13T01:00:00.000Z",
                    congressman_id: 705,
                    death: null,
                    name: "Valgerður Bjarnadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 233853,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1136,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldÞ",
                    birth: "1968-01-25T01:00:00.000Z",
                    congressman_id: 1136,
                    death: null,
                    name: "Baldur Þórhallsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 242995,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-05-19T00:00:00.000Z",
                        to: "2012-06-02T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 709,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÞrB",
                    birth: "1944-11-30T01:00:00.000Z",
                    congressman_id: 709,
                    death: null,
                    name: "Þráinn Bertelsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 239464,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 477,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "PHB",
                    birth: "1944-06-24T00:00:00.000Z",
                    congressman_id: 477,
                    death: null,
                    name: "Pétur H. Blöndal"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 188217,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 662,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MÁ",
                    birth: "1953-10-30T01:00:00.000Z",
                    congressman_id: 662,
                    death: null,
                    name: "Mörður Árnason"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 190785,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1000,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ALE",
                    birth: "1979-08-23T00:00:00.000Z",
                    congressman_id: 1000,
                    death: null,
                    name: "Auður Lilja Erlingsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 229272,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-23T00:00:00.000Z",
                        to: "2012-02-13T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 229273,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-14T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1010,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "DSt",
                    birth: "1973-10-14T00:00:00.000Z",
                    congressman_id: 1010,
                    death: null,
                    name: "Davíð Stefánsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 240589,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 240590,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-03T00:00:00.000Z",
                        to: "2012-02-22T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 287,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1942-10-04T00:00:00.000Z",
                    congressman_id: 287,
                    death: null,
                    name: "Jóhanna Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 134613,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-05-19T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 134614,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-05-19T00:00:00.000Z",
                        to: "2012-06-02T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 134615,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-06-02T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 676,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁI",
                    birth: "1951-05-01T00:00:00.000Z",
                    congressman_id: 676,
                    death: null,
                    name: "Álfheiður Ingadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 161202,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-02-03T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 161203,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-03T00:00:00.000Z",
                        to: "2012-02-22T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 161204,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-22T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 729,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SDG",
                    birth: "1975-03-12T00:00:00.000Z",
                    congressman_id: 729,
                    death: null,
                    name: "Sigmundur Davíð Gunnlaugsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 238982,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 690,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1976-02-01T00:00:00.000Z",
                    congressman_id: 690,
                    death: null,
                    name: "Katrín Jakobsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 230364,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-01T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 230365,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 230366,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 687,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-08-26T00:00:00.000Z",
                    congressman_id: 687,
                    death: null,
                    name: "Illugi Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 230162,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 679,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁÞS",
                    birth: "1960-07-30T00:00:00.000Z",
                    congressman_id: 679,
                    death: null,
                    name: "Árni Þór Sigurðsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 229443,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-23T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229444,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-23T00:00:00.000Z",
                        to: "2012-02-13T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229445,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-13T00:00:00.000Z",
                        to: "2012-06-14T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229446,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-14T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229447,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 658,
                    constituency: 44
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HHj",
                    birth: "1967-06-09T00:00:00.000Z",
                    congressman_id: 658,
                    death: null,
                    name: "Helgi Hjörvar"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. n.",
                    abbr_short: "RN",
                    constituency_id: 44,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi norður"
                },
                sessions: [
                    {
                        _id: 215873,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        constituency_id: 44,
        description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
        name: "Reykjavíkurkjördæmi norður"
    },
    {
        _id: 45,
        abbr_long: "Reykv. s.",
        abbr_short: "RS",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressmen: [
            {
                _id: {
                    congressman: 48,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1949-10-16T00:00:00.000Z",
                    congressman_id: 48,
                    death: null,
                    name: "Ásta R. Jóhannesdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 158553,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 158554,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 158555,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 712,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SII",
                    birth: "1968-05-29T00:00:00.000Z",
                    congressman_id: 712,
                    death: null,
                    name: "Sigríður Ingibjörg Ingadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 239040,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1141,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AM",
                    birth: "1964-04-15T00:00:00.000Z",
                    congressman_id: 1141,
                    death: null,
                    name: "Ari Matthíasson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 245315,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 720,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SkH",
                    birth: "1965-04-15T00:00:00.000Z",
                    congressman_id: 720,
                    death: null,
                    name: "Skúli Helgason"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 239138,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 728,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 237933,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237934,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237935,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-06-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237936,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237937,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 706,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VigH",
                    birth: "1965-03-20T01:00:00.000Z",
                    congressman_id: 706,
                    death: null,
                    name: "Vigdís Hauksdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 194462,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-06-12T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 194463,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-06-12T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 194464,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 730,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1964-08-24T00:00:00.000Z",
                    congressman_id: 730,
                    death: null,
                    name: "Svandís Svavarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 239246,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239247,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239248,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-29T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 239249,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 631,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÖS",
                    birth: "1953-06-19T00:00:00.000Z",
                    congressman_id: 631,
                    death: null,
                    name: "Össur Skarphéðinsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 174513,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 650,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1968-06-12T00:00:00.000Z",
                    congressman_id: 650,
                    death: null,
                    name: "Birgir Ármannsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 215082,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1126,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldJ",
                    birth: "1970-12-09T00:00:00.000Z",
                    congressman_id: 1126,
                    death: null,
                    name: "Baldvin Jónsson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 242997,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 242998,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 711,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LMós",
                    birth: "1961-11-11T01:00:00.000Z",
                    congressman_id: 711,
                    death: null,
                    name: "Lilja Mósesdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 238771,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 656,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-12-19T01:00:00.000Z",
                    congressman_id: 656,
                    death: null,
                    name: "Guðlaugur Þór Þórðarson"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 192752,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1151,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GHV",
                    birth: "1973-02-23T00:00:00.000Z",
                    congressman_id: 1151,
                    death: null,
                    name: "Guðrún H. Valdimarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 246055,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-06-12T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 692,
                    constituency: 45
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1966-12-03T01:00:00.000Z",
                    congressman_id: 692,
                    death: null,
                    name: "Ólöf Nordal"
                },
                congressman_constituency: {
                    abbr_long: "Reykv. s.",
                    abbr_short: "RS",
                    constituency_id: 45,
                    description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                    name: "Reykjavíkurkjördæmi suður"
                },
                sessions: [
                    {
                        _id: 230628,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        constituency_id: 45,
        description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
        name: "Reykjavíkurkjördæmi suður"
    },
    {
        _id: 46,
        abbr_long: "Suðurk.",
        abbr_short: "SU",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressmen: [
            {
                _id: {
                    congressman: 675,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 217690,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-24T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 217691,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-24T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 217692,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-11-14T00:00:00.000Z",
                        to: "2012-02-06T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 217693,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2012-02-06T00:00:00.000Z",
                        to: "2012-02-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 217694,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2012-02-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 721,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "UBK",
                    birth: "1974-04-06T00:00:00.000Z",
                    congressman_id: 721,
                    death: null,
                    name: "Unnur Brá Konráðsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 239284,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1007,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArndS",
                    birth: "1978-06-06T00:00:00.000Z",
                    congressman_id: 1007,
                    death: null,
                    name: "Arndís Soffía Sigurðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 237639,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-24T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 237640,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-06T00:00:00.000Z",
                        to: "2012-02-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 719,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-04-09T00:00:00.000Z",
                    congressman_id: 719,
                    death: null,
                    name: "Oddný G. Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 238801,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238802,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238803,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-09-01T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238805,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 703,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EyH",
                    birth: "1972-12-12T00:00:00.000Z",
                    congressman_id: 703,
                    death: null,
                    name: "Eygló Harðardóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 224162,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 723,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MT",
                    birth: "1972-05-20T00:00:00.000Z",
                    congressman_id: 723,
                    death: null,
                    name: "Margrét Tryggvadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 238785,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238786,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 238787,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 726,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1962-04-20T00:00:00.000Z",
                    congressman_id: 726,
                    death: null,
                    name: "Sigurður Ingi Jóhannsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 239055,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239056,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-11T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1143,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JKA",
                    birth: "1962-01-30T01:00:00.000Z",
                    congressman_id: 1143,
                    death: null,
                    name: "Jón Kr. Arnarson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 246243,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 38,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁJ",
                    birth: "1944-03-01T01:00:00.000Z",
                    congressman_id: 38,
                    death: null,
                    name: "Árni Johnsen"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 149753,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 693,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-09-30T00:00:00.000Z",
                    congressman_id: 693,
                    death: null,
                    name: "Ragnheiður E. Árnadóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 230685,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 653,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BjörgvS",
                    birth: "1970-10-30T00:00:00.000Z",
                    congressman_id: 653,
                    death: null,
                    name: "Björgvin G. Sigurðsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 203791,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 708,
                    constituency: 46
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1971-05-31T00:00:00.000Z",
                    congressman_id: 708,
                    death: null,
                    name: "Róbert Marshall"
                },
                congressman_constituency: {
                    abbr_long: "Suðurk.",
                    abbr_short: "SU",
                    constituency_id: 46,
                    description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                    name: "Suðurkjördæmi"
                },
                sessions: [
                    {
                        _id: 233567,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        constituency_id: 46,
        description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
        name: "Suðurkjördæmi"
    },
    {
        _id: 50,
        abbr_long: "Suðvest.",
        abbr_short: "SV",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        congressmen: [
            {
                _id: {
                    congressman: 1138,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AT",
                    birth: "1960-01-07T01:00:00.000Z",
                    congressman_id: 1138,
                    death: null,
                    name: "Amal Tamimi"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 245313,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-11-03T00:00:00.000Z",
                        to: "2011-12-02T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 725,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MSch",
                    birth: "1972-04-23T00:00:00.000Z",
                    congressman_id: 725,
                    death: null,
                    name: "Magnús Orri Schram"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 238779,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1001,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 241377,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241378,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-11-17T00:00:00.000Z",
                        to: "2011-11-30T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241379,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241380,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241381,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-06T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 530,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SF",
                    birth: "1962-08-10T00:00:00.000Z",
                    congressman_id: 530,
                    death: null,
                    name: "Siv Friðleifsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 188452,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188453,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-11T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 632,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1965-10-04T00:00:00.000Z",
                    congressman_id: 632,
                    death: null,
                    name: "Þorgerður K. Gunnarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 202855,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 652,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1970-01-26T00:00:00.000Z",
                    congressman_id: 652,
                    death: null,
                    name: "Bjarni Benediktsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 215145,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1013,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VSk",
                    birth: "1956-05-08T00:00:00.000Z",
                    congressman_id: 1013,
                    death: null,
                    name: "Valgeir Skagfjörð"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 239308,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1130,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LGeir",
                    birth: "1959-04-21T00:00:00.000Z",
                    congressman_id: 1130,
                    death: null,
                    name: "Lúðvík Geirsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 243958,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-11-03T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 243959,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-11-03T00:00:00.000Z",
                        to: "2011-12-02T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 243960,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-02T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 688,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1956-09-21T00:00:00.000Z",
                    congressman_id: 688,
                    death: null,
                    name: "Jón Gunnarsson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 230301,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 727,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 229954,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229955,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229956,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-06-06T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229957,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-06T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229958,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 713,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÞSa",
                    birth: "1960-06-09T00:00:00.000Z",
                    congressman_id: 713,
                    death: null,
                    name: "Þór Saari"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 239423,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239424,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 239425,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 660,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "KaJúl",
                    birth: "1974-11-23T00:00:00.000Z",
                    congressman_id: 660,
                    death: null,
                    name: "Katrín Júlíusdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 216134,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 216135,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-01-20T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 216136,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-20T00:00:00.000Z",
                        to: "2012-08-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 216137,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "með varamann"
                    }
                ]
            },
            {
                _id: {
                    congressman: 694,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "RR",
                    birth: "1949-06-23T00:00:00.000Z",
                    congressman_id: 694,
                    death: null,
                    name: "Ragnheiður Ríkharðsdóttir"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 230706,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1140,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MN",
                    birth: "1956-09-30T00:00:00.000Z",
                    congressman_id: 1140,
                    death: null,
                    name: "Magnús M. Norðdahl"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 246534,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 678,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁPÁ",
                    birth: "1966-05-23T00:00:00.000Z",
                    congressman_id: 678,
                    death: null,
                    name: "Árni Páll Árnason"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 229353,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229354,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 630,
                    constituency: 50
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÖJ",
                    birth: "1948-07-17T00:00:00.000Z",
                    congressman_id: 630,
                    death: null,
                    name: "Ögmundur Jónasson"
                },
                congressman_constituency: {
                    abbr_long: "Suðvest.",
                    abbr_short: "SV",
                    constituency_id: 50,
                    description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                    name: "Suðvesturkjördæmi"
                },
                sessions: [
                    {
                        _id: 188866,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-11-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188867,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-11-17T00:00:00.000Z",
                        to: "2011-11-30T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 188868,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-12-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188869,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188870,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 188871,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-01T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188872,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        constituency_id: 50,
        description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
        name: "Suðvesturkjördæmi"
    }
];

const partySessions = [
    {
        _id: 2,
        abbr_long: "Framsfl.",
        abbr_short: "F",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        color: null,
        congressmen: [
            {
                _id: {
                    congressman: 1027,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HuldA",
                    birth: "1968-02-07T01:00:00.000Z",
                    congressman_id: 1027,
                    death: null,
                    name: "Huld Aðalbjarnardóttir"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 232945,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-16T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 651,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BJJ",
                    birth: "1979-07-24T00:00:00.000Z",
                    congressman_id: 651,
                    death: null,
                    name: "Birkir Jón Jónsson"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 215124,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-04-16T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 215125,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-16T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 215126,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-05-07T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 686,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HöskÞ",
                    birth: "1973-05-08T00:00:00.000Z",
                    congressman_id: 686,
                    death: null,
                    name: "Höskuldur Þórhallsson"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 230140,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 707,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1982-10-29T00:00:00.000Z",
                    congressman_id: 707,
                    death: null,
                    name: "Ásmundur Einar Daðason"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 237821,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 722,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GBS",
                    birth: "1968-06-09T00:00:00.000Z",
                    congressman_id: 722,
                    death: null,
                    name: "Gunnar Bragi Sveinsson"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 238329,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238330,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 238331,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-04-23T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238332,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-23T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 238333,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-05-07T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 726,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1962-04-20T00:00:00.000Z",
                    congressman_id: 726,
                    death: null,
                    name: "Sigurður Ingi Jóhannsson"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 239055,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239056,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-11T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1006,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SSS",
                    birth: "1974-04-05T00:00:00.000Z",
                    congressman_id: 1006,
                    death: null,
                    name: "Sigurgeir Sindri Sigurgeirsson"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 241675,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241676,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-04-23T00:00:00.000Z",
                        to: "2012-05-07T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 706,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VigH",
                    birth: "1965-03-20T01:00:00.000Z",
                    congressman_id: 706,
                    death: null,
                    name: "Vigdís Hauksdóttir"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 194462,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-06-12T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 194463,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-06-12T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 194464,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 530,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SF",
                    birth: "1962-08-10T00:00:00.000Z",
                    congressman_id: 530,
                    death: null,
                    name: "Siv Friðleifsdóttir"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 188452,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188453,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-11T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1151,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GHV",
                    birth: "1973-02-23T00:00:00.000Z",
                    congressman_id: 1151,
                    death: null,
                    name: "Guðrún H. Valdimarsdóttir"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 246055,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2012-06-12T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 729,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SDG",
                    birth: "1975-03-12T00:00:00.000Z",
                    congressman_id: 729,
                    death: null,
                    name: "Sigmundur Davíð Gunnlaugsson"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 238982,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 703,
                    party: 2
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EyH",
                    birth: "1972-12-12T00:00:00.000Z",
                    congressman_id: 703,
                    death: null,
                    name: "Eygló Harðardóttir"
                },
                congressman_party: {
                    abbr_long: "Framsfl.",
                    abbr_short: "F",
                    color: null,
                    name: "Framsóknarflokkur",
                    party_id: 2
                },
                sessions: [
                    {
                        _id: 224162,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Framsfl.",
                            abbr_short: "F",
                            color: null,
                            name: "Framsóknarflokkur",
                            party_id: 2
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        name: "Framsóknarflokkur",
        party_id: 2
    },
    {
        _id: 42,
        abbr_long: "Hreyf.",
        abbr_short: "Hr",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        color: null,
        congressmen: [
            {
                _id: {
                    congressman: 1143,
                    party: 42
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JKA",
                    birth: "1962-01-30T01:00:00.000Z",
                    congressman_id: 1143,
                    death: null,
                    name: "Jón Kr. Arnarson"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                sessions: [
                    {
                        _id: 246243,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1126,
                    party: 42
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldJ",
                    birth: "1970-12-09T00:00:00.000Z",
                    congressman_id: 1126,
                    death: null,
                    name: "Baldvin Jónsson"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                sessions: [
                    {
                        _id: 242997,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 242998,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 723,
                    party: 42
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MT",
                    birth: "1972-05-20T00:00:00.000Z",
                    congressman_id: 723,
                    death: null,
                    name: "Margrét Tryggvadóttir"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                sessions: [
                    {
                        _id: 238785,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238786,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 238787,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1013,
                    party: 42
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VSk",
                    birth: "1956-05-08T00:00:00.000Z",
                    congressman_id: 1013,
                    death: null,
                    name: "Valgeir Skagfjörð"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                sessions: [
                    {
                        _id: 239308,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 728,
                    party: 42
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BirgJ",
                    birth: "1967-04-17T00:00:00.000Z",
                    congressman_id: 728,
                    death: null,
                    name: "Birgitta Jónsdóttir"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                sessions: [
                    {
                        _id: 237933,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237934,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237935,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-06-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237936,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237937,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 713,
                    party: 42
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÞSa",
                    birth: "1960-06-09T00:00:00.000Z",
                    congressman_id: 713,
                    death: null,
                    name: "Þór Saari"
                },
                congressman_party: {
                    abbr_long: "Hreyf.",
                    abbr_short: "Hr",
                    color: null,
                    name: "Hreyfingin",
                    party_id: 42
                },
                sessions: [
                    {
                        _id: 239423,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239424,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 239425,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Hreyf.",
                            abbr_short: "Hr",
                            color: null,
                            name: "Hreyfingin",
                            party_id: 42
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        name: "Hreyfingin",
        party_id: 42
    },
    {
        _id: 38,
        abbr_long: "Samf.",
        abbr_short: "Sf",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        color: null,
        congressmen: [
            {
                _id: {
                    congressman: 631,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÖS",
                    birth: "1953-06-19T00:00:00.000Z",
                    congressman_id: 631,
                    death: null,
                    name: "Össur Skarphéðinsson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 174513,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 662,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MÁ",
                    birth: "1953-10-30T01:00:00.000Z",
                    congressman_id: 662,
                    death: null,
                    name: "Mörður Árnason"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 190785,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 720,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SkH",
                    birth: "1965-04-15T00:00:00.000Z",
                    congressman_id: 720,
                    death: null,
                    name: "Skúli Helgason"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 239138,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 725,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MSch",
                    birth: "1972-04-23T00:00:00.000Z",
                    congressman_id: 725,
                    death: null,
                    name: "Magnús Orri Schram"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 238779,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 396,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1953-06-26T00:00:00.000Z",
                    congressman_id: 396,
                    death: null,
                    name: "Kristján L. Möller"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 202095,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 202096,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 202097,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 719,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-04-09T00:00:00.000Z",
                    congressman_id: 719,
                    death: null,
                    name: "Oddný G. Harðardóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 238801,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238802,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238803,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-09-01T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 238805,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 658,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HHj",
                    birth: "1967-06-09T00:00:00.000Z",
                    congressman_id: 658,
                    death: null,
                    name: "Helgi Hjörvar"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 215873,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1136,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BaldÞ",
                    birth: "1968-01-25T01:00:00.000Z",
                    congressman_id: 1136,
                    death: null,
                    name: "Baldur Þórhallsson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 242995,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-05-19T00:00:00.000Z",
                        to: "2012-06-02T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1130,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LGeir",
                    birth: "1959-04-21T00:00:00.000Z",
                    congressman_id: 1130,
                    death: null,
                    name: "Lúðvík Geirsson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 243958,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-11-03T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 243959,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-11-03T00:00:00.000Z",
                        to: "2011-12-02T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 243960,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-02T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 683,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GuðbH",
                    birth: "1950-06-03T00:00:00.000Z",
                    congressman_id: 683,
                    death: null,
                    name: "Guðbjartur Hannesson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 229918,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229919,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-01-16T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229920,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-16T00:00:00.000Z",
                        to: "2012-01-30T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229921,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-30T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 715,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓÞ",
                    birth: "1958-09-08T00:00:00.000Z",
                    congressman_id: 715,
                    death: null,
                    name: "Ólína Kjerúlf Þorvarðardóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 238844,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 705,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "VBj",
                    birth: "1950-01-13T01:00:00.000Z",
                    congressman_id: 705,
                    death: null,
                    name: "Valgerður Bjarnadóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 233853,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 717,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SER",
                    birth: "1961-03-06T01:00:00.000Z",
                    congressman_id: 717,
                    death: null,
                    name: "Sigmundur Ernir Rúnarsson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 239031,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-14T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239032,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-14T00:00:00.000Z",
                        to: "2011-12-18T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 239033,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-18T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 653,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BjörgvS",
                    birth: "1970-10-30T00:00:00.000Z",
                    congressman_id: 653,
                    death: null,
                    name: "Björgvin G. Sigurðsson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 203791,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 724,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JRG",
                    birth: "1958-07-06T00:00:00.000Z",
                    congressman_id: 724,
                    death: null,
                    name: "Jónína Rós Guðmundsdóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 238582,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1138,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AT",
                    birth: "1960-01-07T01:00:00.000Z",
                    congressman_id: 1138,
                    death: null,
                    name: "Amal Tamimi"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 245313,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-11-03T00:00:00.000Z",
                        to: "2011-12-02T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 708,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1971-05-31T00:00:00.000Z",
                    congressman_id: 708,
                    death: null,
                    name: "Róbert Marshall"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 233567,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1004,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArnaJ",
                    birth: "1976-05-30T00:00:00.000Z",
                    congressman_id: 1004,
                    death: null,
                    name: "Arna Lára Jónsdóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 240152,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-16T00:00:00.000Z",
                        to: "2012-01-30T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 678,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁPÁ",
                    birth: "1966-05-23T00:00:00.000Z",
                    congressman_id: 678,
                    death: null,
                    name: "Árni Páll Árnason"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 229353,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229354,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 660,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "KaJúl",
                    birth: "1974-11-23T00:00:00.000Z",
                    congressman_id: 660,
                    death: null,
                    name: "Katrín Júlíusdóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 216134,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 216135,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-01-20T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 216136,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-20T00:00:00.000Z",
                        to: "2012-08-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 216137,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "með varamann"
                    }
                ]
            },
            {
                _id: {
                    congressman: 287,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1942-10-04T00:00:00.000Z",
                    congressman_id: 287,
                    death: null,
                    name: "Jóhanna Sigurðardóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 134613,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-05-19T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 134614,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-05-19T00:00:00.000Z",
                        to: "2012-06-02T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 134615,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-06-02T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1128,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LE",
                    birth: "1964-08-21T00:00:00.000Z",
                    congressman_id: 1128,
                    death: null,
                    name: "Logi Einarsson"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 243939,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 243940,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-12-14T00:00:00.000Z",
                        to: "2011-12-18T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1140,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "MN",
                    birth: "1956-09-30T00:00:00.000Z",
                    congressman_id: 1140,
                    death: null,
                    name: "Magnús M. Norðdahl"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 246534,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-01-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 48,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1949-10-16T00:00:00.000Z",
                    congressman_id: 48,
                    death: null,
                    name: "Ásta R. Jóhannesdóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 158553,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 158554,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 158555,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 712,
                    party: 38
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "SII",
                    birth: "1968-05-29T00:00:00.000Z",
                    congressman_id: 712,
                    death: null,
                    name: "Sigríður Ingibjörg Ingadóttir"
                },
                congressman_party: {
                    abbr_long: "Samf.",
                    abbr_short: "Sf",
                    color: null,
                    name: "Samfylkingin",
                    party_id: 38
                },
                sessions: [
                    {
                        _id: 239040,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Samf.",
                            abbr_short: "Sf",
                            color: null,
                            name: "Samfylkingin",
                            party_id: 38
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        name: "Samfylkingin",
        party_id: 38
    },
    {
        _id: 35,
        abbr_long: "Sjálfstfl.",
        abbr_short: "S",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        color: null,
        congressmen: [
            {
                _id: {
                    congressman: 477,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "PHB",
                    birth: "1944-06-24T00:00:00.000Z",
                    congressman_id: 477,
                    death: null,
                    name: "Pétur H. Blöndal"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 188217,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 718,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁsbÓ",
                    birth: "1962-11-16T01:00:00.000Z",
                    congressman_id: 718,
                    death: null,
                    name: "Ásbjörn Óttarsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 237806,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237807,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237808,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-11-14T00:00:00.000Z",
                        to: "2012-06-11T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 237809,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 237810,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 650,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1968-06-12T00:00:00.000Z",
                    congressman_id: 650,
                    death: null,
                    name: "Birgir Ármannsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 215082,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 652,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1970-01-26T00:00:00.000Z",
                    congressman_id: 652,
                    death: null,
                    name: "Bjarni Benediktsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 215145,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 688,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1956-09-21T00:00:00.000Z",
                    congressman_id: 688,
                    death: null,
                    name: "Jón Gunnarsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 230301,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1149,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "EIS",
                    birth: "1966-10-26T01:00:00.000Z",
                    congressman_id: 1149,
                    death: null,
                    name: "Eyrún Ingibjörg Sigþórsdóttir"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 240693,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 240694,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2012-06-11T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 710,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "TÞH",
                    birth: "1963-01-17T01:00:00.000Z",
                    congressman_id: 710,
                    death: null,
                    name: "Tryggvi Þór Herbertsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 239274,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 692,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1966-12-03T01:00:00.000Z",
                    congressman_id: 692,
                    death: null,
                    name: "Ólöf Nordal"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 230628,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 693,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-09-30T00:00:00.000Z",
                    congressman_id: 693,
                    death: null,
                    name: "Ragnheiður E. Árnadóttir"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 230685,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 632,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1965-10-04T00:00:00.000Z",
                    congressman_id: 632,
                    death: null,
                    name: "Þorgerður K. Gunnarsdóttir"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 202855,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 124,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-12-02T01:00:00.000Z",
                    congressman_id: 124,
                    death: null,
                    name: "Einar K. Guðfinnsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 138922,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 38,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁJ",
                    birth: "1944-03-01T01:00:00.000Z",
                    congressman_id: 38,
                    death: null,
                    name: "Árni Johnsen"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 149753,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 2,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArnbS",
                    birth: "1956-02-18T01:00:00.000Z",
                    congressman_id: 2,
                    death: null,
                    name: "Arnbjörg Sveinsdóttir"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 186709,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 656,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-12-19T01:00:00.000Z",
                    congressman_id: 656,
                    death: null,
                    name: "Guðlaugur Þór Þórðarson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 192752,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 687,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1967-08-26T00:00:00.000Z",
                    congressman_id: 687,
                    death: null,
                    name: "Illugi Gunnarsson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 230162,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 691,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1957-07-15T00:00:00.000Z",
                    congressman_id: 691,
                    death: null,
                    name: "Kristján Þór Júlíusson"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 230517,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 230518,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 230519,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 721,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "UBK",
                    birth: "1974-04-06T00:00:00.000Z",
                    congressman_id: 721,
                    death: null,
                    name: "Unnur Brá Konráðsdóttir"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 239284,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 694,
                    party: 35
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "RR",
                    birth: "1949-06-23T00:00:00.000Z",
                    congressman_id: 694,
                    death: null,
                    name: "Ragnheiður Ríkharðsdóttir"
                },
                congressman_party: {
                    abbr_long: "Sjálfstfl.",
                    abbr_short: "S",
                    color: null,
                    name: "Sjálfstæðisflokkur",
                    party_id: 35
                },
                sessions: [
                    {
                        _id: 230706,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Sjálfstfl.",
                            abbr_short: "S",
                            color: null,
                            name: "Sjálfstæðisflokkur",
                            party_id: 35
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        name: "Sjálfstæðisflokkur",
        party_id: 35
    },
    {
        _id: 23,
        abbr_long: "Vinstri-gr.",
        abbr_short: "Vg",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        color: null,
        congressmen: [
            {
                _id: {
                    congressman: 690,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1976-02-01T00:00:00.000Z",
                    congressman_id: 690,
                    death: null,
                    name: "Katrín Jakobsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 230364,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-01T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 230365,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 230366,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 371,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "JBjarn",
                    birth: "1943-12-26T01:00:00.000Z",
                    congressman_id: 371,
                    death: null,
                    name: "Jón Bjarnason"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 201926,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 201927,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 737,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BVG",
                    birth: "1959-09-20T00:00:00.000Z",
                    congressman_id: 737,
                    death: null,
                    name: "Björn Valur Gíslason"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 169730,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 727,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GLG",
                    birth: "1972-01-10T00:00:00.000Z",
                    congressman_id: 727,
                    death: null,
                    name: "Guðfríður Lilja Grétarsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 229954,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229955,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229956,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-31T00:00:00.000Z",
                        to: "2012-06-06T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229957,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-06T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229958,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 634,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1948-01-08T01:00:00.000Z",
                    congressman_id: 634,
                    death: null,
                    name: "Þuríður Backman"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 177490,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 177491,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 177492,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 709,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÞrB",
                    birth: "1944-11-30T01:00:00.000Z",
                    congressman_id: 709,
                    death: null,
                    name: "Þráinn Bertelsson"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 239464,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1127,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "HLÞ",
                    birth: "1981-06-25T00:00:00.000Z",
                    congressman_id: 1127,
                    death: null,
                    name: "Halldóra Lóa Þorvaldsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 243516,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-13T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1141,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AM",
                    birth: "1964-04-15T00:00:00.000Z",
                    congressman_id: 1141,
                    death: null,
                    name: "Ari Matthíasson"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 245315,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 714,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LRM",
                    birth: "1957-06-24T00:00:00.000Z",
                    congressman_id: 714,
                    death: null,
                    name: "Lilja Rafney Magnúsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 179451,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 179452,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 179453,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-06-13T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 179454,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-13T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 179455,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1012,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "BjG",
                    birth: "1965-02-27T01:00:00.000Z",
                    congressman_id: 1012,
                    death: null,
                    name: "Bjarkey Olsen Gunnarsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 220893,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1000,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ALE",
                    birth: "1979-08-23T00:00:00.000Z",
                    congressman_id: 1000,
                    death: null,
                    name: "Auður Lilja Erlingsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 229272,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-23T00:00:00.000Z",
                        to: "2012-02-13T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 229273,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-14T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 676,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁI",
                    birth: "1951-05-01T00:00:00.000Z",
                    congressman_id: 676,
                    death: null,
                    name: "Álfheiður Ingadóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 161202,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-02-03T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 161203,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-03T00:00:00.000Z",
                        to: "2012-02-22T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 161204,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-22T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 730,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1964-08-24T00:00:00.000Z",
                    congressman_id: 730,
                    death: null,
                    name: "Svandís Svavarsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 239246,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239247,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 239248,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-29T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 239249,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 679,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÁÞS",
                    birth: "1960-07-30T00:00:00.000Z",
                    congressman_id: 679,
                    death: null,
                    name: "Árni Þór Sigurðsson"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 229443,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-01-23T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229444,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-23T00:00:00.000Z",
                        to: "2012-02-13T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229445,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-13T00:00:00.000Z",
                        to: "2012-06-14T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 229446,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-14T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 229447,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1142,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "TM",
                    birth: "1983-03-11T00:00:00.000Z",
                    congressman_id: 1142,
                    death: null,
                    name: "Telma Magnúsdóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 247071,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1007,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ArndS",
                    birth: "1978-06-06T00:00:00.000Z",
                    congressman_id: 1007,
                    death: null,
                    name: "Arndís Soffía Sigurðardóttir"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 237639,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-24T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 237640,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-06T00:00:00.000Z",
                        to: "2012-02-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 630,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÖJ",
                    birth: "1948-07-17T00:00:00.000Z",
                    congressman_id: 630,
                    death: null,
                    name: "Ögmundur Jónasson"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 188866,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-11-17T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188867,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-11-17T00:00:00.000Z",
                        to: "2011-11-30T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 188868,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-12-01T00:00:00.000Z",
                        to: "2012-01-10T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188869,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-01-10T00:00:00.000Z",
                        to: "2012-03-27T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188870,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 188871,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-31T00:00:00.000Z",
                        to: "2012-09-01T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 188872,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 557,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: null,
                    birth: "1955-08-04T00:00:00.000Z",
                    congressman_id: 557,
                    death: null,
                    name: "Steingrímur J. Sigfússon"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 151839,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-12-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 151840,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-12-31T00:00:00.000Z",
                        to: "2012-08-31T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 151841,
                        congressman_constituency: {
                            abbr_long: "Norðaust.",
                            abbr_short: "NA",
                            constituency_id: 49,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðausturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-09-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1010,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "DSt",
                    birth: "1973-10-14T00:00:00.000Z",
                    congressman_id: 1010,
                    death: null,
                    name: "Davíð Stefánsson"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 240589,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 240590,
                        congressman_constituency: {
                            abbr_long: "Reykv. n.",
                            abbr_short: "RN",
                            constituency_id: 44,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-02-03T00:00:00.000Z",
                        to: "2012-02-22T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 1001,
                    party: 23
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "ÓGunn",
                    birth: "1963-07-17T00:00:00.000Z",
                    congressman_id: 1001,
                    death: null,
                    name: "Ólafur Þór Gunnarsson"
                },
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                sessions: [
                    {
                        _id: 241377,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-10-17T00:00:00.000Z",
                        to: "2011-10-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241378,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2011-11-17T00:00:00.000Z",
                        to: "2011-11-30T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241379,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-27T00:00:00.000Z",
                        to: "2012-03-28T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241380,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-03-28T00:00:00.000Z",
                        to: "2012-03-31T00:00:00.000Z",
                        type: "varamaður"
                    },
                    {
                        _id: 241381,
                        congressman_constituency: {
                            abbr_long: "Suðvest.",
                            abbr_short: "SV",
                            constituency_id: 50,
                            description: "Til þess teljast eftirtalin sveitarfélög: Hafnarfjarðarkaupstaður, Garðabær, Bessastaðahreppur, Kópavogsbær, Seltjarnarneskaupstaður, Mosfellsbær og Kjósarhreppur.",
                            name: "Suðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Vinstri-gr.",
                            abbr_short: "Vg",
                            color: null,
                            name: "Vinstrihreyfingin - grænt framboð",
                            party_id: 23
                        },
                        from: "2012-06-06T00:00:00.000Z",
                        to: "2012-06-20T00:00:00.000Z",
                        type: "varamaður"
                    }
                ]
            }
        ],
        name: "Vinstrihreyfingin - grænt framboð",
        party_id: 23
    },
    {
        _id: 17,
        abbr_long: "Utan þfl.",
        abbr_short: "U",
        assembly: {
            assembly_id: 140,
            from: "2011-10-01T00:00:00.000Z",
            to: "2012-09-10T00:00:00.000Z"
        },
        color: null,
        congressmen: [
            {
                _id: {
                    congressman: 711,
                    party: 17
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "LMós",
                    birth: "1961-11-11T01:00:00.000Z",
                    congressman_id: 711,
                    death: null,
                    name: "Lilja Mósesdóttir"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                sessions: [
                    {
                        _id: 238771,
                        congressman_constituency: {
                            abbr_long: "Reykv. s.",
                            abbr_short: "RS",
                            constituency_id: 45,
                            description: "Reykjavík skal skipta frá vestri til austurs í tvö kjördæmi, suðurkjördæmi og norðurkjördæmi.",
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 704,
                    party: 17
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "GStein",
                    birth: "1972-10-28T00:00:00.000Z",
                    congressman_id: 704,
                    death: null,
                    name: "Guðmundur Steingrímsson"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                sessions: [
                    {
                        _id: 232856,
                        congressman_constituency: {
                            abbr_long: "Norðvest.",
                            abbr_short: "NV",
                            constituency_id: 51,
                            description: "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                            name: "Norðvesturkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            },
            {
                _id: {
                    congressman: 675,
                    party: 17
                },
                assembly: {
                    assembly_id: 140,
                    from: "2011-10-01T00:00:00.000Z",
                    to: "2012-09-10T00:00:00.000Z"
                },
                congressman: {
                    abbreviation: "AtlG",
                    birth: "1947-08-12T00:00:00.000Z",
                    congressman_id: 675,
                    death: null,
                    name: "Atli Gíslason"
                },
                congressman_party: {
                    abbr_long: "Utan þfl.",
                    abbr_short: "U",
                    color: null,
                    name: "utan þingflokka",
                    party_id: 17
                },
                sessions: [
                    {
                        _id: 217690,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-01T00:00:00.000Z",
                        to: "2011-10-24T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 217691,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-10-24T00:00:00.000Z",
                        to: "2011-11-14T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 217692,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2011-11-14T00:00:00.000Z",
                        to: "2012-02-06T00:00:00.000Z",
                        type: "þingmaður"
                    },
                    {
                        _id: 217693,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2012-02-06T00:00:00.000Z",
                        to: "2012-02-20T00:00:00.000Z",
                        type: "með varamann"
                    },
                    {
                        _id: 217694,
                        congressman_constituency: {
                            abbr_long: "Suðurk.",
                            abbr_short: "SU",
                            constituency_id: 46,
                            description: "Til þess teljast eftirtalin sveitarfélög: Sveitarfélagið Hornafjörður, Skaftárhreppur, Mýrdalshreppur, Austur-Eyjafjallahreppur, Vestur-Eyjafjallahreppur, Austur-Landeyjahreppur, Vestur-Landeyjahreppur, Fljótshlíðarhreppur, Hvolhreppur, Rangárvallahreppur, Holta- og Landsveit, Ásahreppur, Djúpárhreppur, Vestmannaeyjabær, Gaulverjabæjarhreppur, Sveitarfélagið Árborg, Hraungerðishreppur, Villingaholtshreppur, Skeiðahreppur, Gnúpverjahreppur, Hrunamannahreppur, Biskupstungnahreppur, Laugardalshreppur, Grímsnes- og Grafningshreppur, Þingvallahreppur, Hveragerðisbær, Sveitarfélagið Ölfus, Grindavíkurkaupstaður, Sandgerðisbær, Gerðahreppur, Reykjanesbær og Vatnsleysustrandarhreppur.",
                            name: "Suðurkjördæmi"
                        },
                        congressman_party: {
                            abbr_long: "Utan þfl.",
                            abbr_short: "U",
                            color: null,
                            name: "utan þingflokka",
                            party_id: 17
                        },
                        from: "2012-02-20T00:00:00.000Z",
                        to: "2012-09-10T00:00:00.000Z",
                        type: "þingmaður"
                    }
                ]
            }
        ],
        name: "utan þingflokka",
        party_id: 17
    }
];
// ------------------------------





function generateAssembly(id: number) {
    return {
        assembly_id: id,
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
    }
}

function generateCongressman(id: number) {
    return {
        congressman_id: id,
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
        issue_id: id,
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
        document_id: id,
        assembly: generateAssembly(assembly),
        issue: generateIssue(issue, assembly, category),
        date: new Date(faker.date.past()).toISOString(),
        url: faker.internet.url(),
        type: faker.lorem.word(),
    }
}

function generateSpeech(id: number, assembly: number, issue: number, category: string) {
    return {
        speech_id: `${faker.random.uuid()}${id}`,
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
        party_id: id,
        name: party.name,
        abbrShort: faker.lorem.word(),
        abbrLong: faker.lorem.word(),
        color: party.color,
    }
}

function generateConstituencies() {
    const constituency = oneOf<{ constituency_id: number, name: string, short: string, long: string | null }>(constituencies);

    return {
        constituency_id: constituency.constituency_id,
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
        plenary_id: identifier,
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
        plenary_item_id: id,
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