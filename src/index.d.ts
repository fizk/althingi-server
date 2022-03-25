
export interface Context {
    get(arg: 'person' |
            'assembly' |
            'assemblies' |
            'assembly.congressman' |
            'assembly.congressmen.sessions' |
            'assembly.constituencies.sessions' |
            'assembly.government.sessions' |
            'assembly.plenary' |
            'assembly.plenaries' |
            'assembly.parties.sessions' |
            'assembly.issue' |
            'assembly.issues' |
            'assembly.issue.documents' |
            'assembly.issue.speeches',
        params?: Record<string, unknown>
    ): Promise<Record<string, unknown> | Array<Record<string, unknown>>>
}