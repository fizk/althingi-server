import type { Context } from './index.d.ts';
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

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
        type: faker.lorem.word(),
        typeName: faker.lorem.word(),
        typeSubName: faker.lorem.word(),
        status: faker.lorem.word(),
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
        congressman_type: faker.lorem.word(),
        from: new Date(faker.date.past()).toISOString(),
        to: new Date(faker.date.past()).toISOString(),
        text: faker.lorem.paragraphs(),
        type: faker.lorem.word(),
        iteration: '*',
        word_count: faker.random.number(),
        validated: Math.round(Math.random() * 2) ? true : false,
    }
}