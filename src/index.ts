import { graphql } from '../lib/graphql/graphql.ts';
import schema from './schema.ts';

const server = Deno.listen({ port: 3000 });
console.log({
    'section_name': 'HTTP webserver running.  Access it at:  http://localhost:3000/',
    'request_method': null,
    'request_headers': [],
    'request_uri': null,
    'response_status': 0,
    'response_headers': [],
    'error_file': null,
    'error_message': null,
    'error_trace': null,
});

for await (const conn of server) {
    serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
    for await (const { request, respondWith } of Deno.serveHttp(conn)) {
        const chunks: Uint8Array[] = [];

        const reader = request?.body?.getReader();

        if (request.method.toLowerCase() !== 'post' || !reader) {
            respondWith(
                new Response(JSON.stringify({
                    errors: [{
                        message: 'Only POST request are valid and payload is required',
                        locations: [],
                        path: [],
                        extensions: {
                            code: 'CAN_NOT_SERVICE_REQUEST',
                            timestamp: new Date().toString()
                        }
                    }],
                }), {
                    status: 400,
                    statusText: '400 Bad Request',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            );
            console.log({
                'section_name': 'server',
                'request_method': request.method,
                'request_headers': Array.from(request.headers.entries()).reduce<{[key: string]: string}>((previous, [key, value]) => {
                    previous[key] = value;
                    return previous;
                }, {}),
                'request_uri': request.url,
                'response_status': 400,
                'response_headers': [],
                'error_file': 'index.ts',
                'error_message': 'Request method invalid or missing payload',
                'error_trace': {},
            });
            continue;
        }

        const stream = new ReadableStream({
            start(controller) {
                function next() {
                    reader?.read().then(({done, value}) => {
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        return next();
                    })
                }
                return next();
            }
        });

        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        const len = chunks.reduce((len, c) => c.length + len, 0);
        const result = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.length;
        }

        const jsonRequest = JSON.parse(new TextDecoder().decode(result));

        graphql({
            schema,
            source: jsonRequest.query,
            variableValues: jsonRequest.variables,
        }).then((result) => {
            respondWith(
                new Response(JSON.stringify(result), {
                    status: 200,
                    statusText: '200 OK',
                    headers: {
                        'content-type': 'application/json'
                    }
                }),
            );
            console.log({
                'section_name': 'server',
                'request_method': request.method,
                'request_headers': Array.from(request.headers.entries()).reduce<{ [key: string]: string }>((previous, [key, value]) => {
                    previous[key] = value;
                    return previous;
                }, {}),
                'request_uri': jsonRequest.query,
                'response_status': 200,
                'response_headers': jsonRequest.variables,
                'error_file': null,
                'error_message': null,
                'error_trace': null,
            });
        }).catch(reason => {
            respondWith(
                new Response(JSON.stringify({
                    errors: [{
                        message: reason.message,
                        locations: [],
                        path: [],
                        extensions: {
                            code: 'INTERNAL_ERROR',
                            timestamp: new Date().toString()
                        }
                    }],
                }), {
                    status: 500,
                    statusText: '500 Internal Server Error',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            );
            console.log({
                'section_name': 'server',
                'request_method': request.method,
                'request_headers': Array.from(request.headers.entries()).reduce<{ [key: string]: string }>((previous, [key, value]) => {
                    previous[key] = value;
                    return previous;
                }, {}),
                'request_uri': jsonRequest.query,
                'response_status': 500,
                'response_headers': [],
                'error_file': 'index.ts',
                'error_message': reason.message,
                'error_trace': jsonRequest.variables,
            });
        });
    }
}