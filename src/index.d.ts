
export interface Context {
    get(arg: 'assembly' |
            'assemblies' |
            'assembly.congressman' |
            'assembly.congressmen' |
            'assembly.issue' |
            'assembly.issues' |
            'assembly.issue.documents' |
            'assembly.issue.speeches',
        params?: Record<string, unknown>
    ): Promise<Record<string, unknown> | Array<Record<string, unknown>>>
}