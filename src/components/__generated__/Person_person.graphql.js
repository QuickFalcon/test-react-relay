/**
 * @generated SignedSource<<26197fdff3968fe721c1326803fc5505>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Person_person$fragmentType: FragmentType;
export type Person_person$data = {|
  +id: string,
  +name: string,
  +phone: ?string,
  +$fragmentType: Person_person$fragmentType,
|};
export type Person_person$key = {
  +$data?: Person_person$data,
  +$fragmentSpreads: Person_person$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Person_person",
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
  "type": "Person",
  "abstractKey": null
};

(node/*: any*/).hash = "947b36267bb67d6746ad4fea81b230e8";

module.exports = ((node/*: any*/)/*: Fragment<
  Person_person$fragmentType,
  Person_person$data,
>*/);
