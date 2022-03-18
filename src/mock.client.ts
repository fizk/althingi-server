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

const congressmenSessions = [
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
        _id: 634,
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
        sessions: [
            {
                _id: 177490,
                abbr: null,
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
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2011-10-01T00:00:00.000Z",
                session_id: 177490,
                to: "2012-03-28T00:00:00.000Z",
                type: "þingmaður"
            },
            {
                _id: 177491,
                abbr: null,
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
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-28T00:00:00.000Z",
                session_id: 177491,
                to: "2012-03-31T00:00:00.000Z",
                type: "með varamann"
            },
            {
                _id: 177492,
                abbr: null,
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
                congressman_party: {
                    abbr_long: "Vinstri-gr.",
                    abbr_short: "Vg",
                    color: null,
                    name: "Vinstrihreyfingin - grænt framboð",
                    party_id: 23
                },
                from: "2012-03-31T00:00:00.000Z",
                session_id: 177492,
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
                return Promise.resolve(congressmenSessions);
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