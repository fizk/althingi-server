import { GraphQLObjectType, GraphQLNonNull, GraphQLList } from '../../lib/graphql/type/definition.ts';
import { GraphQLString, GraphQLID, } from '../../lib/graphql/type/scalars.ts';
import { Session } from './Session.ts';
import { CommitteeSessions } from '../type/CommitteeSessions.ts';

export const AssemblyCongressman: GraphQLObjectType = new GraphQLObjectType({
    name: 'AssemblyCongressman',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: ({ congressman_id }) => congressman_id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({name}) => name,
        },
        birth: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: ({ birth }) => birth,
        },
        abbreviation: {
            type: GraphQLString,
            resolve: ({ abbreviation }) => abbreviation,
        },
        sessions: {
            type: new GraphQLList(Session),
            args: {
                assembly: {
                    type: GraphQLID,
                },
            },
            resolve: ({ congressman_id }, { assembly }, {_get}) => {
                // console.log(congressman_id, assembly);
                return [
                    {
                        "_id": 264059,
                        "abbr": null,
                        "assembly": {
                            "assembly_id": assembly,
                            "from": "2019-09-10T00:00:00.000Z",
                            "to": "2020-09-30T00:00:00.000Z"
                        },
                        "congressman": {
                            "congressman_id": congressman_id,
                            "name": "Halla Signý Kristjánsdóttir",
                            "birth": "1964-05-01T00:00:00.000Z",
                            "death": null,
                            "abbreviation": "HSK"
                        },
                        "congressman_constituency": {
                            "constituency_id": 53,
                            "name": "Norðvesturkjördæmi",
                            "abbr_short": "NV",
                            "abbr_long": "Norðvest.",
                            "description": "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur."
                        },
                        "congressman_party": {
                            "party_id": 2,
                            "name": "Framsóknarflokkur",
                            "abbr_short": "F",
                            "abbr_long": "Framsfl.",
                            "color": null
                        },
                        "from": "2019-09-10T00:00:00.000Z",
                        "session_id": 264059,
                        "to": "2019-10-20T00:00:00.000Z",
                        "type": "þingmaður"
                    }
                ];
                // return get('');
            },
        },
        committees: {
            type: new GraphQLList(CommitteeSessions),
            args: {
                assembly: {
                    type: GraphQLID,
                },
            },
            resolve: ({ congressman_id }, { assembly }, { _get }) => {
                return [
                    {
                        "_id": 205,
                        "committee_id": 205,
                        "name": "velferðarnefnd",
                        "first_assembly_id": 140,
                        "last_assembly_id": null,
                        "abbr_long": "velfn.",
                        "abbr_short": "vf",
                        "assembly": {
                            "assembly_id": 150,
                            "from": "2019-09-10T00:00:00.000Z",
                            "to": "2020-09-30T00:00:00.000Z",
                        },
                        "first_assembly": {
                            "assembly_id": 140,
                            "from": "2011-10-01T00:00:00.000Z",
                            "to": "2012-09-10T00:00:00.000Z"
                        },
                        "last_assembly": null,
                        "sessions": [
                            {
                                "_id": 262970,
                                "congressman": {
                                    "congressman_id": 1330,
                                    "name": "Halla Signý Kristjánsdóttir",
                                    "birth": "1964-05-01T00:00:00.000Z",
                                    "death": null,
                                    "abbreviation": "HSK"
                                },
                                "assembly": {
                                    "assembly_id": 150,
                                    "from": "2019-09-10T00:00:00.000Z",
                                    "to": "2020-09-30T00:00:00.000Z",
                                },
                                "sessions": [
                                    {
                                        "_id": 262970,
                                        "assembly": {
                                            "assembly_id": 150,
                                            "from": "2019-09-10T00:00:00.000Z",
                                            "to": "2020-09-30T00:00:00.000Z",
                                        },
                                        "committee": {
                                            "committee_id": 205,
                                            "name": "velferðarnefnd",
                                            "first_assembly_id": 140,
                                            "last_assembly_id": null,
                                            "abbr_long": "velfn.",
                                            "abbr_short": "vf"
                                        },
                                        "committee_sitting_id": 262970,
                                        "congressman": {
                                            "congressman_id": 1330,
                                            "name": "Halla Signý Kristjánsdóttir",
                                            "birth": "1964-05-01T00:00:00.000Z",
                                            "death": null,
                                            "abbreviation": "HSK"
                                        },
                                        "congressman_constituency": {
                                            "constituency_id": 53,
                                            "name": "Norðvesturkjördæmi",
                                            "abbr_short": "NV",
                                            "abbr_long": "Norðvest.",
                                            "description": "Til þess teljast eftirtalin sveitarfélög: Akraneskaupstaður, Hvalfjarðarstrandarhreppur, Skilmannahreppur, Innri-Akraneshreppur, Leirár- og Melahreppur, Skorradalshreppur, Borgarfjarðarsveit, Hvítársíðuhreppur, Borgarbyggð, Kolbeinsstaðahreppur, Eyja- og Miklaholtshreppur, Snæfellsbær, Eyrarsveit, Helgafellssveit, Stykkishólmsbær, Dalabyggð, Saurbæjarhreppur, Reykhólahreppur, Vesturbyggð, Tálknafjarðarhreppur, Bolungarvíkurkaupstaður, Ísafjarðarbær, Súðavíkurhreppur, Árneshreppur, Kaldrananeshreppur, Hólmavíkurhreppur, Kirkjubólshreppur, Broddaneshreppur, Bæjarhreppur, Húnaþing vestra, Áshreppur, Sveinsstaðahreppur, Torfalækjarhreppur, Blönduósbær, Svínavatnshreppur, Bólstaðarhlíðarhreppur, Engihlíðarhreppur, Vindhælishreppur, Höfðahreppur, Skagahreppur, Sveitarfélagið Skagafjörður og Akrahreppur.",
                                            "date": "2019-09-10"
                                        },
                                        "congressman_party": {
                                            "party_id": 2,
                                            "name": "Framsóknarflokkur",
                                            "abbr_short": "F",
                                            "abbr_long": "Framsfl.",
                                            "color": null
                                        },
                                        "first_committee_assembly": {
                                            "assembly_id": 140,
                                            "from": "2011-10-01T00:00:00.000Z",
                                            "to": "2012-09-10T00:00:00.000Z",
                                        },
                                        "from": "2019-09-10T00:00:00.000Z",
                                        "last_committee_assembly": null,
                                        "order": 8,
                                        "to": "2020-09-30T00:00:00.000Z",
                                        "type": "nefndarmaður"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }),
});