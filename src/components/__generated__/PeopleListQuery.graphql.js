/**
 * @generated SignedSource<<93080a063d8ddf3a745c4d5da1f0ca76>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type People_person$fragmentType = any;
export type PeopleListQuery$variables = {||};
export type PeopleListQuery$data = {|
  +$fragmentSpreads: People_person$fragmentType,
|};
export type PeopleListQuery = {|
  variables: PeopleListQuery$variables,
  response: PeopleListQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PeopleListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "People_person"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PeopleListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "allPersons",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f7161b2a90400b9266374a31c40d7827",
    "id": null,
    "metadata": {},
    "name": "PeopleListQuery",
    "operationKind": "query",
    "text": "query PeopleListQuery {\n  ...People_person\n}\n\nfragment People_person on Query {\n  allPersons {\n    ...Person_person\n    id\n  }\n}\n\nfragment Person_person on Person {\n  id\n  name\n  phone\n}\n"
  }
};

(node/*: any*/).hash = "c8cf824a7bcec8b11975276882ca23cb";

module.exports = ((node/*: any*/)/*: Query<
  PeopleListQuery$variables,
  PeopleListQuery$data,
>*/);
