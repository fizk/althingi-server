export interface Context {
    get(arg: string | number): Promise<Record<string, unknown>>
}