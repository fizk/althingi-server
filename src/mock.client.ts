import type { Context } from './index.d.ts';
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

export function oneOf(options: Array<unknown>) {
    return options.sort(() => 0.5 - Math.random()).pop();
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
                    Array.from({ length: Math.random() * 62 }).map((_, i) => generateCongressman(i + 1))
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
        id: Number(id),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
    }
}

function generateCongressman(id: number) {
    return {
        id: Number(id),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        birth: new Date(faker.date.past()).toISOString(),
        death: null,
        abbreviation: faker.hacker.abbreviation()
    }
}

function generateIssue(id: number, assembly: number, category: string) {
    return {
        id: id,
        name: faker.lorem.sentence(),
        category: category,
        assembly: generateAssembly(assembly),
        congressman: generateCongressman(faker.random.number()),
        subName: faker.lorem.word(),
        type: oneOf(['l', 'a', 'f', 's', 'b', 'm', 'q', 'v', 'ud', 'ft', 'ff', 'um', 'uu', 'n',]),
        typeName: oneOf(['Frumvarp til laga', 'Tillaga til þingsályktunar', 'Skýrsla', 'Beiðni um skýrslu', 'Fyrirspurn', 'umræður utan dagskraár', 'oóundirbúinn fyrirspurnatími', 'fyrirspurnir til raáðherra skv. 7. mgr. 49. gr. þingskapa', 'sérstök umræða', 'álit',]),
        typeSubName: oneOf(['lagafrumvarp', 'þingsályktunartillaga', 'frestun funda', 'skýrsla', 'beiðni um skýrslu', 'fyrirspurn', 'fyrirspurn til skrifl. svars', 'vantraust', null, 'álit nefndar',]),
        status: oneOf([null, 'Samþykkt sem lög frá Alþingi', 'Bíður 1. umræðu', 'Í nefnd eftir 1. umræðu', 'Samþykkt sem ályktun Alþingis', 'Fyrirspurninni var svarað munnlega', 'Fyrirspurninni var svarað skriflega', 'Vísað til ríkisstjórnar', 'Fyrirspurnin var felld niður vegna ráðherraskipta', 'Fyrirspurninni var ekki svarað', 'Bíður 2. umröðu', 'Í nefnd eftir 2. umræðu', 'Ekki samþykkt', 'Fyrirspurnin var kölluð aftur', 'Fyrirspurninni hefur ekki verið svarað', 'Bíður 3. umræðu',]),
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
        congressman: generateCongressman(faker.random.number()),
        congressman_type: oneOf([null, 'forseti alingis', 'fjrmlarherra', 'dmsmlarherra', 'viskiptarherra', 'landbnaarrherra', 'heilbrigisrherra', 'atvinnumlarherra', 'flagsmlarherra', 'forstisrherra', 'inaarrherra', 'sjvartvegsrherra', 'menntamlarherra', 'samgngurherra', 'utanrkisrherra', 'umhverfisrherra', 'rherra Hagstofu slands', 'rherra norrnna samstarfsmla', 'flags- og tryggingamlarherra', 'sjvartvegs- og landbnaarrherra', 'efnahags- og viskiptarherra', 'mennta- og menningarmlarherra', 'dmsmla-  og mannrttindarherra', 'samgngu-  og sveitarstjrnarrherra', 'velferarrherra', 'innanrkisrherra', 'fjrmla- og efnahagsrherra', 'umhverfis- og aulindarherra', 'atvinnuvega- og nskpunarrherra', 'flags- og hsnismlarherra', 'inaar- og viskiptarherra', 'flags- og jafnrttismlarherra', 'feramla-, inaar- og nskpunarrherra', 'samgngu- og sveitarstjrnarrherra', 'flags- og barnamlarherra', 'utanrkis- og runarsamvinnurherra', 'umhverfis-, orku- og loftslagsrherra', 'flagsmla- og vinnumarkasrherra', 'innviarherra', 'mennta- og barnamlarherra', 'vsinda-, inaar- og nskpunarrherra', 'feramla-, viskipta- og menningarmlarherra', 'flags- og vinnumarkasrherra', 'matvlarherra', 'hskla-, inaar- og nskpunarrherra',]),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
        text: faker.lorem.paragraphs(),
        type: oneOf(['ræða', 'um atkvæðagreiðslu', 'flutningsræða', 'um fundarstjórn', 'ótbýting þingskjala', 'grein fyrir atkvæði', 'svar', 'útvarpsræða', 'prent', 'jómfrúrræða', 'andsvar', 'ber af sér sakir', 'málsh. um fundarstjórn',]),
        iteration: '*',
        word_count: faker.random.number(),
        validated: oneOf([true, false]),
    }
}