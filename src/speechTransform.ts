export default (text: string): string => (compose(
        removeRoot,
        bell,
        president,
        convertParagraphs,
    )(text)
)

const removeRoot = (text: string): string => (
    text
        .replace(/<ræðutexti .*=".*">/gm, '')
        .replace(/<\/ræðutexti>/gm, '')
)

const bell = (text: string): string => (
    text.replaceAll(
        '<bjalla/>',
        '<strong> [ 🔔 ] </strong>'
    )
)

const president = (text: string) => {
    return text.replaceAll(
        /(<forseti.*>)((.|\W|\w)*?)(<\/forseti>)/gm,
        '<blockquote><strong>forseti</strong>: $2</blockquote>'
    )
}

const convertParagraphs = (text: string): string => {
    return Array.from(text.replaceAll('\n', '').matchAll(/(<mgr>)((.|\W|\w)*?)(<\/mgr>)/gm))
        .map(item => `<p>${item[2].trim()}</p>`).join('\n');
}

// deno-lint-ignore no-explicit-any
const compose = (...functions: any[]) => (x: any) => functions.reduceRight((acc, fn) => fn(acc), x);